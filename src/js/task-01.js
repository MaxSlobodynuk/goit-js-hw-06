const titleEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${titleEl.length}`);

titleEl.forEach( elem => {
    console.log(`Category: ${elem.firstElementChild.textContent}`)
    console.log(`Elements: ${elem.lastElementChild.querySelectorAll('li').length}`)
});