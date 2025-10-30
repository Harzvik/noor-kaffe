// Footer component example
class noorFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <footer>
            <p>Noor kaffe</p>
            <p>2025</p>
        </footer>
    `;
  }
}
customElements.define("noor-footer", noorFooter);
// Use tag <noor-footer></noor-footer> to include the footer in html files

// Template for defining new components
class defineClassHere extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <!-- Your component HTML here -->
    `;
  }
}
customElements.define("define-tag-here", defineClassHere);
/*                             ^                  ^
                Name of tag to use in html files. |
                                        Use the class you defined here.
                                        The class is only used for js reference,
                                        not in the HTML markup */