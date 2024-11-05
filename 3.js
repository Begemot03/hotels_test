function isPrime(n) {
    for(let i = 2; i * i < n; i++) {
        if(n % i == 0) return false;
    }
    return true;
}


function primesInInterval(s, e) {
    let primes = [];

    for(let n = s; n <= e; n++) {
        if(isPrime(n)) primes.push(n);
    }

    return primes;
}

console.log(primesInInterval(11, 20))