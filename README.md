# NgMocksMatSelectIssue

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.10.

## Instructions

`AppComponent` was changed to reproduce an issue when a custom form-control component implements ControlValueAccessor and Validator and providing NG_VALUE_ACCESSOR, NG_VALIDATORS in unit tests.

To reproduce the issue, run `ng test`.

You should receive the following error:
```bash
Chrome Headless 83.0.4103.116 (Windows 10) AppComponent should create the app FAILED
        Error: Circular dep for MockOfMyFormControlComponent
            at getNodeInjectable (http://localhost:9876/_karma_webpack_/node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js:3903:1)
            at searchTokensOnInjector (http://localhost:9876/_karma_webpack_/node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js:3849:1)
            at getOrCreateInjectable (http://localhost:9876/_karma_webpack_/node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js:3771:1)
            at ɵɵdirectiveInject (http://localhost:9876/_karma_webpack_/node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js:13733:1)
            at ɵɵinject (http://localhost:9876/_karma_webpack_/node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js:804:1)
            at factory (http://localhost:9876/_karma_webpack_/node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js:11321:1)
            at multiResolve (http://localhost:9876/_karma_webpack_/node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js:19005:1)
            at NodeInjectorFactory.multiProvidersFactoryResolver [as factory] (http://localhost:9876/_karma_webpack_/node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js:18970:1)
            at getNodeInjectable (http://localhost:9876/_karma_webpack_/node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js:3913:1)
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
