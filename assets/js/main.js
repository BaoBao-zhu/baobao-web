const siteData = window.siteData || {};
const tabs = [
  { label: "全部", value: "all" },
  { label: "CPU", value: "cpu" },
  { label: "NPU", value: "npu" },
  { label: "Agent", value: "agent" },
  { label: "Tooling", value: "tooling" }
];

let activeCategory = "all";
let activeQuery = "";

function resolveSiteLink(link) {
  if (!link || !link.startsWith("@/")) {
    return link;
  }

  const depth = Math.max(window.location.pathname.split("/").filter(Boolean).length - 1, 0);
  const prefix = depth > 0 ? "../".repeat(depth) : "./";
  return `${prefix}${link.slice(2)}`;
}

function limitItems(items, count) {
  return typeof count === "number" ? items.slice(0, count) : items;
}

function renderPapers(selector, count) {
  const target = document.getElementById(selector);
  if (!target) {
    return;
  }

  const papers = limitItems(siteData.papers || [], count);
  target.innerHTML = papers.map((paper) => `
    <article class="paper-card">
      <span class="paper-status">${paper.status}</span>
      <h4>${paper.title}</h4>
      <p class="paper-meta">${paper.venue}</p>
      <p class="paper-meta">${paper.note}</p>
      <div class="tag-row">
        ${(paper.tags || []).map((tag) => `<span class="mini-tag">${tag}</span>`).join("")}
      </div>
      <a class="paper-link" href="${resolveSiteLink(paper.link)}" target="_blank" rel="noreferrer">查看详情</a>
    </article>
  `).join("");
}

function renderTopics(selector, count) {
  const target = document.getElementById(selector);
  if (!target) {
    return;
  }

  const topics = limitItems(siteData.topics || [], count);
  target.innerHTML = topics.map((topic) => `
    <a class="overview-card" href="${resolveSiteLink(topic.link)}">
      <span class="card-tag">Topic</span>
      <h4>${topic.title}</h4>
      <p>${topic.meta}</p>
    </a>
  `).join("");
}

function renderToolbox(selector) {
  const target = document.getElementById(selector);
  if (!target) {
    return;
  }

  target.innerHTML = (siteData.toolboxLinks || []).map((item) => `
    <a class="toolbox-card" href="${resolveSiteLink(item.link)}" target="_blank" rel="noreferrer">
      <h4>${item.title}</h4>
      <p>${item.meta}</p>
    </a>
  `).join("");
}

function matchesQuery(resource, query) {
  if (!query) {
    return true;
  }

  const haystack = [
    resource.title,
    resource.meta,
    resource.type,
    ...(resource.keywords || [])
  ].join(" ").toLowerCase();

  return haystack.includes(query.toLowerCase());
}

function renderTabs() {
  const target = document.getElementById("resource-tabs");
  if (!target) {
    return;
  }

  target.innerHTML = tabs.map((tab) => `
    <button class="${tab.value === activeCategory ? "active" : ""}" data-category="${tab.value}">
      ${tab.label}
    </button>
  `).join("");

  target.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      activeCategory = button.dataset.category;
      renderTabs();
      renderResources("resource-list");
    });
  });
}

function renderResources(selector, count) {
  const target = document.getElementById(selector);
  if (!target) {
    return;
  }

  let resources = siteData.resources || [];

  if (selector === "resource-list" && document.getElementById("resource-tabs")) {
    resources = resources.filter((resource) => {
      const categoryMatch = activeCategory === "all" || resource.category === activeCategory;
      return categoryMatch && matchesQuery(resource, activeQuery);
    });
  }

  resources = limitItems(resources, count);

  const summary = document.getElementById("resource-summary");
  if (summary) {
    summary.textContent = `当前共显示 ${resources.length} 条资料`;
  }

  target.innerHTML = resources.length ? resources.map((resource) => `
    <article class="resource-card">
      <span class="resource-type">${resource.type}</span>
      <h4>${resource.title}</h4>
      <p class="resource-meta">${resource.meta}</p>
      <a class="resource-link" href="${resolveSiteLink(resource.link)}" target="_blank" rel="noreferrer">打开入口</a>
    </article>
  `).join("") : `
    <article class="resource-empty">
      <h4>没有匹配结果</h4>
      <p class="resource-meta">可以换一个关键词，或者直接在 assets/js/site-data.js 里新增学习文档条目。</p>
    </article>
  `;
}

function renderReference(selector, count) {
  const target = document.getElementById(selector);
  if (!target) {
    return;
  }

  const references = limitItems(siteData.references || [], count);
  target.innerHTML = references.map((item) => `
    <article class="resource-card">
      <span class="resource-type">${item.type}</span>
      <h4>${item.title}</h4>
      <p class="resource-meta">${item.meta}</p>
      <a class="resource-link" href="${resolveSiteLink(item.link)}" target="_blank" rel="noreferrer">打开入口</a>
    </article>
  `).join("");
}

function renderProfile() {
  const profileCard = document.getElementById("profile-card");
  const focusList = document.getElementById("focus-list");
  const profile = siteData.profile || {};

  if (profileCard) {
    profileCard.innerHTML = `
      <span class="card-tag">Profile</span>
      <h4>${profile.name || "Your Name"}</h4>
      <p class="paper-meta">${profile.title || ""}</p>
      <p>${profile.intro || ""}</p>
    `;
  }

  if (focusList) {
    focusList.innerHTML = `
      <div class="metric">
        <strong>${(profile.focus || []).length}</strong>
        <span>研究兴趣</span>
      </div>
      ${(profile.focus || []).map((item) => `
        <div class="metric">
          <strong>•</strong>
          <span>${item}</span>
        </div>
      `).join("")}
    `;
  }
}

function bindSearch() {
  const search = document.getElementById("resource-search");
  if (!search) {
    return;
  }

  search.addEventListener("input", (event) => {
    activeQuery = event.target.value.trim();
    renderResources("resource-list");
  });
}

function init() {
  const page = document.body.dataset.page;

  if (page === "home") {
    renderTopics("topic-list", 4);
    renderResources("note-list", 4);
    renderReference("reference-list", 4);
    renderToolbox("toolbox-list");
  }

  if (page === "topics") {
    renderTopics("topic-list");
  }

  if (page === "archive") {
    renderProfile();
    renderPapers("paper-list");
  }

  if (page === "resources") {
    renderTabs();
    bindSearch();
    renderResources("resource-list");
  }

  if (page === "reference") {
    renderReference("reference-list");
  }
}

init();
