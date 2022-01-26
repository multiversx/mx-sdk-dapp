let qrcode: any = {};
try {
  qrcode = require('qrcode');
} catch (err) {}

export default qrcode;
