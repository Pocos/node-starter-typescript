import request from 'supertest';
import app from './server';

describe('Express generic tests', () => {
    it('status', async done => {
        const res = await request(app).head('/status');
        expect(res.status).toEqual(200);
        done();
    });

    it('Not found handler', async done => {
        const res = await request(app).post('/loremIpsum');
        expect(res.status).toEqual(404);
        done();
    });
    it('Error handler', async done => {
        const res = await request(app).get('/errorTest');
        expect(res.status).toEqual(500);
        done();
    });
});
