import { useState } from "react";

export const OriginCard = ({ origin }) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setOpen(!isOpen)}>{origin.title}</button>
      {isOpen && <p>{origin.desc}</p>}
      <ul>
        {origin.feats.map((feat) => {
          return <li key={feat}>{feat}</li>;
        })}
      </ul>
    </div>
  );
};
