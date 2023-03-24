export var Attribute;
(function (Attribute) {
    Attribute["image"] = "image";
    Attribute["tittle"] = "tittle";
})(Attribute || (Attribute = {}));
class Categories extends HTMLElement {
    static get observedAttributes() {
        const attrs = {
            image: null,
            tittle: null,
        };
        return Object.keys(attrs);
    }
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        this.render();
    }
    attributeChangedCallback(propValue, _, newValue) {
        switch (propValue) {
            default:
                this[propValue] = newValue;
                break;
        }
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
                <link rel="stylesheet"  href="./app/components/Categories/categories.css">
                <div class="categoriesDiv">
                    <img class="imgC" src="${this.image}">
                    <h3 class="textC">${this.tittle}</h3>
                </div>
                `;
        }
    }
}
customElements.define("my-categories", Categories);
export default Categories;
