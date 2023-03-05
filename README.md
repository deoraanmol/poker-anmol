# Pre-requisites
- Install [Node.js](https://nodejs.org/en/) ^v14.x (I've used 18.11.0).
- Run `npm install` to see the output of this project (assuming you have installed `npm` on your machine).

# Run the app
- To run the app, simply execute - `npm run poker-hands`. Please refer to `package.json` for details.
- Run `npm test` to unit-test this project. I've used `jest` for unit testing the app.

# Screenshots

Console results, when `poker-hands.txt` is the input file:

<img width="493" alt="Screenshot 2023-03-05 at 11 24 29 PM" src="https://user-images.githubusercontent.com/26059018/222960350-3d02bce5-fe7f-4ee9-943b-1a08c2050acd.png">

Unit test results:
<img width="1791" alt="Screenshot 2023-03-05 at 11 24 09 PM" src="https://user-images.githubusercontent.com/26059018/222960358-b4a4dca3-b416-4260-a371-3492468a2991.png">

# Code architecture

### This project is divided into the following files
    .
    ├── src/index.ts                # This is the entry point of the project
    ├── src/index.js                # An automated transpiled js file (ignore it)
    ├── utils/card-utils.js         # Contains the utilties to iterate through card values
    ├── test                        # This directory contains the unit tests
    ├── package.json                # Contains the metadata of this project
    ├── poker-hands.txt             # Sample test file with 500 combinations of poker hands
    ├── poker-hands-small.txt       # Sample test file with combos given in the question
    └── README.md

- The main parts of the code are located in `src` (`utils`, `constants` & `index`) directory. I've tried to divide the modules such that it is easier for these functions to get unit tested with multiple scenarios.

- The logic to deduce a winner for a specific line (hand) is in `index.ts` file itself. I'm simply going through the combinations, one-by-one (in descending order). If the rank of Player 1 is found to be > rank of Player 2, I'm simply incrementing the global state of Player 1 by incrementing their wins.

- One thing to note is that if a tie occurs between ranks of both players, I'm then comparing first the second highest rank cards (& so on). If the rank cards are finished and we still get a tie, I'm then comparing the non-rank cards to detect a winner.

# Areas of improvements

- Testing - I feel that I could have written a lot of unit tests, to specifically cover cases that can lead to an error. For example, I shouldn't declare a Royal Flush if the cards are of different suite etc. Although the logic is fine, having more tests would give me more confidence.

- Performance - After looking again at the code, I feel that I am sorting the cards at multiple places in my code. Also, I didn't think of time complexity whilst iterating through the arrays. Since the card size is limited to 10 for a specific line, I just went with basic logic implementation.
