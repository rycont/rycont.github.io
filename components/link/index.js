import { LitElement, html, css } from "https://unpkg.com/lit-element?module";

class MyElement extends LitElement {
  static get properties() {
    return {
      to: {
        type: String,
      },
    };
  }
  static get styles() {
    return css`
      a {
        font-size: 27px;
        color: var(--text-pink);
        text-decoration: none;
        font-weight: 800;
        vertical-align: middle;
      }
      img {
        vertical-align: middle;
        width: 32px;
      }
    `;
  }
  render() {
    return html`
      <a href="${this.to}">
        <img src="/assets/icon/link.svg" />
        ${this.innerHTML}
      </a>
    `;
  }
}

export default MyElement;
