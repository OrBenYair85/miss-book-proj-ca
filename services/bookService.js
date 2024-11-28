import { utilService } from "./util.service.js";
import { storageService } from "./async-storage.service.js";
import { books } from "../assets/books.js";
const demoData = [...books]
const BOOKS_KEY = 'bookDB'
_createBooks()
console.log(demoData)

export const bookService = {
    query,
    get,
    remove,
    save,
    getEmptyBook
}


function query(filterBy= {}){
    return storageService.query(BOOKS_KEY)
        .then(books => {
            if(filterBy.txt){
                const regEx = new RegExp(filterBy.txt, 'i')
                books = books.filter(book => RegEx.test(book.title))
            }
            return books
        })
        
}

function get(bookId){
    return storageService.get(BOOKS_KEY,bookId)
}

function remove(bookId){
    return storageService.remove(BOOKS_KEY,bookId)
}

function save(book){
    if(book.id){
        return storageService.put(BOOKS_KEY, book)
    } else {
        return storageService.post(BOOKS_KEY, book)
    }
}

function getEmptyBook(title = '', listPrice = ''){
    return {title,listPrice}
}

function _createBooks(){
    let books = utilService.loadFromStorage(BOOKS_KEY)
    if(!books || !books.length){
        books = []
        books.push(...demoData)
    }
    utilService.saveToStorage(BOOKS_KEY,books)
}

function _createBook(title, listPrice){
    const book = getEmptyBook(title, listPrice)
    book.id = utilService.makeId()
    return book
}

