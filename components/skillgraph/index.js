import { LitElement, html, css } from "https://unpkg.com/lit-element?module";

class SkillGraph extends LitElement {
  static get properties() {
    return {};
  }
  static get styles() {
    return css`
      .skill {
        display: flex;
        margin-top: 12px;
        align-items: center;
      }
      .skill .line {
        border-radius: 64px;
        background-color: #3b5961;
      }
      .name {
        display: flex;
        align-items: center;
      }
      .name p {
        font-size: 20px;
        font-family: "NanumSquare";
        margin: 0px;
        color: white;
        font-weight: 700;
        padding: 6px;
      }
      img {
        padding: 6px;
        height: 42px;
        width: 42px;
        border-radius: 47px;
      }
      .subskills {
        font-size: 18px;
        font-family: "NanumSquare";
        margin-left: 24px;
        font-weight: 700;
      }
      .legend {
        display: flex;
        justify-content: space-between;
        font-family: "IBMPlexSansKR-Bold";
        font-size: 24px;
        margin-top: 24px;
      }
      .legend p {
        margin: 0px;
      }
      @media screen and (max-width: 650px) {
        img {
          display: none;
        }
        .name p {
          padding: 8px 16px;
        }
        .legend {
          font-size: calc(2vw + 7px);
        }
      }
    `;
  }
  skills = [
    {
      name: "타입스크립트",
      icon: "/assets/image/typescript.svg",
      level: 80,
      color: "#579db4",
    },
    {
      name: "디노",
      icon: "/assets/image/deno.svg",
      level: 60,
      color: "#4c6162",
    },
    {
      name: "리액트",
      icon: "/assets/image/react.svg",
      subSkills: [
        "Styled Component(emotion)",
        "react-router",
        "Functional / Hooks API",
      ],
      level: 87,
      color: "#5eb8bf",
    },
    {
      name: "리액트 네이티브",
      icon: "/assets/image/react.svg",
      level: 60,
      color: "#bf5e73",
    },
    {
      name: "노드JS",
      icon: "/assets/image/node.svg",
      level: 50,
      subSkills: ["ts-node", "express", "node-kakao", "koa"],
      color: "#62A761",
    },
    {
      name: "파이썬",
      icon: "/assets/image/python.svg",
      level: 40,
      color: "#DCC273",
    },
    {
      name: "깃",
      icon: "/assets/image/git.svg",
      level: 50,
      color: "#E68573",
    },
    {
      name: "Vue",
      icon: "/assets/image/vue.svg",
      level: 40,
      color: "#61A781",
    },
    {
      name: "Firebase",
      icon: "/assets/image/firebase.svg",
      level: 72,
      color: "#f6820c",
      subSkills: ["Functions", "Storage", "FireStore"],
    },
    {
      name: "스벨트",
      icon: "/assets/image/svelte.svg",
      level: 33,
      color: "#FF8158",
    },
    {
      name: "Docker",
      icon: "/assets/image/docker.svg",
      level: 28,
      color: "#5f99e6",
    },
  ];
  render() {
    return html`
      <div>
        <div class="legend">
          <p style="color: #4F4F4F">이름 / 수준</p>
          <p style="color: #71A1A0">배우는중..</p>
          <p style="color: #5471A7">토이프로젝트</p>
          <p style="color: #6F5FA7">프로덕션레벨</p>
        </div>
        ${this.skills.map(
          (skill) => html`
            <div class="skill">
              <div
                class="line"
                style="width: ${skill.level}%; background-color: ${skill.color}"
              >
                <div class="name">
                  <img src="${skill.icon}" />
                  <p>${skill.name}</p>
                </div>
              </div>
            </div>
            ${skill.subSkills &&
            html`
              <p class="subskills">
                └ ${skill.subSkills && skill.subSkills.join(", ")}
              </p>
            `}
          `
        )}
      </div>
    `;
  }
}

export default SkillGraph;
