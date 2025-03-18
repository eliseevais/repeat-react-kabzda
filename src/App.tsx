import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/Accordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/Rating/UncontrolledRating";

function App() {
  return (
    <div className="App">
      {/*<Accordion title={"Title 1 for accordion"} collapsed={true}/>*/}
      {/*<Accordion title={"Title 2 for accordion"} collapsed={false}/>*/}

      <UncontrolledAccordion title={"Menu"}/>
      {/*<UncontrolledAccordion title={"Users"}/>*/}

      {/*<Rating value={0}/>*/}
      {/*<Rating value={1}/>*/}
      {/*<Rating value={2}/>*/}
      {/*<Rating value={3}/>*/}
      {/*<Rating value={4}/>*/}
      {/*<Rating value={5}/>*/}

      <UncontrolledRating />

      {/*<OnOff />*/}
      {/*<OnOff />*/}
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
