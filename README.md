# Setup Steps

- Create new angular-cli project.
- Add express package
- Create server/app.js with boilerplate code.
- Run node ./server/app.js

## Heroku Install

[Heroku Node](https://devcenter.heroku.com/articles/getting-started-with-nodejs#deploy-the-app)

## Setup Base Project

- Create server folder
- Create all the npm scripts for deployment

## Setup Heroku Project for Deployment

- Create angular-cli-seo-heroku at same level
- `brew install heroku`
- `heroku login`
- `heroku create` OR git clone from heroku remote
- `heroku buildpacks:set heroku/nodejs`


```json
{
    "name": "angular-cli-seo",
    "version": "0.0.0",
    "engines": {
        "node": "7.2.1"
    },
    "main": "app.js",
    "scripts": {
        "start": "node app.js"
    },
    "dependencies": {
        "ejs": "2.4.1",
        "express": "4.15.2"
    }
}
```

- `git subtree push --prefix server heroku master`



>>>>>>> 6bb43535641e33ecde8816922d588079e7fa4d2b

## AngularCliSeo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0-rc.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
