const express =require ("express");
require ("dotenv").config();
const checkDatabaseConnection =require("./utils/dbHealthCheck");

const logger = require ("./middlewares/logger.middleware");
const notFound = require("./middlewares/notFound.middleware");

const userRoutes =require("./routes/user.routes");
const vehicleRoutes = rquire("./routes/vehicle.routes");
const tripRoutes = rquire("./routes/trip.routes");
const analyticsRoutes =require ("./routes/analytics.routes");
const checkDatabaseConnection = require("./utils/dbHealthCheck");

const app =express();
app.use(express.json);
 const PORT = process.env.PORT || 4568;
app.use(logger);

app.use("/users",userRoutes);
app.use("/vehicles",vehicleRoutes);
app.use("/trips",tripRoutes);
app.use("/analytics",analyticsRoutes);

app.use (notFound);


(async ()=>{
    const isDbConnectd = await checkDatabaseConnection();
    if (!isDbConnectd){
        console.log("server not started due to DB connection failure");
        process.exit(1);
    }
    app.listen(PORT,()=>{
        console.log(`Server is listening on port :${PORT}`);

    });
})();

