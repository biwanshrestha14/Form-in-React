import React from 'react'
import { object } from 'yup'

const App = () => {

const handleform=(e)=>{
  e.preventDefault()
console.log("form submitted ");


}

  return (
    <div>
      <form onSubmit={handleform}>
        <input type="text" name='email' /> <br />
        <input type="text" name='password' /> <br />
        <input type="text" name='address' /> <br />
        <input type="text" name='contact' /> <br />
        <input type="submit" />
      </form>

    </div>
  )
}

export default App
