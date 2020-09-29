// make sourcemaps work!
require('source-map-support').install();

module.exports = require("@eth-optimism/ganache-core/public-exports.js");
module.exports.version = require("@eth-optimism/ganache-core/package.json").version;
module.exports.to = require("@eth-optimism/ganache-core/lib/utils/to");
