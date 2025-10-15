"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBook = createBook;
exports.printBookTitleAndYear = printBookTitleAndYear;
exports.addPageCount = addPageCount;
exports.addISBN = addISBN;
exports.updatePublishedYear = updatePublishedYear;
exports.addSecondAuthor = addSecondAuthor;
/**
 * `createBook` function:
 * - Accepts four parameters:
 *   - `title` (string)
 *   - `author` (string)
 *   - `publishedYear` (number)
 *   - `genre` (string)
 * - Returns a new `Book` object with these properties.
 * Example:
 *  createBook("JavaScript: The Definitive Guide", "David Flanagan", 2020, "Programming");
 *   // => { title: "JavaScript: The Definitive Guide", author: "David Flanagan", publishedYear: 2020, genre: "Programming" }
 */
function createBook(title, author, publishedYear, genre) {
    // write your code here...
    return {
        title: title,
        author: author,
        publishedYear: publishedYear,
        genre: genre,
    }; // replace "{} as Book" with what you see is fit
}
// DO NOT CHANGE THE LINE OF CODE BELOW (you can use it for testing your code)
const book = createBook("Hitchhiker's Guide to The Galaxy", "Douglas Adams", 1965, "Sci-Fi");
/**
 * `printBookTitleAndYear` function:
 * - Accepts a `book` parameter of type `Book`.
 * - Returns the book’s title with its publish year separated by a space.
 * - Access the book title using dot-notation and access the publish year using bracket-notation.
 * Example:
 *  printBookTitleAndYear(book);
 *   // => "Hitchhiker's Guide to The Galaxy 1965"
 */
function printBookTitleAndYear(book) {
    // write your code here...
    return book.title + " " + book["publishedYear"];
}
/**
 * `addPageCount` function:
 * - Accepts:
 *   - A `book` parameter of type `Book`.
 *   - A `pageCount` parameter of type `number`.
 * - Returns the same `Book` object with a new `pageCount` property.
 * Example:
 *  addPageCount(book, 320);
 *   // => { title: "Hitchhiker's Guide to The Galaxy", author: "Douglas Adams", publishedYear: 1965, genre: "Sci-Fi", pageCount: 320 }
 */
function addPageCount(book, pageCount) {
    // write your code here...
    return book;
}
/**
 * `addISBN` function:
 * - Accepts:
 *   - A `book` parameter of type `Book`.
 *   - An `ISBN` parameter of type `string`.
 * - Returns the same `Book` object with a new `ISBN` property.
 * Example:
 *  addISBN(book, "978-3-16-148410-0");
 *   // => {
 *   //       title: "Hitchhiker's Guide to The Galaxy",
 *   //       author: "Douglas Adams",
 *   //       publishedYear: 1965,
 *   //       genre: "Sci-Fi",
 *   //       ISBN: "978-3-16-148410-0" // ✅ added ISBN
 *   //    }
 */
function addISBN(book, ISBN) {
    // write your code here...
    return book;
}
/**
 * `updatePublishedYear` function:
 * - Accepts:
 *   - A `book` parameter of type `Book`.
 *   - A `newYear` parameter of type `number` representing the updated publish year.
 * - Returns the same `Book` object with an updated `publishedYear` property.
 * Example:
 *  updatePublishedYear(book, 2022);
 *    // => {
 *   //       title: "Hitchhiker's Guide to The Galaxy",
 *   //       author: "Douglas Adams",
 *   //       publishedYear: 2022, // ✅ updated publishedYear
 *   //       genre: "Sci-Fi",
 *   //       ISBN: "978-3-16-148410-0"
 *   //    }
 */
function updatePublishedYear(book, newYear) {
    // write your code here...
    return book;
}
/**
 * `addSecondAuthor` function:
 * - Accepts:
 *   - A `book` parameter of type `Book`.
 *   - An `additionalAuthor` parameter of type `string`.
 * - Updates the `author` property:
 *   - If `author` is already an array, it adds the new author.
 *   - If `author` is a string, it converts it to an array and adds the new author.
 * - Returns the updated `Book` object.
 * Example:
 *  addSecondAuthor(book, "John Doe");
 *   // => {
 *   //       title: "Hitchhiker's Guide to The Galaxy",
 *   //       author: ["Douglas Adams", "John Doe"], // ✅ two authors now
 *   //       publishedYear: 1965,
 *   //       genre: "Sci-Fi",
 *   //       ISBN: "978-3-16-148410-0"
 *   //    }
 */
function addSecondAuthor(book, additionalAuthor) {
    // write your code here...
    return book;
}
