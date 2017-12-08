const Student = require("./student_class.js").Student;

/** 13.0 Sorting Boot Camp
 * Input: given a student class
 * Output: sort students by name, and gpa.
 * Questions: name is unique (assume yes).
 * Time Complexity: O(n*logn)
 * Space Complexity: O(n)
 */

// Implement using merge sort.
var sortByName = function(students) {
  if (students.length <= 1) {
    return students;
  }

  let middleIndex = Math.floor(students.length / 2);
  let left = sortByName(students.slice(0, middleIndex));
  let right = sortByName(students.slice(middleIndex));

  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex].name < right[rightIndex].name) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  while (leftIndex < left.length) {
    result.push(left[leftIndex]);
    leftIndex++;
  }

  while (rightIndex < right.length) {
    result.push(right[rightIndex]);
    rightIndex++;
  }

  return result;
}

// Sorts in ascending order.
var sortByGPA = function(students) {
  if (students.length <= 1) {
    return students;
  }

  let middleIndex = Math.floor(students.length / 2);
  let left = sortByGPA(students.slice(0, middleIndex));
  let right = sortByGPA(students.slice(middleIndex));

  let result =[];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    let studentA = left[leftIndex];
    let studentB = right[rightIndex];
    let comparatorValue = comparator(studentA.gpa, studentB.gpa);

    if (comparatorValue === 0) {
      if (comparator(studentA.name, studentB.name) === -1) {
        result.push(studentA);
        leftIndex++;
      } else {
        result.push(studentB);
        rightIndex++;
      }
    } else if (comparatorValue === -1) {
      result.push(studentA);
      leftIndex++;
    } else {
      result.push(studentB);
      rightIndex++;
    }
  }

  while (leftIndex < left.length) {
    result.push(left[leftIndex]);
    leftIndex++;
  }

  while (rightIndex < right.length) {
    result.push(right[rightIndex]);
    rightIndex++;
  }

  return result;
}

var comparator = function(a, b) {
  if (a === b) {
    return 0;
  } else if (a < b) {
    return -1;
  } else {
    return 1;
  }
}


/** 13.1 Compute the intersection of two sorted arrays
 * Input: two sorted arrays, input arrays may have duplicated entries
 * Output: returns a new array containing elements that are present in both of
 * the input arrays. Returned array should be free of duplicates.
 * Time Complexity: O(n), longer length of the the two arrays.
 * Space Complexity: O(m), shorter length of the two arrays.
 */
var getDuplicates = function(arrayA, arrayB) {
  let indexA = 0;
  let indexB = 0;
  let result = [];

  while (indexA < arrayA.length || indexB < arrayB.length) {
    while (indexA < arrayA.length && arrayA[indexA] < arrayB[indexB]) {
      indexA++;
    }

    while (indexB < arrayB.length && arrayB[indexB] < arrayA[indexA]) {
      indexB++;
    }

    if (arrayA[indexA] === arrayB[indexB] &&
        arrayA[indexA] !== result[result.length - 1]) {
      result.push(arrayA[indexA]);
    }

    indexA++;
    indexB++;
  }

  return result;
}


exports.sortByName = sortByName;
exports.sortByGPA = sortByGPA;
exports.getDuplicates = getDuplicates;
