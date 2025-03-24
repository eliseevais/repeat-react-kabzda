import {useState} from "react";
import {RatingValueType} from "./Rating";

type RatingProps = {
  value?: RatingValueType;
}

export function UncontrolledRating(props: RatingProps) {
  const [value, setValue] = useState<number>(0);

  return (
    <div>
      <Star selected={value > 0} setValue={() => setValue(1)} />
      <Star selected={value > 1} setValue={() => setValue(2)} />
      <Star selected={value > 2} setValue={() => setValue(3)} />
      <Star selected={value > 3} setValue={() => setValue(4)} />
      <Star selected={value > 4} setValue={() => setValue(5)} />
    </div>
  )
}

type StarPropsType = {
  selected: boolean
  setValue: () => void
}

function Star({selected, setValue}: StarPropsType) {
  return (
    <span style={{ cursor: "pointer" }}
          onClick={() => {setValue()}}
    >
      {selected ? <>&#127776;</> : <>&#11088;</>}
    </span>
  )
}
