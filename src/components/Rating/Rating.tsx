export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

type RatingProps = {
  value: RatingValueType;
  onClick: (value: RatingValueType) => void;
}

export function Rating({value, onClick}: RatingProps) {
  return (
    <div>
      <Star selected={value > 0} onClick={onClick} value={1}/>
      <Star selected={value > 1} onClick={onClick} value={2}/>
      <Star selected={value > 2} onClick={onClick} value={3}/>
      <Star selected={value > 3} onClick={onClick} value={4}/>
      <Star selected={value > 4} onClick={onClick} value={5}/>
    </div>
  )
}

type StarPropsType = {
  selected: boolean
  onClick: (value: RatingValueType) => void;
  value: RatingValueType;
}

function Star({selected, onClick, value}: StarPropsType) {

  return (
    <span style={{cursor: "pointer"}} onClick={() => onClick(value)}>
      {selected ? <>&#127776;</> : <>&#11088;</>}
    </span>
  )
}
