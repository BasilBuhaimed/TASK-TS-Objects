"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const faker_1 = require("@faker-js/faker");
const challenge_1 = require("../challenge");
describe("🌶️🌶️🌶️ Challenge", () => {
    let book;
    let newReview;
    beforeEach(() => {
        book = {
            title: faker_1.faker.book.title(),
            author: faker_1.faker.book.author(),
            publishedYear: faker_1.faker.date.past().getFullYear(),
            genre: faker_1.faker.book.genre(),
        };
        newReview = {
            reviewer: faker_1.faker.person.fullName(),
            comment: faker_1.faker.lorem.sentence(),
        };
    });
    describe("addReview", () => {
        it("should add a review to an exist array of reviews", () => {
            var _a;
            book.reviews = [
                {
                    reviewer: faker_1.faker.person.fullName(),
                    comment: faker_1.faker.lorem.sentence(),
                },
            ];
            const { reviewer, comment } = newReview;
            const updatedBook = (0, challenge_1.addReview)(book, reviewer, comment);
            expect(updatedBook.reviews).toContainEqual(newReview);
            expect((_a = updatedBook.reviews) === null || _a === void 0 ? void 0 : _a.length).toBe(2);
        });
        it("should create a review array if one didn't already exist", () => {
            const { reviewer, comment } = newReview;
            const updatedBook = (0, challenge_1.addReview)(book, reviewer, comment);
            expect(updatedBook.reviews).toContainEqual(newReview);
        });
    });
});
