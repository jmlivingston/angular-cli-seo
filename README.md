# Angular CLI SEO

## Summary

This repository provides a pattern for adding SEO features to a SPA based application like Angular, though you could use the same techniques for React, Vue, etc. Search engines like Google and Bing and social media sites like Facebook, Twitter, and LinkedIn typically expect server side rendering to read meta tags. You also need to update the meta tags when routing changes on the client side since some social sharing components rely on them.

## High Level Steps

- Initial Steps

  - Create new angular-cli project.
  - Run `ng eject` to get Webpack config. (You can run it twice for a prod and dev build. The trick is renaming the file, undoing your other changes, then running again. For prod, use `ng eject --aot --environment=prod`)

- Server Steps

  - Create a dist/server folder. This will be used to host a node app. (This can be used to copy and push to a host like Heroku.)
  - Create a package.json at this level for source control and package management.
  - Use npm to install the following
    - express - node web app
    - express-handlebars - templating
    - yargs - argument handling
  - Create dist/server/app.js with some Express boilerplate code.
  - Create seo.json for your SEO configuration and seo.js for adding SEO API and routing.
  - Add templates to handle updating the title and meta tags

- Complete Client Steps

  - Update your Webpack config settings to use the Express app.
  - Update your build scripts to output to dist/client instead of dist.
  - Create an SEO service to read from api/seo and update the title and meta tags on route changes.
  - Update the index.html so that it has `{{{body}}}` in the header. Handlebars will use this to inject the meta tags.

## Setup Heroku Project for Deployment

[Heroku Node](https://devcenter.heroku.com/articles/getting-started-with-nodejs#deploy-the-app)

- Create heroku git repo at same level. In my case, I used angular-cli-seo-heroku.  Tweak name in package.json for something different.
- `brew install heroku`
- `heroku login`
- `heroku create` OR git clone from heroku remote
- `heroku buildpacks:set heroku/nodejs`


## Angular CLI

This project was generated with [Angular CLI](https://github.com/angular/angular-cli)

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
