// Inscription donc cibler bouton #register et la route signup
// ".value" car ce sont des champs de saisies 

document.querySelector("#register").addEventListener("click", function (){
    const user = {
        name: document.querySelector("#registerName").value,
        email: document.querySelector("#registerEmail").value,
        password: document.querySelector("#registerPassword").value,
    };

    fetch("https://weatherapp-backend-afmnsbpzy-aurore-martinez.vercel.app/users/signup", {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
    })
    .then(response => response.json())
    .then(userfound => {
        if (userfound.result) {
            window.location.assign("index.html");
        }
    });
})


// Connexion donc cibler bouton #connection et la route signin
document.querySelector("#connection").addEventListener("click", function (){
    const user = {
        email: document.querySelector("#connectionEmail").value,
        password: document.querySelector("#connectionPassword").value,
    };    

    fetch('https://weatherapp-backend-afmnsbpzy-aurore-martinez.vercel.app/users/signin', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
    })
    .then(response => response.json())
    .then(userfound => {
        if (userfound.result) {
            window.location.assign("index.html");
        }
    })
})