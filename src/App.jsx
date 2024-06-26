import Demo from "./Components/Demo";
import "./App.css";

const App = () => {
  const names = ["Anbu" , "Marshal" , "Shameem" , "Hari" , "Anand" , "Pradeep" ]
  return <>
    {names.map((name,ind) => <Demo name={name} key={ind} />)}
    </>;
  

};


export default App

