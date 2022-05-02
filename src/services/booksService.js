import axios from 'axios'
const baseUrl = 'http://localhost:3001/books'

// getting all the books from json file
const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

// get specific book
const getBook = (isbn) => {
    const request = axios.get(`${baseUrl}/${isbn}`)
    return request.then(response => response.data)
}

// deleting a book
const remove = (isbn) => {
    const request = axios.delete(`${baseUrl}/${isbn}`)
    return request
}

// creating a new book
const create = (newObject) => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}

// updating a book 
const update = (isbn, newObject) => {
    const request = axios.put(`${baseUrl}/${isbn}`, newObject)
    return request.then(response => response.data)
}


const booksService = {
    getAll,
    getBook,
    remove,
    create,
    update
}

export default booksService