import '../App.css'
import { useState, useEffect } from 'react'
import CustomerService from '../Services/Customer'
import Customer from './Customer'
import CustomerAdd from './CustomerAdd'

// Messagen asettamiseen liittyvät metodit on välitetty
// tälle komponentille.
function CustomerList({setIsPositive, setMessage, setShowMessage}) {

    // useEffect kutsutaan automaattisesti aina alussa
    // 2. parametrina on tyhjä taulukko: jos sinne laittaa
    // statejen nimiä, niin niiden statejen muutos myöskin
    // aiheuttaa 1. param olevan koodin suorituksen
    useEffect(() => {
        CustomerService.getAll()
            .then(data => setCustomers(data)) // asetetaan stateen nimeltä customers
    }, [])

    // State
    const [customers, setCustomers] = useState([])
    const [show, setShow] = useState(false)
    const [adding, setAdding] = useState(false)
    // Hakukentän state
    const [search, setSearch] = useState("")


    return (
        <div>

            <h2>
                <button onClick={() => setShow(!show)}>
                    {show ? "Hide Customers" : "Show Customers"}
                </button>
            </h2>


            {show && adding && <CustomerAdd 
            setMessage={setMessage} setIsPositive={setIsPositive}
            setShowMessage={setShowMessage} setAdding={setAdding} />}

            {show && !adding && <button onClick={() => setAdding(true)}>Add New Customer</button>}

                <br />

           {show && !adding && <input type="text" placeholder='Search by Company Name'
            value={search} onChange={({target}) => setSearch(target.value)}
            /> }


            {show && customers && customers.map(cust =>  {

                const lowerCaseName = cust.companyName.toLowerCase()

                if (lowerCaseName.indexOf(search) > -1) {
                    return(
                    <Customer key={cust.customerId} customer={cust}
                    setMessage={setMessage} setIsPositive={setIsPositive}
                    setShowMessage={setShowMessage} 
                    />
                    )
                    }
            
                })
            }

        </div>
    )
}

export default CustomerList