import app from './server';
import Logger from './logger';
import { Application } from 'express';

export default (): Application => {
    Logger.info('Loading modules');

    const expressApp = app;
    Logger.info('Express middleware and api loaded');
    return expressApp;
};
