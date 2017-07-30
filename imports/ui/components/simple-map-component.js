/**
 * Created by Hashtag Gigs on 4/8/2017.
 */
import { Template } from 'meteor/templating';

import { Cities } from '../../api/cities/cities';
import { Modules } from '../../modules/modules';

import './simple-map-component.html';
import './simple-map-component.css';

Template[Modules.Text.TemplateName.SimpleMapComponent].onCreated(function () {
    this.autorun(() => {
        this.citiesSubscription = this.subscribe(Modules.Text.PublicationName.AllCities);

        if (this.citiesSubscription.ready()) {
            Modules.Functions.GoogleMaps.CreateMap({
                id: Modules.Text.ElementId.SimpleMapId,
                points: Cities.find({}).fetch()
            });
        }
    });
});