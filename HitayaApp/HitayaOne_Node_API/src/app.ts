import express, { Request, Response, Application } from 'express';
import * as path from 'path';
import session from 'express-session';
import passport from 'passport';
import routes from './routes';
import morganMiddleware from './middleware/morgan';
import cors from 'cors';

const app: Application = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use(morganMiddleware);

app.use(
    session({
        secret: 'secret',
        resave: true,
        saveUninitialized: false,
    })
);
    
app.use(passport.initialize());
app.use(passport.session());

app.use('/api/v1', routes);

app.get('/', (req: Request, res: Response) => {
    return res.sendStatus(200);
});

export default app;
