let tiki_book = require("../models/tiki_book.model");
const resSuccess = require("../response/res-success");
const resFail = require("../response/res-fail");
const moment = require("moment");

module.exports = {
  getList: async function (req, res, next) {
    let data = await tiki_book.findByLambda();
    res.json(resSuccess({ data: data }));
  },

  findById: async function (req, res) {
    let id = req.params.id;
    let data = await tiki_book.findByLambda({ _id: id });
    res.json(resSuccess({ data: data[0] }));
  },
};
