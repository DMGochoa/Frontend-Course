import fetch from "node-fetch";

const API = "https://api.escuelajs.co/api/v1";

function postData (urlApi, data) {
    const response = fetch(urlApi, {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data), // Conviertte de json a txt
    });
    return response;
}

const data = {
        "title": "Libro Bonito",
        "price": 12.99,
        "description": "Es un libro muy bonito con un cohete en la portada y hoajs gruesas, ademas de 120 paginas",
        "categoryId": 1,
        "images": ["https://placeimg.com/640/480/any"]
    }

postData(`${API}/products`, data)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
