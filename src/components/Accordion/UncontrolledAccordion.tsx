import {useReducer} from "react";
import {reducer, TOGGLE_COLLAPSED} from "./Reducer";

type UncontrolledAccordionPropsType = {
  title: string
};

export const UncontrolledAccordion = (props: UncontrolledAccordionPropsType) => {
  const [state, dispatch] = useReducer(reducer, {collapsed: false});

  return (
    <div>
      <AccordionTitle title={props.title} onClickKK={() => dispatch({type: TOGGLE_COLLAPSED})}/>
      {!state.collapsed && <AccordionBody/>}
    </div>
  )
}

type AccordionTitlePropsType = {
  title: string
  onClickKK: () => void
}

const AccordionTitle = ({title, onClickKK}: AccordionTitlePropsType) => {
  return (
    <h3 onClick={() => {
      onClickKK()
    }}>{title}</h3>
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
