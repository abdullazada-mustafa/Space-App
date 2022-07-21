import React from "react";
import Spaceapp from "./components/spaceapp/Spaceapp";
import Typography from './components/typography/Typography'
import Likefollow from './components/likefollow/Likefollow'
import './App.css'

const App = ()=>{
    return(
        <div className="app">
            <Spaceapp/>
            <Typography/>
            <Likefollow/>
        </div>
    )
}

export default App