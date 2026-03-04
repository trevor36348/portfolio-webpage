import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
    throw new Error('MONGO_URI not defined');
}

declare global {
    var mongooseCache: {
        conn: typeof mongoose | null;
        promise: Promise<typeof mongoose> | null;
    };
}

let cached = global.mongooseCache;

if (!cached) {
    cached = global.mongooseCache = {
        conn: null,
        promise: null,
    };
}

// Check for a cached connection before attempting to connect to the DB
const connectMongoDB = async () => {
    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        cached.promise = mongoose.connect(MONGO_URI).then((mongooseInstance) => {
            console.log('Connected to MongoDB');
            return mongooseInstance;
        });
    }

    cached.conn = await cached.promise;
    return cached.conn;
};

export default connectMongoDB;
