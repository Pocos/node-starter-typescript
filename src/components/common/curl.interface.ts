export interface ICurlService {
    get(url: string): Promise<unknown>;
}
