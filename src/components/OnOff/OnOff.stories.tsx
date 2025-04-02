import React, {useState} from "react";
import {DimychControlledOnOff} from "./DimychControlledOnOff";
import {action} from "@storybook/addon-actions";

export default {
  title: "OnOff",
  component: DimychControlledOnOff,
  args: {
    onClick: action('Клик по кнопке'),
  },
}

const callBack = action("on of off clicked")

export const OnMode = () => {
  return (
    <DimychControlledOnOff statusDimych={true} onChange={callBack}/>
  )
}

export const OffMode = () => {
  return (
    <DimychControlledOnOff statusDimych={false} onChange={callBack}/>
  )
}

export const ModeChanging = () => {
  const [value, setValue] = useState(false)
  return (
    <DimychControlledOnOff statusDimych={value} onChange={setValue}/>
  )
}
