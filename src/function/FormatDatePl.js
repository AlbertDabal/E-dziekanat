export function formatDataTest(data) {
  const dob = new Date(data);

  const monthNames = ['STY', 'LUT', 'MAR', 'KWI', 'MAJ', 'CZE', 'LIP', 'SIE', 'WRZ', 'PAŹ', 'LIS', 'GRU'];

  const day = dob.getDate();
  const monthIndex = dob.getMonth();
  const year = dob.getFullYear();
  console.log([year, monthNames[monthIndex], day]);
  return [year, monthNames[monthIndex], day];
}
