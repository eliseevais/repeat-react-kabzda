import {useMemo, useState} from "react";

export default {
  title: "useState demo",
}

function generateData() {
  console.log("generate data")
  return 1;
}

export const Example1 = () => {
  console.log("example 1");

  // let initialValue = useMemo(generateData, []);

  const [counter, setCounter] = useState(generateData);

  const changer = (state: number) => {
    return state = state + 1
  }

  return (
    <>
      <button onClick={() => setCounter(changer)}>+</button>
      <div>
        {counter}
      </div>
    </>
  )
}
