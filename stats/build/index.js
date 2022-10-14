"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const matches = fs_1.default
    .readFileSync('football.csv', {
    encoding: 'utf-8',
})
    .split('\n')
    .map((row) => {
    return row.split(',');
});
const MatchResult = {
    HomeWin: 'H',
    AwayWin: 'A',
    Draw: 'D',
};
let manUniedWins = 0;
for (let match of matches) {
    if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
        manUniedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin)
        manUniedWins++;
}
console.log(`Man United won ${manUniedWins} games`);
