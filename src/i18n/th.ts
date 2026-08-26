import type { Dict } from './en'

const th: Dict = {
  promoBar: {
    items: [
      'v4.32.20 — ส่งมอบสองช่องทาง (npm + ไบนารีไฟล์เดียว) · อัปเดตตัวเองและย้อนกลับด้วยลายเซ็น ed25519 · ชุด trap ทดสอบ regression ของ orchestration',
      'Subagent กำหนดเส้นทางอัตโนมัติ → Agent Teams ตัดสินใจรายงานย่อย',
      'ประกอบจาก ECC · Superpowers · GSD · gstack',
      'Apache-2.0 · Node 22+ · ข้ามแพลตฟอร์ม',
      'กดดาวให้เราบน GitHub →',
    ],
  },
  nav: {
    docs: 'เอกสาร',
    github: 'GitHub',
    npm: 'npm',
  },
  hero: {
    versionPill: 'v4.32.20 · ประกอบแล้ว 100+ capability',
    h1: 'ตัวจัดการแพ็กเกจสำหรับ harness เขียนโค้ดด้วย AI',
    positioning:
      'มากกว่าตัวจัดการแพ็กเกจ — นี่คือ orchestrator สำหรับการประกอบ มันรวมสิ่งที่ดีที่สุดของระบบนิเวศโอเพนซอร์สให้เป็น engine เดียวที่รันได้จริง โดยเดินสายด้วยระเบียบวิธีสามชั้น BDD → SDD → TDD',
    tagline:
      'harnessed คือ orchestration brain + คลัง prompt ที่ขับเคลื่อน native subagent spawn ผ่าน CLI ฟังก์ชันบริสุทธิ์ที่เร็วสามตัว — `harnessed gates` (sub-workflow ใดถูกกระตุ้น), `harnessed prompt` (prompt พร้อม spawn สำหรับ sub) และ `harnessed checkpoint` (บันทึกความคืบหน้า)',
    ctaStart: 'เริ่มต้นใช้งาน',
    ctaGitHub: 'ดูบน GitHub',
    meta: 'Apache-2.0 · Node 22+ · ข้ามแพลตฟอร์ม',
  },
  whyCards: {
    heading: 'ทำไมต้อง harnessed',
    subheading: 'สามหลักการที่ฝังอยู่ในทุก workflow',
    card1: {
      title: 'ประกอบ ไม่ใช่ vendoring',
      body: 'ไม่ต้อง fork upstream อธิบายขั้นตอน install และ check ไว้ใน manifest แล้ว harnessed จะประกอบสิ่งที่ดีที่สุดของระบบนิเวศโอเพนซอร์ส (Superpowers, GSD, gstack, ECC, …) ให้เป็น workflow เดียวที่รันได้ — อยู่บน upstream ล่าสุดเสมอ และไม่เจ็บปวด: แค่ update ก็ได้ของใหม่',
    },
    card2: {
      title: 'จังหวะ 5 ขั้นในตัว',
      body: 'Discuss → Plan → Task → Verify → Ship พร้อม Research และ Retro แบบเลือกได้ ประกอบเข้าไปในทุก loop และปิดท้ายด้วยรอบ Learn อัตโนมัติ หรือรัน `/auto` เพื่อไล่ทั้ง pipeline รวดเดียว',
    },
    card3: {
      title: 'ระเบียบวิธี dogfood-first',
      body: 'ทุก workflow ถูกตรวจสอบด้วยนิยามของตัวมันเอง เป็นวินัยเดียวกับที่ใช้ปล่อยตัว harnessed เอง',
    },
  },
  threeLayerStack: {
    heading: 'สามลูปซ้อนกัน ไม่ใช่สามเฟส',
    subheading:
      'สแตกสามชั้นของ harnessed คือการนำโครงสร้างซ้อน BDD → SDD → TDD ที่เป็นที่ยอมรับแล้วมาทำให้เป็นจริงในเชิงวิศวกรรมซอฟต์แวร์ สาม loop แต่ละ loop ตอบคำถามคนละข้อ harnessed ประกอบระบบนิเวศโอเพนซอร์สเข้าไปในแต่ละ loop — และส่วนประกอบเหล่านั้นทับซ้อนกันบางส่วน ซึ่งนั่นคือสิ่งที่ orchestrator การประกอบต้องตัดสิน',
    colLayer: 'ชั้น / Loop',
    colQuestion: 'คำถามที่มันตอบ',
    colComposed: 'ประกอบจาก (มีการทับซ้อน)',
    layers: [
      {
        num: '①',
        name: 'Behavior',
        loop: 'BDD',
        question: 'จะสร้างอะไร และรู้ได้อย่างไรว่าเสร็จแล้ว',
        composed: 'gstack /office-hours governance · GSD discuss · superpowers brainstorming → acceptance criteria',
      },
      {
        num: '②',
        name: 'Spec',
        loop: 'SDD',
        question: 'โครงสร้างเป็นอย่างไร',
        composed: 'GSD plan-phase → requirements / design / tasks · contracts (Spec Kit / ECC patterns)',
      },
      {
        num: '③',
        name: 'Implementation',
        loop: 'TDD',
        question: 'มันทำงานได้จริงหรือไม่',
        composed: 'superpowers TDD red-green · subagent execution · GSD verify-work · ralph-loop completion',
      },
    ],
    nested: {
      label: 'Nested lenses',
      body: 'loop เหล่านี้คือเลนส์ที่ซ้อนกัน (nested lenses) ไม่ใช่เฟส ลูปคู่ BDD-นอก + TDD-ใน ของ Cucumber ถูกขยายในยุค GenAI ด้วยวง spec แบบ SDD → กลายเป็น triple-loop harnessed คือการทำ triple-loop นี้ให้เป็นจริงในรูปแบบ linear-cadence — ส่วน routed graph เต็มรูปแบบคือเส้นทางวิวัฒนาการของมัน การไล่ลำดับโดยปริยายคือจากนอกเข้าใน วันนี้มีเส้นป้อนกลับที่ปล่อยจริงแล้วสามเส้น: Verify → Task (การตรวจที่ไม่ผ่านจะดันงานกลับ), STATUS: NEEDS_CLARIFICATION ที่ subagent ส่งกลับเมื่อเจอพื้นที่สีเทา และบทเรียนของแต่ละรอบที่ ship แล้วถูกป้อนเข้าสู่ Discuss รอบถัดไป ส่วนการย้อนกลับเชิงโครงสร้างที่ละเอียดกว่านี้ — ความขัดแย้งของ contract ย้อนไป Spec, ความกำกวมของ requirement ย้อนไป Behavior — อยู่ใน roadmap ยังไม่ได้ปล่อย',
    },
    intersections: {
      label: 'ส่วนประกอบตัดกัน',
      body: 'การทับซ้อนคือประเด็นสำคัญ — มันคือสิ่งที่ orchestrator การประกอบต้องตัดสิน',
      items: [
        { name: 'GSD', body: 'คือแกนหลัก ร้อยผ่านทั้งสามวง — discuss, plan, verify',},
        { name: 'gstack', body: 'ครอบคลุม Behavior + Review',},
        { name: 'superpowers', body: 'ครอบคลุม Behavior (brainstorm) + Implementation (TDD)',},
      ],
    },
    crossCutting: {
      label: 'วินัยที่ตัดขวางทุกชั้น',
      body: 'สองวินัยนี้พาดผ่านทุกชั้น',
      items: [
        { name: 'karpathy principles', body: 'how to code — เปลี่ยนให้น้อยที่สุดเท่าที่ใช้ได้ แก้แบบผ่าตัด',},
        { name: 'mattpocock moves', body: 'เครื่องมือแบบเรียกใช้ตามต้องการ เรียกตามสถานการณ์',},
      ],
    },
    runtime: {
      label: 'จับคู่กับ runtime',
      body: 'Discuss = Behavior · Plan = Spec · Build = Implementation · Verify + Ship ปิดลูปด้วย gate ที่ต้องมีหลักฐาน',
    },
  },
  orchestration: {
    heading: 'ระดับการทำงานขนาน ตัดสินรายงานย่อย',
    subheading:
      '`harnessed setup` เปิด Agent Teams ให้อัตโนมัติ จากนั้น gate กำหนดเส้นทางจะเลือกชั้นการรันที่เหมาะกับงานย่อยแต่ละชิ้น — ไม่ต้อง fan-out เอง ไม่ต้องเดา',
    tiers: [
      {
        tag: 'ลดชั้น',
        name: 'session หลัก',
        cond: '< 20 บรรทัด · คิวรีเดียว',
        body: 'งานเล็กน้อยทำในที่เดิม ไม่ spawn ไม่เปลือง token',
      },
      {
        tag: 'ค่าเริ่มต้น',
        name: 'Subagent fan-out',
        cond: '≤ 3 ขนาน · ไม่ต้องคุยกัน',
        body: 'งาน research, verify และ review ที่เป็นอิสระต่อกันแตกออกไปใน context ที่แยกจากกัน',
      },
      {
        tag: 'ยกชั้น',
        name: 'Agent Teams',
        cond: '5 ทริกเกอร์ · SendMessage',
        body: 'teammate ที่ต้องตกลง contract ถกสมมติฐาน หรือใช้ task list ร่วมกัน จะถูกยกระดับเป็นทีมจริง',
      },
    ],
    wrapper: {
      label: 'wrapper ที่ตั้งฉาก',
      name: 'ralph-loop',
      body: 'ห่อชั้นใดก็ได้ และบังคับให้ยึดคำสัญญาว่าเสร็จแบบ COMPLETE ตรงตัวอักษร',
    },
    footnote:
      'judgment gate 12 ด่านแปลงกฎการทำงานร่วมกับ AI ของคุณ — การทำงานขนาน ทริกเกอร์ TDD การชี้แจงสามชั้น — จากข้อตกลงนิ่ง ๆ ให้กลายเป็นเอนจินกำหนดเส้นทาง',
  },
  workflowSection: {
    heading: 'คำสั่งเดียว ห้าขั้น ไม่มี boilerplate',
    subheading: 'แต่ละขั้นประกอบเครื่องมือที่พิสูจน์แล้วจากทั่วระบบนิเวศ harness เขียนโค้ดด้วย AI',
    stages: {
      research: { name: 'research', role: 'RAG หลายแหล่ง' },
      discuss: { name: 'discuss', role: 'gate 3 ชั้น' },
      plan: { name: 'plan', role: 'task_plan.md' },
      task: { name: 'task', role: 'ชี้แจง·เขียนโค้ด·ทดสอบ·ส่งมอบ' },
      verify: { name: 'verify', role: 'ตรวจย่อย 7 รายการ' },
      ship: { name: 'ship', role: 'release-preflight → tag-ready' },
      retro: { name: 'retro', role: 'เก็บบทเรียน' },
    },
    optional: 'ไม่บังคับ',
  },
  workflowTable: {
    heading: '27 workflow ที่ประกอบได้, 100+ capability',
    subheading: 'ตั้งแต่ research จนถึง ship แต่ละตัวมี manifest ที่กำหนดชนิดรองรับ',
    colCommand: 'คำสั่ง',
    colScope: 'ขอบเขต',
    colCaps: 'Capability',
    rows: [
      { cmd: '/auto', scope: 'super-master', caps: 'ไปป์ไลน์ 6 ขั้น' },
      { cmd: '/research', scope: 'ใช้เดี่ยว', caps: 'tavily·exa·ctx7' },
      { cmd: '/discuss', scope: 'stage gate', caps: 'กลยุทธ์·เฟส·งานย่อย' },
      { cmd: '/plan', scope: 'stage gate', caps: 'สถาปัตยกรรม·เฟส' },
      { cmd: '/task', scope: 'ต่อหนึ่งงานย่อย', caps: 'ชี้แจง·เขียนโค้ด·ทดสอบ·ส่งมอบ' },
      { cmd: '/verify', scope: 'stage gate', caps: 'ตรวจย่อยแบบมีเงื่อนไข 7 รายการ' },
      { cmd: '/ship', scope: 'stage gate', caps: 'release-preflight·gstack-ship' },
      { cmd: '/retro', scope: 'หลัง ship', caps: 'gstack·บันทึกถาวร' },
      { cmd: '/tdd', scope: 'วินัย', caps: 'red-green-refactor' },
      { cmd: '/ralph-loop', scope: 'wrapper', caps: 'คำสัญญาว่าเสร็จ' },
    ],
    githubLink: 'ดู workflow ทั้งหมดบน GitHub →',
  },
  quickstart: {
    heading: 'เริ่มได้ใน 60 วินาที',
    subheading: 'ไม่มีไฟล์คอนฟิก ไม่ต้องวางโครงเอง แค่สามคำสั่ง',
    steps: [
      {
        num: '1',
        title: 'ติดตั้ง',
        cmd: 'npm install -g harnessed',
        caption: 'ดึงเวอร์ชันเสถียรล่าสุดจาก npm',
      },
      {
        num: '2',
        title: 'ตั้งค่า',
        cmd: 'harnessed setup',
        caption: 'เปิด Agent Teams, locale ของผู้ใช้ และการค้นหา MCP ให้อัตโนมัติ',
      },
      {
        num: '3',
        title: 'ประกอบ',
        cmd: '/auto research a new feature',
        caption: 'รันภายใน agent เขียนโค้ด AI ของคุณ แล้วไปป์ไลน์ 6 ขั้นจะรับช่วงต่อ',
      },
    ],
  },
  communityStats: {
    heading: 'เข้าร่วมระบบนิเวศ harness',
    stats: [
      { value: '100+', label: 'capability ที่ประกอบแล้ว (ECC · Superpowers · GSD · gstack)' },
      { value: '28', label: 'workflow ที่ปล่อยแล้ว' },
      { value: 'v4.32.20', label: 'รุ่นล่าสุด · Apache-2.0' },
    ],
    links: {
      discussions: 'GitHub Discussions →',
      issues: 'Issues →',
      releases: 'Releases →',
    },
  },
  faq: {
    heading: 'คำถามที่พบบ่อย',
    subheading: 'คำถามที่เจอบ่อย ตอบตรงไปตรงมา',
    items: [
      {
        q: 'harnessed คืออะไร',
        a: 'harnessed คือตัวจัดการแพ็กเกจและ orchestrator การประกอบสำหรับ harness เขียนโค้ดด้วย AI มันติดตั้ง ประกอบ และรัน workflow ที่รวม Skills, MCP server และ harness pack อื่น ๆ เข้าด้วยกันผ่าน manifest ที่กำหนดชนิด — โดยไม่ vendoring โค้ด upstream',
      },
      {
        q: 'มันรันอยู่ใน agent เขียนโค้ด AI ตัวไหน',
        a: 'harnessed รันอยู่ภายใน agent เขียนโค้ด AI เป้าหมายหลักคือ Claude Code — หลังรัน `harnessed setup` คำสั่งสแลชอย่าง `/auto` และ `/discuss` จะใช้งานได้ (เพิ่งเริ่มใช้ Claude Code? ดู anthropic.com/claude/code) ส่วน Codex และ harness อื่นรองรับผ่านชั้นแพลตฟอร์มข้าม harness',
      },
      {
        q: 'ประกอบโดยไม่ vendoring ทำงานอย่างไร',
        a: 'harness pack แต่ละตัวมาพร้อม manifest ที่อธิบายขั้นตอนติดตั้ง เมตาดาต้าของ capability และจุดเชื่อมต่อ harnessed อ่าน manifest เหล่านี้ ตรวจความเข้ากันได้ แล้วเย็บเครื่องมือ upstream เข้าด้วยกันตอน runtime — คุณจึงรัน upstream ตัวจริงเสมอ ไม่ใช่ fork ที่ค้างเก่า',
      },
      {
        q: '/auto ต่างจากคำสั่งรายขั้นอย่างไร',
        a: '`/auto` รันไปป์ไลน์ 6 ขั้นตั้งแต่ต้นจนจบด้วย prompt เดียว ส่วนคำสั่งรายขั้น (`/discuss`, `/plan`, `/task`, `/verify` ฯลฯ) ให้คุณควบคุมละเอียดเมื่อต้องการแค่บางส่วนของจังหวะ',
      },
      {
        q: 'มัน spawn subagent ให้อัตโนมัติไหม',
        a: '`harnessed setup` เปิด Agent Teams ให้อัตโนมัติ และ gate การทำงานขนานจะตัดสินชั้นของแต่ละงานย่อย: งานเล็กน้อยอยู่ใน session หลัก งานที่เป็นอิสระแตกออกเป็น subagent (≤ 3, context แยกจากกัน) ส่วนงานที่ต้องคุยกัน — ตกลง contract, ถกสมมติฐาน, ใช้ task list ร่วมกัน — จะยกระดับเป็น Agent Team จริง ๆ และ ralph-loop ห่อชั้นใดก็ได้เพื่อบังคับให้ยึด COMPLETE ตรงตัวอักษร',
      },
      {
        q: 'เขียน harness pack ของตัวเองได้ไหม',
        a: 'ได้ schema ของ manifest เผยแพร่อยู่ใน repo ที่ `schemas/manifest.v1.schema.json` (ชี้ YAML language server ของคุณไปที่ไฟล์นี้) เขียน manifest ที่ชี้ไปยัง upstream ใดก็ได้ที่ติดตั้งได้ — แพ็กเกจ npm, repo git, skill ที่คุณเขียนเอง — แล้ว harnessed จะถือว่ามันเป็นหน่วยประกอบชั้นหนึ่ง',
      },
    ],
  },
  footer: {
    tagline: 'ตัวจัดการแพ็กเกจ + orchestrator การประกอบสำหรับ harness เขียนโค้ดด้วย AI',
    resources: 'แหล่งข้อมูล',
    community: 'ชุมชน',
    links: {
      github: 'GitHub',
      npm: 'npm',
      changelog: 'Changelog',
      docs: 'เอกสาร',
      discussions: 'Discussions',
      issues: 'Issues',
      twitter: 'Twitter',
    },
    license: 'สัญญาอนุญาต Apache-2.0 © 2026 easyinplay',
    madewith: 'สร้างด้วยวินัย',
  },
}

export default th
