let qrcode: any = {};
try {
  qrcode = import('qrcode');
} catch (err) {}

export default qrcode;
