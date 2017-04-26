/**
 * Created by Hashtag Gigs on 4/8/2017.
 */
import { Statics } from '../../statics/statics';

GoogleMapsLoader = require('google-maps');
MarkerClusterer = require('node-js-marker-clusterer');

GoogleMapsLoader.KEY = Statics.Text.GoogleMaps.Key;
GoogleMapsLoader.LIBRARIES = Statics.Text.GoogleMaps.Libraries;
GoogleMapsLoader.VERSION = Statics.Text.GoogleMaps.Version;