// Replace imageSrc values with your final poster image paths.
// Example: imageSrc: "assets/posters/class-2-poster.png"
const activityUrl = "https://script.google.com/macros/s/AKfycbwvvqpjxUDxk86gbdVjh8EVd_rA_RMzSHn1DR6YJNtaRuNo6Plf6EQV2a5accizl7U/exec";

const posters = [
  {
    id: "class-1",
    classNumber: 1,
    title: "1학년 1반 포스터",
    imageSrc: "assets/posters/class-1-poster.png",
    imageAlt: "1학년 1반 영화 포스터",
    copy: "“들리지 않아도 들리는 것처럼 이어진 이야기”",
    mainScene: "보리와 아빠가 마주 앉아 마음으로 소통하는 장면",
    description: "하늘빛 배경과 따뜻한 인물 구도를 통해, 말하지 않아도 서로에게 닿는 마음을 중심에 둔 포스터입니다.",
    intention: "1반은 보리와 아빠가 서로를 바라보는 장면에 담긴 소통의 온기에 주목했습니다. 넓은 하늘과 부드러운 빛을 배경으로 배치해, 소리보다 마음이 먼저 전해지는 영화의 정서를 표현했습니다.",
    quotePreview: "“마음으로 소통하는 따뜻한 영화”",
    relatedReviews: [
      "마음으로 소통하는 따뜻한 영화",
      "말하지 않아도 전할 수 있다",
      "‘하늘보리’보다 주인공 ‘보리’가 더 좋아졌다"
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

// Add, remove, or edit review cards here. The classNumber controls the class filter.
const reviews = [
  {
    id: "r-101",
    classNumber: 1,
    rating: 4,
    text: "마음으로 소통하는 따뜻한 영화",
    scene: "보리와 아빠가 마주 앉아 마음으로 소통하는 장면"
  },
  {
    id: "r-102",
    classNumber: 1,
    rating: 4,
    text: "말하지 않아도 전할 수 있다",
    scene: "보리와 가족이 마음을 확인하는 장면"
  },
  {
    id: "r-103",
    classNumber: 1,
    rating: 3,
    text: "‘하늘보리’보다 주인공 ‘보리’가 더 좋아졌다",
    scene: "보리의 매력이 드러나는 장면"
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
const reviewGrid = document.querySelector("#reviewGrid");
const activityFrame = document.querySelector("#activityFrame");
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

function createPosterImageMarkup(poster, imageClass = "", loading = "lazy") {
  if (poster.imageSrc) {
    return `
      <img
        class="${escapeHtml(imageClass)}"
        src="${escapeHtml(poster.imageSrc)}"
        alt="${escapeHtml(poster.imageAlt)}"
        loading="${escapeHtml(loading)}"
      >
    `;
  }

  return `
    <div
      class="poster-placeholder ${escapeHtml(imageClass)}"
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
        ${createPosterImageMarkup(poster, "modal-poster-image", "eager")}
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
  activityFrame.src = activityUrl;

  renderPosters();
  renderReviews();

  filterButtons.forEach((button) => {
    button.addEventListener("click", handleFilterClick);
  });

  document.addEventListener("click", handleDocumentClick);
  document.addEventListener("keydown", handleKeydown);
}

init();
