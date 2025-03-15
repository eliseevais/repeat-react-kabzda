import s from "./OnOff.module.css"

type OnOffPropsType = {
  status: boolean
}

export const OnOff = (props: OnOffPropsType) => {
  return (
    <div>
      {props.status
        ? (<>
          <button className={s.green}>on</button>
          <button >off</button>
          <button className={`${s.circle} ${s.green}`}></button>
        </>)
        : (<>
          <button >on</button>
          <button className={s.red}>off</button>
          <button className={`${s.circle} ${s.red}`}></button>
        </>)
      }
    </div>
  )
}
