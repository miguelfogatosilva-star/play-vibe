const mysql = require("mysql2");
const express = require("express");
const cors = require("cors");

const app = express()
app.use(express.json())
app.use(cors())

const conexao = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "playvibe",

});

conexao.connect((err) => {
    if(err){ 
    console.log("erro ao conectar", err)
    return
    }
    console.log("deu green")
})

app.post("/login", (req, res) =>{
    const {email, senha} = req.body;
    const sqlcadastro = "insert into cadastro (email, senha) values (?,?) "
      conexao.query(sqlcadastro,[email, senha], (err, result) => {
        if(err){
            console.log(err)
            
            return res.status(500).json({mensagem: "email ja cadastrado"});
        }
        const NID = result.insertId;
        const sqlplacar = "insert into login (email, senha) values (?,0)"

        conexao.query(sqlplacar, [NID], (errplacar) => {
            if(errplacar) {
                console.log(errplacar)
                return res.status(500).json({mensagem: "erro criar placar"});
            }
            res.json({mensagem: "Cadastrado com SUCCESS"})
        })
      })
   
})   
app.listen(3000, () =>{
        console.log("servidor 3000")
      })
