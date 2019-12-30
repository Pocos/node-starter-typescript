import { injectable } from 'inversify';
import { ICurlService } from './curl.interface';
import https from 'https';

@injectable()
export class CurlService implements ICurlService {
    public async get(url: string): Promise<unknown> {
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
