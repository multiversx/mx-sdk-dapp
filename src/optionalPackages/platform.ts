let platform: any = {};
try {
  platform = import('platform');
} catch (err) {}

export default platform;
