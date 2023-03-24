export enum Attribute1 {
    "image" = "image",
    "tittle" = "tittle",
    "creator" = "creator"

}

class Tutorials extends HTMLElement {
    image?: string;
    tittle?: string;
    creator?: string;

    static get observedAttributes() {
        const attrs: Record<Attribute1, null> = {
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

    attributeChangedCallback(
        propValue: Attribute1,
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