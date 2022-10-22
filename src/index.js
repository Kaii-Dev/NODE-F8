const express = require("express");
const morgan = require("morgan");
const path = require("path");
const handlebars = require("express-handlebars");
const app = express();
const port = 3000;

// thằng nào là file tĩnh thì nó sẽ kiếm trong static
app.use(express.static(path.join(__dirname, "public")));

//HTTP logger (morgan)
app.use(morgan("combined"));

// HANDLEBARS PACKAGE
app.engine(
    "hbs",
    handlebars.engine({
        extname: ".hbs",
    })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/news", (req, res) => {
    res.render("news");
});

app.listen(port, () => {
    console.log(`Example app listening port ${port}`);
});
