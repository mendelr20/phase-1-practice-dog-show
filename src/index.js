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
        const formName = dogForm.name.value = dog.name
        const formBreed = dogForm.breed.value = dog.breed
        const formSex = dogForm.sex.value = dog.sex
        dogForm.addEventListener('submit', (e) => {
            e.preventDefault()
            submitEvent(formName, formBreed, formSex)
        })
    })
    // use the dog id to complete the submit event
    function submitEvent(formName, formBreed, formSex){
        fetch('http://localhost:3000/dogs/:id', {
                method: "PATCH",
                headers: {"Accept": "application/json",
                    "Content-type": "application/json"},
                body: JSON.stringify({
                    name : formName,
                    breed : formBreed,
                    sex : formSex
                })
            })
            .then(res => res.json())
            .then(arrayOfDogs => {
                arrayOfDogs.forEach(dog => renderDom(dog))
            })
    }


}


