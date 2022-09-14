import { useState } from 'react'

const Form = props => {
    //Create variables, getters, and setters to persist form data
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false)

    //Create error variables, getters, and setters
    const [firstNameError, setFirstNameError] = useState("")
    const [lastNameError, setLastNameError] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [confirmPasswordError, setConfirmPasswordError] = useState("")

    const errorStyle = {
        color: "red"
    }

    const createUser = (e) => {
        //Prevent default refresh
        e.preventDefault()

        setHasBeenSubmitted(true)

        //Create user object
        const newUser = { firstName, lastName, email, password, confirmPassword }

        console.log(newUser)

        //Clear form data
        setFirstName("")
        setLastName("")
        setEmail("")
        setPassword("")
        setConfirmPassword("")
    }

    const validateFirstName = (e) => {
        setFirstName(e.target.value)
        if(e.target.value.length < 2) {
            setFirstNameError("First name must be at least 2 characters.")
        } else {
            setFirstNameError("")
        }
    }

    const validateLastName = (e) => {
        setLastName(e.target.value)
        if(e.target.value.length < 2) {
            setLastNameError("Last name must be at least 2 characters.")
        } else {
            setLastNameError("")
        }
    }

    const validateEmail = (e) => {
        setEmail(e.target.value)
        if(e.target.value.length < 5) {
            setEmailError("Email must be at least 5 characters.")
        } else {
            setEmailError("")
        }
    }

    const validatePassword = (e) => {
        setPassword(e.target.value)
        if(e.target.value.length < 8) {
            setPasswordError("Password must be at least 8 characters.")
        } else {
            setPasswordError("")
        }
    }

    const validateConfirmPassword = (e) => {
        setConfirmPassword(e.target.value)
        if(e.target.value === password) {
            setConfirmPasswordError("")
        } else {
            setConfirmPasswordError("Passwords must match")
        }
    }

    return (
        //Create form
        <>
            <form onSubmit={ createUser }>
                {
                    hasBeenSubmitted ?
                    <p style={{color:"green"}}>Your response has been received!</p>:
                    ""
                }
                <div>
                    <label>First Name: </label>
                    <input onChange={ validateFirstName } value={ firstName } />
                    {
                        firstNameError ?
                        <p style={errorStyle}>{ firstNameError }</p> :
                        ""
                    }
                </div>
                <div>
                    <label>Last Name: </label>
                    <input onChange={ validateLastName } value={ lastName }/>
                    {
                        lastNameError ?
                        <p style={errorStyle}>{ lastNameError }</p> :
                        ""
                    }
                </div>
                <div>
                    <label>Email: </label>
                    <input type="email" onChange={ validateEmail } value={ email }/>
                    {
                        emailError ?
                        <p style={errorStyle}>{ emailError }</p> :
                        ""
                    }
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" onChange={ validatePassword } value={ password }/>
                    {
                        passwordError ?
                        <p style={errorStyle}>{ passwordError }</p> :
                        ""
                    }
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="password" onChange={ validateConfirmPassword } value={ confirmPassword }/>
                    {
                        confirmPasswordError ?
                        <p style={errorStyle}>{ confirmPasswordError }</p> :
                        ""
                    }
                </div>
                {
                    firstNameError || firstName.length < 1 ||
                    lastNameError || lastName.length < 1 ||
                    emailError || email.length < 1 ||
                    passwordError || password.length < 1 ||
                    confirmPasswordError || confirmPassword.length < 1 ?
                    <input type="submit" value="Create User" disabled/> :
                    <input type="submit" value="Create User" />

                }
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

export default Form