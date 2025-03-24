type OnOffPropsType = {
  statusDimych: boolean
  onChange: (statusDimych: boolean) => void
}

export const DimychControlledOnOff = ({statusDimych, onChange}: OnOffPropsType) => {

  const onStyle = {
    width: '30px',
    height: '30px',
    border: '1px solid black',
    display: 'inline-block',
    padding: '2px',
    backgroundColor: statusDimych ? 'green' : 'white'
  }
  const offStyle = {
    width: '30px',
    height: '30px',
    border: '1px solid black',
    display: 'inline-block',
    marginLeft: '5px',
    padding: '2px',
    backgroundColor: statusDimych ? 'white' : 'red'
  }
  const indicatorStyle = {
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    border: '1px solid black',
    display: 'inline-block',
    marginLeft: '5px',
    backgroundColor: statusDimych ? 'green' : 'red'
  }

  return (
    <div>
      <div style={onStyle} onClick={() => {onChange(true)}}>on</div>
      <div style={offStyle} onClick={() => onChange(false)}>off</div>
      <div style={indicatorStyle}></div>
    </div>
  )
}
