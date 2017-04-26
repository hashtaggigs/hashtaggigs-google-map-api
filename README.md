# hashtaggigs-google-map-api
Meteor app using Google Map from NPM.

Before running the app, you'll need to install npm dependencies with the following command:

`meteor npm install`

Next you'll need to create a `settings-dev.json` file with the following content:

    {
        "public": {
            "google": {
                "map": {
                    "key": "enter your google map api key here"
                }
            }
        }
    }
    
Then run it using the following command:
 
 `meteor npm run dev`