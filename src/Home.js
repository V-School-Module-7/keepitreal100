import React from "react"
import {Route, Link, Switch, BrowserRouter, useLocation} from "react-router-dom"
import Addiction from "./components/Addiction"
import Affirmations from "./components/Affirmations"
import Navbar from "./components/NAvbar"



export default function Home(){
    const location = useLocation
    return(
        <div>
        <div>
            <Navbar />
        
            <div>
            <Link to ="/Addiction">
                <div>
                    <img src="https://i.imgur.com/oeGURXF.png"/><h2>Addiction</h2>
                    </div>
                    </Link>

                    <Link to ="/Affirmation">
                <div>
                    <img src="https://i.imgur.com/oeGURXF.png"/><h2>Affirmation</h2>
                    </div>
                    </Link>
                    </div>
                    <Link to ="/AllInTheFamily">
                        <div>
                        <img src="https://i.imgur.com/oeGURXF.png"/><h2>AllInTheFamily</h2>
                        </div>
                    </Link>
                    <Link to ="/FGI">
                        <div>
                        <img src="https://i.imgur.com/oeGURXF.png"/><h2>FUN GROUP INTERACTIONS </h2>
                        </div>
                    </Link>
                    <Link to ="/FTLJ">
                        <div>
                        <img src="https://i.imgur.com/oeGURXF.png"/><h2>FOR THE LOVE OF JUSTICE </h2>
                        </div>
                    </Link>
                    <Link to ="/LoveExplorations">
                        <div>
                        <img src="https://i.imgur.com/oeGURXF.png"/><h2>LOVE EXPLORATIONS</h2>
                        </div>
                    </Link>
                    <Link to ="/Muscial">
                        <div>
                        <img src="https://i.imgur.com/oeGURXF.png"/><h2>MUSICAL ENCOUNTERS</h2>
                        </div>
                    </Link>
                    <Link to ="/OMH">
                        <div>
                        <img src="https://i.imgur.com/oeGURXF.png"/><h2>OUR MENTAL HEALTH</h2>
                        </div>
                    </Link>
                    <Link to ="/RaceCulture">
                        <div>
                        <img src="https://i.imgur.com/oeGURXF.png"/><h2>RACE & CULTURE</h2>
                        </div>
                    </Link>
                    <Link to ="/RelationSpirit">
                        <div>
                        <img src="https://i.imgur.com/oeGURXF.png"/><h2>RELIGION & SPIRITUALITY</h2>
                        </div>
                    </Link>
                    <Link to ="/Realtionships">
                        <div>
                        <img src="https://i.imgur.com/oeGURXF.png"/><h2>RELATIONSHIPS (Self & Others)</h2>
                        </div>
                    </Link>
                    <Link to ="/SexualtiyGender">
                        <div>
                        <img src="https://i.imgur.com/oeGURXF.png"/><h2>SEXUALITY & GENDER ROLES</h2>
                        </div>
                    </Link>
                    <Link to ="/Soul">
                        <div>
                        <img src="https://i.imgur.com/oeGURXF.png"/><h2>SOUL EXPRESSIONS</h2>
                        </div>
                    </Link>
                    <Link to ="/WordsFromOurAncestors">
                        <div>
                        <img src="https://i.imgur.com/oeGURXF.png"/><h2>WORDS FROM OUR ANCESTORS </h2>
                        </div>
                    </Link>

        </div>
        <div>

        
        </div>
        </div>

    )
}