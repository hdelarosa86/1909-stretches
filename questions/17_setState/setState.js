// create a method called setState that updates the current state of the class

// DONT need to write your own tests for this stretch

class StatefulThing {
  constructor(initialState = {}) {
    this.state = initialState;
  }
  setState(obj) {
    // YOUR CODE
    const newState = Object.assign({}, {...this.state}, {...obj});
    this.state = newState;
    return this.state;
  }
}

module.exports = { StatefulThing };
