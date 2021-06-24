var mongoose = require("mongoose");

var schema = new mongoose.Schema(
  {
    image: String,
    title: String,
    price: Number,
    describe: String,
  },
  { versionKey: false }
);

var Collection = mongoose.model("Vinamilk", schema, "vinamilk");

module.exports = {
  findByLambda: async function (lambda) {
    return await Collection.find(lambda);
  },
  createByLambda: async function (lambda) {
    return await Collection.insertMany(lambda);
  },
  updateByLambda: async function (id, lambda) {
    return await Collection.updateOne(id, lambda);
  },
  deleteByLambda: async function (lambda) {
    return await Collection.deleteOne(lambda);
  },
};
