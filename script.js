// Replace the sample data below with actual student worksheet data and poster image paths.
// For poster images, put files in a folder such as images/ and change imageSrc to "images/class-1-poster.jpg".
const posters = [
  {
    id: "class-1",
    classNumber: 1,
    title: "1학년 1반 포스터",
    imageSrc: "",
    imageAlt: "1학년 1반 영화 포스터",
    copy: "말보다 먼저 도착한 마음, 보리가 바라본 세상",
    mainScene: "가족의 마음을 조용히 바라보는 보리의 장면",
    description: "인물의 표정보다 주변의 공기와 색을 크게 살려, 보리가 느낀 외로움과 따뜻함이 함께 보이도록 구성한 포스터입니다.",
    intention: "1반은 보리가 가족을 사랑하지만 쉽게 말하지 못하는 마음에 주목했습니다. 포스터에는 넓은 하늘과 잔잔한 바다의 이미지를 배치해, 말로 다 설명되지 않는 감정이 천천히 번지는 느낌을 담았습니다.",
    quotePreview: "“보리가 혼자라고 느끼는 순간에도 가족을 향한 마음은 계속 남아 있었다.”",
    relatedReviews: [
      "보리의 마음을 따라가다 보니 조용한 장면도 크게 느껴졌다.",
      "가족을 사랑하는 마음이 말보다 오래 남는 영화였다."
    ]
  },
  {
    id: "class-2",
    classNumber: 2,
    title: "1학년 2반 포스터",
    imageSrc: "",
    imageAlt: "1학년 2반 영화 포스터",
    copy: "다르게 들리는 세상 속에서 서로를 이해하는 법",
    mainScene: "소리와 침묵 사이에서 마음을 나누는 장면",
    description: "서로 다른 방식으로 세상을 받아들이는 인물들을 대비시키며, 이해가 시작되는 순간을 중심에 둔 포스터입니다.",
    intention: "2반은 영화가 보여 주는 소통의 방식을 중심으로 포스터를 기획했습니다. 손짓, 시선, 표정처럼 작은 표현들이 모여 마음을 전한다는 점을 살리기 위해 부드러운 회청색과 필름 프레임을 사용했습니다.",
    quotePreview: "“듣는다는 것은 소리만이 아니라 마음을 보는 일이라는 생각이 들었다.”",
    relatedReviews: [
      "조용한 영화였지만 마음속에서는 많은 말이 오갔다.",
      "서로를 이해하려는 장면들이 가장 따뜻하게 느껴졌다."
    ]
  },
  {
    id: "class-3",
    classNumber: 3,
    title: "1학년 3반 포스터",
    imageSrc: "",
    imageAlt: "1학년 3반 영화 포스터",
    copy: "보리가 다시 마주한 가족, 그리고 자기 자신의 목소리",
    mainScene: "보리가 자신의 진심을 마주하는 장면",
    description: "성장 영화의 흐름을 살려, 보리가 자신의 마음을 받아들이는 순간을 밝은 여백과 손글씨 문장으로 표현한 포스터입니다.",
    intention: "3반은 영화 속 보리가 겪는 변화에 집중했습니다. 포스터의 여백은 보리가 앞으로 채워 갈 시간을 뜻하며, 따뜻한 베이지와 하늘색은 성장의 아픔과 희망을 함께 나타냅니다.",
    quotePreview: "“보리가 달라진 것이 아니라, 자기 마음을 더 잘 알게 된 것 같다.”",
    relatedReviews: [
      "보리가 자기 마음을 알아 가는 과정이 가장 인상 깊었다.",
      "마지막에는 보리를 응원하고 싶은 마음이 들었다."
    ]
  }
];

