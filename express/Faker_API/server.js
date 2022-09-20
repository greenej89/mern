import { faker } from '@faker-js/faker'

const express = require("express")
const app = express()
const port = 8000

const createUser = () => {
    const newFakeUser = {
        password: faker.commerce.password(),
        email: faker.commerce.email(),
        phoneNumber: faker.commerce.phoneNumber(),
        lastName: faker.commerce.lastName(),
        firstName: faker.commerce.firstName(),
        _id: faker.commerce.uuid()
    }
    return newFakeUser
}

const createCompany = () => {
    const newFakeCompany = {
        _id: faker.commerce.uuid(),
        name: faker.commerce.name(),
        address: {
            street: faker.commerce.address.street(),
            city: faker.commerce.address.city(),
            state: faker.commerce.address.state(),
            zipCode: faker.commerce.zipCode(),
            country: faker.commerce.country()
        }
    }
    return newFakeCompany
}

//route returns a new user
app.get("/api/users/new", (req, res) => {
    res.json( createUser )
})

//route returns a new company
app.get("api/companies/new", (req, res) => {
    res.json( createCompany )
})

//route returns both a new user and a new company
app.get("api/user/company", (req, res) => {
    res.json( createUser, createCompany )
})






app.listen( port, () => console.log(`Listening on port: ${port}`))
