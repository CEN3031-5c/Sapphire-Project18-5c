# Videos in Lessons

> Group 5c, Project 18, Sapphire Division

This is a fork of CASMM (or now Codesparks), any information on the application, environments, or development structure of CASMM can be found within their respective [README](https://github.com/UFWebApps2-0/code-sparks/blob/develop/README.md).

<br/>

# Main Features

## `Video Player`

![image](https://github.com/CEN3031-5c/Sapphire-Project18-5c/assets/88823380/62887e21-478a-47eb-a29d-a7e7b2dd28e0)
> (Example video from [Animal Crossing Gamecube - All Snow Music](https://www.youtube.com/watch?v=fRozdaGG01M))

- A draggable miniplayer that allows students to watch video lessons while working on the lesson itself.

<br/>

![image](https://github.com/CEN3031-5c/Sapphire-Project18-5c/assets/88823380/7fb5d988-0009-4ee7-a0dd-0d7682ea92d4)
> (Example video from [Calculus 1 Lecture 0.1: Lines, Angle of Inclination, and the Distance Formula](https://www.youtube.com/watch?v=fYyARMqiaag&ab_channel=ProfessorLeonard)

- A video player within a possible "Lesson Plans" page where students actually sit and watch lectures.
- An interactive question box that allows teacher to ask open-ended questions about the video for students to answer.

<br/>

## `Flagging Videos`

![Pasted image 20231213153725](https://github.com/CEN3031-5c/Sapphire-Project18-5c/assets/88823380/8b9e4bff-023d-4fce-81e6-3fd7440f00cb)

- Video Flagging which allows students to report inappropriate videos teachers may have uploaded.

<br/>

![image](https://github.com/CEN3031-5c/Sapphire-Project18-5c/assets/88823380/e0a9c1d5-1a71-469f-b174-1ffc206e57c0)

- Once a certain amount of reports is reached, an email will be sent to an administrator for reviewing via [EmailJS](https://www.emailjs.com/).

<br/>

## `Video Storage`

- Added a database to store the YouTube embed links via [Strapi](https://docs-v3.strapi.io/developer-docs/latest/getting-started/introduction.html).
- Link insertion and deletion via the Activity Editor within Teacher View.

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

### Editing Database

To make any changes or adjustments to the databases of CASMM or URL Storage, refer to the docker `casmm-server-dev` console.

![Pasted image 20231213160254](https://github.com/CEN3031-5c/Sapphire-Project18-5c/assets/88823380/c0117205-469f-482a-be22-2d9b43c48613)

   
