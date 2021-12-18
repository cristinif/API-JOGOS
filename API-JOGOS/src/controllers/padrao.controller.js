


module.exports = {

  get : (req, res) => {

    res.status(200).send({
      "author" : "Guilherme Felipe Reis Soares",
      "description" : "Api feita para um site de jogos"
    });
  }
}

