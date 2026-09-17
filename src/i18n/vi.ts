import type { Dict } from "./en";

const vi: Dict = {
  promoBar: {
    items: [
      "v4.43.0 — gate cho các trường schema được khai báo nhưng không bao giờ được đánh giá · khắc phục 39 phát hiện từ review mã bên ngoài · spawn an toàn trên Windows và phát hiện plugin codex",
      "Subagent tự động định tuyến → Agent Teams, quyết định theo từng subtask",
      "Kết hợp ECC · Superpowers · GSD · gstack",
      "Apache-2.0 · Node 22+ · Đa nền tảng",
      "Tặng sao trên GitHub →",
    ],
  },
  nav: {
    docs: "Tài liệu",
    github: "GitHub",
    npm: "npm",
  },
  hero: {
    versionPill: "v4.43.0 · đã kết hợp 100+ capability",
    h1: "Trình quản lý gói cho các harness lập trình AI",
    positioning:
      "Không chỉ là trình quản lý gói — đây là một orchestrator kết hợp. Nó lắp ghép những gì tốt nhất của hệ sinh thái mã nguồn mở thành một engine chạy được duy nhất, nối dây bằng phương pháp ba tầng BDD → SDD → TDD.",
    tagline:
      "harnessed là orchestration brain + thư viện prompt, điều khiển native subagent spawn qua ba CLI hàm thuần và nhanh — `harnessed gates` (sub-workflow nào được kích hoạt), `harnessed prompt` (prompt sẵn sàng spawn cho một sub) và `harnessed checkpoint` (ghi lại tiến độ).",
    ctaStart: "Bắt đầu",
    ctaGitHub: "Xem trên GitHub",
    meta: "Apache-2.0 · Node 22+ · Đa nền tảng",
  },
  whyCards: {
    heading: "Vì sao chọn harnessed",
    subheading: "Ba nguyên tắc được cài sẵn trong mọi workflow.",
    card1: {
      title: "Kết hợp thay vì vendoring",
      body: "Không bao giờ fork upstream. Mô tả install và check trong một manifest, rồi harnessed sẽ kết hợp những gì tốt nhất của hệ sinh thái mã nguồn mở (Superpowers, GSD, gstack, ECC, …) thành một workflow chạy được — luôn trên upstream mới nhất, không đau đớn: chỉ cần update.",
    },
    card2: {
      title: "Nhịp 5 giai đoạn có sẵn",
      body: "Discuss → Plan → Task → Verify → Ship, kèm Research và Retro tùy chọn, được ghép vào mọi loop và khép lại bằng chu trình Learn tự động. Hoặc chạy `/auto` để đi hết pipeline trong một lần.",
    },
    card3: {
      title: "Phương pháp dogfood-first",
      body: "Mọi workflow đều được kiểm chứng bằng chính định nghĩa của nó. Cùng một kỷ luật đã dùng để phát hành chính harnessed.",
    },
  },
  threeLayerStack: {
    heading: "Ba vòng lặp lồng nhau, không phải ba giai đoạn",
    subheading:
      "Ngăn xếp ba tầng của harnessed là hiện thực hóa về mặt kỹ thuật phần mềm của cấu trúc lồng nhau đã được thừa nhận BDD → SDD → TDD. Ba loop, mỗi loop trả lời một câu hỏi khác nhau. harnessed ghép hệ sinh thái mã nguồn mở vào từng loop — và các thành phần chồng lấn nhau một phần, đó chính là thứ mà một orchestrator kết hợp phải phân xử.",
    colLayer: "Tầng / Loop",
    colQuestion: "Câu hỏi nó trả lời",
    colComposed: "Kết hợp từ (có chồng lấn)",
    layers: [
      {
        num: "①",
        name: "Behavior",
        loop: "BDD",
        question: "Xây cái gì, và làm sao biết đã xong.",
        composed:
          "gstack /office-hours governance · GSD discuss · superpowers brainstorming → acceptance criteria",
      },
      {
        num: "②",
        name: "Spec",
        loop: "SDD",
        question: "Cấu trúc ra sao.",
        composed:
          "GSD plan-phase → requirements / design / tasks · contracts (Spec Kit / ECC patterns)",
      },
      {
        num: "③",
        name: "Implementation",
        loop: "TDD",
        question: "Nó có thực sự chạy được không.",
        composed:
          "superpowers TDD red-green · subagent execution · GSD verify-work · ralph-loop completion",
      },
    ],
    nested: {
      label: "Nested lenses",
      body: "Các loop là những thấu kính lồng nhau (nested lenses), không phải giai đoạn. Vòng lặp đôi BDD-ngoài + TDD-trong của Cucumber, được mở rộng trong kỷ nguyên GenAI bằng một vòng spec SDD → thành triple-loop. harnessed là hiện thực linear-cadence của triple-loop này — đồ thị định tuyến đầy đủ là hướng tiến hóa của nó. Đường đi mặc định là ngoài → trong; hôm nay đã có ba cạnh phản hồi được phát hành: Verify → Task (một kiểm tra thất bại đẩy công việc quay lại), STATUS: NEEDS_CLARIFICATION từ subagent khi gặp vùng xám, và các bài học của mỗi chu kỳ đã ship được đưa vào Discuss kế tiếp. Những đường quay lui có cấu trúc mịn hơn — mâu thuẫn contract định tuyến về Spec, yêu cầu mơ hồ về Behavior — nằm trong roadmap, chưa được phát hành.",
    },
    intersections: {
      label: "Các thành phần giao nhau",
      body: "Chồng lấn chính là mấu chốt — đó là thứ mà orchestrator kết hợp phải phân xử.",
      items: [
        { name: "GSD", body: "là xương sống, xuyên suốt cả ba vòng — discuss, plan, verify." },
        { name: "gstack", body: "trải trên Behavior + Review." },
        { name: "superpowers", body: "trải trên Behavior (brainstorm) + Implementation (TDD)." },
      ],
    },
    crossCutting: {
      label: "Kỷ luật xuyên suốt",
      body: "Hai kỷ luật chạy qua mọi tầng.",
      items: [
        {
          name: "karpathy principles",
          body: "how to code — thay đổi khả thi nhỏ nhất, chỉnh sửa như phẫu thuật.",
        },
        { name: "mattpocock moves", body: "công cụ theo yêu cầu, triệu hồi tùy tình huống." },
      ],
    },
    runtime: {
      label: "Ánh xạ sang runtime",
      body: "Discuss = Behavior · Plan = Spec · Build = Implementation · Verify + Ship khép vòng bằng các gate bằng chứng.",
    },
  },
  orchestration: {
    heading: "Mức song song, quyết định theo từng subtask",
    subheading:
      "`harnessed setup` tự bật Agent Teams. Sau đó một gate định tuyến chọn tầng thực thi phù hợp cho từng subtask — không fan-out thủ công, không đoán mò.",
    tiers: [
      {
        tag: "hạ tầng",
        name: "Session chính",
        cond: "< 20 dòng · truy vấn đơn",
        body: "Việc vụn vặt chạy ngay tại chỗ. Không spawn, không tốn token.",
      },
      {
        tag: "mặc định",
        name: "Subagent fan-out",
        cond: "≤ 3 song song · không trao đổi",
        body: "Các tác vụ research, verify và review độc lập tỏa ra trong context cách ly.",
      },
      {
        tag: "nâng tầng",
        name: "Agent Teams",
        cond: "5 trigger · SendMessage",
        body: "Những teammate cần thống nhất contract, tranh luận giả thuyết hoặc dùng chung task list sẽ được nâng lên thành một team thực thụ.",
      },
    ],
    wrapper: {
      label: "wrapper trực giao",
      name: "ralph-loop",
      body: "Bọc bất kỳ tầng nào và giữ nó đúng với lời hứa hoàn thành COMPLETE nguyên văn.",
    },
    footnote:
      "12 judgment gate cơ giới hóa các quy tắc cộng tác với AI của bạn — mức song song, trigger TDD, làm rõ ba tầng — biến quy ước tĩnh thành một engine định tuyến.",
  },
  workflowSection: {
    heading: "Một lệnh. Năm giai đoạn. Không boilerplate.",
    subheading:
      "Mỗi giai đoạn kết hợp các công cụ đã được kiểm chứng từ khắp hệ sinh thái harness lập trình AI.",
    stages: {
      research: { name: "research", role: "RAG đa nguồn" },
      discuss: { name: "discuss", role: "gate 3 tầng" },
      plan: { name: "plan", role: "task_plan.md" },
      task: { name: "task", role: "làm rõ·viết code·kiểm thử·bàn giao" },
      verify: { name: "verify", role: "7 kiểm tra con" },
      ship: { name: "ship", role: "release-preflight → tag-ready" },
      retro: { name: "retro", role: "ghi lại bài học" },
    },
    optional: "tùy chọn",
  },
  workflowTable: {
    heading: "27 workflow có thể kết hợp, 100+ capability",
    subheading: "Từ research đến ship, mỗi cái đều dựa trên một manifest có kiểu.",
    colCommand: "Lệnh",
    colScope: "Phạm vi",
    colCaps: "Capability",
    rows: [
      { cmd: "/auto", scope: "super-master", caps: "pipeline 6 giai đoạn" },
      { cmd: "/research", scope: "độc lập", caps: "tavily·exa·ctx7" },
      { cmd: "/discuss", scope: "stage gate", caps: "chiến lược·phase·subtask" },
      { cmd: "/plan", scope: "stage gate", caps: "kiến trúc·phase" },
      { cmd: "/task", scope: "theo subtask", caps: "làm rõ·viết code·kiểm thử·bàn giao" },
      { cmd: "/verify", scope: "stage gate", caps: "7 kiểm tra con có điều kiện" },
      { cmd: "/ship", scope: "stage gate", caps: "release-preflight·gstack-ship" },
      { cmd: "/retro", scope: "sau ship", caps: "gstack·lưu trữ" },
      { cmd: "/tdd", scope: "kỷ luật", caps: "red-green-refactor" },
      { cmd: "/ralph-loop", scope: "wrapper", caps: "lời hứa hoàn thành" },
    ],
    githubLink: "Xem toàn bộ workflow trên GitHub →",
  },
  quickstart: {
    heading: "Bắt đầu trong 60 giây",
    subheading: "Không file cấu hình. Không dựng khung thủ công. Chỉ ba lệnh.",
    steps: [
      {
        num: "1",
        title: "Cài đặt",
        cmd: "npm install -g harnessed",
        caption: "Kéo bản ổn định mới nhất từ npm.",
      },
      {
        num: "2",
        title: "Thiết lập",
        cmd: "harnessed setup",
        caption: "Tự bật Agent Teams, locale người dùng và khám phá MCP.",
      },
      {
        num: "3",
        title: "Kết hợp",
        cmd: "/auto research a new feature",
        caption: "Chạy bên trong agent lập trình AI của bạn. Pipeline 6 giai đoạn sẽ tiếp quản.",
      },
    ],
  },
  communityStats: {
    heading: "Tham gia hệ sinh thái harness",
    npmDownloadsLabel: "Tổng lượt tải npm",
    stats: [
      { value: "100+", label: "Capability đã kết hợp (ECC · Superpowers · GSD · gstack)" },
      { value: "29", label: "Workflow đã phát hành" },
      { value: "v4.43.0", label: "Bản mới nhất · Apache-2.0" },
    ],
    links: {
      discussions: "GitHub Discussions →",
      issues: "Issues →",
      releases: "Releases →",
    },
  },
  faq: {
    heading: "Câu hỏi thường gặp",
    subheading: "Câu hỏi phổ biến, trả lời thẳng.",
    items: [
      {
        q: "harnessed là gì?",
        a: "harnessed là trình quản lý gói và orchestrator kết hợp cho các harness lập trình AI. Nó cài đặt, kết hợp và chạy các workflow gộp Skills, MCP server và các harness pack khác thông qua một manifest có kiểu — mà không vendoring mã nguồn upstream.",
      },
      {
        q: "Nó chạy trong agent lập trình AI nào?",
        a: "harnessed chạy bên trong một agent lập trình AI. Claude Code là mục tiêu chính — sau `harnessed setup`, các lệnh gạch chéo như `/auto` và `/discuss` sẽ khả dụng (mới dùng Claude Code? xem anthropic.com/claude/code). Codex và các harness khác được hỗ trợ qua lớp nền tảng cross-harness.",
      },
      {
        q: "Kết hợp mà không vendoring thì hoạt động thế nào?",
        a: "Mỗi harness pack đi kèm một manifest mô tả các bước cài đặt, metadata capability và điểm tích hợp. harnessed đọc các manifest này, kiểm tra tương thích và ghép các công cụ upstream lại tại runtime — nên bạn luôn chạy upstream chính thức, không phải một fork đã cũ.",
      },
      {
        q: "/auto khác gì với các lệnh giai đoạn riêng lẻ?",
        a: "`/auto` chạy toàn bộ pipeline 6 giai đoạn từ đầu đến cuối chỉ với một prompt. Các lệnh giai đoạn riêng lẻ (`/discuss`, `/plan`, `/task`, `/verify`, …) cho bạn kiểm soát chi tiết khi chỉ cần một phần của nhịp.",
      },
      {
        q: "Nó có tự spawn subagent không?",
        a: "`harnessed setup` tự bật Agent Teams, và một gate song song quyết định tầng cho từng subtask: việc vụn vặt ở lại session chính, tác vụ độc lập tỏa ra thành subagent (≤ 3, context cách ly), còn việc cần trao đổi — thống nhất contract, tranh luận giả thuyết, dùng chung task list — được nâng lên thành một Agent Team thực thụ. ralph-loop có thể bọc bất kỳ tầng nào để giữ nó đúng với COMPLETE nguyên văn.",
      },
      {
        q: "Tôi có thể tự viết harness pack không?",
        a: "Có. Schema của manifest được công bố trong repo tại `schemas/manifest.v1.schema.json` (trỏ YAML language server của bạn vào đó). Hãy viết một manifest trỏ tới bất kỳ upstream cài được nào — gói npm, repo git, skill tự viết — và harnessed sẽ coi nó là một đơn vị kết hợp hạng nhất.",
      },
    ],
  },
  footer: {
    tagline: "Trình quản lý gói + orchestrator kết hợp cho harness lập trình AI.",
    resources: "Tài nguyên",
    community: "Cộng đồng",
    links: {
      github: "GitHub",
      npm: "npm",
      changelog: "Changelog",
      docs: "Tài liệu",
      discussions: "Discussions",
      issues: "Issues",
      twitter: "Twitter",
    },
    license: "Giấy phép Apache-2.0 © 2026 easyinplay",
    madewith: "Được làm bằng kỷ luật",
  },
};

export default vi;
