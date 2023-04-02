const { performance } = require('perf_hooks');

performance.mark('start');

const square = x => x * x;
const squareSum = (a, b) => square(a) + square(b);

for (let i = 0; i < 100_000_000; i++) {
    squareSum(i, i + 1);
}

performance.mark('end');
performance.measure('My Super Cool Benchmark', 'start', 'end');
const [ measure ] = performance.getEntriesByName('My Super Cool Benchmark');
console.log(measure);
