import { Request, Response, Router, NextFunction } from 'express';
import middlewares from '.././../api/middleware';

const route = Router();

export class UserApi {
    static init(app: Router) {
        app.use('/user', route);

        route.get('', middlewares.isAuth, async (req: Request, res: Response, next: NextFunction) => {
            return res.status(200).json({ message: 'OK!', user: req.body.user });
        });
    }
}
