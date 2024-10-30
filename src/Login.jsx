import './App.css'
import React, {useState} from 'react'
import UserService from './Services/User'
import md5 from 'md5'


const Login = ({setIsPositive, setMessage,
     setShowMessage, setLoggedIn}) => {

// Komponentin tilan määritys
const [newUsername, setNewUsername] = useState('')
const [newPassword, setNewPassword] = useState('')


// onSubmit tapahtumankäsittelijä funktio
const handleSubmit = (event) => {
      event.preventDefault()
      var user = {
            username: newUsername,
            password: md5(newPassword)
        }
    
    UserService.Login(user)
    .then(response => {
      
        // Näytetään message
       setMessage("Tervetuloa " + response.username)
       setIsPositive(true)
       setShowMessage(true)

       // Messagen piilotus
       setTimeout(() => setShowMessage(false),
    4000)


      localStorage.setItem("username", response.username)
      localStorage.setItem("accesslevel", response.accessLevelId)
      localStorage.setItem("token", response.token)

      // Muutetaan APP komponentin loggenIn state trueksi
      setLoggedIn(true)

      })
      .catch(error => {
          // Näytetään message virhetilanteessakin
       setMessage(error.message)
       setIsPositive(false)
       setShowMessage(true)

       // Messagen piilotus
       setTimeout(() => setShowMessage(false),
    4000)

    }

      )
    }


  return (
    <div id="addNew">

       <h3>Login</h3>

       <form onSubmit={handleSubmit}>
     
            <div>
                <input type="text" value={newUsername} placeholder="User name"
                    onChange={({ target }) => setNewUsername(target.value)} required />
            </div>
            <div>
                <input type="password" value={newPassword} placeholder="Password"
                    onChange={({ target }) => setNewPassword(target.value)} required />
            </div>
            
         <input type='submit' value='save' />
         {" "}
         <input type='button' value='back' />

       </form>

    </div>
  )
}

export default Login