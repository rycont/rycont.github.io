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
        min-height: 41px;
        width: 100%;
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
      .노드 {
        background-color: #62a761;
      }
      .크롬 {
        background-color: #cc6463;
      }
      .NPM {
        background-color: #ce2f2c;
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
        opacity: 0.5;
        transition: 1s var(--fast-animate);
        margin: 6px;
      }
      .tags_wrapper:not(.selected) .tag_selector,
      .tag_selector.selected {
        opacity: 1;
        transform: translateY(-10px);
      }
      .wrapper.selected > a > div {
        opacity: 0.1;
        transform: scale(0.9);
      }
      a > div.card_wrapper.selected {
        opacity: 1;
        transform: scale(1);
      }
    `;
  }
  projects = [
    {
      name: "엄랭",
      tags: ["언어", "TS", "디노", "노드"],
      descript: "인명으로 만들어진 프로그래밍 언어",
      image: "/assets/image/um.svg",
      link: "https://github.com/rycont/umjunsik-lang",
    },
    {
      name: "베네판다",
      tags: ["RN", "GCP", "도커", "TS", "노드"],
      descript: "베네듀 안드로이드 클라이언트 (비공식)",
      image: "/assets/image/benepanda.svg",
      link: "https://github.com/DIMI19WP/benepanda",
    },
    {
      name: "디미고인",
      tags: ["리액트", "TS"],
      descript: "디미고 교내 인트라넷 프론트엔드 개발",
      image: "/assets/image/dimigoin.svg",
      link: "https://github.com/dimigoin/dimigoin-front-v3/",
    },
    {
      name: "조사컴플릿",
      tags: ["노드", "TS", "NPM"],
      descript: "한국어 조사를 완성해주는 자바스크립트 라이브러리",
      link: "https://github.com/rycont/josa-complete",
    },
    {
      name: "SelfCheckV2",
      tags: ["노드", "TS"],
      descript: "리뉴얼된 자가진단 자동화",
      link: "https://github.com/rycont/nodejs-selfcheck-automation-v2",
      image: "/assets/image/selfcheck.png",
    },
    {
      name: "FlowChat",
      tags: ["노드", "리액트", "TS"],
      descript: "카카오톡 웹 클라이언트(개발중)",
      link: "https://github.com/flowchat-dev",
      image: "/assets/image/flowchat.png",
    },
    {
      name: "Gnex",
      tags: ["노드", "언어", "NPM"],
      descript: "준비된 한국형 언어",
      link: "https://github.com/rycont/Gnex",
    },
    {
      name: "AlwaysJS",
      tags: ["언어"],
      image: "/assets/image/alwaysjs.png",
      descript: "웹 자바스크립트 IDE",
      link: "https://github.com/rycont/Gnex",
    },
    {
      name: "BingShin",
      tags: ["크롬"],
      image: "/assets/image/bingshin.png",
      descript: "구글 => 빙 리디렉션 익스텐션",
      link: "https://github.com/rycont/Gnex",
    },
    {
      name: "지스트 와카타임 업데이터",
      tags: ["디노", "TS"],
      image: "/assets/image/wakatime.png",
      descript: "구글 => 빙 리디렉션 익스텐션",
      link: "https://github.com/rycont/gist-wakatime-display",
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
                  ${e.tags
                    .slice(0, 2)
                    .map((tag) => html` <div class="tag ${tag}">${tag}</div> `)}
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
