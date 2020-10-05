import { LitElement, html, css } from "https://unpkg.com/lit-element?module";

class NavBar extends LitElement {
  static get styles() {
    return css`
      nav {
        padding: 80px 0px 0px;
        display: flex;
        align-items: center;
      }
      img {
        height: 32px;
      }
      ul {
        display: flex;
        list-style-type: none;
        font-family: "IBMPlexSansKR-Bold";
        font-size: 24px;
        color: var(--text-green);
        margin: 0px 0px 0px 36px;
        padding: 0px;
      }
      li {
        margin-left: 36px;
      }
      a {
        text-decoration: none;
        color: inherit;
      }
    `;
  }
  render() {
    return html`
      <nav>
        <a href="/"><img src="/assets/image/textlogo.svg" /></a>
        <ul>
          <li>
            <a href="/">저는?</a>
          </li>
          <li>
            <a href="/developing">내 개발에 대하여</a>
          </li>
          <li>
            <a href="/contact">연락처</a>
          </li>
        </ul>
      </nav>
    `;
  }
}

export default NavBar;
