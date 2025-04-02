import React, {useState} from "react";
import {Accordion, ItemType} from "./Accordion";
import {action} from "@storybook/addon-actions";

export default {
  title: "Accordion",
  component: Accordion,
}

const users: ItemType[] = [
  {title: "Dimych", value: 1},
  {title: "Valera", value: 2},
  {title: "Artem", value: 3},
  {title: "Viktor", value: 4},
]

const callback = action("accordion mode change event fired")
const callbackOnClick = action("some item was clicked")

export const MenuCollapsed = () => {
  return (
    <Accordion title={"Menu"} collapsed={true}
               onChange={callback} items={[]}
               onClick={callbackOnClick}
    />
  )
}

export const UsersUncollapsedMode = () => {
  return (
    <Accordion title={"Users"} collapsed={false}
               onChange={callback} items={users}
               onClick={(id) => {alert(`users with ID ${id} have to be happy`)}}
    />
  )
}

export const ModeChanging = () => {
  const [value, setValue] = useState<boolean>(true)
  const onChangeHandler = () => {
    setValue(!value)
  }
  return (
    <Accordion title={"Users"} collapsed={value}
               onChange={onChangeHandler} items={users}
               onClick={callbackOnClick}
    />
  )
}
