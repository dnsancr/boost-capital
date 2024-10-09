import fetch from 'node-fetch';
import Prompt from 'prompt-sync';
import { cardColors, cardTypes } from './validValues.js';

const getLatestCards = async ({ color, type }) => {
  const url = 'https://api.scryfall.com/cards/search';
  const data = await fetch(`${url}?q=c:${color}+t:${type}&order=released`).then(
    (res) => res.json(),
  );
  return data.data.slice(0, 3);
};

const getCardParams = () => {
  const prompt = Prompt({ sigint: true });
  let color = prompt(`Enter a color [${Object.keys(cardColors)}]: `);
  let type = prompt(`Enter a type [${cardTypes}]: `).toLowerCase();

  while (!(cardColors[color] && cardTypes.includes(type))) {
    console.log('\nInvalid input');
    color = prompt(`Enter a color [${Object.keys(cardColors)}]: `);
    type = prompt(`Enter a type [${cardTypes}]: `).toLowerCase();
  }

  return { color: cardColors[color], type };
};

(async () => {
  const cardParams = getCardParams();
  const cards = await getLatestCards(cardParams);
  console.log(cards);
})();
