import './App.css'
import { useState, useEffect } from 'react'

function CustomerList() {

    // useEffect kutsutaan automaattisesti aina alussa
    // 2. parametrina on tyhjä taulukko: jos sinne laittaa
    // statejen nimiä, niin niiden statejen muutos myöskin
    // aiheuttaa 1. param olevan koodin suorituksen
    useEffect(() => {
        fetch("https://localhost:7209/api/customers")
            .then(res => res.json()) // javascript muotoon json muodosta
            .then(data => setCustomers(data)) // asetetaan stateen nimeltä customers
    }, [])

    // State
    const [customers, setCustomers] = useState([])
    const [show, setShow] = useState(false)


    function showAlert(cust) {
        alert("Contact " + cust.contactName + " by calling " + cust.phone)
    }


    return (
        <div>

            <h2>
                <button onClick={() => setShow(!show)}>
                    {show ? "Hide Customers" : "Show Customers"}
                </button>
            </h2>

            {show && customers && customers.map(cust => (
                <h5 className='customer' onClick={() => showAlert(cust)}>
                    {cust.companyName} from {cust.city}, {cust.country}
                    </h5>
                    
            )
            )
            }

        </div>
    )
}

export default CustomerList