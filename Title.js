"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const slugify_1 = __importDefault(require("slugify"));
class Title {
    constructor({ data }) {
        this.data = data || { text: '', slug: '' };
        this.wrapper = document.createElement('h1');
        this.initializeStyles();
    }
    static get toolbox() {
        return {
            title: 'Title',
            icon: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M10.5 7h-4q-.625 0-1.062-.437T5 5.5t.438-1.062T6.5 4h11q.625 0 1.063.438T19 5.5t-.437 1.063T17.5 7h-4v11.5q0 .625-.437 1.063T12 20t-1.062-.437T10.5 18.5z"/></svg>', // Add your icon SVG here
        };
    }
    initializeStyles() {
        this.wrapper.style.margin = '0';
        this.wrapper.style.outline = 'none';
    }
    render() {
        return this.wrapper;
    }
    save(blockContent) {
        const text = blockContent.innerHTML;
        const slug = (0, slugify_1.default)(text, { lower: true });
        return {
            text,
            slug,
        };
    }
    validate(savedData) {
        return savedData.text.trim().length > 0;
    }
}
