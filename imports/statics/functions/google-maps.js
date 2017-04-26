/**
 * Created by Hashtag Gigs on 4/14/2017.
 */
import { check, Match } from 'meteor/check';
import { GoogleMapsText } from '../text/google-maps';
import { CommonFunctions } from './common';

// Check patterns
const checkPattern = {
    google: Match.ObjectIncluding({ maps: Match.ObjectIncluding({ Marker: Match.Any, LatLng: Match.Any }) }),
    position: { lat: Number, lng: Number },
    createMapObj: Match.ObjectIncluding({
        id: String,
        points: [
            Match.ObjectIncluding({
                lat: Number,
                lng: Number,
                name: Match.OneOf(String, null, undefined)
            })
        ]
    })
};

let googleMaps = {};

googleMaps.GetMapOptions = (google) => {
    check(google, checkPattern.google);

    return {
        zoom: 3,
        center: new google.maps.LatLng(
            GoogleMapsText.Coordinates.US.Lat,
            GoogleMapsText.Coordinates.US.Lng),
        styles: GoogleMapsText.Styles.UltraLight
    };
};

googleMaps.AddMapMarker = (obj) => {
    check(obj, Match.ObjectIncluding({
        google: checkPattern.google,
        map: Match.Any,
        position: checkPattern.position
    }));
    check(obj.label, Match.Maybe(String));

    return new obj.google.maps.Marker({
        position: obj.position,
        map: obj.map,
        label: `${obj.label}` || ''
    });
};

googleMaps.AddMapMarkers = (obj) => {
    check(obj, {
        google: checkPattern.google,
        map: Match.Any,
        points: [{
            position: checkPattern.position,
            label: Match.Maybe(String),
            useIndex: Match.Maybe(Boolean)
        }]
    });

    return obj.points.map((point, i) => {
        return googleMaps.AddMapMarker({
            google: obj.google,
            map: obj.map,
            position: point.position,
            label: point.useIndex ? `${i}` : point.label
        });
    });
};

googleMaps.CreateMap = (obj) => {
    check(obj, checkPattern.createMapObj);
    check(obj.useIndex, Match.Maybe(Boolean));
    check(obj.isClustered, Match.Maybe(Boolean));

    if (CommonFunctions.isUndefined(obj.useIndex)) {
        obj.useIndex = true;
    }

    GoogleMapsLoader.load((google) => {
        check(google, checkPattern.google);

        let map = new google.maps.Map(
            document.getElementById(obj.id),
            googleMaps.GetMapOptions(google));

        let points = [];

        _.each(obj.points, (point) => {
            points.push({
                position: {
                    lat: point.lat,
                    lng: point.lng
                },
                label: point.name,
                useIndex: obj.useIndex
            })
        });

        let markers = googleMaps.AddMapMarkers({
            google: google,
            map: map,
            points: points
        });

        if (obj.isClustered) {
            let markerClusterer = new MarkerClusterer(map, markers, { maxZoom: 8, imagePath: '/images/m' });
        }
    });
};

export const GoogleMapsFunctions = googleMaps;