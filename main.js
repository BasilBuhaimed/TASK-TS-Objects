"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function getInput() {
    return __awaiter(this, void 0, void 0, function* () {
        // This is a placeholder - you'll need to implement actual input reading
        // For now, returning a mock value
        return "testUser";
    });
}
function eventQueue() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(`Please enter your username`);
        const input = yield getInput();
        console.log("testing");
        console.log(input);
    });
}
eventQueue();
