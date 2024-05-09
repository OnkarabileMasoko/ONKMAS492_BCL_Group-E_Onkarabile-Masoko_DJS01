/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters

const velocity = { value: 10000, unit: 'km/h' }; // velocity (km/h)
const acceleration = { value: 3, unit: 'm/s^2' }; // acceleration (m/s^2)
const duration = { value: 3600, unit: 's' }; // seconds (1 hour)
const initialDistance = { value: 0, unit: 'km' }; // distance (km)
const fuelAmount = { value: 5000, unit: 'kg' }; // remaining fuel (kg)
const fuelBurnRate = { value: 0.5, unit: 'kg/s' }; // fuel burn rate (kg/s)

 // Function to calculate new velocity based on acceleration
const calcNewVelocity = (acceleration, velocity, duration) => {
  // Validate input parameters
  if (typeof acceleration !== 'number' || typeof velocity !== 'number' || typeof duration !== 'number') {
    throw new Error('Invalid input parameters for calcNewVelocity function');
  }

  // Calculate new velocity based on acceleration
  const newVelocity = velocity + (acceleration * duration);

  return newVelocity;
}

// Validate input parameters
if (velocity.unit !== 'km/h' || acceleration.unit !== 'm/s^2' || duration.unit !== 's' || initialDistance.unit !== 'km' || fuelAmount.unit !== 'kg' || fuelBurnRate.unit !== 'kg/s') {
  throw new Error('Invalid unit of measurement for one or more input parameters');
}

console.log(`Corrected New Velocity: ${vel2} km/h`);
console.log(`Corrected New Distance: ${d2} km`);
console.log(`Corrected Remaining Fuel: ${rf} kg`);






