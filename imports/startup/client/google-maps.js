/**
 * Created by Hashtag Gigs on 4/8/2017.
 */
import { Modules } from '../../modules/modules';

GoogleMapsLoader = require('google-maps');
MarkerClusterer = require('node-js-marker-clusterer');

GoogleMapsLoader.KEY = Modules.Text.GoogleMaps.Key;
GoogleMapsLoader.LIBRARIES = Modules.Text.GoogleMaps.Libraries;
GoogleMapsLoader.VERSION = Modules.Text.GoogleMaps.Version;