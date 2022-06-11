// Get input element
let filterInput = document.getElementById('filterInput');
// Add event listener
filterInput.addEventListener('keyup', filterTitles);

function filterTitles(){
  // Get value of input
  let filterValue = document.getElementById('filterInput').value.toUpperCase();

  // Get names ul
  let ul = document.getElementById('articles');
  // Get lis from ul
  let li = ul.querySelectorAll('li.article-item');

  // Loop through collection-item lis
  for(let i = 0;i < li.length;i++){
    let h2 = li[i].getElementsByTagName('h2')[0];
    // If matched
    if(h2.innerHTML.toUpperCase().indexOf(filterValue) > -1){
      li[i].style.display = '';
    } else {
      li[i].style.display = 'none';
    }
  }

}