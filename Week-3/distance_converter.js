
function metersToFeet(meters) {
    const feetPerMeter = 3.281;
    let feet = meters * feetPerMeter;
    console.log(`${meters} meters is equal to ${feet} feet.`);
}


function feetToMeters(feet) {
    const metersPerFoot = 0.3048;
    let meters = feet * metersPerFoot;
    console.log(`${feet} feet is equal to ${meters} meters.`);
}


metersToFeet(10); 
feetToMeters(50); 
