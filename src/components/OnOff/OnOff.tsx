import {useState} from "react";

type OnOffPropsType = {
  // status: boolean
}

// export const OnOff = (props: OnOffPropsType) => {
//   return (
//     <div>
//       {props.status
//         ? (<>
//           <button className={s.green}>on</button>
//           <button >off</button>
//           <button className={`${s.circle} ${s.green}`}></button>
//         </>)
//         : (<>
//           <button >on</button>
//           <button className={s.red}>off</button>
//           <button className={`${s.circle} ${s.red}`}></button>
//         </>)
//       }
//     </div>
//   )
// }

export const OnOff = (props: OnOffPropsType) => {
  const [status, setStatus] = useState(false)

  // const status = false

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
