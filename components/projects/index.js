import { LitElement, html, css } from "https://unpkg.com/lit-element?module";

class Projects extends LitElement {
  static get styles() {
    return css`
      div.wrapper {
        display: flex;
        flex-wrap: wrap;
        margin: -6px;
      }
      div.card_wrapper {
        width: 180px;
        margin: 6px;
        transition: 1s var(--fast-animate);
      }
      img {
        display: block;
      }
      div.tag {
        font-family: "Noto Sans KR", sans-serif;
        font-weight: 900;
        font-size: 21px;
        padding: 5px 10px;
        color: white;
        margin: 0px !important;
        height: 41px;
        box-sizing: border-box;
      }
      .tags {
        display: flex;
        flex-wrap: wrap;
        position: relative;
        height: 0px;
        top: -41px;
      }
      .TS {
        background-color: #579db4;
      }
      .RN {
        background-color: #bf5e73;
      }
      .리액트 {
        background-color: #5eb8bf;
      }
      .뷰 {
        background-color: #8bbca4;
      }
      .언어 {
        background-color: #718896;
      }
      .디노 {
        background-color: #4c6162;
      }
      .GCP {
        background-color: #e2c251;
      }
      .도커 {
        background-color: #5f99e6;
      }
      h1 {
        font-weight: 900;
        font-size: 22px;
        font-family: NanumSquare;
        margin: 12px 0px 0px;
      }
      p {
        margin: 8px 0px 0px;
        font-family: NanumBarunGothic;
        font-size: 22px;
        line-height: 28px;
      }
      a {
        text-decoration: none;
        color: inherit;
      }
      .tags_wrapper {
        display: flex;
        margin: 27px -6px 21px;
        flex-wrap: wrap;
      }
      .tag_selector {
        font-family: "Noto Sans KR", sans-serif;
        font-weight: 900;
        font-size: 21px;
        padding: 6px 12px;
        color: white;
        border-radius: 6px;
        box-shadow: 0px 0px 18px rgba(0, 0, 0, 0.18);
        opacity: 0.3;
        transition: 1s var(--fast-animate);
        margin: 6px;
      }
      .tags_wrapper:not(.selected) .tag_selector,
      .tag_selector.selected {
        opacity: 1;
        transform: translateY(-10px);
      }
      .wrapper.selected > a > div {
        opacity: 0.3;
      }
      a > div.card_wrapper.selected {
        opacity: 1;
      }
    `;
  }
  projects = [
    {
      name: "엄랭",
      tags: ["언어", "TS", "디노"],
      descript: "인명으로 만들어진 프로그래밍 언어",
      image: "/assets/image/um.svg",
      link: "https://github.com/rycont/umjunsik-lang",
    },
    {
      name: "베네판다",
      tags: ["RN", "GCP", "도커"],
      descript: "베네듀 안드로이드 클라이언트 (비공식)",
      image: "/assets/image/benepanda.svg",
    },
  ];
  static get properties() {
    return {
      selected: {
        type: String,
      },
    };
  }
  render() {
    const tags = this.projects
      .map((e) => e.tags)
      .reduce((a, b) => [...a, ...b])
      .filter((e, i, a) => a.indexOf(e) === i);

    const tagClickHandler = (e) => {
      if (this.selected === e.target.innerText) this.selected = undefined;
      else this.selected = e.target.innerText;
      this.requestUpdate();
    };

    return html`
      <div class="tags_wrapper ${this.selected && "selected"}">
        ${tags.map(
          (e) =>
            html`
              <div
                class="tag_selector ${this.selected === e && "selected"} ${e}"
                @click="${tagClickHandler}"
              >
                ${e}
              </div>
            `
        )}
      </div>
      <div class="wrapper ${this.selected ? "selected" : ""}">
        ${this.projects.map(
          (e) => html`
            <a href="${e.link}">
              <div
                class="card_wrapper ${e.tags.includes(this.selected)
                  ? "selected"
                  : ""}"
              >
                <img src="${e.image}" />
                <div class="content_wrapper"></div>
                <div class="tags">
                  ${e.tags.map(
                    (tag) => html` <div class="tag ${tag}">${tag}</div> `
                  )}
                </div>
                <h1>${e.name}</h1>
                <p>${e.descript}</p>
              </div></a
            >
          `
        )}
      </div>
    `;
  }
}

export default Projects;
