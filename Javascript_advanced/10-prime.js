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
  
function measureExecutionTime() {
    const startTime = performance.now();
  
    for (let i = 0; i < 100; i++) {
      countPrimeNumbers();
    }
  
    const endTime = performance.now();
    const executionTime = endTime - startTime;
  
    console.log('Execution time of calculating prime numbers 100 times was ' + executionTime + ' milliseconds.');
  }
  
  measureExecutionTime();
