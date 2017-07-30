/**
 * Created by Hashtag Gigs on 4/14/2017.
 */
import { Template } from 'meteor/templating';
import { Modules } from '../modules/modules';

// ids
Template.registerHelper('simpleMapId', () => {
    return Modules.Text.ElementId.SimpleMapId;
});

Template.registerHelper('clusteredMapId', () => {
    return Modules.Text.ElementId.ClusteredMapId;
});
