export enum Attribute {
    "image" = "image",
    "tittle" = "tittle",

}

class Categories extends HTMLElement {
    image?: string;
    tittle?: string;

    static get observedAttributes() {
        const attrs: Record<Attribute, null> = {
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

    attributeChangedCallback(
        propValue: Attribute,
        _: string | undefined,
        newValue: string | undefined
        ) {
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