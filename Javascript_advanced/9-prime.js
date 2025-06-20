function countPrimeNumbers() {
    let count = 0;

    function isPrime(num) {
        if (num <= 1) return false;
        if (num <= 3) return true;

        // Check if number is divisible by 2 or 3
        if (num % 2 === 0 || num % 3 === 0) return false;

        // Check all numbers of form 6k ± 1 up to sqrt(num)
        for (let i = 5; i * i <= num; i += 6) {
            if (num % i === 0 || num % (i + 2) === 0) return false;
        }
        return true;
    }

    // Count primes from 2 to 100
    for (let i = 2; i <= 100; i++) {
        if (isPrime(i)) count++;
    }

    return count;
}

const startTime = performance.now();
countPrimeNumbers();
const endTime = performance.now();

console.log(`Execution time of printing countPrimeNumbers was ${endTime - startTime} milliseconds.`);