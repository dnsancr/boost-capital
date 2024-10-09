import Prompt from 'prompt-sync';
import exercise1 from './rules.js';

const prompt = Prompt({ sigint: true });
const input = prompt('Enter a string: ');
console.log(`Output: ${exercise1(input)}`);
