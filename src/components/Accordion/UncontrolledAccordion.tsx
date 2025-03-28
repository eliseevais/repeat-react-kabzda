import {useState} from "react";

type UncontrolledAccordionPropsType = {
  title: string
  // collapsed: boolean
}

export const UncontrolledAccordion = (props: UncontrolledAccordionPropsType) => {
  const [collapsed, setCollapsed] = useState(false);

  const onClickCollapsedHandler = () => {
    setCollapsed(!collapsed);
  }

  return (
    <div>
      {/*<AccordionTitle title={props.title} onClick={onClickCollapsedHandler}/>*/}

      <AccordionTitle title={props.title} onClickKK={() =>setCollapsed(!collapsed)}/>
      {collapsed && <AccordionBody/>}
    </div>
  )
}

type AccordionTitlePropsType = {
  title: string
  onClickKK: () => void
}

const AccordionTitle = ({title, onClickKK}: AccordionTitlePropsType) => {
  return (
    <h3 onClick={ () => {onClickKK()}}>{title}</h3>
  )
}

const AccordionBody = () => {
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  )
}
