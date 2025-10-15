"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const faker_1 = require("@faker-js/faker");
const objects_1 = require("../objects");
describe("Books", () => {
    let book;
    beforeEach(() => {
        book = {
            title: faker_1.faker.book.title(),
            author: faker_1.faker.book.author(),
            publishedYear: faker_1.faker.date.past({ years: 100 }).getFullYear(),
            genre: faker_1.faker.book.genre(),
        };
    });
    describe("Understanding Objects", () => {
        describe("createBook", () => {
            it("should create a book object with specified properties", () => {
                const { title, author, publishedYear, genre } = book;
                expect((0, objects_1.createBook)(title, author, publishedYear, genre)).toEqual(book);
            });
        });
        describe("printBookTitleAndYear", () => {
            it("should return the book title and published year as a string", () => {
                const { title, publishedYear } = book;
                expect((0, objects_1.printBookTitleAndYear)(book)).toBe(`${title} ${publishedYear}`);
            });
            it("should access the title using dot notation", () => {
                expect(objects_1.printBookTitleAndYear.toString().includes("book.title")).toBeTruthy();
            });
            it("should access the publishYear using bracket notation", () => {
                expect(objects_1.printBookTitleAndYear.toString().includes('book["publishedYear"]')).toBeTruthy();
            });
        });
    });
    describe("Modifying Objects", () => {
        describe("addPageCount", () => {
            it("should add a pageCount property to the book", () => {
                const bookCopy = Object.assign({}, book);
                const pageCount = faker_1.faker.number.int({ min: 100, max: 2000 });
                const updatedBook = (0, objects_1.addPageCount)(bookCopy, pageCount);
                expect(updatedBook.pageCount).toBe(pageCount);
            });
            it("should modify and return the original book object, NOT a copy", () => {
                const bookCopy = Object.assign({}, book);
                const pageCount = faker_1.faker.number.int({ min: 100, max: 2000 });
                const updatedBook = (0, objects_1.addPageCount)(bookCopy, pageCount);
                expect(updatedBook).toBe(bookCopy);
            });
        });
        describe("addISBN", () => {
            it("should add an ISBN to the book", () => {
                const bookCopy = Object.assign({}, book);
                const isbn = faker_1.faker.commerce.isbn();
                const updatedBook = (0, objects_1.addISBN)(bookCopy, isbn);
                expect(updatedBook.ISBN).toBe(isbn);
            });
            it("should modify and return the original book object, NOT a copy", () => {
                const bookCopy = Object.assign({}, book);
                const isbn = faker_1.faker.commerce.isbn();
                const updatedBook = (0, objects_1.addISBN)(bookCopy, isbn);
                expect(updatedBook).toBe(bookCopy);
            });
        });
        describe("updatePublishedYear", () => {
            it("should update the published year of the book", () => {
                const bookCopy = Object.assign({}, book);
                const publishYear = faker_1.faker.date.past({ years: 100 }).getFullYear();
                const updatedBook = (0, objects_1.updatePublishedYear)(bookCopy, publishYear);
                expect(updatedBook.publishedYear).toBe(publishYear);
            });
            it("should modify and return the original book object, NOT a copy", () => {
                const bookCopy = Object.assign({}, book);
                const publishYear = faker_1.faker.date.past({ years: 100 }).getFullYear();
                const updatedBook = (0, objects_1.updatePublishedYear)(bookCopy, publishYear);
                expect(updatedBook).toBe(bookCopy);
            });
        });
        describe("addSecondAuthor", () => {
            it("should modify the author property to include an additional author", () => {
                const bookCopy = Object.assign({}, book);
                const secondAuthor = faker_1.faker.person.fullName();
                const updatedBook = (0, objects_1.addSecondAuthor)(bookCopy, secondAuthor);
                expect(updatedBook.author).toEqual([book.author, secondAuthor]);
            });
            it("should modify and return the original book object, NOT a copy", () => {
                const bookCopy = Object.assign({}, book);
                const secondAuthor = faker_1.faker.person.fullName();
                const updatedBook = (0, objects_1.addSecondAuthor)(bookCopy, secondAuthor);
                expect(updatedBook).toBe(bookCopy);
            });
        });
    });
});
