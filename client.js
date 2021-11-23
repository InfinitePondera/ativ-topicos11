const axios = require('axios').default;

axios.post('http://localhost:3000/books', {
    ID: 3,
    name: 'My Boook',
    author: 'Me and only me'
})
    .then((res) => {
        console.log(res.data);
    })
    .catch(err => {
        console.log(err.response.data);
    });

//Exercicio 1 - novo livro
axios.post('http://localhost:3000/books', {
    ID: 4,
    name: 'Books on the table',
    author: 'Zyon'
})
.then((res) => {
    console.log(res.data);
})
.catch(err => {
    console.log(err.response.data);
});

//Exercício 1 - livro repetido
axios.post('http://localhost:3000/books', {
    ID: 2,
    name: 'Os Lusiadas',
    author: 'Luis de Camoes'
})
.then((res) => {
    console.log(res.data);
})
.catch(err => {
    console.log(err.response.data);
});

//Exercício 2 - requests um-a-um
axios.get('http://localhost:3000/books')
    .then((response) => {
        axios.get('http://localhost:3000/books/' + response.data.ID)
        .then((response) => {
            console.log(response.data);
        })
});

//Exercício 4
axios.get('http://localhost:3000/log')
    .then((response) => {
        console.log("Quantidade de requests:" + response.data);
    })