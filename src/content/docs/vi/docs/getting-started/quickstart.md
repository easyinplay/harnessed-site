---
title: Khởi động nhanh
description: Từ cài đặt đến workflow đầu tiên trong 60 giây.
---

## Bước 1 — Cài đặt và thiết lập

```bash
npm install -g harnessed && harnessed setup
```

Lệnh này cài harnessed ở phạm vi toàn cục và chạy onboarding một lần: bật Agent Teams, cài workflow skills, xử lý manifest nền. Xem [Cài đặt](/vi/docs/getting-started/installation/) để biết từng bước làm gì.

## Bước 2 — Mở Claude Code

Mở Claude Code ở bất kỳ thư mục dự án nào. Các lệnh gạch chéo giờ đã khả dụng toàn cục — bạn không cần phải ở trong một dự án cụ thể.

## Bước 3 — Chạy lệnh đầu tiên

Gõ vào Claude Code:

```
/auto research how to add OAuth to my Express app
```

Hoặc bắt đầu bằng một yêu cầu cụ thể:

```
/auto "thêm rate limiter cho Express API của chúng ta — 100 req/phút mỗi IP, dùng Redis"
```

## Điều gì xảy ra tiếp theo

`/auto` là lệnh super-master của harnessed. Nó chạy trọn pipeline 6 giai đoạn:

| Giai đoạn | Làm gì |
|-----------|--------|
| **① Research** (có điều kiện) | Điều tra đa nguồn qua Tavily, Exa, ctx7 — kích hoạt nếu bạn trả lời "không" ở bước kiểm tra mức độ hiểu |
| **② Discuss** | Gate làm rõ 3 tầng: phạm vi chiến lược, quyết định phase, mơ hồ ở subtask |
| **③ Plan** | Review kiến trúc (có điều kiện) + lưu `task_plan.md` và `progress.md` vào `.planning/` |
| **④ Task** | Vòng lặp tuần tự theo subtask: làm rõ → viết code → kiểm thử → bàn giao, có TDD cho logic cốt lõi |
| **⑤ Verify** | 7 kiểm tra con có điều kiện: tiến độ, code review, review đa nghi, QA, bảo mật, thiết kế, đơn giản hóa |
| **⑥ Retro** | Bản tóm tắt cột mốc bắt buộc — ghi lại bài học, lưu các quyết định |

`/auto` chạy liên tục qua tất cả giai đoạn. Nếu một giai đoạn thất bại, harnessed dừng lại và bạn tiếp tục bằng `harnessed resume`.

Để kiểm soát chi tiết, hãy gọi từng giai đoạn riêng: `/discuss`, `/plan`, `/task`, `/verify`. Xem [Workflow đầu tiên](/vi/docs/getting-started/first-workflow/) để thực hành từng bước.
