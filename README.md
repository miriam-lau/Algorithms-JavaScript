# README

## Algorithms

#### Elements of Programming Interviews
Introduction "Boot camp" problems and Scenario 1 Hackathon C0 problems from Chapters 5 through 13.
- Chapter 5 Arrays: 5.1 Dutch national flag, 5.6 Buy and sell stock once
- Chapter 6 Strings: 6.2 Base conversion, 6.4 Replace and remove
- Chapter 7 Linked Lists: 7.1 Merge two sorted singly linked lists.
- Chapter 8 Stacks and Queues: 8.1 Implement a stack with max API, 8.7 Compute binary tree nodes in order of increasing depth.
- Chapter 9 Binary Trees: 9.1 Test if a binary tree is height-balanced.
- Chapter 10 Heaps: 10.1 Merge sorted files.
- Chapter 11 Searching: 11.1 Search a sorted array for the first occurrence of k
- Chapter 12 Hash Tables: 12.2 Is an anonymous letter constructible?
- Chapter 13 Sorting: 13.1 Compute the intersection of two sorted arrays.

#### Leetcode
Problem from "Top Interview Questions", easy: Two Sum.

#### Searching
Implementations of common searching algorithms.
- Linear search
- Binary search

#### Sorting
Implementations of commons sorting algorithms.
- Bubble sort
- Merge sort
- Quick sort

## Unit Tests:
Follow the instructions below for each project folder requiring unit tests.

#### Setup Mocha, Chai, Sinon:
1. Navigate to project folder.
2. Run `npm install --global mocha`.
3. Make a `test` folder.
4. Create a `package.json` file with the following:
```
  {
    "scripts": {
      "test": "mocha"
    }
  }
```
5. Run `npm install chai`. After installation, the Chai library will have added dependencies to your `package.json` file.
6. Run `npm install sinon`. After installation, the Sinon library will have added dependencies to your `package.json` file.

### Running Tests:
1. Run `npm test` to run all tests.
2. To specify a test file, run `npm test test/file_name`, i.e. `npm test test/arrays_test.js`.
