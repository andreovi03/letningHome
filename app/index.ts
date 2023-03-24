import * as compnents from './components/export.js'
import dataCategories from "./Data/dataCategories";
import dataTutorials from "./Data/dataTutorials";

import "./components/export.js";
import Categories, { Attribute } from "./components/Categories/categories.js";
import Tutorials, { Attribute1 } from "./components/Tutorials/tutorials.js";

class AppContainer extends HTMLElement {
    categoriesList: Categories[] = [];
    tutorialsList: Tutorials[] = [];

    constructor() {
        super();
        this.attachShadow({ mode: "open" });

        dataCategories.forEach((data) => {
            const categoriesCard = this.ownerDocument.createElement("my-categories") as Categories;
                categoriesCard.setAttribute(Attribute.image, data.image);
                categoriesCard.setAttribute(Attribute.tittle, data.title);
                this.categoriesList.push(categoriesCard);
        });

        dataTutorials.forEach((data) => {
            const tutorialsCard = this.ownerDocument.createElement("my-tutorials") as Tutorials;
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
        if(this.shadowRoot){
            this.shadowRoot.innerHTML=``
           }
    
           this.categoriesList.forEach((data) => {
            this.shadowRoot?.appendChild(data);
         });
   
         this.tutorialsList.forEach((data) => {
            this.shadowRoot?.appendChild(data);
         });
    }
}

customElements.define("app-container", AppContainer);