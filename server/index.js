import express from "express";
import cors from "cors";
import generate from "./generate.js";

const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3005;

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.post("/generate", async (req, res) => {
    const queryDescription = req.body.queryDesc;
    console.log("Received desc:", queryDescription);  // to check on Thunderbolt (variant of Postman)
    
    try {
        const sqlQuery = await generate(queryDescription);
        res.json({ response: sqlQuery });
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
