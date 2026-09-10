const express = require("express");
const app = express();
app.use(express.json());

const packages = require("./data/tour")

app.get("/", (req, res) => {
    res.send("Hello, World!");
});
app.get("/packages", (req, res) => {
    const destination = req.query.destination;
    if(!destination){
        res.json(packages);
    } 
    const filteredPackages = packages.filter((pkg) => pkg.destination.toLocaleLowerCase === destination.toLocaleLowerCase);
    res.json(filteredPackages);
    // res.json(destination);
    // res.json(packages);
});

app.get("/packages/:id", (req, res) => {
    const packageId = parseInt(req.params.id);
    const tourpackage = packages.find((pkg) => pkg.id === packageId);
    // res.send(tourpackage);
    res.status(201).json(tourpackage);
}); 

app.post("/packages", (req, res) => {

    const newPackage = req.body;

    packages.push(newPackage);

    res.status(201).json(newPackage);

}); 



const tourRoutes = require("./route/tourRoutes");

app.use("/api", tourRoutes);


app.listen(3000, () => {
    console.log("Server is running on port 3000")
});             



 