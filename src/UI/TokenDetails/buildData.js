/* eslint-disable @typescript-eslint/no-var-requires */
const mainnetDataContext =
  process.env.NODE_ENV !== 'test'
    ? require.context('./../../assets/mainnet/icons', true, /.json$/)
    : {
        keys: () => {
          const fs = require('fs');
          const files = [];
          fs.readdirSync('./src/assets/testnet/icons').forEach((file) => {
            files.push(`./${file}`);
          });
          return files;
        }
      };
const mainnetImageContext =
  process.env.NODE_ENV !== 'test'
    ? require.context('./../../assets/mainnet/icons', true, /.svg$/)
    : {
        keys: () => {
          const fs = require('fs');
          const files = [];
          fs.readdirSync('./src/assets/testnet/icons').forEach((file) => {
            files.push(`./${file}`);
          });
          return files;
        }
      };
const testnetDataContext =
  process.env.NODE_ENV !== 'test'
    ? require.context('./../../assets/testnet/icons', true, /.json$/)
    : {
        keys: () => {
          const fs = require('fs');
          const files = [];
          fs.readdirSync('./src/assets/testnet/icons').forEach((file) => {
            files.push(`./${file}`);
          });
          return files;
        }
      };
const testnetImageContext =
  process.env.NODE_ENV !== 'test'
    ? require.context('./../../assets/testnet/icons', true, /.svg$/)
    : {
        keys: () => {
          const fs = require('fs');
          const files = [];
          fs.readdirSync('./src/assets/testnet/icons').forEach((file) => {
            files.push(`./${file}`);
          });
          return files;
        }
      };

const devnetDataContext =
  process.env.NODE_ENV !== 'test'
    ? require.context('./../../assets/devnet/icons', true, /.json$/)
    : {
        keys: () => {
          const fs = require('fs');
          const files = [];
          fs.readdirSync('./src/assets/devnet/icons').forEach((file) => {
            files.push(`./${file}`);
          });
          return files;
        }
      };
const devnetImageContext =
  process.env.NODE_ENV !== 'test'
    ? require.context('./../../assets/devnet/icons', true, /.svg$/)
    : {
        keys: () => {
          const fs = require('fs');
          const files = [];
          fs.readdirSync('./src/assets/devnet/icons').forEach((file) => {
            files.push(`./${file}`);
          });
          return files;
        }
      };

const buildData = (network /*mainnet | testnet | devnet*/) => {
  const dataContext =
    network === 'testnet'
      ? testnetDataContext
      : network === 'devnet'
      ? devnetDataContext
      : mainnetDataContext;

  const imageContext =
    network === 'testnet'
      ? testnetImageContext
      : network === 'devnet'
      ? devnetImageContext
      : mainnetImageContext;

  const data = {};
  dataContext.keys().forEach((key) => {
    const fileName = key.replace('./', '');
    let resource;
    switch (network) {
      case 'testnet':
        resource = require(`./../../assets/testnet/icons/${fileName}`);
        break;
      case 'devnet':
        resource = require(`./../../assets/devnet/icons/${fileName}`);
        break;
      default:
        resource = require(`./../../assets/mainnet/icons/${fileName}`);
        break;
    }
    const token = fileName.replace('.json', '');
    data[token] = JSON.parse(JSON.stringify(resource));
  });

  const icons = imageContext.keys().reduce((images, path) => {
    const key = path.substring(
      path.lastIndexOf('/') + 1,
      path.lastIndexOf('.')
    );
    const fileName = process.env.NODE_ENV !== 'test' ? key : key.toUpperCase();
    const resource =
      network === 'testnet'
        ? require(`!!@svgr/webpack?-svgo,+titleProp,+ref!./../../assets/testnet/icons/${key}.svg`)
        : network === 'devnet'
        ? require(`!!@svgr/webpack?-svgo,+titleProp,+ref!./../../assets/devnet/icons/${key}.svg`)
        : require(`!!@svgr/webpack?-svgo,+titleProp,+ref!./../../assets/mainnet/icons/${key}.svg`);
    images[fileName] = resource.default;
    return images;
  }, {});
  return { data, icons };
};

export default buildData;
