import {useState} from "react";

type OnOffPropsType = {
  // status: boolean
}

export const SelfControlledOnOff = (props: OnOffPropsType) => {
  const [status, setStatus] = useState(false)

  const onStyle = {
    width: '30px',
    height: '30px',
    border: '1px solid black',
    display: 'inline-block',
    padding: '2px',
    backgroundColor: status ? 'green' : 'white'
  }
  const offStyle = {
    width: '30px',
    height: '30px',
    border: '1px solid black',
    display: 'inline-block',
    marginLeft: '5px',
    padding: '2px',
    backgroundColor: status ? 'white' : 'red'
  }
  const indicatorStyle = {
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    border: '1px solid black',
    display: 'inline-block',
    marginLeft: '5px',
    backgroundColor: status ? 'green' : 'red'
  }

  const onClickHandler = () => {
    setStatus(!status)
  }

  return (
    <div>
      <div style={onStyle} onClick={onClickHandler}>on</div>
      <div style={offStyle} onClick={onClickHandler}>off</div>
      <div style={indicatorStyle} onClick={onClickHandler}></div>
    </div>
  )
}
