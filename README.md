# Videos in Lessons

> Group 5c, Project 18, Sapphire Division

This is a fork of CASMM (or now Codesparks), any information on the application, environments, or development structure of CASMM can be found within their respective [README](https://github.com/UFWebApps2-0/code-sparks/blob/develop/README.md).

<br/>

# Main Features

## `Video Player`

![image](https://github.com/CEN3031-5c/Sapphire-Project18-5c/assets/88823380/62887e21-478a-47eb-a29d-a7e7b2dd28e0)
> (Example video from [Animal Crossing Gamecube - All Snow Music](https://www.youtube.com/watch?v=fRozdaGG01M))

- A draggable miniplayer that allows students to watch video lessons while working on the lesson itself.
- Can be found in activity workspaces through the top right menu. 

<br/>

![image](https://github.com/CEN3031-5c/Sapphire-Project18-5c/assets/88823380/7fb5d988-0009-4ee7-a0dd-0d7682ea92d4)
> (Example video from [Calculus 1 Lecture 0.1: Lines, Angle of Inclination, and the Distance Formula](https://www.youtube.com/watch?v=fYyARMqiaag&ab_channel=ProfessorLeonard)

- A video player within a possible "Lesson Plans" page where students actually sit and watch lectures.
- The front-end for an interactive question box that allows teacher to ask open-ended questions about the video for students to answer.
- Can be accessed at this address: "http://localhost:3000/lessonplans" 

<br/>

## `Flagging Videos`

![Pasted image 20231213153725](https://github.com/CEN3031-5c/Sapphire-Project18-5c/assets/88823380/8b9e4bff-023d-4fce-81e6-3fd7440f00cb)

- Video Flagging which allows students to report inappropriate videos teachers may have uploaded.

<br/>

![image](https://github.com/CEN3031-5c/Sapphire-Project18-5c/assets/88823380/e0a9c1d5-1a71-469f-b174-1ffc206e57c0)

- With each report, an email is sent to an administrator for reviewing via [EmailJS](https://www.emailjs.com/).

<br/>

## `Video Storage`

- Added a database to store the YouTube embed links via [Strapi](https://docs-v3.strapi.io/developer-docs/latest/getting-started/introduction.html).
- Link insertion and deletion via the Activity Editor within Classroom Manager View.
- Videos can be uploaded to workspaces in the activity editor or in general via the Gallery tab in the Classroom Manager view.

# Contributions and Development

### Setup

1. Install [docker](https://docs.docker.com/get-docker/)

2. Run `docker compose up` from `/`

3. Follow the [client](/client#setup) setup

4. Run `yarn start` from `/client`

   > Grant permission to the **scripts** and **server** directories if you are prompted
   > 
   > If Flagging features cause any issues, ensure EmailJS installed via `npm install emailjs`
   
Once setup is complete, there should be video URLs already within the Strapi database. 
The videos can be seen through CASMM Arduino workspace after accessing the `...` in the top right and clicking `Show Video`.

If videos do not appear, access Strapi and ensure the permissions for URLs Database are properly set.

## Editing Database

To make any changes or adjustments to the databases of CASMM or URL Storage, refer to following directions:

First, start Strapi Admin through CASMM and Docker. Once it has started, a notification should appear and allow the user to login to the admin account for admin permissions. Navigate to the link provided through the terminal and docker output lines. Next, login to the admin account using the login information provided from external sources and then you will be sent to the Strapi admin dashboard. 

![Pasted image 20231213160254](https://github.com/CEN3031-5c/Sapphire-Project18-5c/assets/88823380/c0117205-469f-482a-be22-2d9b43c48613)

## 1. For Collection Monitoring
   
Navigate to the left side of the admin dashboard and scroll to the correct collection, in this case the URLStorages. After click, the contents within the collection will be shown as seen below:

![image](https://github.com/CEN3031-5c/Sapphire-Project18-5c/assets/88823380/d7148355-0a74-44e0-b1a1-8f85fe621794)

The user can navigate to the right of the Collection Table to add new entries through the blue button ‘Add New URLStorages’ on the top right of the dashboard and the window below will show:

![image](https://github.com/CEN3031-5c/Sapphire-Project18-5c/assets/88823380/98d31d85-3abe-471f-97d7-0f855084aae9)

The entries themselves can also be edited through the options on the right of the chart for each entry. The options and editing window will open upon selection as shown below:

![image](https://github.com/CEN3031-5c/Sapphire-Project18-5c/assets/88823380/6380d129-1099-4031-a4ee-8aeccfeb45e2)

## 2. For Collection Editing
   
Navigate to the ‘Content-Types Builder’ on the left side of the dashboard.

![image](https://github.com/CEN3031-5c/Sapphire-Project18-5c/assets/88823380/c1f2436d-5cb6-4ca1-89c5-a84b53a5e941)

Once in this Content-Types Builder, the Collection Types area will be shown for the user to scroll to the wanted Collection Type or the option to create a new Collection Type. Once the Collection Type is selected, the user can add, edit, or remove collection type fields such as seen below with URLStorages. The user can also create a new Collection through the option shown in blue below. 

![image](https://github.com/CEN3031-5c/Sapphire-Project18-5c/assets/88823380/e353ad48-95da-4e0a-a3a3-af671c823637)

## 3. Strapi Dumping
**If you want to save your database settings and entries across devices, update the dump file here!**

Find your old dump file at scripts/development_db.dump and make a move it somewhere safe outside of the project.

Cross-reference this [guide](https://github.com/DavidMagda/CaSMM_fork_2023/blob/develop/scripts/readme.md) to replace the database dump file with your own, keeping in mind that the command should actually be `pg_dump -U postgres -d strapi -f development_db.dump`. Once the new dump has been made, it will actually be found just outside the **docker-entrypoint-initdb.d** folder. Move the new dump into the folder using the command line.

After moving the new dump file, `docker compose down` the project or delete it in the Docker app. Then run `docker compose up` and the new dump file will be in effect. All systems that ran the previous dump file will need to compose down and up their projects to see the changes.

# Outstanding Work
We had one major goal that was left outstanding at the end of our sprint- the implementation of interactive video questions within Video Lessons. Although we completed one of our major goals of creating an integrated video system within the workspace as well as a lesson page for students to learn and answer questions, we were not able to fully create a feature for students to answer pop-up interactive questions at certain times. Even though this goal wasn’t fully completed, the development team was able to create the groundwork/foundation for this feature through backend collections, frontend components, etc. This will be seen as a stretch goal for future teams to implement and build upon what was done by our development team these two sprints.

# References
Email JS was used for the flagging emails and can be found [here](https://www.emailjs.com/).
