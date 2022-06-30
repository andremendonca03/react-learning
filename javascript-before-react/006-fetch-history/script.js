const link = document.querySelector('[data-fetch="link"]');
const main = document.querySelector('.content');
console.log(link.innerHTML);

async function fetchPage(url) {
   const pageResponse = await fetch(url);
   const pageText = await pageResponse.text();
   replaceContent(pageText);
}

const replaceContent = function(newContent) {
   const newDiv = document.createElement('div');
   newDiv.innerHTML = newContent;

   const newMain = newDiv.querySelector('.content');
   main.innerHTML = newMain.innerHTML;
}

const handleClick = function(event) {
   event.preventDefault();

   const url = event.currentTarget.href;
   fetchPage(url);
   history.pushState(null, null, url);
}

window.addEventListener('popstate', () => {
   fetchPage(location.href);
});

link.addEventListener('click', handleClick)