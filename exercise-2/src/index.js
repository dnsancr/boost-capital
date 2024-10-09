import fetch from 'node-fetch';

const getLatestCards = async ({ color, type }) => {
  const url = 'https://api.scryfall.com/cards/search';
  const data = await fetch(`${url}?q=c:${color}+t:${type}&order=released`).then(
    (res) => res.json(),
  );
  return data.data.slice(0, 3);
};

(async () => {
  const cards = await getLatestCards({ color: 'r', type: 'creature' });
  console.log(cards);
})();
