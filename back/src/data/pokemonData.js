const database = require("../database");

exports.getPokemons = () => database.query("select * from pokemons");
