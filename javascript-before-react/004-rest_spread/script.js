/*function showList(company, ...clients) {
   clients.forEach(client => {
      console.log(`${company}, ${client}`);
   });
}

showList('Origamid', 'Andre', 'Carlos');*/

const numbers = [1, 6, 38, 45, 21, 18];

//console.log(Math.max(...numbers));


const [...items] = document.querySelectorAll('a');

const arrayItems = items.map(item => {
   return item;
})