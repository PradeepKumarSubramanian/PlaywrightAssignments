/*
1) Move Zeroes:
 
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
 
Example 1:
 
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:
 
Input: nums = [0]
Output: [0]*/
function moveZeroes(nums)
{
    let nonZeroIndex = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[nonZeroIndex] = nums[i];
            nonZeroIndex++;
        }
    }
  
    for (let i = nonZeroIndex; i < nums.length; i++) {
        nums[i] = 0;
    } 
  return nums;
}

console.log(moveZeroes([0,1,0,3,12]));
console.log(moveZeroes([0]));
/*2) Array intersection
 
Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.
 
Example 1:
 
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
 
Example 2:
 
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted.*/

function findIntersectionBtwArrays(num1,num2)
{
    const set1 = new Set(num1);
    const set2 = new Set(num2);
    const output = [];
    for(const num of set1)
    {
        if(set2.has(num))
        {
            output.push(num);
        }
    }
    return output;
}

console.log(findIntersectionBtwArrays([1, 2, 2, 1], [2,2]));
console.log(findIntersectionBtwArrays([4,9,5], [9,4,9,8,4]));
/*3) Find the maximum and minimum:

Given an integer array, find the maximum amd minimum elements in an array and return their indices.

Example: 
Input: nums = [34, 7, 21, 89, 54, 10, 91, 67]
Output: Maximum Element: 91, Index: 6
Minimum Element: 7, Index: 1*/

function displayMinAndMax(nums) {
    let max = nums[0];
    let min = nums[0];
    let maxIndex = 0;
    let minIndex = 0;
  
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] > max) {
        max = nums[i];
        maxIndex = i;
      }
  
      if (nums[i] < min) {
        min = nums[i];
        minIndex = i;
      }
    }
    console.log(`Maximum Element: ${max}, Index: ${maxIndex}`);
    console.log(`Minimum Element: ${min}, Index: ${minIndex}`);
    
  }
  
  displayMinAndMax([34, 7, 21, 89, 54, 10, 91, 67]);
  

/*4) Remove Duplicates:

Given an integer array with duplicate elements as input, return a new array with duplicates 
elements removed. The order of the elements in the resulting array should be same as the order
in the original array.

Example: 
Input: iputArray = [1, 2, 3, 4, 2, 5, 6, 1, 6]
Output: resultArray = [1, 2, 3, 4, 5, 6]

*/
function removeDuplicates(inputArray) 
{
    console.log(Array.from(new Set(inputArray)));
}

removeDuplicates([1, 2, 3, 4, 2, 5, 6, 1, 6]);
/*

1) Find the number of occurances.  

const nums = [2,4,5,2,1,2];
const k = 2
// output >> 3

hint: loop through the array and compare the k with array index value and if matches, increase the count
*/
function noOfOccurances(nums)
{
const k = 2;
let count = 0;

for (let i = 0; i < nums.length; i++) {
  if (nums[i] === k) {
    count++;
  }
}
console.log(count);
}

noOfOccurances([2, 4, 5, 2, 1, 2]);
/*2) Two Sum 

const nums = [2,4,7,8,11,14]; // sort array !!
const target = 18;

return the indices that has matching target? 7+11 (2,4), 4+14 (1,5)

*/


function matchingTargets(nums, target) 
{
    for (let i = 0; i < nums.length; i++) 
    {
        for (let j = i + 1; j < nums.length; j++) 
        {
          if (nums[i] + nums[j] === target) 
          {
            console.log(`(${i},${j})`);
          }
        }
    }
}
matchingTargets([2,4,7,8,11,14], 18);