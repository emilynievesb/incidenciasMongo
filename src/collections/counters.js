import { connect, startTransaction } from "../utils/connect.js";
class Counters {
  constructor() {}

  async getNewId(coleccion) {
    const session = await startTransaction();
    try {
      const countersCollection = await connect("counters");
      const counterDoc = await countersCollection.findOneAndUpdate(
        { _id: `${coleccion}Id` },
        { $inc: { sequence_value: 1 } },
        { session, returnOriginal: false, upsert: true }
      );
      const newId = Number(counterDoc.value.sequence_value + 1);

      return { newId: newId, sessionNow: session };
    } catch (error) {
      await session.abortTransaction();
      session.endSession();
      throw error;
    }
  }
}
export default Counters;
