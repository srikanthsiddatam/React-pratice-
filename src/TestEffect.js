import {useEffect,useState} from "react"


const TestEffect=()=>{

    const [timer,setTimer]=useState(0)
    const [counter,setCounter]=useState(0)

    
useEffect(
    ()=>
    
    {
        console.log("inside use Effect")
    }
)



    return(

        <>
        <h1>these is testEffect Component
       


        </h1>
        <h1>{timer}</h1>

        <button type="button" onClick={()=>{
            setTimer(timer+1)
            console.log("inside use timer")
        }

        }> change timer</button>


<button type="button" onClick={()=>{
            setCounter(counter+1)
        }

        }> change counter</button>

        </>
    )
}
export default TestEffect