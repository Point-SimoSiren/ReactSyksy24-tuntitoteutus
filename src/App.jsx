import './App.css'
import CustomerList from './Customers/CustomerList'
import Laskuri from './Laskuri'
import { useState } from 'react'
import Message from './Message'

function App() {

  // Tämä state määrittää näytetäänkö laskuria
  const [showLaskuri, setShowLaskuri] = useState(false)

  // Messageen liittyvät statet
  const [message, setMessage] = useState("")
  const [showMessage, setShowMessage] = useState(false)
  const [isPositive, setIsPositive] = useState(false)

  return (
      <div>
        <h2>Northwind Corporation</h2>

       {showMessage && <Message message={message} isPositive={isPositive} />}

        <CustomerList setMessage={setMessage} setIsPositive={setIsPositive}
        setShowMessage={setShowMessage} />


        <br/>

        {
        showLaskuri ? <button onClick={() => setShowLaskuri(false)}>
          Piilota laskuri</button> :
          <button onClick={() => setShowLaskuri(true)}>
          Näytä laskuri</button>
        }

        {showLaskuri && <Laskuri otsikko="Laskuri 1" />}

      </div>
  )
}

export default App
