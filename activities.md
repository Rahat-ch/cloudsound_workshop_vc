Activity 1

1. Log into the Amplify Admin UI via the link in your email invitation
2. Navigate to the Data Page from the left menu
3. Create a data model for your songs. The model should contain the following:
    id : ID
    title: String
    mp3: String
    artist: String
4. Deploy the model and then create two example entries on the content page (don't worry about linking to an actual mp3 file yet, we'll take care of that later)

Activity 2

1. Follow the instructions in the Admin UI to link your front end to the backend we created in the previous activity. 
2. In index.js add the following:
```
import Amplify from "aws-amplify";
import awsExports from "./aws-exports";
Amplify.configure(awsExports);
```
3. In App.js use DataStore in order to query for all the titles of the songs and display them on the page. 

Activity 3

1. Create a form component that allows a user to enter a title, artist and upload an mp3
2. Following the instructions from the demo and the Amplify Admin UI - create an S3 bucket that users can upload their music to
3. Connect the S3 bucket to your form and create your own song entry
4. Verify in the Admin UI Content page that your song exists 
5. Delete any songs on the content page that do not have an actual mp3

Activity 4

1. Create an audio component and import react audio player
2. The component should take a title, mp3, and artist prop to display all song information
3. import the audio component into App.js and replace the titles with this component making sure to pass the neccsary props
4. once complete enjoy your music

Bonus:
You will need your own AWS account for this part - push up your code to a repo and then link it to amplify and deploy your app for others to use. Take a look at your budget though in case your Cloud Sound app blows up.

