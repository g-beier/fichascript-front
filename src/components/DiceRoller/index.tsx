import React, { useState } from "react";
import { SparklesIcon } from "@heroicons/react/20/solid";

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
  let total = dices.reduce((acc, curr) => acc + curr, 0);
  return { roll: str, dices, total };
}

const DiceRoller: React.FunctionComponent<{ dice: DiceRoll }> = ({ dice }) => {
  const [roll, setRoll] = useState<number | undefined>();
  return (
    <>
      <Notification roll={roll} setRoll={setRoll} />
      <button
        onClick={() => {
          const result = rollMultiDice(dice);
          setRoll(result.total);
        }}
        className="group inline-flex flex-row items-center gap-1 rounded-md bg-indigo-600 py-0.5 pl-1 pr-2 align-middle font-semibold text-indigo-50"
      >
        <SparklesIcon className="h-5 w-5 text-indigo-300 transition-colors duration-500 group-hover:text-amber-400" />
        {dice}
      </button>
    </>
  );
};

const Notification: React.FunctionComponent<{
  roll?: number;
  setRoll: React.Dispatch<React.SetStateAction<number | undefined>>;
}> = ({ roll, setRoll }) => {
  return (
    roll && (
      <div className="fixed inset-x-0 top-0">
        <div
          className="mx-auto max-w-xs cursor-pointer select-none rounded-b-2xl bg-white px-4 py-1 text-center text-lg text-indigo-950"
          onDoubleClick={() => setRoll(undefined)}
          title="Clique duplo para fechar."
        >
          Sua rolagem foi: <strong className="text-indigo-800">{roll}</strong>.
        </div>
      </div>
    )
  );
};

export default DiceRoller;
