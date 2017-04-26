/**
 * Created by Hashtag Gigs on 4/14/2017.
 */
import { Template } from 'meteor/templating';
import { Statics } from '../../imports/statics/statics';

// ids
Template.registerHelper('simpleMapId', () => {
    return Statics.Text.ElementId.SimpleMapId;
});

Template.registerHelper('clusteredMapId', () => {
    return Statics.Text.ElementId.ClusteredMapId;
});
