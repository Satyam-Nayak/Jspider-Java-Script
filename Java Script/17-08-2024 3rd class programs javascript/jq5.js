let lowerBound = -0.48;
let upperBound = 4;

let leastPositiveInteger = null;

for (let i = 1; i <= upperBound; i++) {
    if (i > lowerBound) {
        leastPositiveInteger = i;
        break;
    }
}

if (leastPositiveInteger === null) {
    console.log('No positive integers in the given range.');
} else {
    console.log('The least positive integer in the range is:', leastPositiveInteger);
}
