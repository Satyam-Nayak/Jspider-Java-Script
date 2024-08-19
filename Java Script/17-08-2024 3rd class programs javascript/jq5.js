let lB = -0.48;
let uB = 4;

let leastPI = null;

for (let i = 0; i <= uB; i++) {
    if (i > lB) {
        leastPI = i;
        break;
    }
}

if (leastPI === null) {
    console.log('no positive in it');
} else {
    console.log('the least positive integer in this range is:', leastPI);
}
