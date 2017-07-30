/**
 * Created by Hashtag Gigs on 4/14/2017.
 */
// text based imports
import { ElementId } from './text/element-id';
import { RouteName } from './text/route-name';
import { GoogleMapsText } from './text/google-maps';
import { TemplateName } from './text/template-name';
import { PublicationName } from './text/publication-name';
import { PathName } from './text/path-name';

// schema based imports
import { CitiesSchema } from '../api/cities/cities';

// method based imports
import { GoogleMapsFunctions } from './functions/google-maps';
import { CommonFunctions } from './functions/common';

// main object
export const Modules = {
    Text: {
        ElementId: ElementId,
        RouteName: RouteName,
        PathName: PathName,
        GoogleMaps: GoogleMapsText,
        TemplateName: TemplateName,
        PublicationName: PublicationName
    },
    Functions: {
        GoogleMaps: GoogleMapsFunctions,
        Common: CommonFunctions
    },
    Schema: {
        Cities: CitiesSchema
    }
};