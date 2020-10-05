import { LitElement, html, css } from "https://unpkg.com/lit-element?module";

class NavBar extends LitElement {
  static get styles() {
    return css`
      nav {
        padding: 60px 0px 0px;
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
      @media screen and (max-width: 840px) {
        nav {
          padding: 20px 0px 0px;
        }
      }
      @media screen and (max-width: 610px) {
        nav {
          flex-direction: column;
        }
        ul {
          margin: 20px 0px 0px;
        }
        li:first-child {
          margin: 0px;
        }
      }
      @media screen and (max-width: 400px) {
        ul {
          flex-direction: column;
        }
        li {
          margin: 6px 0px 0px;
        }
        nav {
          align-items: flex-start;
        }
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
