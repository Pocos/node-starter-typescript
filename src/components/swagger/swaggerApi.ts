import { Router } from 'express';
import swaggerUi from 'swagger-ui-express';
import Logger from '../../loaders/logger';
import swaggerDocument from '../../swagger.json';
import config from '../../config';

const route = Router();
const options = {
    customCss: '.swagger-ui .topbar { display: none }',
};

export class SwaggerApi {
    static init(app: Router): void {
        app.use(config.api.swagger, swaggerUi.serve, route);

        route.get('/', swaggerUi.setup(swaggerDocument, options));
        Logger.info(
            `Swagger definitions loaded. Visit ${config.api.prefix}${config.api.swagger} for API documentation`,
        );
    }
}
