//async
// const login = async (username, password) => {
//     if (!username || !password) throw "Missing Credentials"
//     if (password == "hello") return "Welcome!"
//     throw "Invalid Password"
// }

// login("prehmieren", "hello")
//     .then((data) => {
//         console.log("SUCCESS!", data)
//     })
//     .catch((error) => {
//         console.log("FAILED!", error)
//     })


// promise
// const login = (username, password) => {
//     return new Promise((resolve, reject) => {
//         if (!username || !password) reject("Missing Credentials")
//         if (password == "hello") resolve("Welcome!")
//         reject("Invalid Password")
//     })
// }

// login("prehmieren", "hello")
//     .then((data) => {
//         console.log("SUCCESS!", data)
//     })
//     .catch((error) => {
//         console.log("FAILED!", error)
//     })