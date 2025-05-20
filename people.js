import { names } from "./name.js"
import { hobbyes } from "./hobbies.js"



function final() {

    const obj = {

        nome: names("Ercole", "Pandolfi"),
        hobbyes: hobbyes("Briscola", "21", "Scopa")

    }

    console.log(obj)
    return obj
}

export {final}