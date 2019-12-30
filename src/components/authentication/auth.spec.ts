import request from 'supertest';
import app from '../../loaders/server';

describe('Test2', () => {
    it('Parsing error', async done => {
        const res = await request(app).post('/api/auth/login');
        expect(res.status).toEqual(400);
        done();
    });
    it('Successful login', async done => {
        const res = await request(app)
            .post('/api/auth/login')
            .send({ email: 'test@test.it', password: 'test' });
        expect(res.status).toEqual(200);
        done();
    });
});
