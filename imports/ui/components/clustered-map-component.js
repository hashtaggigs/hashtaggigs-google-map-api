/**
 * Created by Hashtag Gigs on 4/8/2017.
 */
import { Template } from 'meteor/templating';

import { Cities } from '../../api/cities/cities';
import { Statics } from '../../../imports/statics/statics';

import './clustered-map-component.html';
import './clustered-map-component.css';

Template[Statics.Text.TemplateName.ClusteredMapComponent].onCreated(function () {
    this.autorun(() => {
        this.citiesSubscription = this.subscribe(Statics.Text.PublicationName.AllCities);

        if (this.citiesSubscription.ready()) {
            Statics.Functions.GoogleMaps.CreateMap({
                id: Statics.Text.ElementId.ClusteredMapId,
                points: Cities.find({}).fetch(),
                isClustered: true
            });
        }
    });
});