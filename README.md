
# Package information

data-hash is very simple to use but yet very powerful package used to generate super strong hashes of given data

## Functions Overview

```
const {hash, salt ,DataHash} = require("data-hash")



// hash: This function Generates Super Strong Hashes

// salt: This function Dynamically Generates salts( Random hash codes )
// salt plays key role in identification of genuine SECRET and its Hash Signature combination.

// DataHash: DataHash function creates a Wrapper of Salt on provided data

// DataHash.prototype.cook: Prototype function "cook" Generates Hash value of previously Salted data by parent function.


```

### To Hash provided data

```
const {hash} = require("data-hash")

const my_data_string = "this is a secret"

console.log(hash(my_data_string)) //pDltYOHQ5vSAs7gsPgrOaUDHyG9BbIpuqu0hN3fO

```

### To Hash & Salt given data

```
const { DataHash, salt } = require("data-hash")

const my_data_string = "this is a secret code"

const mysalt = salt() // 5vSAs7gsPgrOaUDHy

console.log(new DataHash(mysalt,data).cook()) // VrdNWLuzYcD8wcIcTNXMO1HeoLSCzZvd8tk5BY4E

```