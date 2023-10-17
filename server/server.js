
const express = require("express");
const app = express();
const cors = require("cors");
const passport = require("passport");
const cookieSession = require("cookie-session");
const passportSetup = require("./passport");
const authRoute = require("./routes/auth");

const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express)

app.use(
    cookieSession({
        name:"session",
        keys:["cyberwolve"],
        maxAge:24*60*60*100,

    })
);

app.use(passport.initialize())
app.use(passport, session())
app.use(cors({
    origin:"http://localhost:3000",
    methods:"GET,POST,PUT,DELETE",
    credentials: true,
}))
//COMMENTS app components:
app.use("/")

//CONFIRMATION OF PORT & Database
app.listen(PORT, () => console.log(`Listening on Port ${PORT}`))
