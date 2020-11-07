console.log('scripts.js');
const { action } = require('./components/x');

window.addEventListener('load', () => {
    console.log('scripts.js: window.load');
    setTimeout(() => {
        action();
    }, 1);
});
