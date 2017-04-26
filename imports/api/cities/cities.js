/**
 * Created by Hashtag Gigs on 4/18/2017.
 */
import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const CitiesSchema = new SimpleSchema({
    lat: { type: Number },
    lng: { type: Number },
    name: { type: String }
});

export const AllCityPublicationName = 'all.cities';

let cities = new Mongo.Collection(AllCityPublicationName);

cities.deny({
    insert() { return true; },
    update() { return true; },
    remove() { return true; }
});

cities.schema = CitiesSchema;

cities.publicFields = {
    lat: 1,
    lng: 1,
    name: 1
};

export const Cities = cities;


