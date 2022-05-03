const { Fn, Shell } = require('./lib');

module.exports = [
  new Fn('1', () => console.log('Fn OK')),
  new Shell('2', 'echo', ['Shell OK']),
  new Shell('3', 'ls'),
];