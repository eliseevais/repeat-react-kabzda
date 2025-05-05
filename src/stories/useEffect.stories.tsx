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

export const SetTimeOutExample = () => {
  const [fake, setFake] = useState<number>(1)
  const [counter, setCounter] = useState<number>(1)
  let [value, setValue] = useState<number>(0)

  console.log("SetTimeOutExample");

  useEffect(() => {
    setTimeout(() => {
      console.log("setTimeOut function");
      setValue(counter)
    }, 1000);
  }, [counter]);

  return (
    <div>
      <div>Fake: {fake}</div>
      <div>Hello, {counter}</div>
      <div>Value: {value}</div>
      <button onClick={() => setFake(fake + 1)}>fake +</button>
      <button onClick={() => setCounter(counter + 1)}>counter +</button>
    </div>
  )
}

export const SetIntervalExample = () => {
  const [counter, setCounter] = useState<number>(1)

  console.log("SetIntervalExample");

  useEffect(() => {
    setInterval(() => {
      console.log("tick: " + counter);
      setCounter(prev => prev + 1)
    }, 1000);
  }, []);

  return (
    <div>
      <div>Hello, {counter}</div>
    </div>
  )
}

export const ClockExample = () => {
  const now = new Date();

  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const [sec, setSec] = useState(seconds);
  console.log("sec: ", sec)

  useEffect(() => {
    let intervalId = setInterval(() => {
      console.log("setInterval function");
      setSec(prev => prev + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    }
  }, []);

  return (
    <div>
      <div>{hours} : {minutes} : {sec}</div>
    </div>
  )
}

export const ResetEffectExample = () => {
  const [counter, setCounter] = useState<number>(1)
  console.log("Component rendered");

  useEffect(() => {
    console.log("Effect occurred: " + counter)
    return () => {
      console.log("Effect died: " + counter)
    }
  }, [counter]);

  const onIncrease = () => {
    setCounter(counter + 1)
  }

  return (
    <div>
      <div>
        Hello, counter: {counter}
      </div>
      <button onClick={onIncrease}>+</button>
    </div>
  )
}

export const KeysTrackerExample = () => {
  const [text, setText] = useState('')
  console.log("Component rendered: " + text);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      console.log("keypress: " + e.key);
      setText(prev => prev + e.key)
    }

    window.document.addEventListener("keypress", handler)
    return () => {
      window.document.removeEventListener("keypress", handler)
    }
  }, [text])

  return (
    <div>Hello, text: {text}</div>
  )
}
