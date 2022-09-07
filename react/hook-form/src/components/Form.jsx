import { useState } from 'react'

export default() => {
    //Create variables, getters, and setters to persist form data
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const createUser = (e) => {
        //Prevent default refresh
        e.preventDefault()

        const newUser = { firstName, lastName, email, password, confirmPassword }
    }

    return (
        //Create form
        <>
            <form onSubmit={ createUser }>
                <div>
                    <label>First Name: </label>
                    <input onChange={ (e) => setFirstName(e.target.value) } value={ firstName } />
                </div>
                <div>
                    <label>Last Name: </label>
                    <input onChange={ (e) => setLastName(e.target.value) } value={ lastName }/>
                </div>
                <div>
                    <label>Email: </label>
                    <input onChange={ (e) => setEmail(e.target.value) } value={ email }/>
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" onChange={ (e) => setPassword(e.target.value) } value={ password }/>
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="password" onChange={ (e) => setConfirmPassword(e.target.value) } value={ confirmPassword }/>
                </div>
                <input type="submit" value="Create User"/>
            </form>
            <p>Your Form Data</p>
            <div>
                <p>First Name: { firstName }</p>
                <p>Last Name: { lastName }</p>
                <p>Email: { email }</p>
                <p>Password: { password }</p>
                <p>Confirm Password: { confirmPassword }</p>
            </div>
        </>
    )
}