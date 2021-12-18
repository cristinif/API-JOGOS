
module.exports = {

  get: (req , res) => {
      res.status(200).send("Formulário carregado");
  },

  post: (req , res) => {
    res.status(200).send("Formulário enviado");
},

put: (req , res) => {
  res.status(200).send("ERRO: Proibido alterar o Formulário");
},

delete: (req , res) => {
  res.status(200).send("ERRO: Formulário Deletado!");
}

}