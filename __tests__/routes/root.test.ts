import supertest from 'supertest';
import app from '../../src/app';

test('get root returns environment', async () => {
    const result = await supertest(app).get('/');
    expect(result.statusCode).toEqual(200);
    expect(result.body.environment).toEqual('test');
})

test('post root echoes json', async () => {
    const result = await supertest(app).post('/').send(
        {
            'test': 'value',
            'nested': {
                'test': 'value'
            }
        });
    expect(result.statusCode).toEqual(200);
    expect(result.body).toBeTruthy();
    expect(result.body.test).toBe('value');
    expect(result.body.nested.test).toBe('value');
})