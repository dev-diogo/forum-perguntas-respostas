const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.set('view engine','ejs');
app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get("/", function (req, res) {
 

    res.render("index")
});

app.get("/perguntar", function (req, res) {
    res.render("perguntar");
})

app.post("/salvarpergunta", function (req, res) {
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;

      res.render("minha", {
        titul: titulo,
        descricao: descricao
      })
});


app.listen(4000, () => {
    console.log("Servidor rodando!")
});