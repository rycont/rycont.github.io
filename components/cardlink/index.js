import { LitElement, html, css } from "https://unpkg.com/lit-element?module";

class CardLink extends LitElement {
  static get properties() {
    return {
      title: {
        type: String,
      },
      text: {
        type: String,
      },
      iconSrc: {
        type: String,
      },
      to: {
        type: String,
      },
    };
  }
  static get styles() {
    return css`
      div.wrapper {
        border: 2px solid #dbdbdb;
        padding: 20px 24px;
      }
      div.header {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      img {
        fill: "818181";
      }
      h1 {
        font-size: 18px;
        margin: 0px;
      }
      p {
        margin: 12px 0px 0px 0px;
        font-size: 18px;
      }
      a {
        text-decoration: none;
        color: inherit;
      }
    `;
  }
  render() {
    console.log(this, this.text);
    return html`
      <a href="${this.to}">
        <div class="wrapper">
          <div class="header">
            <h1>${this.title}</h1>
            <img src="${this.iconSrc}" />
          </div>
          <p>${this.text}</p>
        </div>
      </a>
    `;
  }
}

export default CardLink;
