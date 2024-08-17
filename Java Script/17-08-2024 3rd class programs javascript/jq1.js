//write a javaScript program to print the prime numbers from 0 to 99

function isPrime(num){
    if(num <= 1) return false;
    if(num<= 3) return true;
    if(num % 2 == 0 || num % 3 == 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}


for (let i = 0; i < 100; i++) {
    if (isPrime(i)) {
        console.log(i);
    }
}