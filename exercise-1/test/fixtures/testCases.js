export const testCases = [
  'hi ((how) are) you (today) [[[my dear friend]]]',
  'esto es (un texto muy random [si lo es]) [etc]',
  'hola [como estas (este es un) texto [anidado]] (prueba)',
  'hola (como estas) [bien] y tu',
  '((esta es la cadena inicial))',
  '(short word)',
  '(anidados (así)))',
];

export const expectedResults = [
  'hi (ERA )woh() YOU (yadot) [YM[[ raed ]]DNEIRF]',
  'esto ES (]se OL is[ MODNAR yum OTXET nu) [CTE]',
  'hola [OMOC satse UN( es )ESTE otxet ]ODADINA[] (abeurp)',
  'hola (SATSE omoc) [NEIB] y TU',
  '()laicini ANEDAC al SE atse()',
  '(drow trohs)',
  'Invalid input',
];