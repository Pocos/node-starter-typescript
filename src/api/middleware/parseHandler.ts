import { NextFunction, Request, Response } from 'express';
import { GenericError } from '../../models/generic.error';

export default (err: GenericError, req: Request, res: Response, next: NextFunction): void => {
    if (err.joi) {
        res.status(400);
        res.json({
            errors: {
                message: err.joi.message,
            },
        });
    } else {
        next(err);
    }
};
