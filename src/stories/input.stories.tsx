import React, {ChangeEvent, useRef, useState} from 'react';

export default {
  title: "input",
  // component: Input,
}

export const UncontrolledInput = () => <input/>

export const TrackedValueInput = () => {
  const [value, setValue] = useState<string>('');
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
  }

  return (
    <div>
      <input value={value} onChange={onChangeHandler}/> - {value}
    </div>
  )
}

export const GetValueByButtonPress = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState<string>('');
  const onClickHandler = () => {
    const el = inputRef.current as HTMLInputElement;
    setValue(el.value);
  }

  return (
    <div>
      <input ref={inputRef}/>
      <button onClick={onClickHandler}>save</button>
      <div>actual value: {value}</div>
    </div>
  )
}

export const ControlledInput = () => {
  const [parentValue, setParentValue] = useState<string>('');
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setParentValue(e.currentTarget.value)
  }

  return <input value={parentValue} onChange={onChangeHandler}/>
}

export const ControlledInputWithFixedValue = () => <input value={"IT-incubator.by"}/>

export const ControlledCheckbox = () => {
  const [parentValue, setParentValue] = useState<boolean>(true);
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setParentValue(e.currentTarget.checked)
  }

  return <input type={"checkbox"} checked={parentValue} onChange={onChangeHandler}/>
}

export const ControlledSelect = () => {
  const [parentValue, setParentValue] = useState<string>("option1");
  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    setParentValue(e.currentTarget.value)
  }

  return (
    <select value={parentValue} onChange={onChangeHandler}>
      <option value={"option1"}>Moscow</option>
      <option value={"option2"}>Kiev</option>
      <option value={"option3"}>Minsk</option>
    </select>
  )
}
