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
      linkIcon: {
        type: String,
      },
      "no-round": {
        type: Boolean,
      },
    };
  }
  static get styles() {
    return css`
      div.wrapper {
        border: 2px solid #dbdbdb;
        padding: 20px 24px;
        font-family: NanumSquare;
      }
      div.header {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      div.header > img {
        fill: "818181";
      }
      h1 {
        font-size: 18px;
        margin: 0px;
        flex-basis: 1;
        flex-shrink: 0;
      }
      p {
        margin: 12px 0px 0px 0px;
        font-size: 18px;
      }
      a {
        text-decoration: none;
        color: inherit;
      }
      .smallicon {
        height: 20px;
        margin-right: 8px;
      }
      .smallicon.round {
        border-radius: 20px;
      }
      .iconandtitle {
        display: flex;
      }
    `;
  }
  render() {
    console.log(this, this.text);
    return html`
      <a href="${this.to}">
        <div class="wrapper">
          <div class="header">
            <div class="iconandtitle">
              ${this.linkIcon &&
              html`<img
                class="smallicon ${this["no-round"] ? "noround" : "round"}"
                src="${this.linkIcon}"
              />`}
              <h1>${this.title}</h1>
            </div>
            <img src="${this.iconSrc}" />
          </div>
          <p>${this.text}</p>
        </div>
      </a>
    `;
  }
}

export default CardLink;
