"use strict";
/***
 *          thalamo
 * *************************
 * File:        /config/index.js
 * Author:      David Zaletanski <david.zaletanski@gmail.com> (https://dzale.net/)
 * Description: The main entrypoint for the application configuration.
 *
***/
var appRootPath = require('app-root-path');

var config = {
  app: {
    path: appRootPath;
  }
};

var log = reqlib('/config/logging');

module.exports = { config, log }
