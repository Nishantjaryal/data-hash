const {hash, DataHash, salt } = require("data-hash")

const my_data_string = "this is a secret"

console.log(hash(my_data_string)) //pDltYOHQ5vSAs7gsPgrOaUDHyG9BbIpuqu0hN3fO



const mysalt = salt() //

console.log(new DataHash(mysalt,data).cook()) // VrdNWLuzYcD8wcIcTNXMO1HeoLSCzZvd8tk5BY4E




// console.log(DataHash.dilute())  here in function without arguments there is no need to use new