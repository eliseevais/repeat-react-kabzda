import {useState} from "react";

type OnOffPropsType = {
  onChange: (switchOn: boolean) => void;
}

export const UnControlledOnOff = ({onChange}: OnOffPropsType) => {
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

  const onClickedHandler = () => {
    setStatus(true)
    onChange(true)
  }

  const offClickedHandler = () => {
    setStatus(false)
    onChange(false)
  }

  return (
    <div>
      <div style={onStyle} onClick={onClickedHandler}>on</div>
      <div style={offStyle} onClick={offClickedHandler}>off</div>
      <div style={indicatorStyle} onClick={onClickHandler}></div>
    </div>
  )
}
