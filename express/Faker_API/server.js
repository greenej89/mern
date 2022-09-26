const { faker } = require('@faker-js/faker')
const express = require("express")
const app = express()
const port = 8000

const createUser = () => {
    const newFakeUser = {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.phoneNumber(),
        lastName: faker.name.lastName(),
        firstName: faker.name.firstName(),
        _id: faker.datatype.uuid()
    }
    return newFakeUser
}

const createCompany = () => {
    const newFakeCompany = {
        _id: faker.datatype.uuid(),
        name: faker.company.companyName(),
        address: {
            street: faker.address.street(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
    return newFakeCompany
}

//route returns a new user
app.get("/api/users/new", (req, res) => {
    res.json( createUser() )
})

//route returns a new company
app.get("/api/companies/new", (req, res) => {
    res.json( createCompany() )
})

//route returns both a new user and a new company
app.get("/api/user/company", (req, res) => {
    res.json( { user: createUser(), company: createCompany() } )
})






app.listen( port, () => console.log(`Listening on port: ${port}`))
