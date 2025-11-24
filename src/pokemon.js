class Pokemon {
  #health = 100;

  #level = 1;

  static allPokemon = [];

  constructor(name, type) {
    this.name = name;
    this.type = type;
    Pokemon.allPokemon.push(this);
  }

  get health() {
    return this.#health;
  }

  get level() {
    return this.#level;
  }

  levelUp() {
    this.#level++;
    this.#health += 10;
    if (this.#health >= 100) {
      this.#health = 100;
    }
    console.log(`${this.name} leveled up to level ${this.#level}!`);
  }

  isFainted() {
    if (this.#health <= 0) {
      return true;
    }
    return false;
  }

  attack(targetPokemon) {
    targetPokemon.#health -= 10 * targetPokemon.#level;
    console.log(`${this.name} attacked ${targetPokemon.name}!`);
  }

  static getTotalPokemon() {
    return Pokemon.allPokemon.length;
  }

  static findByName(name) {
    return Pokemon.allPokemon.find((pokemon) => pokemon.name === name);
  }
}

// TEST YOUR CODE HERE

// DO NOT REMOVE
module.exports = { Pokemon };
