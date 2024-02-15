import React, { useState } from 'react'
import './App.css'

function App() {
  const [height,setHeight]=useState(0)
  const [weight,setWeight]=useState(0)
  const [message,setMessage]=useState("")
  const [bmi,setBmi]=useState("")

  let calcBmi =(e)=>{
  e.preventDefault()

  if (weight===0 || height===0){
    alert("please enter a valid weight and height")
  }
  else{
    let bmi = (weight/(height*height)*703)
    setBmi(bmi.toFixed(1))

    if(bmi<25){
      setMessage('you are under weight')
    }
    else if (bmi>=25){
      setMessage("you are heavy weight")
    }
    else{
      setMessage("you are overWeight")
    }
  }}

  let reload =()=>{
    window.location.reload()
  }


  return (
    <div>
      <form onSubmit={calcBmi}>
     <h1>BMI Calculator</h1>
     <input type="text" placeholder='height' value={height} onChange={(e)=>setHeight(e.target.value) } /><span>Height</span>
     <br /><br />
     <input type="text" placeholder='Weight' value={weight} onChange={(e)=>setWeight(e.target.value) }/><span>Weight</span>
     <br /><br />
     <button type='submit'>Submit</button>
     <button onClick={reload}>Reload</button>
     <br /><br />
     <h3>Your Bmi is :{bmi}</h3><br /><br />
     <p>{message}</p>



      </form>
    </div>

  )
}

export default App