import React from "react";
import Button from "./Button"
import {decode} from "html-entities"

const SecondView = (props) => {

    
     const [disable, setDis] = React.useState(false)
     const [count, setUpdate] = React.useState(5)

     const finalResult = () => {
       setDis(pres => !pres)
       props.up(pres => !pres)
    }
    const finalResult1 = () => {
      setDis(pres => !pres)
   }

  const dogs = props.apiInfo.results.map((data, i) => {
    return(
     <div className="secondmother" key={data.correct_answer}>
     <div className="header">{decode(data.question)}</div>
      <Button 
      index={i} 
      disable={disable}
      fuck={setUpdate}
      put={props.up}
      mainFuck={count}
      right={decode(data.correct_answer)} 
      wrong1={decode(data.incorrect_answers[0])}
      wrong2={decode(data.incorrect_answers[1])}
      wrong3={decode(data.incorrect_answers[2])}/>
    </div>
    )
  }   
  )

    return (
        <div className="second">
          <div className="secContainer">
          <div className="secImage"></div>
          <div className="secImage2"></div>
          {dogs}
          <br />
          {disable ?
            <div className="last">
            <div className="baby">You scored {count}/5 correct answers</div>
            <button className="bot2 but" onClick={finalResult}>Play Again</button>
            </div> :
            <button className="bot2" onClick={finalResult1}>Check Answers</button>
          }
          </div>  
        </div>
       
    )
}

export default SecondView