// Worksheet cards are sample exhibition records. Add or edit entries after collecting student responses.
const worksheets = [
  {
    id: "w-101",
    classNumber: 1,
    studentLabel: "학생 A",
    scene: "가족의 마음을 조용히 바라보는 보리의 장면",
    reason: "보리가 외롭지만 가족을 미워하지 않는 마음이 느껴져서 오래 기억에 남았다.",
    rating: 5,
    review: "말하지 못한 마음까지 들려주는 영화였다."
  },
  {
    id: "w-102",
    classNumber: 1,
    studentLabel: "학생 B",
    scene: "바다와 하늘이 함께 보이는 장면",
    reason: "넓은 풍경 속에서 보리의 마음이 더 크게 느껴졌고 포스터로 표현하기 좋다고 생각했다.",
    rating: 4,
    review: "잔잔하지만 마음이 오래 남았다."
  },
  {
    id: "w-201",
    classNumber: 2,
    studentLabel: "학생 C",
    scene: "소리와 침묵 사이에서 마음을 나누는 장면",
    reason: "말이 없어도 서로를 이해하려는 모습이 영화의 주제와 가장 잘 어울렸다.",
    rating: 5,
    review: "듣는다는 말의 뜻을 다시 생각하게 했다."
  },
  {
    id: "w-202",
    classNumber: 2,
    studentLabel: "학생 D",
    scene: "손짓과 표정으로 대화하는 장면",
    reason: "표정 하나에도 마음이 담길 수 있다는 점이 인상 깊었다.",
    rating: 4,
    review: "조용한 장면이 더 크게 느껴졌다."
  },
  {
    id: "w-301",
    classNumber: 3,
    studentLabel: "학생 E",
    scene: "보리가 자신의 진심을 마주하는 장면",
    reason: "보리가 조금씩 성장하는 모습이 보여서 영화의 마지막 감정과 잘 이어졌다.",
    rating: 5,
    review: "보리의 마음을 응원하게 되는 영화였다."
  },
  {
    id: "w-302",
    classNumber: 3,
    studentLabel: "학생 F",
    scene: "가족을 다시 바라보는 장면",
    reason: "처음에는 답답했지만 마지막에는 서로를 이해하려는 마음이 보여서 따뜻했다.",
    rating: 4,
    review: "가족을 새롭게 보는 법을 알려 주었다."
  }
];

// Scene archive data can be used for counts, representative scenes, or class notes.
const scenes = [
  {
    title: "가족의 마음을 조용히 바라보는 보리의 장면",
    note: "1반 포스터의 중심 장면 · 외로움과 애정"
  },
  {
    title: "소리와 침묵 사이에서 마음을 나누는 장면",
    note: "2반 포스터의 중심 장면 · 소통과 이해"
  },
  {
    title: "보리가 자신의 진심을 마주하는 장면",
    note: "3반 포스터의 중심 장면 · 성장과 자기 이해"
  },
  {
    title: "바다와 하늘이 함께 보이는 장면",
    note: "여러 학생이 고른 풍경 장면 · 여백과 감정"
  }
];

