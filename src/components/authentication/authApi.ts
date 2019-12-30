import { celebrate } from 'celebrate';
import { Response, Router } from 'express';
import { Request } from 'express';
import { NextFunction } from 'express';
import authSchema from './authSchema';

const route = Router();

export class AuthApi {
    static init(app: Router): void {
        app.use('/auth', route);

        route.post(
            '/login',
            celebrate(authSchema.loginSchema),
            async (req: Request, res: Response, next: NextFunction) => {
                return res.status(200).json({ test: 'test' });
            },
        );
    }
}
