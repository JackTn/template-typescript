console.log(`Hello Node.js v${process.versions.node}!`);
console.log(`Write on ${process.cwd()}`)


import { repo, organization } from "./Constants"
console.log(repo)
console.log(organization)

const a = async () => {
    setTimeout(()=> console.log(123), 3000)
}

const b = async () => {
    await a()
    await a()
    await a()
    await a()
    await a()
};
b();