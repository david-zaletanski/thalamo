"use strict";
/***
 *          thalamo
 * *************************
 * File:        /index.js
 * Author:      David Zaletanski <david.zaletanski@gmail.com> (https://dzale.net/)
 * Description: The main entrypoint for the application.
 *
***/

// Global Configuration

global.reqlib = require('app-root-path').require;

// App Configuration
const { config, log } = reqlib('/config');

// App Initialization
