const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send(`
        <html>
            <head>
                <title>Canary Deployment</title>
            </head>
            <body>
                <h1>🚀 Canary Deployment Demo</h1>
                <h2>Version 2 - CANARY</h2>
                <p>This is the new canary version of the application.</p>
            </body>
        </html>
    `);
});

app.get("/health", (req, res) => {
    res.status(200).send("Version 2 is healthy");
});

app.listen(PORT, () => {
    console.log("Version 2 running on port 3000");
});