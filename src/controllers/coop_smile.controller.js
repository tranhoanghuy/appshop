let coop_smile = require("../models/coop_smile.model");
const resSuccess = require("../response/res-success");
const resFail = require("../response/res-fail");
const moment = require("moment");

module.exports = {
  getList: async function (req, res, next) {
    let data = await coop_smile.findByLambda();
    res.json(resSuccess({ data: data }));
  },

  findById: async function (req, res) {
    let id = req.params.id;
    let data = await coop_smile.findByLambda({ _id: id });
    res.json(resSuccess({ data: data[0] }));
  },
};
