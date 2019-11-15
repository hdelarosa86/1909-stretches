// Create a class called DiceRoller
// It should contain a roll method and a
// history property which outputs all of the previous rolls

class DiceRoller {
  constructor(sides, numDice) {
    if (
      typeof sides !== 'number' ||
      typeof numDice !== 'number' ||
      sides < 1 ||
      sides > 6
    ) {
      throw Error;
    } else {
      this.sides = sides;
      this.numDice = numDice;
      this.history = [];
    }
  }
  roll() {
    let values = [];
    for (let i = 0; i < this.numDice; i++) {
      values.push(Math.floor(Math.random() * this.sides) + 1); 
    }
 
    this.history.push(values);
    return values; //[Math.floor(Math.random()*values.length)])
  }
}

module.exports = { DiceRoller };
