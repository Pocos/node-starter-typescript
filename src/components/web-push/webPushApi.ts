import { Response, Router } from 'express';
import { Request } from 'express';
import { NextFunction } from 'express';
import webpush from '../../loaders/web-push';
import { WebPushRepo } from './webPushRepo';

const route = Router();

export class WebPushApi {
    static init(app: Router): void {
        app.use('/push', route);
        route.post('/subscribe', async (req: Request, res: Response, next: NextFunction) => {
            const subscription = req.body;
            WebPushRepo.setSubscription(subscription);
            return res.status(200).json({ success: 'OK' });
            /*const payload = JSON.stringify({ title: 'test' });
                console.log(subscription);
                res.status(200).json({ test: 'test' });
                webpush.sendNotification(subscription, payload).catch(error => {
                    console.error(error);
                  });*/
        });

        route.post('/notification', async (req: Request, res: Response, next: NextFunction) => {
            const subscription = WebPushRepo.getSubscription();
            const payload = JSON.stringify({ title: 'test' });
            res.status(200).json({ test: 'test' });
            webpush.sendNotification(subscription, payload).catch((error: Error) => {
                console.error(error);
            });
        });
    }
}
