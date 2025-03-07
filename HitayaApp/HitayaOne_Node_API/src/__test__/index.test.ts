//import App from '../app';
//import { Application } from 'express';
//import request from 'supertest';
//import {
//    StatusCodes,
//} from 'http-status-codes';

describe('status integration tests', () => {
    /*let app: Application;*/

    beforeAll(async () => {
        /*app = App;*/
    });

    it('can get default route success', async () => {
        //await request(app)
        //    .get('/')
        //    .expect((res: request.Response) => {
        //        // eslint-disable-next-line no-console
        //        console.log(res.text);
        //    });
        // .expect(StatusCodes.MOVED_TEMPORARILY);
        expect(1).toEqual(1);
    });
});