// Review cards are intentionally separated from worksheets so they can be edited for public display.
const reviews = [
  {
    id: "r-101",
    classNumber: 1,
    rating: 5,
    text: "보리의 마음을 따라가다 보니 조용한 장면도 크게 느껴졌다.",
    scene: "가족의 마음을 조용히 바라보는 장면"
  },
  {
    id: "r-102",
    classNumber: 1,
    rating: 4,
    text: "잔잔하지만 마음이 오래 남는 영화였다.",
    scene: "바다와 하늘이 함께 보이는 장면"
  },
  {
    id: "r-103",
    classNumber: 1,
    rating: 5,
    text: "가족을 사랑하는 마음이 말보다 오래 남았다.",
    scene: "가족을 다시 바라보는 장면"
  },
  {
    id: "r-201",
    classNumber: 2,
    rating: 5,
    text: "듣는다는 것은 소리만이 아니라 마음을 보는 일이라는 생각이 들었다.",
    scene: "소리와 침묵 사이에서 마음을 나누는 장면"
  },
  {
    id: "r-202",
    classNumber: 2,
    rating: 4,
    text: "조용한 영화였지만 마음속에서는 많은 말이 오갔다.",
    scene: "손짓과 표정으로 대화하는 장면"
  },
  {
    id: "r-203",
    classNumber: 2,
    rating: 5,
    text: "서로를 이해하려는 장면들이 가장 따뜻하게 느껴졌다.",
    scene: "소통이 시작되는 장면"
  },
  {
    id: "r-301",
    classNumber: 3,
    rating: 5,
    text: "보리가 자기 마음을 알아 가는 과정이 가장 인상 깊었다.",
    scene: "보리가 자신의 진심을 마주하는 장면"
  },
  {
    id: "r-302",
    classNumber: 3,
    rating: 4,
    text: "마지막에는 보리를 응원하고 싶은 마음이 들었다.",
    scene: "성장의 감정이 드러나는 장면"
  },
  {
    id: "r-303",
    classNumber: 3,
    rating: 5,
    text: "보리가 달라진 것이 아니라, 자기 마음을 더 잘 알게 된 것 같다.",
    scene: "자기 자신을 이해하는 장면"
  }
];

const posterGrid = document.querySelector("#posterGrid");
const worksheetBoard = document.querySelector("#worksheetBoard");
const sceneList = document.querySelector("#sceneList");
const reviewGrid = document.querySelector("#reviewGrid");
const filterButtons = document.querySelectorAll(".filter-button");
const modal = document.querySelector("#posterModal");
const modalPanel = modal.querySelector(".modal-panel");
const modalBody = document.querySelector("#modalBody");
let lastFocusedElement = null;

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function renderStars(rating) {
  const maxStars = 5;
  const filled = Math.max(0, Math.min(maxStars, Number(rating)));
  return `${"★".repeat(filled)}${"☆".repeat(maxStars - filled)}`;
}

function createPosterImageMarkup(poster, modifierClass = "") {
  if (poster.imageSrc) {
    return `
      <img
        src="${escapeHtml(poster.imageSrc)}"
        alt="${escapeHtml(poster.imageAlt)}"
        loading="lazy"
      >
    `;
  }

  return `
    <div
      class="poster-placeholder ${modifierClass}"
      role="img"
      aria-label="${escapeHtml(poster.imageAlt)} 이미지가 들어갈 자리"
    >
      <div class="placeholder-text">
        <span>Poster Placeholder</span>
        <strong>${escapeHtml(poster.title)}</strong>
      </div>
    </div>
  `;
}

function renderPosters() {
  posterGrid.innerHTML = posters.map((poster) => `
    <article class="poster-card">
      <div class="poster-art">
        ${createPosterImageMarkup(poster)}
      </div>
      <div class="poster-content">
        <h3>${escapeHtml(poster.title)}</h3>
        <p class="poster-copy">${escapeHtml(poster.copy)}</p>
        <div class="poster-details">
          <div class="detail-row">
            <strong>이 포스터에 담긴 명장면</strong>
            <p>${escapeHtml(poster.mainScene)}</p>
          </div>
          <div class="detail-row">
            <strong>학생 한줄평 일부</strong>
            <p>${escapeHtml(poster.quotePreview)}</p>
          </div>
        </div>
        <button
          class="button"
          type="button"
          data-poster-id="${escapeHtml(poster.id)}"
          aria-label="${escapeHtml(poster.title)} 자세히 보기"
        >
          자세히 보기
        </button>
      </div>
    </article>
  `).join("");
}

