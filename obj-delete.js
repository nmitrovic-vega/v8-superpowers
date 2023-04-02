const { performance } = require('perf_hooks');

performance.mark('start');

let iterations = 1_000_000;


class Friend {
    constructor(name, age, job) {
        this.age = age;
        this.job = job;
        this.name = name;
    }
}
while (iterations--) {
    const friend = new Friend('Chandler', 30, 'Transposter');
    delete friend.name;
    // friend.job = undefined;
}

performance.mark('end');
performance.measure('My Super Cool Benchmark', 'start', 'end');
const [ measure ] = performance.getEntriesByName('My Super Cool Benchmark');
console.log(measure);
