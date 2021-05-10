const userModel = require("../models/userModel");
const planModel = require("../models/planModel");
const textModel = require("../models/textModel");
const rankingModel = require("../models/rankingModel");
const { signAccessToken } = require("../configuration/Tokens/webtoken");
const createError = require("http-errors");
const { use } = require("passport");

module.exports = {
  addPlan: async (req, res, next) => {
    const { plan_id, name, item_limit, rank_limit } = req.body;
    const plan = await planModel.create({
      plan_id,
      name,
      item_limit,
      rank_limit,
    });

    return res.send(plan);
  },

  getUsers: async (req, res, next) => {
    const users = await userModel.find(
      {},
      { name: 1, email: 1, plan_id: 1, ip: 1, country: 1, created_at: 1, type: 1 }
    );
    return res.send(users);
  },

  getTexts:async (req, res, next) =>{
    let page= req.body.page;
    const texts = await textModel.find(
      { page }
    );
    return res.send({
      status:1,
      texts:texts[0]
    });
  },

  setTexts:async (req, res, next) =>{
    let {page,text1,text2,text3,text4,text5,list}= req.body;
    try {
      await textModel.update({ page }, { text1, text2, text3, text4, text5, list }, { upsert: true });
      let texts = {
        status: 1,
        message: "updated succesfully",
      }
      return res.send(texts);
    } catch (e) {
      return res.status(500);
    }
  },

  editPlan: async (req, res, next) => {
    const { plan_id, name, item_limit, rank_limit } = req.body;
    await planModel.update({ plan_id }, {
      plan_id,
      name,
      item_limit,
      rank_limit,
    });

    return res.send(plan);
  },

  getUsersByDate: async (req, res, next) => {
    let {start_date,end_date}=req.body;

    //date format DD/MM/YYYY
    let start=start_date.split("/");
    let end=end_date.split("/");
    const users = await userModel.find({
      created_at: {
        $gte: new Date(start[2],start[0],start[1]),
        $lte: new Date(end[2],end[0],end[1])
      }
    })
    return res.send(users);
  },

  getRankingByCategory: async (req, res, next) => {
    let category = req.body.category;
    const ranks = await rankingModel.find(
      { category }
    );
    return res.send({
      status:1,
      ranks
    });
  },

};
