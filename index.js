// Add your code here


function submitData(name, email) {
    const userData = {
        name: name,
        email: email
    };

    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(userData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to submit data');
        }
        return response.json();
    })
    .then(data => displayNewUserId(data))
    .catch(error => displayError(error));
}

function displayNewUserId(data) {
    const newUserId = data.id;
    const idElement = document.createElement('p');
    idElement.textContent = `New User ID: ${newUserId}`;
    document.body.appendChild(idElement);
}

function displayError(error) {
    const errorElement = document.createElement('p');
    errorElement.textContent = `Error: ${error.message}`;
    document.body.appendChild(errorElement);
}
