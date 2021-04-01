
class Human {
  constructor(name, lastName, age, language) {
    this.name = name
    this.lastName = lastName
    this.age = age
    this.language = language
  }
  printInfo() {
    console.log(`${this.age}`)
  }

  mostSkilledDev() {
    if (this.person1.language.length > this.person2.language.length) {
      return `${this.person1.name}`
    } else if (this.person1.language.length === this.person2.language.length) {
      return `draw`
    } else {
      return `${this.person2.name}`
    }
  }
}
// const alice = {
//   name: 'Alice',
//   lastName: 'Liddell',
//   age: 28,
//   language: ['JavaScript', 'PHP', 'C++', 'C']
// }
// const bob = {
//   name: 'Bob',
//   lastName: 'Lemon',
//   age: 30,
//   language: ['Ruby', 'Python', 'JavaScript']
// }
// const charlie = {
//   name: 'Charlie',
//   lastName: 'Charlot',
//   age: 8,
//   language: ['C#', 'Java', 'Objective-C', 'Swift', 'R']
// }

const alice = new Human('alice', 'liddell', 30, ['JavaScript', 'PHP', 'C++', 'C'])
const bob = new Human('bob', 'lemon', 27, ['Ruby', 'Python', 'JavaScript'])
const charlie = new Human('charlie', 'charlot', 8, ['C#', 'Java', 'Objective-C', 'Swift', 'R'])

charlie.printInfo()
bob.mostSkilledDev()
charlie.mostSkilledDev()



canVote = (agePls) => {
  if (agePls.age >= 18) {
    return true
  } else {
    return false
  }
}
// console.log(canVote(alice))
