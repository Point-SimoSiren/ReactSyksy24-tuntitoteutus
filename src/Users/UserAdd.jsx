import '../App.css'
import React, {useState} from 'react'
import UserService from '../Services/User'
import md5 from 'md5'

// Komponentti ottaa vastaan propsina setAdding tilanmuutos metodin
// jolla adding tila voidaan muuttaa falseksi kun painetaan back -nappia
const UserAdd = ({setAdding, setIsPositive, setMessage,
     setShowMessage}) => {

// Komponentin tilan määritys
// Pitävät kirjaa input kenttien sisällöstä
const [newFirstname, setNewFirstname] = useState('')
const [newLastname, setNewLastname] = useState('')
const [newUsername, setNewUsername] = useState('')
const [newPassword, setNewPassword] = useState('')
const [newAccesslevelId, setNewAccesslevelId] = useState('')


// onSubmit tapahtumankäsittelijä funktio
const handleSubmit = (event) => {
      event.preventDefault()
      var newUser = {
            firstname: newFirstname,
            lastname: newLastname,
            username: newUsername,
            password: md5(newPassword),
            accessLevelId: newAccesslevelId
        }
    
    
    UserService.addNew(newUser)
    .then(response => {
      
        // Näytetään message
       setMessage(response)
       setIsPositive(true)
       setShowMessage(true)

       // Messagen piilotus
       setTimeout(() => setShowMessage(false),
    4000)

      // Piilotetaan lisäyslomake
      setAdding(false)

      })
      .catch(error => {
          // Näytetään message virhetilanteessakin
       setMessage(error.message)
       setIsPositive(false)
       setShowMessage(true)

       // Messagen piilotus
       setTimeout(() => setShowMessage(false),
    4000)

      // Piilotetaan lisäyslomake
      setAdding(false)
    }

      )
    }


  return (
    <div id="addNew">

       <h3>Adding new user</h3>

       <form onSubmit={handleSubmit}>
     
            <div>
                <input type="text" value={newFirstname} placeholder="First name"
                    onChange={({ target }) => setNewFirstname(target.value)} required />
            </div>
            <div>
                <input type="text" value={newLastname} placeholder="Last name"
                    onChange={({ target }) => setNewLastname(target.value)} required />
            </div>
            <div>
                <input type="text" value={newUsername} placeholder="User name"
                    onChange={({ target }) => setNewUsername(target.value)} required />
            </div>
            <div>
                <input type="password" value={newPassword} placeholder="Password"
                    onChange={({ target }) => setNewPassword(target.value)} required />
            </div>
            <div>
                <input type="number" min={1} max={2} value={newAccesslevelId} placeholder="Access level"
                    onChange={({ target }) => setNewAccesslevelId(target.value)} required />
            </div>
         
      
         <input type='submit' value='save' />
         {" "}
         <input type='button' onClick={() => setAdding(false)} value='back' />

       </form>

    </div>
  )
}

export default UserAdd