//! Creating the variables for the data recorded

const day1TempF = 32;
const day2TempC = 25;
const day3TempF = 70;
const day4TempC = 18;
const day5TempF = 80;
const day6TempC = 15;
const day7TempF = 72;
const day8TempC = 28;
const day9TempF = 68;
const day10TempC = 20;
const day11TempF = 75;
const day12TempC = 23;
const day13TempF = 82;
const day14TempC = 30;
const day15TempF = 65;
const day16TempC = 22;
const day17TempF = 77;
const day18TempC = 26;
const day19TempF = 78;
const day20TempC = 24;
const day21TempF = 73;
const day22TempC = 21;
const day23TempF = 79;
const day24TempC = 27;
const day25TempF = 71;
const day26TempC = 19;
const day27TempF = 74;
const day28TempC = 17;
const day29TempF = 76;
const day30TempC = 29;

//! Temperature conversion functions
//* Conversion of the temperature from Fahrenheit to Celsius
FtoC = (fahrenheit) => {
    return (fahrenheit - 32) * 5 / 9;
}

//* Conversion of the temperature from Celsius to Fahrenheit
CtoF = (celsius) => {
    return (celsius * 9 / 5) + 32;
}

//! Calculation of the total temperatures
    
    tot_temperature_in_fahrenheit = 
    day1TempF + CtoF(day2TempC) + day3TempF + CtoF(day4TempC) + day5TempF + 
    CtoF(day6TempC) + day7TempF + CtoF(day8TempC) + day9TempF + CtoF(day10TempC) + 
    day11TempF + CtoF(day12TempC) + day13TempF + CtoF(day14TempC) + day15TempF + 
    CtoF(day16TempC) + day17TempF + CtoF(day18TempC) + day19TempF + CtoF(day20TempC) + 
    day21TempF + CtoF(day22TempC) + day23TempF + CtoF(day24TempC) + day25TempF + 
    CtoF(day26TempC) + day27TempF + CtoF(day28TempC) + day29TempF + CtoF(day30TempC);

    tot_temperature_in_celsius = 
    FtoC(day1TempF) + day2TempC + FtoC(day3TempF) + day4TempC + FtoC(day5TempF) + 
    day6TempC + FtoC(day7TempF) + day8TempC + FtoC(day9TempF) + day10TempC + 
    FtoC(day11TempF) + day12TempC + FtoC(day13TempF) + day14TempC + FtoC(day15TempF) + 
    day16TempC + FtoC(day17TempF) + day18TempC + FtoC(day19TempF) + day20TempC + 
    FtoC(day21TempF) + day22TempC + FtoC(day23TempF) + day24TempC + FtoC(day25TempF) + 
    day26TempC + FtoC(day27TempF) + day28TempC + FtoC(day29TempF) + day30TempC;

//* Call the variables: tot_temperature_in_fahrenheit and tot_temperature_in_celsius

tot_temperature_in_fahrenheit = tot_temperature_in_fahrenheit;
tot_temperature_in_celsius = tot_temperature_in_celsius;

//! Calculation of the average temperatures
    
avg_temperature_in_fahrenheit = tot_temperature_in_fahrenheit / 30;
avg_temperature_in_celsius = tot_temperature_in_celsius / 30;

//* Calling the variables: avg_temperature_in_fahrenheit and avg_temperature_in_celsius

avg_temperature_in_fahrenheit = avg_temperature_in_fahrenheit;
avg_temperature_in_celsius = avg_temperature_in_celsius;

//! Console.log the results for your own inspection if you'd like

console.log("Total Temperature in Fahrenheit: ", tot_temperature_in_fahrenheit);
console.log("Total Temperature in Celsius: ", tot_temperature_in_celsius);
console.log("Average Temperature in Fahrenheit: ", avg_temperature_in_fahrenheit);
console.log("Average Temperature in Celsius: ", avg_temperature_in_celsius);    


module.exports = {
    tot_temperature_in_fahrenheit,
    tot_temperature_in_celsius,
    avg_temperature_in_fahrenheit,
    avg_temperature_in_celsius
};