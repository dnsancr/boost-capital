const inputs = [
  'hi ((how) are) you (today) [[[my dear friend]]]',
  'esto es (un texto muy random [si lo es]) [etc]',
  'hola (como estas) [bien] y tu',
  '((esta es la cadena inicial))',
  '(anidados (así)))',
];

const validInput = (input) => {
  const stack = [];
  const brackets = {
    '(': ')',
    '[': ']',
  };

  for (let i = 0; i < input.length; i++) {
    if (input[i] === '(' || input[i] === '[') {
      stack.push(input[i]);
    } else if (input[i] === ')' || input[i] === ']') {
      if (brackets[stack[stack.length - 1]] === input[i]) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return stack.length === 0;
};

const rule1 = (str) => {
  let count = 0;
  let start = 0;
  let output = '';

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') {
      if (count === 0) {
        start = i;
      }
      count++;
    } else if (str[i] === ')') {
      count--;
      if (count === 0) {
        output += `(${str
          .slice(start + 1, i)
          .split('')
          .reverse()
          .join('')})`;
      }
    } else if (count === 0) {
      output += str[i];
    }
  }
  return output;
};

const rule2 = (str) => {
  let count = 0;
  let start = 0;
  let output = '';

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '[') {
      if (count === 0) {
        start = i;
      }
      count++;
    } else if (str[i] === ']') {
      count--;
      if (count === 0) {
        output += `[${str
          .slice(start + 1, i)
          .split(' ')
          .map((word) => word.split('').reverse().join(''))
          .join(' ')}]`;
      }
    } else if (count === 0) {
      output += str[i];
    }
  }
  return output;
};

const rule3 = (str) => {
  return str
    .split(' ')
    .map((word, i) => ((i + 1) % 2 === 0 ? word.toUpperCase() : word))
    .join(' ');
};

inputs.forEach((input) => {
  console.log('Input:', input);
  if (validInput(input)) {
    let output = rule1(input);
    output = rule2(output);
    if (output.split(' ').length >= 3) {
      output = rule3(output);
    }
    console.log(`Output: ${output}\n`);
  } else {
    console.log('Output: Invalid input');
  }
});
