const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/persons")
 

 
let Person = mongoose.model('Person' , {
  name: String  , 
  age: Number,
  favoriteFoods: [String]
  })
  

// const createSavePerson = async () => {
//   const person = new Person({
//     name: 'Hamid',
//     age: 50,
//     favoriteFoods: ['Berkoukes', 'Tbikha']
//   });

//   try {
//     const data = await person.save();
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// };

// createSavePerson();

// const createMany = async (arr) => {
//   try {
//     const people = await Person.create(arr);
//     console.log(people);
//   } catch (err) {
//     console.log(err);
//   }
// };

// createMany([{ name: 'Adel', age: 21, favoriteFoods: ['t3am'] }, { name: 'Fares', age: 22, favoriteFoods: ['Mhajeb'] }]);


// const findByName = async (name) => {
//   try {
//     const onePerson = await Person.find({ name });
//     console.log(onePerson);
//   } catch (err) {
//     console.log(err);
//   }
// };

// findByName();

// const findOneByFood = async (food) => {
//   try {
//     const person = await Person.findOne({ favoriteFoods: food });
//     console.log(person);
//   } catch (err) {
//     console.log(err);
//   }
// };

// findOneByFood('Mhajeb');


// const findPersonById = async (id) => {
//   try {
//     const person = await Person.findById(id);
//     console.log(person);
//   } catch (err) {
//     console.log(err);
//   }
// };

// findPersonById('672f62f9a0c5994b4fb053dc');

// const findEditThenSave = async (id) => {
//   try {
//     const person = await Person.findById(id);
//     person.favoriteFoods.push("Frite omlette");
//     const updatedPerson = await person.save();
//     console.log(updatedPerson);
//   } catch (err) {
//     console.log(err);
//   }
// };

// findEditThenSave('672f6416b59a3c7abf62223c');

// const findAndUpdate = async (personName) => {
//   try {
//     const updatedPerson = await Person.findOneAndUpdate(
//       { name: personName },
//       { age: 70 },
//       { new: true }
//     );
//     console.log(updatedPerson);
//   } catch (err) {
//     console.log(err);
//   }
// };

// findAndUpdate('Hamid');

// const removeById = async (personId) => {
//   try {
//     const removedPerson = await Person.findByIdAndRemove(personId);
//     console.log(removedPerson);
//   } catch (err) {
//     console.log(err);
//   }
// };

// removeById('672f653388f7ee0dca5437c6');

const removeManyPeople = async (name) => {
  try {
    const persons = await Person.deleteMany({ name });
    console.log(persons);
  } catch (err) {
    console.log(err);
  }
};

removeManyPeople('Fares')