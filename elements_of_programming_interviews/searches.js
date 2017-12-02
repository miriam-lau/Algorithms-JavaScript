const Student = require("./student_class.js").Student;

/** 11.0 Searches Boot Camp
 * Input: an array of students, sorted by descending GPA, ties broken by name
 * Output: find a student
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 */
var findStudent = function(students, student) {
  let leftIndex = 0;
  let rightIndex = students.length - 1;

  while (leftIndex <= rightIndex) {
    let midIndex = Math.floor((rightIndex - leftIndex) / 2) + leftIndex;

    if (students[midIndex].gpa === student.gpa) {
      // Compare names, JS compares strings lexicongraphically.
      if (students[midIndex].name === student.name) {
        return true;
      } else if (students[midIndex].name < student.name) {
        leftIndex = midIndex + 1;
      } else {
        rightIndex = midIndex - 1;
      }
    } else if (students[midIndex].gpa > student.gpa) {
      leftIndex = midIndex + 1;
    } else {
      rightIndex = midIndex - 1;
    }
  }

  return false;
}

/** 11.1 Search a sorted array for the first occurrence of k
 * Input: take a sorted array and a key
 * Output: returns the index of the first occurrence of that key in the array
 * Example: [-14, -10, 2, 108, 108, 243, 285, 285, 285, 401], key is 108,
 * should return index 3.
 * If mid is the key, how to know it is the first occurrence?
 * Looping backwards from that index worst case is O(n/2 + log n times)- better
 * to to save the index, and then continue searching the lower half of the array.
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 */
var findFirstOccurrence = function(sortedArray, k) {
  let leftIndex = 0;
  let rightIndex = sortedArray.length - 1;
  let result = -1;

  while (leftIndex <= rightIndex) {
    let midIndex = Math.floor((rightIndex - leftIndex) / 2) + leftIndex;

    if (sortedArray[midIndex] === k) {
      // Found k, but not sure if it is the first occurrence, so save index and
      // continue to loop through elements less than midIndex - 1.
      result = midIndex;
      rightIndex = midIndex - 1;
    } else if (sortedArray[midIndex] > k) {
      rightIndex = midIndex - 1;
    } else {
      leftIndex = midIndex + 1;
    }
  }

  return result;
}


exports.findStudent = findStudent;
exports.findFirstOccurrence = findFirstOccurrence;
