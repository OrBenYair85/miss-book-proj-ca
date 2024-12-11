import { utilService } from "./util.service.js";
import { storageService } from "./async-storage.service.js";
import { books } from "../assets/books.js";

const demoData = [...books]
const BOOKS_KEY = 'bookDB'
_createBooks()


export const bookService = {
    query,
    get,
    remove,
    save,
    getEmptyBook,
    getDefaultFilter
}


function query(filterBy= {}){
    return storageService.query(BOOKS_KEY)
        .then(books => {
            if(filterBy.txt){
                const regEx = new RegExp(filterBy.txt, 'i')
                books = books.filter(book => regEx.test(book.title))
            }
            if(filterBy.price){
                books = books.filter(book => book.listPrice.amount >= filterBy.price)
            }
            if(filterBy.sale){
                books = books.filter(book => book.listPrice.isOnSale)
            }
            return books
        })
        
}

function get(bookId){
    return storageService.get(BOOKS_KEY,bookId)
        .then(_setNextPrevBookId)
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

function getEmptyBook(title = '', amount = 0){
    return {title,listPrice:{amount}}
    console.log(title, listPrice.amount)
}

function getDefaultFilter() {
    return { txt: '', price: '', sale: '' }
}

function _createBooks(){
    let books = utilService.loadFromStorage(BOOKS_KEY)
    if(!books || !books.length){
        books = []
        books.push(...demoData)
    }
    utilService.saveToStorage(BOOKS_KEY,books)
}

function _createBook(title, amount){
    const book = getEmptyBook(title, amount)
    book.id = utilService.makeId()
    book.subtitle = `${title} is a book`
    book.authors = ['Or Ben Yair']
    book.publishedDate = randomYear()
    book.description = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    book.pageCount = randomPages()
    book.categories = ['Computers', 'Hack']
    book.thumbnail = `http://coding-academy.org/books-photos/${randomPhoto()}.jpg`
    book.language = 'en'
    book.listPrice.currencyCode = 'ILS'
    book.listPrice.isOnSale = true
    return book
}

function _setNextPrevBookId(book){
    return query().then((books) => {
        const bookIdx = books.findIndex((currBook) => currBook.id === book.id)
        const nextBook = books[bookIdx + 1] ? books[bookIdx + 1] : books[0]
        const prevbook = books[bookIdx -1] ? books[bookIdx -1] : books[books.length - 1]
        book.nextBookId = nextBook.id
        book.prevBookId = prevbook.id
        return book
    })

    
}


