const fs = require('fs');

const breedDetailsFromFile = function(breed, cb) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    // ISSUE: Returning from *inner* callback function, not breedDetailsFromFile.
    if (!error) cb(data);
    else
      return cb(undefined); 
  });
  // ISSUE: Attempting to return data out here will also not work.
  //        Currently not returning anything from here, so breedDetailsFromFile function returns undefined.
};

// const print = breed => {
//   console.log('return value: ', breed);
// }
// we try to get the return value
// const bombay = breedDetailsFromFile('Bombay', print);  
// console.log('Return Value: ', bombay); // => will NOT print out details, instead we will see undefined!

module.exports = breedDetailsFromFile;