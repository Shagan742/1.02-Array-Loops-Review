// Demo data array we will use in all examples
const foods = ['Pizza', 'Tacos', 'Ice Cream', 'Burgers', 'Pasta']

// helper function: will display whatever HTML/text we pass into the #out div
function render(html) {
  document.getElementById('out').innerHTML = html
}

/* 
  1) listFoods()
     - Use a for...of loop
     - Output all foods into the #out div (as <p> tags or list items)
*/
function listFoods() {
  // code goes here
  let output = '';
  for (const food of foods) {
    output += `<p>${food}</p>`;
  }

  render(output);
}

/* 
  2) numberedFoods()
     - Use a classic for loop with index
     - Output foods as an ordered list (<ol><li>...</li></ol>)
*/
function numberedFoods() {
  // code goes here
  let output = '<ol class="list-group list-group-numbered">';
  for (let i=0; i<foods.length; i++) {
    output += `<li class="list-group-item">${foods[i]}</li>`;
  }
output+='</ol>';

  render(output);
}

/* 
  3) filterFoods()
     - Prompt the user for a letter
     - Loop through foods
     - Only show foods that start with that letter
     - If no matches, display a "not found" message
*/
function filterFoods() {
  // code goes here
  const letter=prompt('Pick a letter to filter your food list by')

  if(!letter) {
    render('<p>Please enter a letter.</p>');

    return;
  }

  const lower=letter.toLowerCase();
  const matches=foods.filter(f => f.toLowerCase().startsWith(lower));
if(matches.length===0) {
  render(`<p class="m-0"> No foods starting with ${letter}</p>`)
return;
}
  const list=matches.map(item=>`<li class="list-group-item">${item}</li>`).join(" ")


  render(list);
}

/* 
  4) forEachFoods()
     - Use foods.forEach()
     - Output each food as a Bootstrap card
     - Cards should be placed in a centered row
*/
function forEachFoods() {
  // code goes here

}

// ---- Event listeners (buttons) ----
document.getElementById('btnList').addEventListener('click', listFoods)
document.getElementById('btnNums').addEventListener('click', numberedFoods)
document.getElementById('btnFilter').addEventListener('click', filterFoods)
document.getElementById('btnForEach').addEventListener('click', forEachFoods)

//  ---------------STUDENT WORK SECTION--------------

/* 
  Task 1 — Uppercase List
  -----------------------
  - Use .map() to create a new array with all foods in uppercase
  - Display the results as an unordered list (<ul>)
*/
function uppercaseList() {
  // TODO: Write your code here
  const ul='<ul>'
  const upperCased=foods.map(item =>`<li class="list-group-item">${item.toUpperCase()}</li>`).join(" ");
  const endUl='</ul>'
  render(ul+upperCased+endUl);
}

/* 
  Task 2 — Reverse List
  ---------------------
  - Show the foods array in reverse order
  - You may use a backwards loop OR the built-in .reverse()
*/
function reverseList() {
  // TODO: Write your code here
  const reverse=foods.reverse()
let output = '<ol class="list-group list-group-numbered">';
  for (const reverseFood of reverse) {
    output += `<li class="list-group-item">${reverseFood}</li>`;
  }
output+='</ol>'
  render(output);

}

/* 
  Task 3 — Random Food Picker
  ---------------------------
  - Use Math.random to pick a random food from the array
  - Display it in a Bootstrap card with a heading like "Today's Pick"
*/
function randomFoodPicker() {
  // TODO: Write your code here
  let i=Math.floor(Math.random()*foods.length);
  render(`<p>Today's Pick: ${foods[i]}</p>`);
}

/* 
  Task 4 — Word Lengths
  ---------------------
  - Loop through each food in the array
  - Count the number of characters in each one
  - Display results in the format: Food — X letters
*/
function wordLengths() {
  // TODO: Write your code here
  let output=''
for (const food of foods) {
    output+=`<li class="list-group-item">${food} -- ${food.length} letters</li>`;
  }
  render(output)

}

// ---- Event listeners for the new buttons ----
// (Make sure to add matching buttons in index.html)
document.getElementById('btnUppercase').addEventListener('click', uppercaseList)
document.getElementById('btnReverse').addEventListener('click', reverseList)
document.getElementById('btnRandom').addEventListener('click', randomFoodPicker)
document.getElementById('btnLengths').addEventListener('click', wordLengths)
