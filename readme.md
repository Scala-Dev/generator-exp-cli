# Scala EXP CLI

> Based on a Yeoman generator for creating MEAN stack applications - lets you quickly set up a project following Scala best practices and patterns set by the EXP team.

## Usage

1. Ensure you have yeoman installed globally `npm install -g yo`
1. Clone this repo `git clone git@github.com:ScalaInc/generator-exp-cli.git /permanent/home/home/for/project/`
1. Run `yo`. You should be prompted with a list of your installed generators, one of them should be `Scala Fullstack` or `EXP CLI`
1. Go to the working directory of the project you want to generate new code for.
1. `yo exp-cli:route {new route name}`
1. Respond to the prompts
1. Done. You should now have a new working `exp-core` UI route   

## Prerequisites

* MongoDB - Download and Install [MongoDB](http://www.mongodb.org/downloads) - If you plan on scaffolding your project with mongoose, you'll need mongoDB to be installed and have the `mongod` process running.

## Supported Configurations

**Client**

* Scripts: `JavaScript (ES6)`
* Markup:  `HTML`
* Stylesheets: `Less`,
* Angular Routers: `ui-router`

**Server**

* Database: `MongoDB`


## Generators

Available generators:

* Server Side
    // @TODO not implemented- [exp-cli:endpoint](#endpoint)
* Client Side
    - [exp-cli:route](#route)
    // @TODO not implemented - [exp-cli:controller](#controller)
    // @TODO not implemented - [exp-cli:filter](#filter)
    // @TODO not implemented - [exp-cli:directive](#directive)
    // @TODO not implemented - [exp-cli:service](#service)
    // @TODO not implemented - [exp-cli:provider](#service)
    // @TODO not implemented - [exp-cli:factory](#service)
    // @TODO not implemented - [exp-cli:decorator](#decorator)


### Endpoint
Generates a new API endpoint.


Example:
```bash
yo exp-cli:endpoint message
[?] What will the url of your endpoint be? /api/messages
```

Produces:

    server/api/message/index.js
    server/api/message/message.spec.js
    server/api/message/message.controller.js
    server/api/message/message.model.js  (optional)
    server/api/message/message.socket.js (optional)

### Route
Generates a new route.

Example:
```bash
yo exp-cli:route myroute
[?] Where would you like to create this route? client/app/
[?] What will the url of your route be? /myroute
```

Produces:

    client/src/app/myroute/myroute.js
    client/src/app/myroute/myroute.spec.js
    client/src/app/myroute/myroute.controller.js
    client/src/app/myroute/myroute.controller.spec.js
    client/src/app/myroute/myroute.tpl.html
    client/src/app/myroute/myroute.less


### Controller
Generates a controller.

Example:
```bash
yo exp-cli:controller user
[?] Where would you like to create this controller? client/app/
```

Produces:

    client/app/user/user.controller.js
    client/app/user/user.controller.spec.js

### Directive
Generates a directive.

Example:
```bash
yo exp-cli:directive myDirective
[?] Where would you like to create this directive? client/app/
[?] Does this directive need an external html file? Yes
```

Produces:

    client/app/myDirective/myDirective.directive.js
    client/app/myDirective/myDirective.directive.spec.js
    client/app/myDirective/myDirective.html
    client/app/myDirective/myDirective.scss

**Simple directive without an html file**

Example:
```bash
yo exp-cli:directive simple
[?] Where would you like to create this directive? client/app/
[?] Does this directive need an external html file? No
```

Produces:

    client/app/simple/simple.directive.js
    client/app/simple/simple.directive.spec.js

### Filter
Generates a filter.

Example:
```bash
yo exp-cli:filter myFilter
[?] Where would you like to create this filter? client/app/
```

Produces:

    client/app/myFilter/myFilter.filter.js
    client/app/myFilter/myFilter.filter.spec.js

### Service
Generates an AngularJS service.

Example:
```bash
yo exp-cli:service myService
[?] Where would you like to create this service? client/app/
```

Produces:

    client/app/myService/myService.service.js
    client/app/myService/myService.service.spec.js


You can also do `yo exp-cli:factory` and `yo exp-cli:provider` for other types of services.

### Decorator
Generates an AngularJS service decorator.

Example:
```bash
yo exp-cli:decorator serviceName
[?] Where would you like to create this decorator? client/app/
```

Produces

    client/app/serviceName/serviceName.decorator.js

## Configuration
Yeoman generated projects can be further tweaked according to your needs by modifying project files appropriately.

A `.yo-rc` file is generated for helping you copy configuration across projects, and to allow you to keep track of your settings. You can change this as you see fit.

## Testing

Running `grunt test` will run the client and server unit tests with karma and mocha.

Use `grunt test:server` to only run server tests.

Use `grunt test:client` to only run client tests.

**Protractor tests**

To setup protractor e2e tests, you must first run

`npm run update-webdriver`

Use `grunt test:e2e` to have protractor go through tests located in the `e2e` folder.

## Environment Variables

Keeping your app secrets and other sensitive information in source control isn't a good idea. To have grunt launch your app with specific environment variables, add them to the git ignored environment config file: `server/config/local.env.js`.

## Project Structure

Overview

    ├── client
    │   ├── app                 - All of our app specific components go in here
    │   ├── assets              - Custom assets: fonts, images, etc…
    │   ├── components          - Our reusable components, non-specific to to our app
    │
    ├── e2e                     - Our protractor end to end tests
    │
    └── server
        ├── api                 - Our apps server api
        ├── auth                - For handling authentication with different auth strategies
        ├── components          - Our reusable or app-wide components
        ├── config              - Where we do the bulk of our apps configuration
        │   └── local.env.js    - Keep our environment variables out of source control
        │   └── environment     - Configuration specific to the node environment
        └── views               - Server rendered views

An example client component in `client/app`

    main
    ├── main.js                 - Routes
    ├── main.controller.js      - Controller for our main route
    ├── main.controller.spec.js - Test
    ├── main.html               - View
    └── main.less               - Styles

An example server component in `server/api`

    thing
    ├── index.js                - Routes
    ├── thing.controller.js     - Controller for our `thing` endpoint
    ├── thing.model.js          - Database model
    ├── thing.socket.js         - Register socket events
    └── thing.spec.js           - Test

## Contribute

When submitting an issue, please follow the [guidelines](https://github.com/yeoman/yeoman/blob/master/contributing.md#issue-submission). Especially important is to make sure Yeoman is up-to-date, and providing the command or commands that cause the issue.

When submitting a PR, make sure that the commit messages match the [AngularJS conventions](https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/).

When submitting a bugfix, try to write a test that exposes the bug and fails before applying your fix. Submit the test alongside the fix.

When submitting a new feature, add tests that cover the feature.

## License

[BSD license](http://opensource.org/licenses/bsd-license.php)
