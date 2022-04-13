# Node Express Typescript Starter for 2022

*"As unopinionated as I could make it"*

A minimal but useful node / express / typescript starter template with
testing and best practices middleware.

A `GET` request to `/` will respond with the value of NODE_ENV or an empty
response if the environment is production

A `POST` request to `/` will echo any json sent in the request body

`throw {status: 401, message: 'unauthorized'}` or `throw 401` resolve to the specified status.

`npm run dev` - run the development server

`npm test` - run the tests

`npm run build` - build the server

`npm start` - run the server

Rename .env.sample to .env & Set your configuration and secrets there and
then apply them to config.ts

Uses node >= 14, deployment has been tested on DigitalOcean's app platform
and on Heroku's local environment.

uses es6 modules