const url = 'http://localhost:3000/dogs'
let id
document.addEventListener('DOMContentLoaded', () => {
    fetchRequest()
})

function fetchRequest(){
    fetch(url)
    .then(res => res.json())
    .then(arrayOfDogs => {
        arrayOfDogs.forEach(dog => renderDom(dog))
    })
}

function renderDom(dog){
    const tableBody = document.querySelector('#table-body')
    const tr = document.createElement('tr')
    const tdName = document.createElement('td')
    const tdBreed = document.createElement('td')
    const tdSex =  document.createElement('td')
    const tdButton = document.createElement('td')
    const button = document.createElement('button')
    tdName.innerHTML = dog.name
    tdBreed.innerHTML = dog.breed
    tdSex.innerHTML = dog.sex
    tdButton.append(button)
    button.style.width = "100%"
    button.textContent = "Edit"
    tr.append(tdName, tdBreed, tdSex, tdButton)
    tableBody.append(tr)
    button.addEventListener('click', () =>{
        const dogForm = document.querySelector('#dog-form')
        dogForm.name.value = dog.name
        dogForm.breed.value = dog.breed
        dogForm.sex.value = dog.sex
        const dogName = document.getElementsByName('name')
        let inputName
        dogName[0].addEventListener('change', (event) => {
            inputName = event.target.value
        })
        const dogBreed = document.getElementsByName('breed')
        let inputBreed
        dogBreed[0].addEventListener('change', (event) => {
            inputBreed = event.target.value
        })
        const dogSex = document.getElementsByName('sex')
        let inputSex
        dogSex[0].addEventListener('change', (event) => {
            inputSex= event.target.value
        })
        dogForm.addEventListener('submit', (e) => {
            e.preventDefault()
            submitEvent(id, inputName, inputBreed, inputSex)
        })
    })
   
    // use the dog id to complete the submit event
    function submitEvent(id, inputName, inputBreed, inputSex){
        fetch(`http://localhost:3000/dogs/${id}`, {
                method: "PATCH",
                headers: {"Accept": "application/json",
                    "Content-type": "application/json"},
                body: JSON.stringify({
                    name : inputName,
                    breed : inputBreed,
                    sex : inputSex
                })
            })
            .then(res => res.json())
            .then(arrayOfDogs => {
                arrayOfDogs.forEach(dog => renderDom(dog))
            })
    }


}


