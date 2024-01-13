/*
Given a string s consisting of words and spaces, return the length of the last word in the string.
 
Example 1:
 
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
 
Example 2:
 
Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.*/

function lengthOfLastWord(stringValue){
    const noOfWords = stringValue.trim().split(" ");
    console.log(`The last word is "${noOfWords[noOfWords.length - 1]}" with length ${noOfWords[noOfWords.length - 1].length}.`);
}

lengthOfLastWord("Hello World");
lengthOfLastWord("   fly me   to   the moon  ");

/*Example 3: 

Write a function to check if two strings are anagrams.

 Input: isAnagram('listen', 'silent')
 Output: true
 Input: isAnagram('hello', 'world') 
 Output: false
 Explanation: An anagram is when you mix up the letters of a word to make a new one, using all the letters.
 
*/
function findIsAnagram(string1, string2)
{
    //remove any non-alphabets and convert to lower case
    const cleanString1 = string1.replace(/[^a-z]/g, '').toLowerCase();
    const cleanString2 = string2.replace(/[^a-z]/g, '').toLowerCase();

    //Split the string to characters, Sort the strings and join the characters back
    const sortString1 = cleanString1.split('').sort().join('');
    const sortString2 = cleanString2.split('').sort().join('');

    //Compare the sorted string 1 and string 2
    return sortString1 === sortString2;
}
console.log(findIsAnagram('listen', 'silent'));
console.log(findIsAnagram('hello', 'world'));

/*
If the given string and reverse string is same --> palindrome

Objective: If the given string is palindrome

hints:

1) use the above logic to reverse the string
2) if the reverse string === original string --> true else the false

*/
function findIsPalindrome(stringValue)
{
    //split the string to characters, reverse and join back
    const reverseString = stringValue.split('').reverse().join('');

    //Compare the reversed string and the string value
    return reverseString === stringValue;
}

console.log(findIsPalindrome('racecar'));
console.log(findIsPalindrome('Hello'));