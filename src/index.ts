import { PLAYERS } from "./constants";
import { getHandRank, getWinner } from "./utils/player-utils";

let handsWonByPlayerOne = 0;
let handsWonByPlayerTwo = 0;

// get the winner & mutate the state variable for a line (hands of 2 players)
const processInput = (line: string) => {
    const inputHands = line.split(" ");
    if (inputHands.length !== 10) {
        throw new Error("Invalid length - an example of correct input is - `AH 9S 4D TD 8S 4H JS 3C TC 8D`")
    }

    const playerOneHand = inputHands.slice(0, 5);
    const playerTwoHand = inputHands.slice(5, 10);
    const playerOneResult = getHandRank(playerOneHand);
    const playerTwoResult = getHandRank(playerTwoHand);
    const winner = getWinner({playerOneResult, playerTwoResult});
    if (winner) {
        if (winner === PLAYERS.PLAYER_ONE) {
            handsWonByPlayerOne++;
        } else {
            handsWonByPlayerTwo++;
        }
    }
}

// setting up line reader
const lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('poker-hands.txt')
  });

lineReader.on('line', function (line: string) {
    // start processing when the hands are ready to read
    processInput(line);
});

// simply printing out the results as per requirement
lineReader.on('close', function (line: string) {
    console.log("-------------RESULT----------------");
    console.log("Player 1: "+handsWonByPlayerOne);
    console.log("Player 2: "+handsWonByPlayerTwo);
    console.log("-----------------------------------");
});