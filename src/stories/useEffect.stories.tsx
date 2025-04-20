import {useEffect, useState} from "react";

export default {
  title: "useEffect demo"
}

export const SimpleExample = () => {
  const [fake, setFake] = useState<number>(1)
  const [counter, setCounter] = useState<number>(1)

  console.log("Simple example");

  useEffect(() => {
    console.log("useEffect every render");
  });

  useEffect(() => {
    console.log("useEffect only first render");
  }, []);

  useEffect(() => {
    console.log("useEffect first render and every counter change");
  }, [counter]);

  return (
    <div>
      <div>Fake: {fake}</div>
      <div>Hello, {counter}</div>
      <button onClick={() => setFake(fake + 1)}>fake +</button>
      <button onClick={() => setCounter(counter + 1)}>counter +</button>
    </div>
  )
}

SimpleExample.story = {
  name: "Simple Example",
};
