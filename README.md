# NgMocksMatSelectIssue

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.10.

## Instructions

`AppComponent` was changed to reproduce an issue when combining `ng-mocks` with `mat-select` component in unit tests.

To reproduce the issue, run `ng test`.

You should receive the following error:
```bash
Chrome Headless 83.0.4103.116 (Mac OS 10.14.6) AppComponent should create the app FAILED
        Error: No value accessor for form control with name: 'toppings'
            at _throwError (http://localhost:9876/_karma_webpack_/node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js:3576:1)
            at setUpControl (http://localhost:9876/_karma_webpack_/node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js:3400:1)
            at FormGroupDirective.addControl (http://localhost:9876/_karma_webpack_/node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js:7679:1)
            at FormControlName._setUpControl (http://localhost:9876/_karma_webpack_/node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js:8451:24)
            at FormControlName.ngOnChanges (http://localhost:9876/_karma_webpack_/node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js:8368:1)
            at FormControlName.wrapOnChangesHook_inPreviousChangesStorage (http://localhost:9876/_karma_webpack_/node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js:26966:1)
            at callHook (http://localhost:9876/_karma_webpack_/node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js:4730:1)
            at callHooks (http://localhost:9876/_karma_webpack_/node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js:4690:1)
            at executeInitAndCheckHooks (http://localhost:9876/_karma_webpack_/node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js:4630:1)
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
