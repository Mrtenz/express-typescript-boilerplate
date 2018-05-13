import * as request from 'supertest';
import app from '../src/app';

describe('GET /hello-world', () => {
    test('it should return a JSON object', async (): Promise<void> => {
        const response = await request(app).get('/hello-world');
        expect(response.status).toBe(200);
        expect(response.body.message).toEqual('Hello, world!');
    });
});

describe('POST /hello-world', () => {
    test('it should return a 404 error', async (): Promise<void> => {
        const response = await request(app).post('/hello-world');
        expect(response.status).toBe(404);
    });
});
