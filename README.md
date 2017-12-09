# README

## Algorithms

#### Elements of Programming Interviews
Selected problems from Chapters 5 through 14.

#### Leetcode
Problems were from "Top Interview Questions" and divided in folders for easy, medium and hard.

#### Searching
Implementations of common searching algorithms.

#### Sorting
Implementations of commons sorting algorithms.

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
