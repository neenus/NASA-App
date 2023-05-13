const chalk = require("chalk");
const http = require("http");

const app = require("./app");

const { loadPlanetsData } = require("./models/planet");

const server = http.createServer(app);

const port = process.env.PORT || 8000;

const startServer = async () => {
  await loadPlanetsData();

  server.listen(port, () => {
    console.log(
      chalk.blueBright.bold(`Server running on port ${port}...\n`) +
        chalk.bold(`Link:   `) +
        chalk.greenBright.bold(`http://localhost:${port}`)
    );
  });
};

startServer();
