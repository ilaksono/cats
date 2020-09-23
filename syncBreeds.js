// const fs = require('fs');
// let arr = [];
// const breedDetailsFromFile = function(breed, cb) {
//   console.log('breedDetailsFromFile: Calling readFile...');
//   fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
//     console.log(`In readFile's Callback: it has the data.`);
//     if (!error) 
//       cb(data);
//   });

// };

// const printCat = data => {
//   arr[0] = data;
//   console.log('Printing: ', arr[0]);
//   return data;
// }

// const bombay = breedDetailsFromFile('Balinese', printCat);
// console.log('Return Value: ', bombay);

// // module.exports = 

// setTimeout(() => console.log(bombay), 4000);



// const fs = require('fs');

// const breedDetailsFromFile = function(breed, functionToRunWhenThingsAreDone) {
//   // console.log('breedDetailsFromFile: Calling readFile...');
//   fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
//     // CHANGE: Pass data into callback instead of returning it directly
//     // console.log("In readFile's Callback: it has the data.");
//     if (!error) functionToRunWhenThingsAreDone(data);
//   });
// };

// // CHANGE 1: Moved the console.log into a new function:
// // const printOutCatBreed = breed => {
// //   console.log('Return Value: ', breed) // => print out details correctly.
// // };

// // // CHANGE 2: we're now passing two arguments into breedDetailsFromFile: breed string and a callback function
// // const test = breedDetailsFromFile('Bombay', printOutCatBreed);

// // setTimeout(() => console.log(test), 5000);


// module.exports = breedDetailsFromFile;


const catBreeds = {
  'Balinese': "Balinese are curious, outgoing, intelligent cats with excellent communication skills. They are known for their chatty personalities and are always eager to tell you their views on life, love, and what you’ve served them for dinner.",
  'Bombay': "The golden eyes and the shiny black coat of the Bombay is absolutely striking. Likely to bond most with one family member, the Bombay will follow you from room to room and will almost always have something to say about what you are doing, loving attention and to be carried around, often on his caregiver's shoulder."
};

// synchronous function to fetch a cat breed
const breedDetails = function(breed) {
  // can simply return it (easy peezee, butter squeezy) ...
  return catBreeds[breed];
};

// get the return value right away from the function
const bombay = breedDetails('Bombay');
console.log(bombay); //=> prints out the description for that breed

module.exports = breedDetails;