import { LitElement, html, css } from "https://unpkg.com/lit-element?module";

class Sidebar extends LitElement {
  static get properties() {
    return {
      items: {
        type: String,
      },
    };
  }
  static get styles() {
    return css`
      h2 {
        font-family: "IBMPlexSansKR-Bold";
        color: #b3b3b3;
        font-size: 24px;
        margin: 0px;
      }
      div + div {
        margin-top: 36px;
      }
      a {
        text-decoration: none;
      }
      div {
        width: 240px;
      }
      .wrapper {
        position: sticky;
        top: 50px;
      }
      @media screen and (max-width: 1100px) {
        .wrapper {
          display: none;
        }
      }
    `;
  }
  render() {
    const items = JSON.parse(this.items);
    if (items)
      return html` <div class="wrapper">
        ${items.map(
          (e) =>
            html`
              <div>
                <a href="#${e.anchor}"><h2>${e.name}</h2></a>
              </div>
            `
        )}
      </div>`;
  }
}

export default Sidebar;
