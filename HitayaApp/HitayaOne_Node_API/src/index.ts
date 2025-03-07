import { Server } from 'socket.io';
import mongoose from './config/database';
import app from './app';
import logger from './utils/logger';

const port = process.env.PORT || process.env.PORT;

const server = app.listen(port, () =>{
    mongoose.connect();
    logger.info(`Server listening on port: ${port}`);
});

const io = new Server(server, { pingTimeout: 60000 });
