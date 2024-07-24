const { Dataset,hash,salt } = require("../package/dataHash.js")

const data = "hello my name is nishant"
const salt = "{re0vyndlsz}Uy9"
console.log(new Dataset(salt,data).cook())
// console.log(Dataset.dilute())  here in function without arguments there is no need to use new