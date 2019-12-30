import { Request, Response, NextFunction } from 'express';

export default (req: Request, res: Response, next: NextFunction) => {
    if (!req.headers.authorization) {
        throw new Error('User is not authenticated');
    } else {
        //Attach user
        // req.body.user = 'aaa';
        next();
    }
};
