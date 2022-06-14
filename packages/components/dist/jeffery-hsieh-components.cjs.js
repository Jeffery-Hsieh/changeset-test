'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./jeffery-hsieh-components.cjs.prod.js");
} else {
  module.exports = require("./jeffery-hsieh-components.cjs.dev.js");
}
