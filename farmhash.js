const os = require('os');
const platform = os.platform();

if (platform === 'linux') {
  module.exports = require('./farmhash_linux/index');
} else {
  module.exports = require('farmhash');
}
