import { NextFunction, Request, Response } from 'express';
import { GenericError } from '../../models/generic.error';

export default (err: GenericError, req: Request, res: Response, next: NextFunction) => {
    res.status(err.status || 500);
    res.json({
        errors: {
            message: err.message,
        },
    });
};
