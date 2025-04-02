import React from "react";

export type ItemType = {
  title: string,
  value: any
}

type AccordionPropsType = {
  title: string
  collapsed: boolean
  onChange: () => void
  items: ItemType[]
  onClick: (value: any) => void
}

export const Accordion = ({title, collapsed, onChange, items, onClick}: AccordionPropsType) => {
  return (
    <div>
      <AccordionTitle title={title} onChange={onChange}/>
      {!collapsed && <AccordionBody items={items} onClick={onClick}/>}
    </div>
  )
}

type AccordionTitlePropsType = {
  title: string
  onChange: () => void
}

const AccordionTitle = (
  {title, onChange}: AccordionTitlePropsType) => {
  return (
    <h3 onClick={onChange}>{title}</h3>
  )
}

type AccordionBodyPropsType = {
  items: ItemType[]
  onClick: (value: any) => void
}

const AccordionBody = ({items, onClick}: AccordionBodyPropsType) => {

  return (
    <ul>
      {items.map((item, index) => {
        return (
          <li key={index} onClick={() => onClick(item.value)}>
            {item.title}
          </li>
        )
      })}
    </ul>
  )
}
