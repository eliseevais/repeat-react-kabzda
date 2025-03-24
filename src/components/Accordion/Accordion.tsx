type AccordionPropsType = {
  title: string
  collapsed: boolean
  onChange: () => void
}

export const Accordion = ({title, collapsed, onChange}: AccordionPropsType) => {
  return (
    <div>
      <AccordionTitle title={title}
                      onChange={onChange}
      />
      {!collapsed && <AccordionBody/>}
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

const AccordionBody = () => {
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  )
}
