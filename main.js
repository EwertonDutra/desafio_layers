var combinate = require("combinate").default;
const axios = require('axios').default;
const fs = require('fs');

var all = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "X", "W", "Y", "Z", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const values = {
  1: ["W"],
  2: all,
  3: ["C"],
  4: ["C"],
  5: all,
  6: [9],
  7: ["X"],
  8: all
};

const combinations = combinate(values);

// console.log(combinations);

// const combs = combinations.slice(0, 3);

const slugs = combinations.map(c => {
  const slug = Object.values(c).join('').toLocaleLowerCase();

  return { slug }

  // axios.get('https://layers.education/w?cc?9x?')
  // axios.get('https://link.layers.education/' + slug)
  // .then(function (response) {
  //   // handle success
  //   const responseUrl = response['request']['res']['responseUrl'];
  //   if (responseUrl != 'https://rebrandly.com/404') {
  //     console.log(response['config']['url']);
  //     console.log(responseUrl);
  //     // console.log(response);
  //   }
  // })
  // .catch(function (error) {
  //   // handle error
  //   console.log(error);
  // });
})

console.log(slugs.length);

fs.writeFile("output.json", JSON.stringify(slugs), 'utf8', function (err) {
  if (err) {
    console.log("An error occured while writing JSON Object to File.");
    return console.log(err);
  }

  console.log("JSON file has been saved.");
});
