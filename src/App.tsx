import './App.css';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {useState} from "react";
import {UncontrolledRating} from "./components/Rating/UncontrolledRating";
import {Accordion} from "./components/Accordion/Accordion";
import {SelfControlledOnOff} from "./components/OnOff/SelfControlledOnOff";
import {AppControlledOnOff} from "./components/OnOff/AppControlledOnOff";

function App() {

  let [ratingValue, setRatingValue] = useState<RatingValueType>(2);
  let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
  let [status, setStatus] = useState<boolean>(true);

  return (
    <div className="App">
      <Accordion title={"Title 1 for accordion"}
                 collapsed={accordionCollapsed}
                 setAccordionCollapsed={setAccordionCollapsed}
      />
      {/*<Accordion title={"Title 2 for accordion"} collapsed={false}/>*/}

      {/*<UncontrolledAccordion title={"Menu"}/>*/}
      {/*<UncontrolledAccordion title={"Users"}/>*/}

      {/*<Rating value={0}/>*/}
      {/*<Rating value={1}/>*/}
      {/*<Rating value={2}/>*/}
      {/*<Rating value={3}/>*/}
      {/*<Rating value={4}/>*/}
      {/*<Rating value={5}/>*/}

      <UncontrolledRating />

      {/*<SelfControlledOnOff />*/}
      <SelfControlledOnOff />
      <AppControlledOnOff status={status} setStatus={setStatus} />


      <Rating value={ratingValue} onClick={setRatingValue}/>

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
