import React from 'react';
import {Select, SelectDimych} from "./Select";
import {action} from "@storybook/addon-actions";


export default {
  title: "Select",
  component: Select,
}

export const BaseExample = () => {

  const [select, setSelect] = React.useState<string | null>("option1");
  const handleSelect = (value: string) => {
    action("Value changed")(value);
    setSelect(value);
  }

  return (
    <Select selected={select}
            onChange={handleSelect}
            options={[
              {value: "option1", title: "Moscow"},
              {value: "option2", title: "Kiev"},
              {value: "option3", title: "Minsk"},
              {value: "option4", title: "Praga"},
            ]}
    />
  )
}

export const DimychExampleWithValue = () => {

  const [select, setSelect] = React.useState<string | null>("option1");
  const handleSelect = (value: string) => {
    action("Value changed")(value);
    setSelect(value);
  }

  return (
    <SelectDimych selected={select}
                  onChange={handleSelect}
                  options={[
                    {value: "option1", title: "Moscow"},
                    {value: "option2", title: "Kiev"},
                    {value: "option3", title: "Minsk"},
                    {value: "option4", title: "Prague"},
                  ]}
    />
  )
}

export const DimychExampleWithoutValue = () => {

  const [select, setSelect] = React.useState<string | null>(null);
  const handleSelect = (value: string) => {
    action("Value changed")(value);
    setSelect(value);
  }

  return (
    <SelectDimych onChange={handleSelect}
                  selected={select}
                  options={[
                    {value: "option1", title: "Moscow"},
                    {value: "option2", title: "Kiev"},
                    {value: "option3", title: "Minsk"},
                    {value: "option4", title: "Prague"},
                  ]}
    />
  )
}
