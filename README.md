# Setup Steps

- Create new angular-cli project.
- Add express package
- Create server/app.js with boilerplate code.
- Change ng build to ng build --output-path server/dist
- Run node ./server/app.js

# Heroku

[Heroku Node Intro](https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction)

- `brew install heroku`
- `heroku login`
- `git remote add heroku https://git.heroku.com/angular-cli-seo.git`
- `heroku buildpacks:set heroku/json`
- Add Procfile
- Add package.json

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
