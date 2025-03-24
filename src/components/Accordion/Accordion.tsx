type AccordionPropsType = {
  title: string
  collapsed: boolean
  setAccordionCollapsed: (collapsed: boolean) => void
}

export const Accordion = ({title,collapsed,setAccordionCollapsed}: AccordionPropsType) => {
  return (
    <div>
      <AccordionTitle title={title} collapsed={collapsed} setAccordionCollapsed={setAccordionCollapsed}/>
      {!collapsed && <AccordionBody/>}
    </div>
  )
}

type AccordionTitlePropsType = {
  title: string
  collapsed: boolean
  setAccordionCollapsed: (collapsed: boolean) => void
}

const AccordionTitle = ({title, collapsed, setAccordionCollapsed}: AccordionTitlePropsType) => {
  return (
    <h3 onClick={() => setAccordionCollapsed(!collapsed)}>{title}</h3>
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
