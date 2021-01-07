import mongoose from 'mongoose';

const options ={
    useFindAndModify: false,
    useUnifiedTopology: true,
    useNewUrlParser: true
}

class Database {
    // private DB_URL = 'mongodb://link-db/db_portal'
    private DB_URL = 'mongodb://localhost:27017/db_portal'

    createConnection() {
        mongoose.connect(this.DB_URL, options);
    }
}

export default Database;
