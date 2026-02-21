const express = require("express");
const cors = require("cors");
const busOnlineRoutes = require("./routes/busOnlineRoutes.js");
const peopleOutdoorRoutes = require("./routes/peopleOutdoorRoutes.js");
const populationDistributionRoutes = require("./routes/populationDistributionRoutes.js");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/bus_online", busOnlineRoutes);
app.use("/api/people_outdoor", peopleOutdoorRoutes);
app.use("/api/population_distribution", populationDistributionRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});