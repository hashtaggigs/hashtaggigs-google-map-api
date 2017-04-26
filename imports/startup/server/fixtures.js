/**
 * Created by Hashtag Gigs on 4/18/2017.
 */
import { Cities } from '../../api/cities/cities';

Meteor.startup(() => {

    // add some cities if none exist
    let cities = Cities.find({}).fetch();

    if (cities.length <= 0) {
        let documents = [
            {
                lat: 37.075039,
                lng: -113.55568,
                name: 'Saint George, UT'
            },
            {
                lat: 37.784827,
                lng: -122.727802,
                name: 'San Francisco, CA'
            },
            {
                lat: 40.780751,
                lng: -73.977182,
                name: 'New York, NY'
            }
        ];

        _.each(documents, (doc) => {
            Cities.insert(doc);
        });
    }
});