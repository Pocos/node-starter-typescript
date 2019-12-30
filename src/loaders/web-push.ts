import config from '../config';
import webpush from 'web-push';


webpush.setVapidDetails('mailto:aaa@aaa.it', config.vapid.public, config.vapid.private);
export default webpush;