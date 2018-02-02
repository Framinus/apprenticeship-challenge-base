# Vinyl

A community for record enthusiasts to review their favorite albums.

Part of the application has already been built for you. Your job is to take it to completion.

## Getting Started

The app uses a simple file structure for an Express web app server that renders views using EJS templates.

```sh
public/               # static assets
src/
  actions/            # async server actions (e.g. data CRUD)
  data/               # db schema & seed data
  db/                 # database client & utils
  routes/             # express routes
  views/              # html templates
test/                 # test files for the source files
```

### Setting Up Your Database

Use the following commands to set up and seed your database:

1. Create PostgreSQL database `vinyl`: `$ npm run db:create`
1. Set up database tables from `schema.sql`: `$ npm run db:schema`
1. Load seed data from `albums.sql`: `$ npm run db:seed`

### Setting up your config

Run the command in the terminal so that the config loads correctly
`$ cp .env.template .env`

### Installing your dependencies

Run the following command in the terminal:
`$ npm install`

### Starting your development server

Run the following command in the terminal:
`$ npm start`


# Coding Challenge

During the interview you will have 75 minutes to complete all the specs of the challenge.

You'll be allowed to ask your interviewer clarifying questions and can use the internet to search for information as needed.

Each requirement is assigned a point value. A fully complete requirement will earn you full points; partially complete requirements get partial points; incomplete requirements get no points. Overall completeness is determined by dividing the total points earned by the total points available. There is a requirement of completion of 80% of the specs to secure a passing result.

## Specs

auth stuff/ test
- schema - make users table. reload schema.
- queries - make createUser and validateUser functions. export.
- test - test createUser function.
- server.js setup - add express-session package and session object.
- routes - add authentication to index.js
- routes - get route in sign-up that displays form page at authentication/sign-up
- routes - post route in sign-up that posts form to server and calls createUser and redirects to '/' or displays a fail message. save user to req.session.user.
- routes - get route in sign-in that displays form page at authentication/sign-in
- routes - post route in sign-in that posts form to server and calls validateUser and redirects the user to '/'. save user to req.session.user.
- views - make form page at authentication/sign-up.
- views - make form page at authentication/sign-in.

profile stuff
- queries - getUserById function.
- queries - editUser function.
- routes - add /users to index if not already there.
- routes - get route for users/:id. call getUserById to render user data to the page.
- routes - get route for users/:id/edit
- routes - post route for users/:id. call editUser with form data and send json data back.
- views - users/profile - render user data and a button that redirects to /edit.
- views - users/editprofile - render a form and a button with a fetch call attached to it.
- public/script.js - target button in editprofile and add eventlistener to submit fetch call. give each field a class and pass that data along.


## Sign Up

Routing:
- [x] __20:__ Navigating to `/sign-up` loads the sign up page.

Users can:
- [x] __40:__ Sign up for an account with a name, email and password.
- [x] __10:__ Be redirected to the home page (`/`) after signing up.

Users CANNOT:
- [x] __10:__ Sign up without a name value
- [x] __10:__ Sign up without an email address value
- [x] __30:__ Sign up without an email that is already in use.

## Sign in

Routing:
- [x] __20:__ Navigating to `/sign-in` loads the sign in page.

Users can:
- [x] __20:__ Sign in to an existing account with an email address and password.
- [x] __10:__ Be redirected to the home page (`/`) after signing in.

Users CANNOT:

- [x] __30:__ Sign in with an invalid email address and password combination.

## Testing

Testing:
- [x] __30:__ Write a test for the `signUp` action using Mocha. This test should check that calling the `signUp` function adds a row in the database

## Profile

Routing:
- [x] __20:__ Navigating to `/users/<USER ID>` loads the profile page. The profile page has a button `Edit` which when clicked, navigates to the edit profile page.
- [x] __20:__ Navigating to `/users/<USER ID>/edit` loads the edit profile page.
- [x] __20:__ Sending a PUT request to `/users/<USER ID>` updates the profile of the user

Users can:
- [x] __10:__ See their username and email
- [x] __30:__ Edit their username and email using AJAX. Updating their profile should NOT require a page refresh. Submitting the form on `/users/<USER ID>/edit` page asynchronously updates the profile information. The user remains on the edit page `/users/<USER ID>/edit`.
