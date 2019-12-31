import config from './config';

import loaders from './loaders';
import Logger from './loaders/logger';
import http_module from 'http';
import io from './loaders/io';

/**
 * Import configuration and load modules
 */
const app = loaders();
const http_server = http_module.createServer(app);
/**
 * Init io web socket
 */
io(http_server);
const server = http_server.listen(config.port, () => {
    Logger.info(`
      ################################################
      Server listening on port: ${config.port}
      ################################################
  `);
});

export default server;
