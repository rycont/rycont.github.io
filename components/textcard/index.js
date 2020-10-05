import { LitElement, html, css } from "https://unpkg.com/lit-element?module";

class TextCard extends LitElement {
  static get styles() {
    return css`
      div {
        background-color: #efefef;
        padding: 16px;
        color: #3f3f3f;
        font-size: 18px;
        font-family: NanumBarunGothic;
        line-height: 24px;
      }
    `;
  }
  render() {
    return html` <div>${this.innerHTML}</div> `;
  }
}

export default TextCard;
