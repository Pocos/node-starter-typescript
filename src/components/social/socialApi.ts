import { Router, Request, Response } from 'express';
import Logger from '../../loaders/logger';
import https from 'https';
import config from '../../config';
import { IncomingMessage } from 'http';

const route = Router();
export class SocialApi {
    static init(app: Router) {
        app.use('/social', route);

        /**
         * Api called from User Agent after click on "Connect with Facebook". It starts authorization code flow (server-side). TODO: Build up url in a better way
         */
        route.get('/facebook', (req: Request, res: Response) => {
            res.redirect(
                'https://www.facebook.com/v5.0/dialog/oauth?client_id=801664360245917&redirect_uri=http://localhost:8080/api/social/facebook/code&state={"t":"a"}',
            );
        });

        route.get('/facebook/code', async (req: Request, res: Response) => {
            if (req.query.error) {
                // Facebook populates the query with the following data
                Logger.error(
                    'error: ' +
                        req.query.error +
                        ' error_reason:' +
                        req.query.error_reason +
                        ' error_description: ' +
                        req.query.error_description,
                );
            } else {
                Logger.info('Code received:' + req.query.code);
                // TODO: perform state challenge. Make the final code with received one-time code
                const url =
                    'https://graph.facebook.com/v5.0/oauth/access_token?' +
                    `client_id=${config.facebook.api_id}` +
                    `&redirect_uri=http://localhost:8080/api/social/facebook/code` +
                    `&client_secret=${config.facebook.api_secret}` +
                    `&code=${req.query.code}`;
                Logger.info(url);
                const response = await SocialApi.httpRequest(url);
                Logger.info(response);
            }

            // Always redirect
            res.redirect('/');
        });
    }

    static async httpRequest(url: string): Promise<Object> {
        let a = new Promise((resolve, reject) => {
            https.get(url, res => {
                res.setEncoding('utf8');
                let body = '';
                res.on('data', data => {
                    body += data;
                });
                res.on('end', () => {
                    body = JSON.parse(body);
                    resolve(body);
                });
                res.on('error', err => {
                    reject(err);
                });
            });
        });

        return a;
    }
}
