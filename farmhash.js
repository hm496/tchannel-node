const os = require('os');
const platform = os.platform();

if (platform === 'linux' && process.version.startsWith('v10')) {
  module.exports = require('./farmhash_linux/index');
} else {
  module.exports = require('farmhash');
}
