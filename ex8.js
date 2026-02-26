let a = 1
let b = -5
let c = 6

let delta = (b**2) - 4*(a)*(c)

let r1
let r2

if (delta > 0) {
    r1 = (-(b) + delta) /2*(a)
    r2 = (-(b) - delta) /2*(a)

    console.log(`${delta}`)

    console.log(`${r1}`)
    console.log(`${r2}`)
}

if (delta < 0) {
    console.log("Sem raízes")
}