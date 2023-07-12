function countPrimenumbers() {
    let count = 0;

    for (let number = 2; number <= 100; number++) {
        let isPrime = true;
  
        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
            isPrime = false;
            break;
        }
    }
    
        if (isPrime) {
            count++;
        }
    }

    return count;
}
  
const startTime = performance.now();
const primeCount = countPrimenumbers();
const endTime = performance.now();
const executionTime = endTime - startTime;

console.log('Execution time of printing countPrimenumbers was ' + executionTime + ' milliseconds.');
