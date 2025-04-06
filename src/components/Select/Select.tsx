import React, {ChangeEvent, useState} from "react";
import s from "./Select.module.css"

export type Option = {
  value: string;
  title: string;
}

type SelectProps = {
  selected: string | null;
  options: Option[];
  onChange: (selected: Option['value']) => void;
}

export const Select = ({selected, options, onChange}: SelectProps) => {
  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange(e.currentTarget.value)
  }

  return (
    <select value={selected ?? ""} onChange={onChangeHandler}>
      <option disabled value="">
        -- Select an option --
      </option>
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.title}
        </option>
      ))}
    </select>
  )
}

type SelectDimychProps = {
  selected?: string | null;
  options: Option[];
  onChange: (selected: Option['value']) => void;
}

export const SelectDimych = (
  {options, selected, onChange}: SelectDimychProps) => {

  const [active, setActive] = useState<boolean>(false)

  const selectedItem = options.find(option => option.value === selected)

  const toggleItems = () => {
    setActive(!active)
  }

  return (
    <div className={`${s.select} ${active ? s.active : ""}`}>
      <span className={s.main} onClick={toggleItems}>
        {selectedItem && selectedItem.title}
      </span>
      {active &&
        <div className={s.options}>
          {options.map((el) => {
              return <div className={s.option}
                          key={el.value}
                          onClick={() => {
                            onChange(el.value)
                            setActive(false);
                          }}
              >
                {el.title}
              </div>
            }
          )}
        </div>
      }
    </div>
  )
}