function renderWorksheets() {
  worksheetBoard.innerHTML = worksheets.map((item) => `
    <article class="worksheet-card">
      <div class="worksheet-meta">
        <span class="class-badge">1학년 ${escapeHtml(item.classNumber)}반</span>
        <span class="student-code">${escapeHtml(item.studentLabel)}</span>
      </div>
      <h3>${escapeHtml(item.scene)}</h3>
      <div class="worksheet-field">
        <strong>선택 이유</strong>
        <p>${escapeHtml(item.reason)}</p>
      </div>
      <div class="worksheet-field">
        <strong>별점</strong>
        <p>
          <span class="stars" aria-label="${escapeHtml(item.rating)}점 만점 5점">
            ${renderStars(item.rating)}
          </span>
        </p>
      </div>
      <div class="worksheet-field">
        <strong>한줄평</strong>
        <p>${escapeHtml(item.review)}</p>
      </div>
    </article>
  `).join("");
}

function renderScenes() {
  sceneList.innerHTML = scenes.map((scene) => `
    <article class="scene-item">
      <strong>${escapeHtml(scene.title)}</strong>
      <span>${escapeHtml(scene.note)}</span>
    </article>
  `).join("");
}

function renderReviews(filter = "all") {
  const filteredReviews = filter === "all"
    ? reviews
    : reviews.filter((review) => String(review.classNumber) === filter);

  reviewGrid.innerHTML = filteredReviews.map((review) => `
    <article class="review-card">
      <span class="stars" aria-label="${escapeHtml(review.rating)}점 만점 5점">
        ${renderStars(review.rating)}
      </span>
      <blockquote>${escapeHtml(review.text)}</blockquote>
      <footer>1학년 ${escapeHtml(review.classNumber)}반 · ${escapeHtml(review.scene)}</footer>
    </article>
  `).join("");
}

function openPosterModal(posterId) {
  const poster = posters.find((item) => item.id === posterId);

  if (!poster) {
    return;
  }

  lastFocusedElement = document.activeElement;

  modalBody.innerHTML = `
    <div class="modal-layout">
      <div class="modal-poster">
        ${createPosterImageMarkup(poster, "poster-placeholder-modal")}
      </div>
      <div class="modal-content">
        <p class="modal-kicker">1학년 ${escapeHtml(poster.classNumber)}반 포스터</p>
        <h2 id="modalTitle">${escapeHtml(poster.title)}</h2>
        <div class="modal-section">
          <h3>대표 명장면</h3>
          <p>${escapeHtml(poster.mainScene)}</p>
        </div>
        <div class="modal-section">
          <h3>대표 카피</h3>
          <p>${escapeHtml(poster.copy)}</p>
        </div>
        <div class="modal-section">
          <h3>포스터 기획 의도</h3>
          <p>${escapeHtml(poster.intention)}</p>
        </div>
        <div class="modal-section">
          <h3>관련 학생 한줄평</h3>
          <ul class="modal-reviews">
            ${poster.relatedReviews.map((review) => `<li>${escapeHtml(review)}</li>`).join("")}
          </ul>
        </div>
      </div>
    </div>
  `;

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  modalPanel.focus();
}

function closePosterModal() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  modalBody.innerHTML = "";

  if (lastFocusedElement) {
    lastFocusedElement.focus();
  }
}

function handleFilterClick(event) {
  const button = event.currentTarget;
  const filter = button.dataset.filter;

  filterButtons.forEach((item) => {
    const isActive = item === button;
    item.classList.toggle("is-active", isActive);
    item.setAttribute("aria-pressed", String(isActive));
  });

  renderReviews(filter);
}

function handleDocumentClick(event) {
  const posterButton = event.target.closest("[data-poster-id]");
  const closeButton = event.target.closest("[data-modal-close]");

  if (posterButton) {
    openPosterModal(posterButton.dataset.posterId);
  }

  if (closeButton) {
    closePosterModal();
  }
}

function handleKeydown(event) {
  if (event.key === "Escape" && modal.classList.contains("is-open")) {
    closePosterModal();
  }
}

function init() {
  renderPosters();
  renderWorksheets();
  renderScenes();
  renderReviews();

  filterButtons.forEach((button) => {
    button.addEventListener("click", handleFilterClick);
  });

  document.addEventListener("click", handleDocumentClick);
  document.addEventListener("keydown", handleKeydown);
}

init();
