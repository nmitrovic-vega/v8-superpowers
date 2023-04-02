// User timing API
const { performance } = require('perf_hooks');

const iterations = 50_000_000;
const friends = [
    { name: 'Monica', job: 'chef' },
    { name: 'Chandler', job: 'transposter', joke: 'Knock-knock joke' },
    { name: 'Ross', job: 'professor', unagi: 'Unagi', alias: 'Rossatron' },
    { name: 'Joey', job: 'actor', alias: 'Ken Adams' },
    { name: 'Phoebe', job: 'masseuse', song: 'Smelly cat', alias: 'Regina Phalange' },
    { name: 'Rachel', job: 'fashion' },
];

performance.mark('start');

for (let i = 0; i < iterations; i++) {
    let sum = 0;
    const friend = friends[iterations % 6];
    sum = sum + friend.job;
}

performance.mark('end');
performance.measure('My Super Cool Benchmark', 'start', 'end');
const [ measure ] = performance.getEntriesByName('My Super Cool Benchmark');
console.log(measure);
