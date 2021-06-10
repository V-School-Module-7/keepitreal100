import React from "react"
import {Route, Link, Switch, BrowserRouter} from "react-router-dom"
import Addiction from "./components/Addiction"
import Affirmations from "./components/Affirmations"
import Home from "./Home"




export default function App(){
    return(
        <div>
       <Switch>
           <ul>
           <Route exact path ="/" component={Home}/>
           <Route path="/Addiction" component={Addiction}/> 
                 <Route path="/Affirmation" component={Affirmations}/>
                 <Route path="/AllInTheFamily" />
                 <Route path="/FGI" />
                 <Route path="/FTLJ" />
                 <Route path="/LoveExplorations" />
                 <Route path="/Muscial" />
                 <Route path="/OMH" />
                 <Route path="/RaceCulture" />
                 <Route path="/RelationSpirit" />
                 <Route path="/Realtionships" />
                <Route path="/SexualtiyGender" />
                <Route  path="/Soul" />
                <Route path="/WordsFromOurAncestors" />

           </ul>

       </Switch>
        
        
        
        </div>
    )
}