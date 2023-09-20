class slidingImg {
    constructor(image, num) {
       this.img = image;
       this.num = num;
    }
}

// Import the readline module for user input
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function shuffleArray(array) {
for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
}
return array;
}

function printList() {
  let x = 0;
  for (let i of lists) {
    process.stdout.write(i + ' ');
    x++;
    if (x % 3 === 0) {
      console.log('');
    }
  }
}

// Given list
let lists = [1, 2, 3,
    4, 5, 6,
    7, 8, 0];


function swapNumbers(selection) {
  // Find the index of the zero (0) in the list
  let zero_index = lists.indexOf(0);

  // Determine the indices of the numbers above, below, and next to the zero
  let above_index = zero_index - 3 >= 0 ? zero_index - 3 : null;
  let below_index = zero_index + 3 < lists.length ? zero_index + 3 : null;
  let left_index = zero_index % 3 !== 0 ? zero_index - 1 : null;
  let right_index = (zero_index + 1) % 3 !== 0 ? zero_index + 1 : null;

  // Check if the selected number is adjacent (not diagonal) to the zero
  let adjacent_indices = [above_index, below_index, left_index, right_index].filter(idx => idx !== null);
  let is_adjacent = adjacent_indices.some(idx => lists[idx] === selection);

  if (is_adjacent) {
    // Swap values if the selected number is in the valid indices (and not diagonal)
    let temp = lists.indexOf(selection);
    lists[zero_index] = selection;
    lists[temp] = 0;
  } else {
    console.log("Invalid selection. Please choose an adjacent number or enter -1 to exit.");
  }
}

function getUserInput() {
  rl.question("Enter a number to swap with 0 (or enter -1 to exit): ", (input) => {
    let selection = parseInt(input);

    if (selection === -1) {
      rl.close();
      console.log("Exiting the program.");
    } else {
      swapNumbers(selection);
      printList();
      getUserInput();
    }
    if (selection === -2) {
        shuffleArray(lists);
    }
  });
}

printList();
getUserInput();
