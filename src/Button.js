import React, {useEffect} from "react"

const Button = ({index, right, wrong1, wrong2, wrong3, disable, mainFuck, fuck, put}) => {
    const [checkV, setCheckV] = React.useState(
        {
            first: false,
            second: false,
            third: false,
            fourth: false
        }
    )  

    const [lookValue, updateLook] = React.useState("")

    function handleChanges(event, ff) {
        updateLook(ff)
        setCheckV(pres => (
            {...pres, first: false, second: false, third: false, fourth: false}
        ))
        setCheckV(pres => {  
            return (
                index == event.target.value ? { ...pres, [event.target.name]: true } : {...pres})

        })
    }

    const store = []
    const array = [right, wrong1, wrong2, wrong3]
    const RandomBut = () => {
        let i = array.length
        let j = 0
 
        while(i--)  {
             j = Math.floor(Math.random() * (i+1))
            store.push(array[j]);
            array.splice(j,1)
         }
         return store
    }
    const [gg, ff] = React.useState(RandomBut())
    
   
    function last() {
        if(disable === false) {
            setCheckV(pres => (
                {...pres, first: false, second: false, third: false, fourth: false}
            )) 
            fuck(5)     
        }
        if(disable) {
            lookValue !== right && fuck(pre => pre - 1) 
        }
    }

    React.useEffect(() => {
        last()
    }, [disable])

    const naruto = disable ? checkV.first ? "choice incorrect" : "choice" : checkV.first ? "choice cs" : "choice"
    const sasuke = disable ? checkV.second ? "choice incorrect" : "choice" : checkV.second ? "choice cs" : "choice"
    const sakura = disable ? checkV.third ? "choice incorrect" : "choice" : checkV.third ? "choice cs" : "choice"
    const kakashi = disable ? checkV.fourth ? "choice incorrect" : "choice" : checkV.fourth ? "choice cs" : "choice"

    return (  
     <div className="fourbot">
        <button className={naruto}  disabled={disable} id={disable ? gg[0] === right ? "correct" : "" : ""} value={index}  name="first" onClick={(event) => handleChanges(event, gg[0])} >{gg[0]}</button>
        <button className={sasuke} disabled={disable} id={disable ? gg[1] === right ? "correct" : "" : ""} value={index} name="second" onClick={(event) => handleChanges(event, gg[1])}>{gg[1]}</button>               
        <button className={sakura}  disabled={disable} id={disable ? gg[2] === right ? "correct" : "" : ""} value={index} name="third"  onClick={(event) => handleChanges(event, gg[2])}>{gg[2]}</button>
        <button className={kakashi} disabled={disable} id={disable ? gg[3] === right ? "correct" : "" : ""} value={index} name="fourth"  onClick={(event) => handleChanges(event, gg[3])}>{gg[3]}</button>
     </div>
    )
}


export default Button