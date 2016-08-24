'use strict';

const paragraph =
  'When in the Course of human events, it becomes necessary for one ' +
  'people to dissolve the political bands which have connected them ' +
  'with another, and to assume among the powers of the earth, the ' +
  'separate and equal station to which the Laws of Nature and of ' +
  'Nature\'s God entitle them, a decent respect to the opinions of ' +
  'mankind requires that they should declare the causes which impel ' +
  'them to the separation.';

// The paragraph split into a list

//defining words as an array and split based on the regular expression
//for one or more blank spaces
let words = [];
words = paragraph.split(/\s+/);
console.log("Words is ", words);
// The word list normalized (all uppercase with punctuation removed)
let normalizedWords = [];
/*iterate over the words array and build normalizedWords array by
copying the words array and removing any Non-Word-Characters*/
for(let i = 0; i <words.length; i++){
  normalizedWords[i] = words[i].replace(/\W+/, '').toUpperCase();
}
//IF words[i] evaluates to 'earth,'
//then normalizedWords[i] would be assigned the value 'earth'
console.log("normalizedWords is now", normalizedWords);



// The words stored as keys of a dictionary
let uniqueWordsAsKeys = {};
// iterate through normalizedWords array and store each value as a key
// in the uniqueWordsAsKeys Object. NOTE! you cannot have duplicate keys in any
// object. so each time this code attempts to duplicate
//its actually just reassigning that key a new value
for(let i = 0; i < normalizedWords.length; i++){
  uniqueWordsAsKeys[normalizedWords[i]] = true;
}
console.log('uniqueWordsAsKeys is now ', uniqueWordsAsKeys);
// The keys pulled out into a list
let uniqueWords = [];

// The words as keys and the values the count of each word
uniqueWords = Object.keys(uniqueWordsAsKeys);

console.log("uniqueWordsAsKeys is now", uniqueWords);

let wordFrequencies = {};

for (let key in uniqueWordsAsKeys) {
 let count = 0;
 for (let i = 0; i < normalizedWords.length; i++) {
   if (normalizedWords[i] === key) {
     count++;
     wordFrequencies[key] = count;
   }
 }
}

console.log(wordFrequencies);

module.exports = {
  normalizedWords,
  uniqueWords,
  wordFrequencies,
};
