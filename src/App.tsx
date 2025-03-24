import './App.css';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {useState} from "react";
import {UncontrolledRating} from "./components/Rating/UncontrolledRating";
import {Accordion} from "./components/Accordion/Accordion";
import {UnControlledOnOff} from "./components/OnOff/UnControlledOnOff";
import {AppControlledOnOff} from "./components/OnOff/AppControlledOnOff";
import {DimychControlledOnOff} from "./components/OnOff/DimychControlledOnOff";
import {UncontrolledAccordion} from "./components/Accordion/UncontrolledAccordion";

function App() {

  let [ratingValue, setRatingValue] = useState<RatingValueType>(2);
  let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true);
  let [status, setStatus] = useState<boolean>(true);
  let [statusDimych, setStatusDimych] = useState<boolean>(true);
  let [switchOn, setSwitchOn] = useState<boolean>(true);

  const onChangeHandler = () => {
    setAccordionCollapsed(!accordionCollapsed)
  }

  return (
    <div className="App">

      {/*<Accordion title={"Title 1 for accordion"}*/}
      {/*           collapsed={accordionCollapsed}*/}
      {/*           setAccordionCollapsed={setAccordionCollapsed}*/}
      {/*/>*/}

      <Accordion title={"Title 2 for accordion"}
                 collapsed={accordionCollapsed}
                 onChange={onChangeHandler}
      />

      <UncontrolledAccordion title={"Menu"}/>
      {/*<UncontrolledAccordion title={"Users"}/>*/}

      {/*<Rating value={0}/>*/}
      {/*<Rating value={1}/>*/}
      {/*<Rating value={2}/>*/}
      {/*<Rating value={3}/>*/}
      {/*<Rating value={4}/>*/}
      {/*<Rating value={5}/>*/}

      <div>
        <UncontrolledRating/>
        <Rating value={ratingValue} onClick={setRatingValue}/>
      </div>

      <div>
        <UnControlledOnOff onChange={setSwitchOn}/>{switchOn.toString()}
      </div>
      <div>
        <AppControlledOnOff status={status} setStatus={setStatus}/>
        <DimychControlledOnOff statusDimych={statusDimych} onChange={(statusDimych: boolean) => {
          setStatusDimych(statusDimych)
        }}/>
      </div>

    </div>
  );
}

type PageTitleProps = {
  title: string
}

function PageTitle(props: PageTitleProps) {
  return (
    <h1>{props.title}</h1>
  );
}


export default App;
