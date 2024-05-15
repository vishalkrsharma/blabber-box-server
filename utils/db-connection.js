import mongoose from 'mongoose';

const dbConnection = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_URI);
    console.log(`DB connected: ${connection.host}`);
  } catch (error) {
    console.error('[DB]', error);
  }
};

export default dbConnection;
