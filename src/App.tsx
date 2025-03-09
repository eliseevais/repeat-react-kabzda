import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

function App() {
  return (
    <div className="App">
      <PageTitle title={"This is App title"}/>
      <PageTitle title={"My friends"}/>
      <div>Article 1</div>
      <Rating value={1}/>
      <Accordion title={"Title 1 for accordion"} collapsed={true}/>
      <Accordion title={"Title 2 for accordion"} collapsed={false}/>
      <div>Article 2</div>
      <Rating value={0}/>
      <Rating value={1}/>
      <Rating value={2}/>
      <Rating value={3}/>
      <Rating value={4}/>
      <Rating value={5}/>
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
