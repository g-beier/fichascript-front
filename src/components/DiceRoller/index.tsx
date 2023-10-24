import React from "react";

type DiceRoll = `${number}d${number}`;

function rollOneDice(num: number) {
  return Math.ceil(Math.random() * num);
}

function rollMultiDice(str: DiceRoll) {
  const [diceCount, diceSize] = str.split("d").map((str) => parseInt(str));
  let dices = [];
  for (let i = 1; i <= Math.abs(diceCount); i++) {
    dices.push(rollOneDice(diceSize) * Math.sign(diceCount));
  }
  let total = dices.reduce((acc, curr) => acc + curr);
  return { roll: str, dices, total };
}

function rollComplexDice(str: String) {
  const regex = new RegExp(/-?\d*d\d+/g);
  const roll = str
    .replace(RegExp(/\s/g), "")
    .replace("-", "+-")
    .split("+")
    .filter((str) => regex.test(str) || Number(parseInt(str)))
    .map((str) =>
      Number(parseInt(str)) ? [parseInt(str)] : rollMultiDice(str).dices,
    );
  return roll;
}

const DiceRoller: React.FunctionComponent<{ dice: String }> = ({ dice }) => (
  <button onClick={() => console.log(rollComplexDice(dice))}>
    {dice} Roller
  </button>
);

export default DiceRoller;
