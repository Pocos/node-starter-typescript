import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import routes from '../api';
import middleware from '../api/middleware';
import config from '../config';

const app = express();

// Sets various HTTP headers for security purposes
app.use(helmet());

/**
 * Health Check endpoint
 */
app.get('/status', (req, res) => {
    res.status(200).end();
});

app.get('/errorTest', () => {
    throw new Error();
});

// Shows the real origin IP: useful if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)
app.enable('trust proxy');

// Enable Cross Origin Resource Sharing to all origins by default
app.use(cors());
// Middleware that transforms the raw string of req.body into json
app.use(bodyParser.json());

// Load API routes
app.use(config.api.prefix, routes());

app.use(require('express-static')('./'));

// Error handlers
app.use(middleware.notFoundHandler);
app.use(middleware.parseHandler);
app.use(middleware.errorHandler);

export default app;
