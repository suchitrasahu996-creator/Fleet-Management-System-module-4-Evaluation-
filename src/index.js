const express =require ("express");
require ("dotenv").config();

const logger = require ("./middlewares/logger.middleware");
const notFound = require("./middlewares/notFound.middleware");

const userRoutes =require("./routes/user.routes");
const vehicleRoutes = rquire("./routes/vehicle.routes");
const tripRoutes = rquire("./routes/trip.routes");
const analyticsRoutes =require ("./routes/analytics.routes");

const app =express();
app.use(express.json);

app.use(logger);

