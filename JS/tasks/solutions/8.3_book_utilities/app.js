
const book1 = {
    name: "coding",
    author: "Muhammad",
    publishYear: 2000,
    };

const book2 = {
    name: "Language",
    author: "Yishai",
    publishYear: 1995,
    };

const bookUtils = {
    getFirstPublished(book1 , book2){
        return book1.publishYear < book2.publishYear ? book1: book2;
    },
    setNewEdition(book, newYear){
        book.latestEdition = newYear;
    },
    setLanguage(book, language){
        book.Language = language;
    },
    setTranslation(book, language, translator){
        book.translation = {translator : translator, language : language};
    },
    setPublisher(book, name, location){
        book.publisher = {name : name, location : location};
    },
    isSamePublisher(book1, book2){
    if (book1.publisher.name === book2.publisher.name && book1.publisher.location === book2.publisher.location){
        return true;
    }
    return false;
    }
}