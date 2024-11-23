import { utilService } from "./util.service.js";
import { storageService } from "./async-storage.service.js";

const BOOKS_KEY = 'bookDB'
_createBooks()

export const bookService = {
    query,
    get,
    remove,
    save,
    getEmptyBook
}


function query(){
    return storageService.query(BOOKS_KEY)
        
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
        const demoData = [
            { title: "To Kill a Mockingbird", listPrice: 120 },
            { title: "1984", listPrice: 95 },
            { title: "Pride and Prejudice", listPrice: 175 },
            { title: "The Great Gatsby", listPrice: 145 },
          ]
        books.push(...demoData)
    }
    utilService.saveToStorage(BOOKS_KEY,books)
}

function _createBook(title, listPrice){
    const book = getEmptyBook(title, listPrice)
    book.id = utilService.makeId()
    return book
}

