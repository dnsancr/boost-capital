const input = 'hi ((how) are) you (today) [[[my dear friend]]]';

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

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') {
      if (count === 0) {
        start = i;
      }
      count++;
    }

    if (str[i] === ')') {
      count--;
      if (count === 0) {
        return {
          content: `(${str
            .slice(start + 1, i)
            .split('')
            .reverse()
            .join('')})`,
          end: i,
        };
      }
    }
  }
};

const rule2 = (str) => {
  let count = 0;
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '[') {
      if (count === 0) {
        start = i;
      }
      count++;
    }

    if (str[i] === ']') {
      count--;
      if (count === 0) {
        return {
          content: `[${str
            .slice(start + 1, i)
            .split(' ')
            .map((word) => word.split('').reverse().join(''))
            .join(' ')}]`,
          end: i,
        };
      }
    }
  }
};

const rule3 = (str) => {
  return str
    .split(' ')
    .map((word, i) => ((i + 1) % 2 === 0 ? word.toUpperCase() : word))
    .join(' ');
};

console.log(input);
console.log(validInput(input));
console.log(rule1(input));
console.log(rule2(input));
console.log(rule3(input));
console.log(input.length);
