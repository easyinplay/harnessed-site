import type { Locale } from "./locales";

export interface OnboardingCopy {
  heading: string;
  subheading: string;
  install: string;
  workflow: string;
  status: string;
  recommended: string;
  secondary: string;
  compatibility: string;
  method: string;
  host: string;
  setup: string;
  unix: string;
  windows: string;
  bun: string;
  npm: string;
  readiness: string;
  firstWorkflow: string;
  prompt: string;
  progress: string;
  copy: string;
  copied: string;
  copyFailed: string;
  latest: string;
  meta: string;
}

export const onboarding: Record<Locale, OnboardingCopy> = {
  vi: {
    heading: "Bắt đầu với harnessed",
    subheading: "Cài đặt, bắt đầu workflow và tiếp tục từ nơi đã dừng.",
    install: "Cài đặt nhanh",
    workflow: "Bắt đầu workflow đầu tiên",
    status: "Xem tiến độ và tiếp tục",
    recommended: "Khuyên dùng",
    secondary: "Lựa chọn phụ",
    compatibility: "Tương thích",
    method: "Cách cài đặt",
    host: "Agent lập trình",
    setup: "Thiết lập agent đã chọn",
    unix: "Standalone cho macOS arm64 / Linux x64. Đã kèm runtime; riêng harnessed không cần cài thêm Node.js hay Bun. Làm theo lời nhắc và hướng dẫn PATH của trình cài đặt; kiểm tra upstream riêng.",
    windows:
      "Standalone cho Windows x64 (PowerShell). Đã kèm runtime; riêng harnessed không cần cài thêm Node.js hay Bun. Làm theo lời nhắc và hướng dẫn PATH của trình cài đặt; kiểm tra upstream riêng.",
    bun: "Cần Bun. Trong 4.x, hooks vẫn cần Node.js 22+; chạy với --bun. Cập nhật bằng bun add -g harnessed@latest.",
    npm: "Cần Node.js 22+. Không cần Bun. Dùng được trên nền tảng chưa có binary standalone.",
    readiness:
      "Cài đặt, setup thành công và upstream sẵn sàng là các kiểm tra riêng. Upstream có thể cần Node.js, Bun, Git, phụ thuộc khác và cấp quyền.",
    firstWorkflow:
      "Sau setup, mở agent đã chọn trong dự án. Gửi prompt này trong agent, không phải terminal. Kiểm tra quyền cần thiết và các trở ngại upstream.",
    prompt: "thêm endpoint kiểm tra sức khỏe cho dự án này",
    progress: "Trong terminal tại gốc dự án, xem bảng tiến độ hoặc tiếp tục workflow bị gián đoạn.",
    copy: "Sao chép lệnh",
    copied: "Đã sao chép",
    copyFailed: "Sao chép thất bại. Hãy chọn và sao chép lệnh.",
    latest: "Bản ổn định mới nhất",
    meta: "Apache-2.0 · Khuyên dùng standalone · Đa nền tảng",
  },
  th: {
    heading: "เริ่มต้นกับ harnessed",
    subheading: "ติดตั้ง เริ่ม workflow และทำต่อจากจุดที่หยุดไว้",
    install: "ติดตั้งด่วน",
    workflow: "เริ่ม workflow แรก",
    status: "ตรวจสอบความคืบหน้าและทำต่อ",
    recommended: "แนะนำ",
    secondary: "ตัวเลือกรอง",
    compatibility: "รองรับความเข้ากันได้",
    method: "วิธีติดตั้ง",
    host: "agent สำหรับเขียนโค้ด",
    setup: "ตั้งค่า agent ที่เลือก",
    unix: "Standalone สำหรับ macOS arm64 / Linux x64 มี runtime ในตัว harnessed เองไม่ต้องติดตั้ง Node.js หรือ Bun แยก ทำตามข้อความและคำแนะนำ PATH ของตัวติดตั้ง ตรวจสอบความพร้อมของ upstream แยกต่างหาก",
    windows:
      "Standalone สำหรับ Windows x64 (PowerShell) มี runtime ในตัว harnessed เองไม่ต้องติดตั้ง Node.js หรือ Bun แยก ทำตามข้อความและคำแนะนำ PATH ของตัวติดตั้ง ตรวจสอบความพร้อมของ upstream แยกต่างหาก",
    bun: "ต้องมี Bun ใน 4.x hooks ยังต้องใช้ Node.js 22+ รันด้วย --bun อัปเดตด้วย bun add -g harnessed@latest",
    npm: "ต้องมี Node.js 22+ ไม่ต้องมี Bun ใช้ได้บนแพลตฟอร์มที่ไม่มีไบนารี standalone",
    readiness:
      "การติดตั้งสำเร็จ การ setup สำเร็จ และความพร้อมของ upstream เป็นคนละขั้นตอน upstream อาจต้องใช้ Node.js, Bun, Git เครื่องมืออื่นและการอนุญาต",
    firstWorkflow:
      "หลัง setup ให้เปิด agent ที่เลือกในโปรเจกต์ ส่ง prompt นี้ใน agent ไม่ใช่ terminal และตรวจสอบสิทธิ์ที่จำเป็นกับปัญหาของ upstream",
    prompt: "เพิ่ม endpoint ตรวจสอบสถานะให้โปรเจกต์นี้",
    progress: "ใช้ terminal ที่โฟลเดอร์หลักของโปรเจกต์เพื่อตรวจสอบแดชบอร์ดหรือทำ workflow ที่หยุดไว้ต่อ",
    copy: "คัดลอกคำสั่ง",
    copied: "คัดลอกแล้ว",
    copyFailed: "คัดลอกไม่สำเร็จ โปรดเลือกคำสั่งแล้วคัดลอกเอง",
    latest: "รุ่นเสถียรล่าสุด",
    meta: "Apache-2.0 · แนะนำ standalone · รองรับหลายแพลตฟอร์ม",
  },
  "pt-br": {
    heading: "Comece com harnessed",
    subheading: "Instale, inicie um workflow e retome de onde parou.",
    install: "Instalação rápida",
    workflow: "Inicie seu primeiro workflow",
    status: "Confira o progresso e retome",
    recommended: "Recomendado",
    secondary: "Segunda opção",
    compatibility: "Compatibilidade",
    method: "Método de instalação",
    host: "Agent de programação",
    setup: "Configure seu agent",
    unix: "Standalone para macOS arm64 / Linux x64. Runtime incluído; o próprio harnessed não exige Node.js nem Bun separados. Siga as perguntas e instruções de PATH do instalador; verifique os upstreams separadamente.",
    windows:
      "Standalone para Windows x64 (PowerShell). Runtime incluído; o próprio harnessed não exige Node.js nem Bun separados. Siga as perguntas e instruções de PATH do instalador; verifique os upstreams separadamente.",
    bun: "Requer Bun. Na 4.x, os hooks ainda precisam de Node.js 22+; execute com --bun. Atualize com bun add -g harnessed@latest.",
    npm: "Requer Node.js 22+. Bun não é necessário. Funciona em plataformas sem binário standalone.",
    readiness:
      "Instalação, sucesso do setup e prontidão dos upstreams são verificações separadas. Upstreams podem exigir Node.js, Bun, Git, outras dependências e autorização.",
    firstWorkflow:
      "Após o setup, abra o agent escolhido no projeto. Envie este prompt no agent, não no terminal. Confira permissões necessárias e bloqueios dos upstreams.",
    prompt: "adicione um endpoint de saúde a este projeto",
    progress:
      "No terminal, na raiz do projeto, consulte o painel ou retome um workflow interrompido.",
    copy: "Copiar comando",
    copied: "Copiado",
    copyFailed: "Falha ao copiar. Selecione e copie o comando.",
    latest: "Última versão estável",
    meta: "Apache-2.0 · Standalone recomendado · Multiplataforma",
  },
  tr: {
    heading: "harnessed ile başlayın",
    subheading: "Kurun, workflow başlatın ve kaldığınız yerden devam edin.",
    install: "Hızlı kurulum",
    workflow: "İlk workflow başlatın",
    status: "İlerlemeyi kontrol edin ve sürdürün",
    recommended: "Önerilen",
    secondary: "İkinci seçenek",
    compatibility: "Uyumluluk",
    method: "Kurulum yöntemi",
    host: "Kodlama agent seçimi",
    setup: "Agent kurulumunu tamamlayın",
    unix: "macOS arm64 / Linux x64 için standalone. Runtime dahildir; harnessed için ayrıca Node.js veya Bun gerekmez. Kurucunun sorularını ve PATH talimatlarını izleyin; upstream hazırlığını ayrıca kontrol edin.",
    windows:
      "Windows x64 (PowerShell) için standalone. Runtime dahildir; harnessed için ayrıca Node.js veya Bun gerekmez. Kurucunun sorularını ve PATH talimatlarını izleyin; upstream hazırlığını ayrıca kontrol edin.",
    bun: "Bun gerekir. 4.x hooks için hâlâ Node.js 22+ gerekir; çalıştırırken --bun kullanın. Güncelleme: bun add -g harnessed@latest.",
    npm: "Node.js 22+ gerekir. Bun gerekmez. Standalone binary olmayan platformlarda da çalışır.",
    readiness:
      "Kurulum, başarılı setup ve upstream hazırlığı ayrı kontrollerdir. Upstream araçları Node.js, Bun, Git, başka bağımlılıklar ve yetkilendirme gerektirebilir.",
    firstWorkflow:
      "Setup sonrası projenizde seçilen agent açın. Bu prompt terminale değil agent içine yazılır. Gerekli izinleri ve upstream engellerini kontrol edin.",
    prompt: "bu projeye bir sağlık kontrolü endpoint ekle",
    progress: "Proje kökündeki terminalde paneli kontrol edin veya yarıda kalan workflow sürdürün.",
    copy: "Komutu kopyala",
    copied: "Kopyalandı",
    copyFailed: "Kopyalanamadı. Komutu seçip kopyalayın.",
    latest: "En güncel kararlı sürüm",
    meta: "Apache-2.0 · Standalone önerilir · Çoklu platform",
  },
  ru: {
    heading: "Начните с harnessed",
    subheading: "Установите, запустите workflow и продолжайте с места остановки.",
    install: "Быстрая установка",
    workflow: "Запустите первый workflow",
    status: "Проверьте прогресс и продолжите",
    recommended: "Рекомендуется",
    secondary: "Второй выбор",
    compatibility: "Совместимость",
    method: "Способ установки",
    host: "Agent для разработки",
    setup: "Настройте выбранный agent",
    unix: "Standalone для macOS arm64 / Linux x64. Среда выполнения встроена; самому harnessed не нужны отдельные Node.js или Bun. Следуйте запросам установщика и инструкциям PATH; готовность upstream проверяется отдельно.",
    windows:
      "Standalone для Windows x64 (PowerShell). Среда выполнения встроена; самому harnessed не нужны отдельные Node.js или Bun. Следуйте запросам установщика и инструкциям PATH; готовность upstream проверяется отдельно.",
    bun: "Требуется Bun. В 4.x hooks всё ещё требуют Node.js 22+; запускайте с --bun. Обновление: bun add -g harnessed@latest.",
    npm: "Требуется Node.js 22+. Bun не нужен. Подходит для платформ без standalone-бинарника.",
    readiness:
      "Установка, успешный setup и готовность upstream проверяются отдельно. Upstream могут требовать Node.js, Bun, Git, другие зависимости и авторизацию.",
    firstWorkflow:
      "После setup откройте выбранный agent в проекте. Это prompt для agent, не команда терминала. Проверьте необходимые разрешения и блокировки upstream.",
    prompt: "добавь endpoint проверки состояния в этот проект",
    progress: "В терминале в корне проекта проверьте панель или продолжите прерванный workflow.",
    copy: "Копировать команду",
    copied: "Скопировано",
    copyFailed: "Не удалось скопировать. Выделите и скопируйте команду.",
    latest: "Последний стабильный релиз",
    meta: "Apache-2.0 · Рекомендуется standalone · Кроссплатформенность",
  },
  ja: {
    heading: "harnessed を始める",
    subheading: "インストール、ワークフローの開始、進捗確認と再開。",
    install: "クイックインストール",
    workflow: "最初のワークフローを開始",
    status: "進捗を確認して再開",
    recommended: "推奨",
    secondary: "第2候補",
    compatibility: "互換用",
    method: "インストール方法",
    host: "コーディング agent",
    setup: "agent をセットアップ",
    unix: "macOS arm64 / Linux x64 用 standalone。実行環境を内蔵し、harnessed 自体に別途 Node.js や Bun は不要です。インストーラーの確認と PATH 案内に従い、上流ツールの準備状況は別途確認してください。",
    windows:
      "Windows x64 (PowerShell) 用 standalone。実行環境を内蔵し、harnessed 自体に別途 Node.js や Bun は不要です。インストーラーの確認と PATH 案内に従い、上流ツールの準備状況は別途確認してください。",
    bun: "Bun が必要です。4.x の hooks には Node.js 22+ も必要です。実行には --bun、更新には bun add -g harnessed@latest を使用してください。",
    npm: "Node.js 22+ が必要です。Bun は不要です。standalone のないプラットフォームでも利用できます。",
    readiness:
      "インストール、セットアップ成功、上流ツールの準備完了は別々の確認です。上流には Node.js、Bun、Git、その他の依存関係や認証が必要な場合があります。",
    firstWorkflow:
      "セットアップ後、プロジェクトで選択した agent を開きます。これはターミナル用コマンドではなく agent への prompt です。必要な権限や上流の問題を確認してください。",
    prompt: "このプロジェクトにヘルスチェック用エンドポイントを追加",
    progress:
      "プロジェクトルートのターミナルで進捗を確認するか、中断したワークフローを再開します。",
    copy: "コマンドをコピー",
    copied: "コピーしました",
    copyFailed: "コピーに失敗しました。コマンドを選択してコピーしてください。",
    latest: "最新の安定版",
    meta: "Apache-2.0 · standalone 推奨 · クロスプラットフォーム",
  },
  ko: {
    heading: "harnessed 시작하기",
    subheading: "설치하고 워크플로를 시작한 다음 진행 상황을 확인하고 재개하세요.",
    install: "빠른 설치",
    workflow: "첫 워크플로 시작",
    status: "진행 상황 확인 및 재개",
    recommended: "권장",
    secondary: "차선",
    compatibility: "호환 경로",
    method: "설치 방법",
    host: "코딩 agent",
    setup: "선택한 agent 설정",
    unix: "macOS arm64 / Linux x64용 standalone입니다. 런타임이 포함되어 harnessed 자체에는 별도 Node.js나 Bun이 필요 없습니다. 설치 프로그램의 질문과 PATH 안내를 따르고 업스트림 준비는 별도로 확인하세요.",
    windows:
      "Windows x64 (PowerShell)용 standalone입니다. 런타임이 포함되어 harnessed 자체에는 별도 Node.js나 Bun이 필요 없습니다. 설치 프로그램의 질문과 PATH 안내를 따르고 업스트림 준비는 별도로 확인하세요.",
    bun: "Bun이 필요합니다. 4.x의 hooks에는 Node.js 22+도 필요합니다. 실행에는 --bun, 업데이트에는 bun add -g harnessed@latest를 사용하세요.",
    npm: "Node.js 22+가 필요하며 Bun은 필요 없습니다. standalone 바이너리가 없는 플랫폼에서도 사용할 수 있습니다.",
    readiness:
      "설치 완료, 설정 성공, 업스트림 준비 완료는 별도 확인 항목입니다. 업스트림에는 Node.js, Bun, Git, 다른 의존성과 인증이 필요할 수 있습니다.",
    firstWorkflow:
      "설정 후 프로젝트에서 선택한 agent를 여세요. 이 prompt는 터미널 명령이 아니라 agent에 입력합니다. 필요한 권한과 업스트림 차단 요인을 확인하세요.",
    prompt: "이 프로젝트에 상태 확인 엔드포인트 추가",
    progress: "프로젝트 루트의 터미널에서 대시보드를 확인하거나 중단된 워크플로를 재개하세요.",
    copy: "명령 복사",
    copied: "복사됨",
    copyFailed: "복사 실패. 명령을 선택해 직접 복사하세요.",
    latest: "최신 안정 버전",
    meta: "Apache-2.0 · standalone 권장 · 크로스 플랫폼",
  },
  "zh-hans": {
    heading: "开始使用 harnessed",
    subheading: "安装、启动工作流，随时查看进度与续跑。",
    install: "一键安装",
    workflow: "启动第一个工作流",
    status: "查看进度与续跑",
    recommended: "推荐",
    secondary: "次选",
    compatibility: "兼容通道",
    method: "安装方式",
    host: "编程 agent",
    setup: "初始化所选 agent",
    unix: "适用于 macOS arm64 / Linux x64。内置运行时，harnessed 本身无需另装 Node.js 或 Bun。遵循安装器交互提示与 PATH 指引；上游就绪需单独检查。",
    windows:
      "适用于 Windows x64 (PowerShell)。内置运行时，harnessed 本身无需另装 Node.js 或 Bun。遵循安装器交互提示与 PATH 指引；上游就绪需单独检查。",
    bun: "需要 Bun。4.x 的 hooks 还需 Node.js 22+；运行时使用 --bun。更新用 bun add -g harnessed@latest。",
    npm: "需要 Node.js 22+，无需 Bun。适用于没有 standalone 二进制的平台。",
    readiness:
      "安装完成、初始化成功、上游就绪是三个独立检查。上游工具仍可能需要 Node.js、Bun、Git、其他依赖及授权。",
    firstWorkflow:
      "初始化后，在项目中打开所选 agent。下方是 agent prompt，不是终端命令。按要求检查权限与上游阻塞项。",
    prompt: "为当前项目添加健康检查接口",
    progress: "在项目根目录的终端查看仪表盘，或续跑中断的工作流。",
    copy: "复制命令",
    copied: "已复制",
    copyFailed: "复制失败，请选中命令手动复制。",
    latest: "最新稳定版本",
    meta: "Apache-2.0 · 推荐 standalone · 跨平台",
  },
  "zh-hant": {
    heading: "開始使用 harnessed",
    subheading: "安裝、啟動工作流程，隨時查看進度與續跑。",
    install: "一鍵安裝",
    workflow: "啟動第一個工作流程",
    status: "查看進度與續跑",
    recommended: "推薦",
    secondary: "次選",
    compatibility: "相容通道",
    method: "安裝方式",
    host: "程式設計 agent",
    setup: "初始化所選 agent",
    unix: "適用於 macOS arm64 / Linux x64。內建執行環境，harnessed 本身無需另裝 Node.js 或 Bun。遵循安裝器互動提示與 PATH 指引；上游就緒需另外檢查。",
    windows:
      "適用於 Windows x64 (PowerShell)。內建執行環境，harnessed 本身無需另裝 Node.js 或 Bun。遵循安裝器互動提示與 PATH 指引；上游就緒需另外檢查。",
    bun: "需要 Bun。4.x 的 hooks 仍需 Node.js 22+；執行時使用 --bun。更新用 bun add -g harnessed@latest。",
    npm: "需要 Node.js 22+，無需 Bun。適用於沒有 standalone 二進位檔的平台。",
    readiness:
      "安裝完成、初始化成功、上游就緒是三個獨立檢查。上游工具仍可能需要 Node.js、Bun、Git、其他相依項及授權。",
    firstWorkflow:
      "初始化後，在專案中開啟所選 agent。下方是 agent prompt，不是終端命令。依要求檢查權限與上游阻塞項。",
    prompt: "為目前專案新增健康檢查端點",
    progress: "在專案根目錄的終端查看儀表板，或續跑中斷的工作流程。",
    copy: "複製命令",
    copied: "已複製",
    copyFailed: "複製失敗，請選取命令手動複製。",
    latest: "最新穩定版本",
    meta: "Apache-2.0 · 推薦 standalone · 跨平台",
  },
  en: {
    heading: "Start with harnessed",
    subheading: "Install. Start a workflow. Pick up where you left off.",
    install: "Quick install",
    workflow: "Start your first workflow",
    status: "Check progress and resume",
    recommended: "Recommended",
    secondary: "Secondary",
    compatibility: "Compatibility",
    method: "Installation method",
    host: "Coding agent",
    setup: "Set up your agent",
    unix: "Standalone for macOS arm64 / Linux x64. Bundled runtime; no separate Node.js or Bun for harnessed itself. Follow installer prompts and PATH instructions; check upstream readiness separately.",
    windows:
      "Standalone for Windows x64 (PowerShell). Bundled runtime; no separate Node.js or Bun for harnessed itself. Follow installer prompts and PATH instructions; check upstream readiness separately.",
    bun: "Requires Bun. 4.x hooks still need Node.js 22+; run with --bun. Update with bun add -g harnessed@latest.",
    npm: "Requires Node.js 22+. Bun is not required. Works on platforms without a standalone binary.",
    readiness:
      "Installation, successful setup and upstream readiness are separate checks. Upstream tools may need Node.js, Bun, Git or other dependencies and authorization.",
    firstWorkflow:
      "After setup, open the selected agent in your project. Send this agent prompt, not a terminal command. Review required permissions or upstream blockers.",
    prompt: "add a health endpoint to this project",
    progress:
      "In a terminal at your project root, check the dashboard or resume an interrupted workflow.",
    copy: "Copy command",
    copied: "Copied",
    copyFailed: "Copy failed. Select and copy the command.",
    latest: "Latest stable release",
    meta: "Apache-2.0 · Standalone recommended · Cross-platform",
  },
};
