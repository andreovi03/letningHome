export var Attribute1;
(function (Attribute1) {
    Attribute1["image"] = "image";
    Attribute1["tittle"] = "tittle";
    Attribute1["creator"] = "creator";
})(Attribute1 || (Attribute1 = {}));
class Tutorials extends HTMLElement {
    static get observedAttributes() {
        const attrs = {
            image: null,
            tittle: null,
            creator: null,
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
                <link rel="stylesheet"  href="./app/components/Tutorials/tutorials.css">
                <div class="TutorialsDiv">
                    <img class="imgT" src="${this.image}">
                    <h6 class="textT">${this.tittle}</h6>
                    <p>${this.creator}</p>
                </div>
                `;
        }
    }
}
customElements.define("my-tutorials", Tutorials);
export default Tutorials;
