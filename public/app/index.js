import dataCategories from "./Data/dataCategories";
import dataTutorials from "./Data/dataTutorials";
import "./components/export.js";
import { Attribute } from "./components/Categories/categories.js";
import { Attribute1 } from "./components/Tutorials/tutorials.js";
class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.categoriesList = [];
        this.tutorialsList = [];
        this.attachShadow({ mode: "open" });
        dataCategories.forEach((data) => {
            const categoriesCard = this.ownerDocument.createElement("my-categories");
            categoriesCard.setAttribute(Attribute.image, data.image);
            categoriesCard.setAttribute(Attribute.tittle, data.title);
            this.categoriesList.push(categoriesCard);
        });
        dataTutorials.forEach((data) => {
            const tutorialsCard = this.ownerDocument.createElement("my-tutorials");
            tutorialsCard.setAttribute(Attribute1.image, data.image);
            tutorialsCard.setAttribute(Attribute1.tittle, data.title);
            tutorialsCard.setAttribute(Attribute1.creator, data.creator);
            this.tutorialsList.push(tutorialsCard);
        });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = ``;
        }
        this.categoriesList.forEach((data) => {
            var _a;
            (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(data);
        });
        this.tutorialsList.forEach((data) => {
            var _a;
            (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(data);
        });
    }
}
customElements.define("app-container", AppContainer);
