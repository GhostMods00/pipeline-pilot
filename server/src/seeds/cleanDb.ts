import models from '../models/index.js';
import db from '../config/connection.js';

export default async (modelName: "Question", collectionName: string) => {
  try {
    const model = models[modelName];
    if (!model || !model.db) {
      throw new Error(`Model ${modelName} not found or database not initialized`);
    }

    const modelDb = model.db.db;
    if (!modelDb) {
      throw new Error('Database not initialized');
    }

    let modelExists = await modelDb.listCollections({
      name: collectionName
    }).toArray();

    if (modelExists.length) {
      await db.dropCollection(collectionName);
    }
  } catch (err) {
    console.error('Error in cleanDB:', err);
    throw err;
  }
}