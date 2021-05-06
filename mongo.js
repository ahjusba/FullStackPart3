// const mongoose = require('mongoose')

// if (process.argv.length<3) {
//   console.log('give password as argument')
//   process.exit(1)
// }

// const password = process.argv[2]

// const url =
//   `mongodb+srv://gmasshole:${password}@fullstackopen.mrr2y.mongodb.net/phonebook-app?retryWrites=true&w=majority`

// mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

// const personSchema = new mongoose.Schema({
//   name: String,
//   number: String,
// })

// const Person = mongoose.model('Person', personSchema)

// const person = (newName, newNumber) => {
//   console.log('Person name: ', newName)
//   console.log('Person number: ', newNumber)
//   return new Person({
//     name: newName,
//     number: newNumber,
//   })
// }

// const NewPerson = (newName, newNumber) => {
//   person(newName, newNumber).save().then(response => {
//     console.log(`added ${newName} number ${newNumber} to phonebook`)
//     mongoose.connection.close()
//   })
// }

// const AllPersons = () => Person.find({}).then(result => {
//     console.log('phonebook:')
//     result.forEach(person => {
//       console.log(person.name, person.number)
//     })
//     mongoose.connection.close()
// })

// if (process.argv.length === 3) {
//   AllPersons()
// }

// if (process.argv.length > 3) {
//   console.log(process.argv[3], process.argv[4])
//   NewPerson(process.argv[3], process.argv[4])
// }