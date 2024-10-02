import './App.css'
import { useState } from 'react'

function Laskuri(props) {

// Laskurikomponentin state, joka on nimeltään luku
// setLuku funktiota kutsumalla voidaan asettaa luku state
// Aina kun state muuttuu, se aiheuttaa komponentin uudelleen
// renderöitymisen
const [luku, setLuku] = useState(0)

  return (
      <div>

        <h3>{props.otsikko}</h3>

        <h4>{luku}</h4>

        {luku < 10 && <button onClick={() => setLuku(luku+1)}>+</button>}
        
        {luku > 9 && <button disabled>+</button>}

        <button onClick={() => setLuku(luku-1)}>-</button>
        <button onClick={() => setLuku(0)}>zero</button>
        <br />  <br />
        <input type="number" value={luku} onChange={(e) => setLuku(e.target.value)} />

        {/* ternary oprator tapa esittää ehtolause */}
        <h5>{luku > 9 ? "Pääsit kymppiin asti!" :
         "Sinulla on vielä matkaa kymppiin"}</h5>

      </div>
  ) 
}
 


export default Laskuri
