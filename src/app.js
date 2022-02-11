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

  console.log('--- Testing isValidVehicles function ---')

  const vehicleA = {type: 'Truck', year: 1997, value: 2000}
  const vehicleB = {type: 'Trailer', year: 2003, value: 10000}
  const vehicleC = {type: 'Tractor', year: 2017, value: 15000}
  const vehicles = [vehicleA, vehicleB, vehicleC];

  const invalidVehicleA = {type: 'INVALID', year: 1997, value: 2000};
  const invalidVehicleB = {type: 'Truck', year: 'INVALID', value: 2000};
  const invalidVehicleC = {type: 'Truck', year: 1997, value: 'INVALID'};
  const invalidVehicleD = {type: 'Truck', year: 1997, value: 5000, invalidField: 'INVALID'};

  try {
    if (isValidVehicles(vehicles) === true){
      console.log('- PASS: valid vehicles structures should return True');
    } else {
      console.error('- FAIL: valid vehicles structures should return True');
      console.error('- instead: False');
    }
  } catch(err) {
      console.log('- FAIL: valid vehicles structures should return True');
      console.log(err);
  }

  try {
    isValidVehicles([invalidVehicleA]);
    console.log('- FAIL: invalid vehicle type should raise VehicleError')
  } catch(err) {
    if (err instanceof VehicleError){
      console.log('- PASS: invalid vehicle type should raise VehicleError');
    } else {
      console.log('- FAIL: invalid vehicle type should raise VehicleError');
      console.log(err);
    }
  }

  try {
    isValidVehicles([invalidVehicleB]);
    console.log('- FAIL: invalid vehicle year should raise VehicleError')
  } catch(err) {
    if (err instanceof VehicleError){
      console.log('- PASS: invalid vehicle year should raise VehicleError');
    } else {
      console.log('- FAIL: invalid vehicle year should raise VehicleError');
      console.log(err);
    }
  }

  try {
    isValidVehicles([invalidVehicleC]);
    console.log('- FAIL: invalid vehicle value should raise VehicleError')
  } catch(err) {
    if (err instanceof VehicleError){
      console.log('- PASS: invalid vehicle value should raise VehicleError');
    } else {
      console.log('- FAIL: invalid vehicle value should raise VehicleError');
      console.log(err);
    }
  } 

  try {
    isValidVehicles([invalidVehicleD]);
    console.log('- PASS: invalid vehicle structure should raise VehicleError');
  } catch(err) {
    if (err instanceof VehicleError){
      console.log('- PASS: invalid vehicle structure should raise VehicleError');
    } else {
      console.log('- FAIL" invalid vehicle structure should raise VehicleError');
      console.log(err);
    }
  } 

  try {
    isValidVehicles([]);
    console.log('- FAIL: empty array should raise VehicleError');
  } catch(err) {
    if (err instanceof VehicleError){
      console.log('- PASS: empty array should raise VehicleError');
    } else {
      console.log('- FAIL: empty array should raise VehicleError');
      console.log(err);
    }
  } 

  try {
    isValidVehicles();
    console.log('- FAIL: undefined input should raise VehicleError');
  } catch(err) {
    if (err instanceof VehicleError){
      console.log('- PASS: undefined input should raise VehicleError');
    } else {
      console.log('- FAIL: undefined input should raise VehicleError');
      console.log(err);
    }
  } 

  console.log('--- Testing isValid function ---');

  if (isValid([invalidVehicleA, invalidVehicleB, invalidVehicleC], 1, 1) === 'invalid list of vehicles'){
    console.log('- PASS: invalid input should return an error meesage');
  }

  if (isValid[vehicles, 27000, 1997] === true) {
    console.log('- PASS: valid input should return True if given data is correct');
  } else {
    console.log('- FAIL: valid input should return True if given data is correct');
  }

  if (isValid[vehicles, 10, 100000000] === false) {
    console.log('- PASS: valid input should return False if given data is incorrect');
  } else {
    console.log('- FAIL: valid input should return False if given data is incorrect');
  }

}

/** Custom Error if invalid vehicles list is given */
class VehicleError extends Error {
  constructor(message){
    super(message);
    this.name = 'VehicleError';
  }
}

testIsValid();
