import mongoose from  'mongoose';
import logger from '../utils/logger';
// mongoose.set('useNewUrlParser', true);
// mongoose.set('useUnifiedTopology', true);
// mongoose.set('useFindAndModify', false);
mongoose.set('strictQuery', false);


class Database {

    connect() {
        mongoose.connect('mongodb+srv://' + process.env.MONGO_DB_USER + ':' + process.env.MONGO_DB_PASS + '@hitayaone.92ejtuj.mongodb.net/HitayaOneDB?retryWrites=true&w=majority')
            .then(() => {
                logger.info('database connection successful');
            })
            .catch((err) => {
                logger.error('database connection error '+ err);
            });
    }
}

export default new Database();
