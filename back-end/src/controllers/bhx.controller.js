let bhx = require("../models/bhx.model");
const resSuccess = require("../response/res-success");
const resFail = require("../response/res-fail");
const moment = require("moment");

module.exports = {
  getList: async function (req, res, next) {
    let data = await bhx.findByLambda();
    res.json(resSuccess(data));
  },

  findById: async function (req, res) {
    let id = req.params.id;
    let data = await bhx.findByLambda({ _id: id });
    res.json(resSuccess({ data: data[0] }));
  },
};
