const { getAllPlanets } = require("../models/planet");

const httpGetAllPlanets = (req, res, next) => {
  const planets = getAllPlanets();
  res.status(200).json(planets);
};

module.exports = { httpGetAllPlanets };
