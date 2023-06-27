<h1 align="center"> MYM </h1>

At MYM, we are focused on using artificial intelligence &amp; software to elevate the experience of marketing and business experiences for our clients. We build software tools to aid in lead-generation, copywriting, and ads.

## Description
**ShootingStars** is a ***REACT.js*** app meant to allow the user to explore the Galaxy. The website is designed to allow active users to learn more about the spaces around them, understanding that galaxies are just as distant as the relational space between atoms. It all comes down to empty spaces. 

-  Create a [SPA](https://geekflare.com/single-page-applications/) that makes a fetch request data to [NASA](https://www.nasa.gov/multimedia/imagegallery/index.html) and displays a new image every day (conditional based on login).
- Use [MongoDB](https://www.mongodb.com/docs/drivers/node/current/quick-start/) to persist account credentials and allow users to sign up & login to your application to view what today’s image is. Use [ExpressJS](https://expressjs.com/) & [NodeJS](https://nodejs.org/en) to handle routes/Server communication.
- Deploy the application using [Vercel](https://vercel.com/).
- Add [Google OAuth](https://developers.google.com/identity/sign-in/web/sign-in) as an option to sign in & sign up. 

## Technology stack
**Back-End:** Express.js, Node.js

**APIs:** NASA, MongoDB 

**Front-End:** HTML5, CSS, Material UI, Javascript


## Run Code (Environment)

### Front-End Helpful Hints 
- confirm that config is appropriate:
```
> node -v
> npm -v
> git --version
```

- Initial package.json & install dependenies(localhost:3000):
    - Must be `cd`'d into frontend/client for install
    - MUI, `react-router-dom`, redux, formik, etc... (see resources)
```
> npx create-react-app <project name>
> cd <project name>
> npm install @mui/icons-material @mui/material @emotion/styled @emotion/react
> npm install --save react-router-dom
> npm install react-redux @reduxjs/toolkit
> npm install react-responsive-carousel
```
- Test front-end once pages are generated (ctrl-c to exit):
```
> npm run start
```

#### jsonwebtoken 
- Auth verification (see resources):
```
> npm install jwt-decode
> npm install gapi-script
> npm install react-google-login
```

- Add Auth functionality:
> Required for **Auth.js**
```
export function getAuthToken(){
    const token = localStorage.getItem('token');
    return token;
};
```

### Back-End Helpful Hints (Node.js):
- Initial package.json & install dependencies:
    - Must be `cd`'d into backend/server for install
    - confirm that config is appropriate:
```
> node -v
> npm -v
> git --version
> npm express -v 
```
- Initial package.json & install dependencies (localhost:8080):
```
> cd <backend name>
> npm init -y
> npm install express 
> npm install nodemon --save-dev
> npx nodemon src/server.js 
or 
> npx nodemon dev
```
- initial


#### Install MongoDB packages:
- Updated mongoDB database, collections
- A new database will need to be generated (see resources)
- Install mongoDB into the node backend:

```
>  npm install mongodb
```
- Confirm function with MongoClient from mongodb.
- This will later be connected to with db.js document.


--------------------------
## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Resources & Helpful Hints:

- [bcrypt.js](https://www.npmjs.com/package/bcryptjs) part of password hasing for user Authentification. 
- Google AuthO [here](https://developers.google.com/identity/sign-in/web/sign-in)
    - react-google-login [button](https://www.npmjs.com/package/react-google-login)
    -  JWT DECODER [here](https://www.jstoolset.com/jwt)
- NASA API [info](https://api.nasa.gov/)
    - APOD daily photo [info](https://api.nasa.gov/?ref=its-foss)
    - Mars Rover photos [info](https://api.nasa.gov/?ref=its-foss#authentication)
- MongoDB [here]()
    - MongoDB Community [here](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-windows/)
- Express [here](https://expressjs.com/)





#### **style:** 
- **[Material UI CORE](https://mui.com/)** React UI LIBRARY *great for standardizing projects*
    - MUI Core installation [here](https://www.npmjs.com/package/@mui/material) & [here](https://mui.com/material-ui/getting-started/installation/)
    - MUI template pages [here](https://mui.com/material-ui/getting-started/templates/)
    - MUI Theme [here](https://mui.com/material-ui/customization/theming/)
    - React Box [here](https://mui.com/material-ui/react-box/) & Grid [here](https://mui.com/material-ui/react-grid/)
    - Material Icon Info & Import links [here](https://mui.com/material-ui/material-icons/)
    ```
    npm install @mui/icons-material @mui/material @emotion/styled @emotion/react
    ```
    - MUI Palette [here](https://mui.com/material-ui/customization/palette/)
    - MUI Alert [here](https://mui.com/material-ui/react-alert/)
    - MUI with CSS Modules style library [here](https://mui.com/material-ui/guides/interoperability/)
    - Additional fun in grid-template-columns [here](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns)

- [React](https://react.dev/) components
    - React responsive [Carousel](https://www.npmjs.com/package/react-responsive-carousel)
- Filler Text [typographic](https://generator.lorem-ipsum.info/)
    - Lorem Ipsum 
- Google Fonts [here](https://fonts.google.com/)

#### **helpful hint:** 
- console log testing with `ctr-alt-l` 
- when a Promise is returned as 'fufilled' use await to get actual item.
- CSS styles: clamp [here](https://developer.mozilla.org/en-US/docs/Web/CSS/clamp)
- Postman API Testing [here](https://www.postman.com/)
- Always Stay Positive & Triple Check Permissions :)