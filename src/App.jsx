import { useState, useEffect} from 'react'
import './App.css'
import Splitter from "./bill_splitter/BillSplitter"
import Slider from "./Slider/Slider"
import AtmForm from "./atm_form/AtmForm"
import {
  createBrowserRouter,
  RouterProvider,
  Link
} from "react-router-dom";
import UseEffectTutorial01 from "./use_effect_tutorial/01"
import ChangeBackground from "./use_effect_tutorial/Change_background"
import DisplayAdvice from "./use_effect_tutorial/display_advice"
import {Website} from "./Digital_Lifeclinic/Digital_Lifeclinic_website"
import {Card_hover} from "./use_effect_tutorial/card_hover"
import {REST_Countries} from "./REST-Countries/REST"
import {Step_By_Step_Form} from "./Step_By_Step_Form/Step_By_Step"
import {Calculator} from "./Calculator/Calculator"
import {TimeCounter} from "./TimeCounterApp/TimeCounter"
import {CandyCrush} from "./CandyCrush/CandyCrush"
import {UbaTribeApp} from "./UBA_Tribe_Career/UbaTribeApp"
import {ResultSummaryComponent} from "./Result_Summary_Component/Result_Summary_Component"

function ProjectList() {
  return (
  	<div>
    <div>
    <Link to="/bill-splitter">Bill splitter</Link>
    </div>
     <div>
      <Link to="/slider">Slider</Link>
      </div>
      <div>
      <Link to="/atm-form">Atm form</Link>
      </div>
       <div>
      <Link to="Result_Summary_Component">Result Summary Component</Link>
      </div>
      {/*<div>
      <Link to="/use_effect/01_assignment"> use effect tutorial 01_assignment</Link>
      </div>
      <div>
      <Link to= "/use_effect/display_advice"> Display Advice</Link>
      </div>
      <div>
      <Link to="/Digital_Lifeclinic_website">Digital Website</Link>
      </div>
      <div>
      <Link to="/card_hover">card hover</Link>
      </div>*/}
      <div>
      <Link to="/REST_Countries"> REST Countries</Link>
      </div>
      <div>
      <Link to="/Step_By_Step_Form">Step By Step Form</Link>
      </div>
      <div>
        <Link to="/Calculator">Calculator</Link>
      </div>
      <div>
        <Link to="/TimeCounter">TimeCounter App</Link>
      </div>
   {/*   <div>
        <Link to="/CandyCrush"> Candy Crush</Link>
      </div>
      <div>
        <Link to= "/UbaTribeApp"> Uba_Tribe App</Link>
      </div>*/}
     </div>
  )
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <ProjectList /> 
  },
  {
    path: '/bill-splitter',
    element:<Splitter />
  },
  {
    path: '/slider',
    element: <Slider />
  },
  {
  	path: '/atm-form',
  	element: <AtmForm />
  },
  {
  	path: 'Result_Summary_Component',
  	element: <ResultSummaryComponent/>
  },
  // {
  // 	path :'/use_effect/01_assignment',
  // 	element: <ChangeBackground />
  // },
  // {
  // 	path: '/use_effect/display_advice',
  // 	element: <DisplayAdvice />
  // },
  // {
  // 	path:'/Digital_Lifeclinic_website',
  // 	element: <Website />
  // },
  // {
  //   path: '/card_hover',
  //   element: <Card_hover/>
  // },
  {
    path:'/REST_Countries',
    element:<REST_Countries/>
  },
  {
    path: "/Step_By_Step_Form",
    element:<Step_By_Step_Form/>
  },
  {
    path:"/Calculator",
    element:<Calculator/>
  },
  {
    path: "/TimeCounter",
    element:<TimeCounter/>
  }
  // ,
  // {
  //   path: "/CandyCrush",
  //   element : <CandyCrush />
  // },
  // {
  //   path :"/UbaTribeApp",
  //   element : <UbaTribeApp />
  // }
]);

function App() {
  useEffect(() => {
    console.log('app initialized')
  }, [])
  return (  

    <div className="App">

      <RouterProvider router={router} />   


    </div>
  )
}

export default App
