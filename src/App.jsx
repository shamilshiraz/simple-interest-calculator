
import { TextField } from '@mui/material';
import './App.css'
import Button from '@mui/material/Button';
import { useState } from 'react';



function App() {

  const[amount,setAmount]=useState(0)
  const[year,setYear]=useState(0)
  const[intRate,setIntRate]=useState(0)

  const[interest,setInterest]=useState(0 )

  let sum=Number(amount)+Number(interest)
  console.log(sum);
  
  function calculate(e){
        const final=(amount*year*intRate/100)
        console.log(final);
        setInterest(final)

  }
function reset(e){
  setAmount(0)
  setYear(0)
  setIntRate(0)
  setInterest(0)

}
  return (
    <>
    <div className="mainDiv">

      <div className="container">

<div className="header">
  <h1>Simple-Interest calculator</h1>
  <p>calculate your interest rates</p>
</div>

<div className="total">
  <h2>₹{interest}</h2>
  <p>Your Total interest</p>
  <p>Your Total loan amount will be :{sum}</p>
</div>

<div className="form">
  <form >

<div className="input">
<TextField id="outlined-basic" label="Loan amount" variant="outlined" value={amount || ''} onChange={(e)=>setAmount(e.target.value)} />
<TextField id="filled-basic" label="Number of years" variant="filled"  value={year || ''} onChange={(e)=>setYear(e.target.value)} />
<TextField id="standard-basic" label="Rate of interest" variant="standard"  value={intRate || ''} onChange={(e)=>setIntRate(e.target.value )} />
</div>

  </form>
</div>


      </div>

      <div className="button">
      <Button variant="contained" onClick={e=>calculate(e)} >calculate</Button>
      <Button variant="outlined" onClick={e=>reset(e)} >Reset</Button>
      </div>

    </div>
    </>
  )
}

export default App
