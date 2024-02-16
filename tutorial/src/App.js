import './App.css';
import User from './functionalComponent/User';
import UserClass from'./classComponent/UserClass.jsx';
import State from './functionalComponent/State.jsx';
import CounterApp from './functionalComponent/CounterApp.jsx';
import StateClass from './classComponent/StateClass.jsx';
import Props from './functionalComponent/Props.jsx';
import PropsClass from './classComponent/PropsClass.jsx';
import GetInputVal from './functionalComponent/GetInputVal.jsx';
import ShowHide from './functionalComponent/ShowHide.jsx';
import Form from './Components/Form.jsx';
import Cond_rendering from './Components/Cond_rendering.jsx';
import FunAsProps from './Components/FunAsProps.jsx';
import Constructor from './classComponent/Constructor.jsx';
import RenderLifeCycle from './classComponent/RendeLifeCycle.jsx';
import CompDidMeth from './classComponent/CompDidMeth.jsx';
import CompDidUpdate from './classComponent/CompDidUpdate.jsx';
import CompWillUnMount from './classComponent/CompWillUnMount.jsx';
import UseState from './Components/UseState.jsx';

function App() {

  function getData(){
    let name="Ajay";
    let age =24;
    alert(`The name and Age is:",${name},${age}`);
  }

  return (
    <div className="App">
     {/* <User/> */}
     {/* <UserClass/> */}
     {/* <State/> */}
     {/* <CounterApp/> */}
     {/* <StateClass/> */}

     {/* <Props name={"Ajay Varma"} email={"ajay@gmail.com"}/>
     <PropsClass course={"React js"} price={2000}/> */}

     {/* <GetInputVal/> */}

     {/* <ShowHide/> */}

     {/* <Form/> */}

     {/* <Cond_rendering/> */}

     {/* <FunAsProps data={getData}/> */}
     {/* <Constructor/> */}
     {/* <RenderLifeCycle/> */}

     {/* <CompDidMeth/> */}
     
     {/* <CompDidUpdate/> */}
     {/* <CompWillUnMount/> */}

     {/* Functional Component Start from here */}
     {/* 
     Hooks allow function components to have access to state and other React features. 
     Because of this, class components are generally no longer needed. 
     */}
      <UseState/>
      


    </div>
  );
}

export default App;
