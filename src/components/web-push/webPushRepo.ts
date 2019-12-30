export class WebPushRepo {
    private static subscription: any;

    static setSubscription(subscription: any) {
        WebPushRepo.subscription = subscription;
    }

    static getSubscription(): any {
        return WebPushRepo.subscription;
    }
}