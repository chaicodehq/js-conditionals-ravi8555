/**
 * 🅿️ City Central Parking
 *
 * City Central Parking garage is the busiest in downtown. They need an
 * automated system to calculate parking fees. Different vehicle types
 * have different rates, and there's a daily maximum so customers
 * aren't overcharged.
 *
 * Rates (first hour / each additional hour):
 *   - "car":        $5 first hour, then $3/hour
 *   - "motorcycle": $3 first hour, then $2/hour
 *   - "bus":        $10 first hour, then $7/hour
 *
 * Daily Maximum (fee can never exceed this):
 *   - "car":        $30
 *   - "motorcycle": $18
 *   - "bus":        $60
 *
 * Rules:
 *   - Partial hours are rounded UP (e.g., 1.5 hours → 2 hours)
 *   - The fee should never exceed the daily maximum
 *   - If hours is 0 or negative, return -1
 *   - If vehicleType is not "car", "motorcycle", or "bus", return -1
 *
 * Examples:
 *   - car, 1 hour     → $5
 *   - car, 3 hours    → $5 + $3 + $3 = $11
 *   - car, 0.5 hours  → rounds up to 1 hour → $5
 *   - car, 24 hours   → $5 + 23×$3 = $74 → capped at $30
 *
 * @param {number} hours - Number of hours parked
 * @param {string} vehicleType - "car", "motorcycle", or "bus"
 * @returns {number} Parking fee or -1 for invalid input
 */
export function calculateParkingFee(hours, vehicleType) {

  if(hours <= 0){
    return -1
  }

  if(vehicleType !== "car" && vehicleType !== "motorcycle" && vehicleType !== "bus"){
    return -1
  }

  let parkingCharge;
  let firstHoour = 1;
  let remainHours
  let rounfOfhours = Math.ceil(hours);
  // console.log(rounfOfhours);
  
  if(vehicleType === "car"){
    if(rounfOfhours === 1){
      parkingCharge = 5;
    }else if(rounfOfhours > 1){
      remainHours = rounfOfhours - firstHoour;
      parkingCharge =  (remainHours * 3) + 5;      
    }
    if(parkingCharge > 30){
      parkingCharge = 30
    }
  }
   if(vehicleType === "motorcycle"){
    if(rounfOfhours === 1){
      parkingCharge = 3;
    }else if(rounfOfhours > 1){
      remainHours = rounfOfhours - firstHoour;
      parkingCharge =  (remainHours * 2) + 3;      
    }
    if(parkingCharge > 18){
      parkingCharge = 18
    }
  }
  if(vehicleType === "bus"){
    if(rounfOfhours === 1){
      parkingCharge = 10;
    }else if(rounfOfhours > 1){
      remainHours = rounfOfhours - firstHoour;
      parkingCharge =  (remainHours * 7) + 10;      
    }
    if(parkingCharge > 60){
      parkingCharge = 60
    }
  }
  
  return parkingCharge
  // Your code here
}
console.log(calculateParkingFee(1.1, "car"));
