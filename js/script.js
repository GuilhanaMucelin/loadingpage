const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let data = {
        name:name,
        email,
    }
let convertData = JSON.stringify(data);

localStorage.setItem('lead', convertData)
})