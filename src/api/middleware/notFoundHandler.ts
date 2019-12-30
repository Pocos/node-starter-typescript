import { NextFunction, Request, Response } from 'express';
import { GenericError } from '../../models/generic.error';

/**
 * If no routes are matched execute this middleware, which catches 404s. Then, forward to error handler
 */
export default (req: Request, res: Response, next: NextFunction): void => {
    const err = new GenericError('Not Found', 404);
    next(err);
};
