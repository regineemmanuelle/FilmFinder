const submitButton = document.querySelector('.submitButton')
const ApitButton = document.querySelector('.ApiButton')
const apiUrl = "http://www.omdbapi.com/"
let mainContainer = document.getElementById("myData")

const enterApiKey = () => {
    let API = "";
    API = prompt("Entrez votre clé d'API","");
    return API;
}

const getAPI = async () => { 
    fetch(`${apiUrl}?apikey=${ApiKey}&s=batman`)
    .then( response => {
        console.log(response.status, response.ok);
        if (response.ok === true) {
            window.alert('Votre clé est valide')
        } else {
            enterApiKey()
        }
    })
    .catch(error => {
        console.log('Api fail' + error) 
    });
}

const appendData = (data) => {;

    console.log(data.Search)
    for (let i = 0; i < data.Search.length; i++) {
        const section = document.createElement("section")
        const div1 = document.createElement('span')
        const img = document.createElement("img");
        img.src =  data.Search[i].Poster ;
        div1.appendChild(img);
        const div2 = document.createElement('span')
        const name = document.createElement("h1");
        name.innerText = data.Search[i].Title.toUpperCase()
        div2.appendChild(name);
        const year = document.createElement("p");
        year.innerText = data.Search[i].Year
        div2.appendChild(year);
        const button = document.createElement('input')
        button.value = 'Read more'
        div2.appendChild(button)
        section.appendChild(div1)
        section.appendChild(div2)
        mainContainer.appendChild(section)
    }
}


const getFilm = async (word) => {
    const response = await fetch(`${apiUrl}?apikey=${ApiKey}&s=${word}`)
    const film = await response.json();
    console.log(film);
    appendData(film)
}



submitButton.addEventListener('click', () => {
    mainContainer.innerHTML = ""
    let userValue = document.querySelector('.Search').value;
    getFilm(userValue);
    console.log(userValue);  
    console.log("Bien");
})
ApitButton.addEventListener('click', () => {
    console.log("pepito api")
    ApiKey = enterApiKey();
    getAPI()
})



