type AccordionPropsType = {
  title: string
  collapsed: boolean
}

export const Accordion = (props: AccordionPropsType) => {
  return (
    <div>
      <AccordionTitle title={props.title}/>
      {!props.collapsed && <AccordionBody/>}
    </div>
  )
}

export const Accordion2 = (props: AccordionPropsType) => {
  if (props.collapsed) {
    return (
      <div>
        <AccordionTitle title={props.title}/>
      </div>
    )
  }
  if (!props.collapsed) {
    return (
      <div>
        <AccordionTitle title={props.title}/>
        <AccordionBody/>
      </div>
    )
  }
}

type AccordionTitlePropsType = {
  title: string
}

const AccordionTitle = (props: AccordionTitlePropsType) => {
  return (
    <h3>{props.title}</h3>
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
