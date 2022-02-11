/**
 * Prompt: Implement a function that validates that the input Vehicles have the
 * following shape and all numbers will be sensible integers.
 * 
 * interface Vehicle {
 *   type: 'Truck' | 'Trailer' | 'Tractor'
 *   year: number
 *   value: number
 * }
 * 
 * @param {Vehicle[]} input 
 * @param {number} expectedCost The expected sum cost of all vehicles passed in
 * @param {number} expectedOldestYear The expected minimum year of all vehicles passed in
 * @return {boolean} A boolean indicating whether input matches expected{Cost,Year}
 */
function isValid (input, expectedCost, expectedOldestYear) {

  try {
    isValidVehicles(input);
  } catch(err) {
    return 'invalid list of vehicles';
  }

}

/** Helper function checking if given vehicles list is valid. */
function isValidVehicles(vehicles) {
  vehicles?.forEach((v) => {
    if (!v.type || !v.year || !v.value || Object.keys(v).length !== 3) {
      throw new VehicleError('Invalid vehicle object structure');
    } else if (!(['Truck', 'Trailer', 'Tractor'].includes(v.type))) {
      throw new VehicleError(`vehicle type should be one of the following: Truck, Trailer, or Tractor`);
    } else if (typeof v.year !== 'number') {
      throw new VehicleError('model year should be a number');
    } else if (typeof v.value !== 'number') {
      throw new VehicleError('value should be a number');
    }
  })
  if (vehicles?.length) {
    return true;
  } else {
    throw new VehicleError('No input or an empty array was given.');
  }
}

/**
 * Prompt: Implement a few tests to validate that your function works as expected
 */
function testIsValid () {
  // Your code here
}

testIsValid();
