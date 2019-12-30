import dotenv from 'dotenv';

dotenv.config();

export default {
    env: process.env.NODE_ENV || 'development',

    /**
     * Web application port
     */
    port: parseInt(process.env.PORT, 10),

    /**
     * Used to set logging level of winston
     */
    logs: {
        level: process.env.LOG_LEVEL || 'silly',
    },

    /**
     * Used to set api prefix
     */
    api: {
        prefix: process.env.API_PREFIX,
        /**
         * Used to set swagger api location
         */
        swagger: process.env.SWAGGER_PREFIX,
    },

    vapid: {
        public: process.env.PUBLIC_VAPID_KEY,
        private: process.env.PRIVATE_VAPID_KEY,
    },

    facebook: {
        api_id: process.env.FACEBOOK_API_ID,
        api_secret: process.env.FACEBOOK_API_SECRET,
    },
};
