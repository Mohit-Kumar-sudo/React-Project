const express = require("express");
const router = new express.Router();
const { verifyAccessToken } = require("../configuration/Tokens/webtoken");
const { addPlan, getUsers ,getTexts,setTexts,getUsersByDate,getRankingByCategory } = require("../controllers/adminController");

router.post("/addplan", addPlan);

router.post("/getusers", getUsers);

router.get("/gettexts", getTexts);

router.post("/settexts", setTexts);

router.post("/getusersbydate",getUsersByDate);

router.post("/getrankingbycategory",getRankingByCategory);


module.exports = router;
