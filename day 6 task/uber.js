class UberPriceCalculator {
  constructor(baseFare, costPerKilometer, costPerMinute) {
    this.baseFare = baseFare;
    this.costPerKilometer = costPerKilometer;
    this.costPerMinute = costPerMinute;
  }

  calculatePrice(distanceInKm, durationInMinutes) {
    const distanceCost = this.costPerKilometer * distanceInKm;
    const durationCost = this.costPerMinute * durationInMinutes;
    const totalCost = this.baseFare + distanceCost + durationCost;

    return totalCost;
  }
}

// Creating an instance of the UberPriceCalculator class
const uberCalculator = new UberPriceCalculator(5, 2, 0.5);

const distanceTraveled = 10; // in kilometers
const duration = 20; // in minutes

const price = uberCalculator.calculatePrice(distanceTraveled, duration);
console.log(`The estimated Uber price for the ride is $${price}`);
