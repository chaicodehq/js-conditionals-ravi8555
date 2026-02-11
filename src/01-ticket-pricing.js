/**
 * 🎬 The Starlight Cinema
 *
 * You've just been hired at Starlight Cinema! Your first task is to build
 * the automated ticket pricing system. The manager hands you a sticky note
 * with the pricing rules scribbled on it:
 *
 * Age Groups:
 *   - Children (0–12): $8
 *   - Teens (13–17): $12
 *   - Adults (18–59): $15
 *   - Seniors (60+): $10
 *
 * Weekend Surcharge:
 *   - Add $3 on weekends (when isWeekend is true)
 *
 * Rules:
 *   - If age is negative or not a number, return -1
 *   - isWeekend is a boolean
 *
 * @param {number} age - The customer's age
 * @param {boolean} isWeekend - Whether it's a weekend
 * @returns {number} The ticket price, or -1 for invalid input
 */
export function getTicketPrice(age, isWeekend) {
  const children = age <= 12;   
  const teens = age <= 17;
  const audult = age <= 59;
  const senior = age >= 60;
  
  
  if(age < 0 || typeof age !=="number" || isNaN(age)){
    return -1
  }
  
  let basePrice;

  if(children){
     basePrice = 8
  }else if(teens){
    basePrice = 12
  }else if(audult){
    basePrice = 15
  }else if(senior){
    basePrice = 10
  }

  if(isWeekend === true){
    return basePrice +3
  }
  return basePrice;
  
 
}
console.log(getTicketPrice(10, false));  // 8 (child, weekday)
console.log(getTicketPrice(10, true));   // 11 (child, weekend)
console.log(getTicketPrice(15, false));  // 12 (teen, weekday)
console.log(getTicketPrice(15, true));   // 15 (teen, weekend)
console.log(getTicketPrice(30, false));  // 15 (adult, weekday)
console.log(getTicketPrice(30, true));   // 18 (adult, weekend)
console.log(getTicketPrice(65, false));  // 10 (senior, weekday)
console.log(getTicketPrice(65, true));   // 13 (senior, weekend)
console.log(getTicketPrice(-5, false));  // -1 (invalid age)
console.log(getTicketPrice("abc", false)); // -1 (invalid age)

