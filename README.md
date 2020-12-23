# CargoApp

This project was generated with Angular js seed project (https://github.com/angular/angular-seed)


##Firebase URL https://angularjs-app-a5c19.web.app/

## Set up application for development

Run `npm install` to install all dependency 
Run `npm start' to run in local with localhost:8000/index.html

## Framework used
Angular JS , Bootstrap 

## Application Structure
```
app/                  --> all of the source files for the application
  app.css               --> default stylesheet
  core/                 --> all app specific modules
    version/              --> version related components
      version.js                 --> version module declaration and basic "version" value service
      version_test.js            --> "version" value service tests
      version-directive.js       --> custom directive that returns the current app version
      version-directive_test.js  --> version directive tests
      interpolate-filter.js      --> custom interpolation filter
      interpolate-filter_test.js --> interpolate filter tests
  app.js                --> main application module
  index.html            --> app layout file (the main html template file of the app)
  index-async.html      --> just like index.html, but loads js files asynchronously
e2e-tests/            --> end-to-end tests
  protractor-conf.js    --> Protractor config file
  scenarios.js          --> end-to-end scenarios to be run by Protractor
karma.conf.js         --> config file for running unit tests with Karma
package.json          --> Node.js specific metadata, including development tools dependencies
package-lock.json     --> Npm specific metadata, including versions of installed development tools dependencies
```
Other than this we have some components to simplfy business logic
For Map, date time details form, freight details form, route details form and side navigation.



