class GuessingGame {
    constructor() {
        this.minRange = 0;
        this.maxRange = 0;
        this.currentTry = 0;
    }

    setRange(min, max) {
        this.minRange = min;
        this.maxRange = max;
    }

    guess() {
        this.currentTry = Math.round((this.minRange + this.maxRange)/2);
        return this.currentTry;
    }

    lower() {
        this.maxRange = this.currentTry;
    }

    greater() {
        this.minRange = this.currentTry;
    }
}

module.exports = GuessingGame;
