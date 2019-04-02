"use strict";
/***
 *          thalamo
 * *************************
 * File:        /config/logging.js
 * Author:      David Zaletanski <david.zaletanski@gmail.com> (https://dzale.net/)
 * Description: The main logger configuration file.
 *
***/

const { createLogger, format, transports, addColors } = require('winston');
const { combine, timestamp, prettyPrint, printf } = format;

const logLevels = {
  levels: {
    error: 0,
    warn: 1,
    info: 2,
    verbose: 3,
    debug: 4,
    silly: 5
  },
  // Font Styles:
  // bold, dim, italic, underline, inverse, hidden, strikethrough
  // Font Foreground Colors:
  // black, red, green, yellow, blue, magenta, cyan, white, gray, grey
  // Font Background Colors:
  // blackBG, redBG, greenBG, yellowBG, blueBG magentaBG, cyanBG, whiteBG
  colors: {
    error: 'red',
    warn: 'yellow',
    info: 'white',
    verbose: 'green',
    debug: 'blue',
    silly: 'magenta'
  }
};
addColors(logLevels.colors);

const logFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});

const logTransports = [
  new winston.transports.Console()
];

const logger = winston.createLogger({
  format: combine(
    timestamp(),
    prettyPrint(),
    splat(),
    logFormat
  ),
  levels: logLevels,
  level: 'silly',
  transports: logTransports
});

module.exports = logger;
