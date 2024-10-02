import './App.css'
import CustomerList from './CustomerList'
import Laskuri from './Laskuri'
import { useState } from 'react'

function App() {

  // State määrittää näytetäänkö laskuria
  const [showLaskuri, setShowLaskuri] = useState(false)

  return (
      <div>
        <h2>Northwind Corporation</h2>

        <CustomerList />

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
