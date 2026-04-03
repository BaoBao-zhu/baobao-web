const papers = [
  {
    title: "这里替换成你的最新论文标题",
    status: "Latest",
    venue: "Conference / Journal / arXiv",
    note: "这里可以写论文一句话简介，例如研究问题、亮点方法或实验结果。",
    tags: ["NPU", "Sparse"],
    link: "#"
  },
  {
    title: "正在投稿或在研的工作也可以展示",
    status: "In Progress",
    venue: "Ongoing Research",
    note: "如果还没公开链接，可以先展示研究主题和简短说明，后面再替换为正式地址。",
    tags: ["Compiler", "System"],
    link: "#"
  },
  {
    title: "历史代表作或你最想展示的一篇论文",
    status: "Selected",
    venue: "Featured Publication",
    note: "这里适合放代表性工作，用来让访问者快速了解你的方向和贡献。",
    tags: ["RISC-V", "Architecture"],
    link: "#"
  }
];

const resources = [
  {
    type: "方向阅读",
    category: "study",
    title: "Sparse Computing 阅读清单",
    meta: "整理稀疏计算相关论文、综述、项目仓库和个人短评。",
    keywords: ["sparse", "accelerator", "paper"],
    link: "#"
  },
  {
    type: "课程笔记",
    category: "study",
    title: "体系结构 / 编译原理 / AI 加速器笔记",
    meta: "把你学习过程中的精华内容浓缩成索引，方便自己和别人查找。",
    keywords: ["compiler", "architecture", "npu"],
    link: "#"
  },
  {
    type: "常用入口",
    category: "reference",
    title: "Scholar / arXiv / GitHub / DBLP",
    meta: "把最常用的学术检索与资料入口聚合到一个页面里。",
    keywords: ["scholar", "arxiv", "dblp", "github"],
    link: "#"
  },
  {
    type: "项目资料",
    category: "study",
    title: "实验代码与复现实验记录",
    meta: "给课程项目、论文代码复现和实验备忘录留一个长期空间。",
    keywords: ["experiment", "code", "reproduce"],
    link: "#"
  },
  {
    type: "查阅索引",
    category: "reference",
    title: "RISC-V / Linux / Simulator 文档入口",
    meta: "适合放架构手册、ABI、编译链和模拟器相关文档链接。",
    keywords: ["risc-v", "simulator", "linux"],
    link: "#"
  }
];

const timelineEvents = [
  {
    time: "2026",
    title: "这里可以写最新阶段成果",
    desc: "例如论文投稿、代码开源、项目上线、课程完成等。"
  },
  {
    time: "2025",
    title: "整理核心方向阅读清单",
    desc: "把你在一个方向上的重点论文和资料做成长期导航页。"
  },
  {
    time: "2024",
    title: "搭建个人研究主页",
    desc: "沉淀个人简介、研究兴趣、论文与笔记入口。"
  }
];

const toolboxLinks = [
  {
    title: "Google Scholar",
    meta: "展示引用与公开论文列表",
    link: "https://scholar.google.com"
  },
  {
    title: "GitHub",
    meta: "集中放项目代码、复现实验和工具脚本",
    link: "https://github.com"
  },
  {
    title: "CV / Resume",
    meta: "后续可以换成你自己的 PDF 链接",
    link: "#"
  },
  {
    title: "Reading Notes",
    meta: "你自己的笔记索引页或博客入口",
    link: "#"
  }
];

const tabs = [
  { label: "全部", value: "all" },
  { label: "学习资料", value: "study" },
  { label: "查阅入口", value: "reference" }
];

const paperList = document.getElementById("paper-list");
const resourceList = document.getElementById("resource-list");
const resourceTabs = document.getElementById("resource-tabs");
const resourceSearch = document.getElementById("resource-search");
const resourceSummary = document.getElementById("resource-summary");
const timelineList = document.getElementById("timeline-list");
const toolboxList = document.getElementById("toolbox-list");

let activeCategory = "all";
let activeQuery = "";

function renderPapers() {
  paperList.innerHTML = papers.map((paper) => `
    <article class="paper-card">
      <span class="paper-status">${paper.status}</span>
      <h4>${paper.title}</h4>
      <p class="paper-meta">${paper.venue}</p>
      <p class="paper-meta">${paper.note}</p>
      <div class="tag-row">
        ${paper.tags.map((tag) => `<span class="mini-tag">${tag}</span>`).join("")}
      </div>
      <a class="paper-link" href="${paper.link}" target="_blank" rel="noreferrer">查看详情</a>
    </article>
  `).join("");
}

function renderTabs(category) {
  resourceTabs.innerHTML = tabs.map((tab) => `
    <button class="${tab.value === category ? "active" : ""}" data-category="${tab.value}">
      ${tab.label}
    </button>
  `).join("");

  resourceTabs.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      activeCategory = button.dataset.category;
      renderTabs(activeCategory);
      renderResources();
    });
  });
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

function renderResources() {
  const filtered = resources.filter((resource) => {
    const categoryMatch = activeCategory === "all" || resource.category === activeCategory;
    return categoryMatch && matchesQuery(resource, activeQuery);
  });

  resourceSummary.textContent = `当前共显示 ${filtered.length} 条资料`;

  resourceList.innerHTML = filtered.length ? filtered.map((resource) => `
    <article class="resource-card">
      <span class="resource-type">${resource.type}</span>
      <h4>${resource.title}</h4>
      <p class="resource-meta">${resource.meta}</p>
      <a class="resource-link" href="${resource.link}" target="_blank" rel="noreferrer">打开入口</a>
    </article>
  `).join("") : `
    <article class="resource-empty">
      <h4>没有匹配结果</h4>
      <p class="resource-meta">可以换一个关键词，或者直接在 script.js 里新增资料条目。</p>
    </article>
  `;
}

function renderTimeline() {
  timelineList.innerHTML = timelineEvents.map((event) => `
    <article class="timeline-item">
      <div class="timeline-time">${event.time}</div>
      <div class="timeline-content">
        <h4>${event.title}</h4>
        <p>${event.desc}</p>
      </div>
    </article>
  `).join("");
}

function renderToolbox() {
  toolboxList.innerHTML = toolboxLinks.map((item) => `
    <a class="toolbox-card" href="${item.link}" target="_blank" rel="noreferrer">
      <h4>${item.title}</h4>
      <p>${item.meta}</p>
    </a>
  `).join("");
}

resourceSearch.addEventListener("input", (event) => {
  activeQuery = event.target.value.trim();
  renderResources();
});

renderPapers();
renderTabs(activeCategory);
renderResources();
renderTimeline();
renderToolbox();
