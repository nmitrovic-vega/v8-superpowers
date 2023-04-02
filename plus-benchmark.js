// User Timing API
const { performance } = require('perf_hooks');

const a = 1;
const b = 2;
const add = (x, y) => x + y;

// %NeverOptimizeFunction(add);
performance.mark('start');

for (let i = 0; i < 100_000_000; i++) {
    add(a, b);
}

add('foo', 'bar');

for (let i = 0; i < 40_000_000; i++) {
    add(a, b);
}

performance.mark('end');
performance.measure('My Super Cool Benchmark', 'start', 'end');
const [ measure ] = performance.getEntriesByName('My Super Cool Benchmark');
console.log(measure);
