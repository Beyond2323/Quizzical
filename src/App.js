import React from "react"
import FirstView from "./FirstView"
import SecondView from "./SecondView"


const App = () => {

    const [showOff, updateShow] = React.useState(false)
    const [load, upLoad] = React.useState(false)
    const [newReq, up] = React.useState(false)
    const switchs = () => {
        updateShow(true)
    }

    const [newapi, updateApi] = React.useState()
   
    React.useEffect(async() => {
     const res = await fetch("https://opentdb.com/api.php?amount=5&difficulty=medium&type=multiple")
     const data = await res.json()
      updateApi(data)
      upLoad(true)
   }, [newReq])

    return (
      <div className="firstContainer">
        {showOff === false ? <FirstView load={load} handle={switchs}/> : <SecondView up={up}  apiInfo={newapi}/>}
      </div>
    )
}

export default App

