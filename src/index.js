const Base_URL = "https://swapi.py4e.com/api/vehicles/?format=json"

document.addEventListener("DOMContentLoaded",  () => {
    console.log("Hello World")
getCar()
})

const getCar = () => {
    fetch(Base_URL)
    .then(res => res.json())
    .then(data => console.log(data))
}


