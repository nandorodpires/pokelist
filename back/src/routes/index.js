const express = require("express");
const pokemonService = require("../services/pokemonService");

const router = express.Router();
router.get("/", (req, res) => {
  res.json({ message: "API is running..." });
});

router.post("/pokemons", async (req, res) => {});

router.get("/pokemons", async (req, res) => {
  try {
    const pokemons = await pokemonService.getPokemons();
    res.json(pokemons);
  } catch (error) {
    const { message } = error;
    res.status(400).json({ message });
  }
});

router.get("/pokemons/:id", async (req, res) => {
  res.json({ message: "Show pokemon detail" });
});

module.exports = router;
