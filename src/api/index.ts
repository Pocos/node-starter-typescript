import { Router } from 'express';
import { AuthApi } from '../components/authentication/authApi';
import { WebPushApi } from '../components/web-push/webPushApi';
import { SwaggerApi } from '../components/swagger/swaggerApi';
import { UserApi } from '../components/authentication/userApi';
import { SocialApi } from '../components/social/socialApi';

export default (): Router => {
    const app = Router();
    AuthApi.init(app);
    SocialApi.init(app);
    UserApi.init(app);
    WebPushApi.init(app);
    SwaggerApi.init(app);
    return app;
};
