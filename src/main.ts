// import 'reflect-metadata'; // We need this in order to use @Decorators

import config from './config';

import loaders from './loaders';
import Logger from './loaders/logger';

/**
 * Import configuration and load modules
 */
const app = loaders();

const server = app.listen(config.port, err => {
    if (err) {
        Logger.error(err);
        process.exit(1);
        return;
    }
    Logger.info(`
      ################################################
      Server listening on port: ${config.port}
      ################################################
  `);
});

export default server;
