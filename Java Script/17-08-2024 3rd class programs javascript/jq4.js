function getRateOfInterest(deposit) {
    let rate;

    switch (true) {
        case (deposit > 1500000):
            rate = 20;
            break;
        case (deposit > 1000000):
            rate = 15;
            break;
        case (deposit > 500000):
            rate = 12;
            break;
        default:
            return 'Invalid input';
    }

    return `Rate of interest for deposit of ${deposit} is ${rate}%`;
}

let depositAmount = 1200000; 
console.log(getRateOfInterest(depositAmount));
