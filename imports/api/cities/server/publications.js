/**
 * Created by Hashtag Gigs on 4/18/2017.
 */
import { Cities, AllCityPublicationName } from '../cities';

Meteor.publish(AllCityPublicationName, () => {
    return Cities.find({}, { fields: Cities.publicFields });
});