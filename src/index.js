const Base_URL = "https://swapi.py4e.com/api/vehicles/?format=json"

document.addEventListener("DOMContentLoaded",  () => {
    // document.getElementById("vehicle").addEventListener("click", renderCar)
    // console.log("Hello World")
getCar()
btnCar()
})
const getCar = () => {
    fetch(Base_URL)
    .then(res => res.json())
    .then(data => {
        console.log(data.results[0])
        data.results.forEach(renderCar)
    })
}
const btnCar = (data) => {
    const btn1 = document.getElementById("car-list")
    btn1.addEventListener("click",(e) => {
        e.preventDefault()
        // console.log("test")
    })
}
const renderCar = (data) => {
    let ul = document.getElementById("vehicle")
    // ul.innerHTML = ""
}