document.addEventListener('DOMContentLoaded', () => {
    let tableBody = document.getElementById('table-body')
    fetchRequest()
    


    function fetchRequest(){
        fetch('http://localhost:3000/dogs')
        .then(res => res.json())
        .then((dogsArray) => {
            appendDom(dogsArray)
        })
    }
    
    function appendDom(dogsArray){
        dogsArray.forEach(dog => {
            const table = document.createElement('tr')
            table.innerHTML = `
            <tr>
            <td>${dog.name}</td>
            <td>${dog.breed}</td>
            <td>${dog.sex}</td>
            <td><button>Edit</button></td>
            </tr> `
            tableBody.append(table)
            let editBtn = document.querySelector('button')
            editBtn.addEventListener('click', () => {
                console.log('You have clicked')
            })
        })
    }
    

})

