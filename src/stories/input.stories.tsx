import React, {ChangeEvent, useRef, useState} from 'react';

export default {
  title: "input",
  // component: Input,
}

export const UncontrolledInput = () => <input/>

export const TrackedValueInput = () => {
  const [value, setValue] = useState<string>('');
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement> ) => {
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

export const ControlledInputWithFixedValue = () => <input value={"IT-incubator.by"}/>
