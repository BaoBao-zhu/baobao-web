window.siteData = {
  profile: {
    name: "BaoBao",
    title: "一个以学习记录、资料整理和技术查询为主的安静站点",
    intro: "这里不强调完整的个人履历，而是更关注持续积累的知识内容。可以只保留非常简短的自我说明，把重点放在长期有用的资料和笔记上。",
    focus: [
      "CPU Architecture",
      "Neural Network Accelerators",
      "AI Agents",
      "Systems / Tooling"
    ]
  },
  topics: [
    {
      title: "CPU 体系结构",
      meta: "围绕流水线、乱序执行、Cache、分支预测、内存一致性等主题建立长期学习地图。",
      link: "@/pages/resources/index.html"
    },
    {
      title: "神经网络加速器",
      meta: "整理 NPU、数据流、稀疏计算、片上存储、调度与编译相关资料。",
      link: "@/pages/resources/index.html"
    },
    {
      title: "AI Agent",
      meta: "记录 Agent 框架、工具调用、提示设计、工作流编排和常用命令。",
      link: "@/pages/resources/index.html"
    },
    {
      title: "系统与工具链",
      meta: "沉淀 Linux、Git、脚本工具、调试方法和日常开发命令。",
      link: "@/pages/reference/index.html"
    }
  ],
  papers: [
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
  ],
  resources: [
    {
      type: "CPU 体系结构",
      category: "cpu",
      title: "从五级流水到乱序执行的学习路线",
      meta: "按概念、经典教材、论文和个人总结来组织 CPU 体系结构学习笔记。",
      keywords: ["cpu", "architecture", "pipeline", "ooo"],
      link: "#"
    },
    {
      type: "神经网络加速器",
      category: "npu",
      title: "NPU 数据流、存储层次与编译整理",
      meta: "围绕 PE 阵列、数据复用、片上缓存和编译映射方式整理成系列文档。",
      keywords: ["npu", "accelerator", "compiler", "systolic"],
      link: "#"
    },
    {
      type: "AI Agent",
      category: "agent",
      title: "AI Agent 工具调用与工作流笔记",
      meta: "记录 Agent 的工具使用、命令习惯、工作流设计和踩坑经验。",
      keywords: ["agent", "tool use", "workflow", "prompt"],
      link: "#"
    },
    {
      type: "系统工具",
      category: "tooling",
      title: "Linux / Git / 调试工具的实用备忘",
      meta: "把你每天真会用到的命令、组合和排错思路整理成一页页短文。",
      keywords: ["linux", "git", "debug", "tooling"],
      link: "#"
    }
  ],
  references: [
    {
      type: "Linux",
      title: "Linux 常见命令速查",
      meta: "进程、文件、网络、权限、压缩、日志和环境变量相关的高频命令。",
      keywords: ["linux", "command", "shell"],
      link: "#"
    },
    {
      type: "AI Agent",
      title: "AI Agent 常用命令与工作流清单",
      meta: "整理模型调用、工具命令、部署习惯和排错命令。",
      keywords: ["agent", "command", "tool", "workflow"],
      link: "#"
    },
    {
      type: "Git",
      title: "Git 日常命令与救援手册",
      meta: "覆盖 branch、stash、rebase、log、diff 和常见误操作恢复。",
      keywords: ["git", "rebase", "stash", "diff"],
      link: "#"
    },
    {
      type: "Research",
      title: "论文与项目检索入口",
      meta: "把 Scholar、arXiv、DBLP、GitHub 和常用检索网站整理在一起。",
      keywords: ["scholar", "arxiv", "dblp", "github"],
      link: "#"
    }
  ],
  archiveLinks: [
    {
      title: "Profile",
      meta: "简短介绍，不放过多个人信息。",
      link: "@/pages/archive/index.html"
    },
    {
      title: "Publications",
      meta: "低调保留论文与过往成果入口。",
      link: "@/pages/archive/index.html"
    }
  ],
  toolboxLinks: [
    {
      title: "GitHub",
      meta: "代码仓库与站点源码入口",
      link: "https://github.com/BaoBao-zhu/baobao-web"
    },
    {
      title: "Archive",
      meta: "个人信息和论文归档页",
      link: "@/pages/archive/index.html"
    },
    {
      title: "Notes",
      meta: "长期学习文档入口",
      link: "@/pages/resources/index.html"
    },
    {
      title: "Reference",
      meta: "命令和资料查询入口",
      link: "@/pages/reference/index.html"
    }
  ]
};
