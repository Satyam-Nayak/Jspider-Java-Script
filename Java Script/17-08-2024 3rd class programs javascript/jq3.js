let sum = 0;

for (let i = 51; i >= -99; i--) {
    if (i % 2 !== 0) {
        sum += i;
    }
}

console.log('Sum of odd numbers from 51 to -99:', sum);
