
module.exports = {

  get: (req , res) => {
      res.status(200).send("buscando consoles");
  },

  post: (req , res) => {
    res.status(200).send("Criando consoles");
},

put: (req , res) => {
  res.status(200).send("Editanto consoles");
}

}