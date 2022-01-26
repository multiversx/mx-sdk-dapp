let platform: any = {};
try {
  platform = require('platform');
} catch (err) {}

export default platform;
