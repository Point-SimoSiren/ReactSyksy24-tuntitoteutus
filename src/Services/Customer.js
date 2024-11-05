// Tämä palvelu hoitaa http pyyntöjen tekemisen
import axios from "axios"


//const baseUrl = "https://localhost:7209/api/customers"

// Azure
const baseUrl = "https://nwbackendapisimo.azurewebsites.net/api/customers"



let token = null

// Tämä on metodi jota kutsutaan aina ennen kuin tehdään muu pyyntö serviceen
// Parametrina annetaan token joka otetaan local storagesta
const setToken = newToken => {
    token = `bearer ${newToken}`
}


const getAll = () => {
    const config = {
        headers: { Authorization: token },
    }
    const request = axios.get(baseUrl, config)
    return request.then(response => response.data)
}

const addNew = (object) => {
    const config = {
        headers: { Authorization: token },
    }
    const request = axios.post(baseUrl, object, config)
    return request.then(response => response.data)
}

const remove = (id) => {
    const config = {
        headers: { Authorization: token },
    }
    const request = axios.delete(baseUrl + "/" + id, config)
    return request.then(response => response.data)
}

const edit = (object) => {
    const config = {
        headers: { Authorization: token },
    }
    const request = axios.put(baseUrl + "/" + object.customerId, object, config)
    return request.then(response => response.data)
}


export default {getAll, addNew, remove, edit, setToken}