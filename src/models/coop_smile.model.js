var mongoose = require("mongoose");

var schema = new mongoose.Schema(
  {
    image: String,
    title: String,
    price: Number,
    rootprice: Number,
    describe: String,
  },
  { versionKey: false }
);

var Collection = mongoose.model("coop_smile", schema, "coop_smile");

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
