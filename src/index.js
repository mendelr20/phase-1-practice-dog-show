document.addEventListener('DOMContentLoaded', () => {
    let tableBody = document.getElementById('table-body')
    fetchRequest()
    


    function fetchRequest(){
        fetch('http://localhost:3000/dogs')
        .then(res => res.json())
        .then(appendDom)
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
            const editBtn = document.querySelector('button')
            editBtn.addEventListener('click', () => {
                console.log('You have clicked')
            })
        })
    }
    

})

