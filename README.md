## Contact  

[![LinkedIn](https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555)](https://github.com/Afoucheaux) [![GitHub](https://img.shields.io/badge/GitHub-black.svg?&style=flat-square&logo=github&logoColor=white)](https://www.linkedin.com/in/aaron-foucheaux-891626207/) - Aaron Foucheaux

[![LinkedIn](https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555)](https://www.linkedin.com/in/max-bregman-216063203/) [![GitHub](https://img.shields.io/badge/GitHub-black.svg?&style=flat-square&logo=github&logoColor=white)](https://github.com/Max9545) - Max Bregman


## Table of Contents

- [About the Project](#about-the-project)
- [Built With](#built-with)
- [Set-up Instructions](#set-up-instructions)
- [Learning Goals](#learning-goals)
- [Challenges](#challenges)
- [Wins](#wins)
- [Functionality](#functionality)
- [Future Iterations](#future-iterations)
- [Contributors](#contributors)


## About The Project

This project utilizes Create React App to build an application which allows users to view a list galleries based on their geo-location, see details on individual gallery and save them to favorites. Throughout the project, learning goals included:

- Architect an application structure using functional components and hooks
- Gain competency with React fundamentals
- Continue working with React components & asynchronous JS using Cypress testing
- Create a multi-page UX using Router
- Use the stretch technology of PWA to implement a React app to have native like behavior of running offline.
- Use Google JS api and larger databases.
- Deployment using

- [Deployed app](https://gallery-time.herokuapp.com/)
- [Project Brief and Rubric](https://frontend.turing.io/projects/module-3/stretch.html)


#### Built With:

- React
- React Router
- Javascript
- HTML5
- CSS
- Cypress
- PWA technology
- Googled-places api


## Set-up Instructions

visit deployed site [here]()

1. Additionally you can clone down the repo [here](https://github.com/Max9545/gallery-time)
2. Move into the gallery-time directory in your terminal.
3. To see the code itself locally, run `<name of text editor> .`
- Run `npm install`
- Run `npm start`
- visit http://localhost:3000/
- will need a google api key
- make .env file in root directory and paste this in there:
- REACT_APP_API_KEY=Your_KEY_HERE
- Torun Cypress testing add cypress.json needs this:
{
  "env": {
    "API_KEY": "process.env.REACT_APP_API_KEY"
  }
}

## Learning Goals

- Deeper understanding of React fundamentals including components, props, state, JSX, hooks.
- E2E (end to end) testing using Cypress
- Refactoring an application to utilize React Router
- Deploying an application
- Utilize PWA to run application offline.


## Challenges

1. Planning: intentionally planning an overall strategy before writing code. This included component structures and state if applicable
2. Using Cypress testing, to implement E2E testing and throughly test all user flows including stubbing api calls
3. Using the Google Api with CORS and keys.
4. Implement PWA features. Service worker and cache.  


## Wins

1. Implementing the MVP.
2. Getting PWA to run application offline.
3. Mobile first design.


## Functionality


#### Landing Page , Galleries Page, and Details Page
![Site Use](https://media.giphy.com/media/t17g16S5Oc48f7jzt3/giphy.gif)


#### Can choose and see favorites
![Site Use](https://media.giphy.com/media/Vdmty5cR606UHXWbOc/giphy.gif)


#### Can show contact info and Google Maps link
![Site Use](https://media.giphy.com/media/I1dkNGUzMxbmS8fi5x/giphy.gif)


## Contributers

* [Aaron Foucheaux](https://github.com/alexthompson207) - Application Co-creator
* [Max Bregman](https://github.com/Max9545) - Application Co-creator
* [Leta](https://github.com/letakeane) - Project Manager
* [Scott Ertmer](https://github.com/sertmer) - Project Manager
