---
title: Phương pháp dogfood-first
description: Mọi workflow đều được kiểm chứng bằng chính định nghĩa của nó.
---

## Nguyên tắc

Yêu cầu R8.1 của harnessed ghi rõ: chu trình phát triển của chính dự án phải dùng workflow của chính nó. Mọi tính năng phát hành trong harnessed đều được xây bằng đúng nhịp `/discuss`, `/plan`, `/task`, `/verify` mà harnessed cung cấp cho người dùng.

Đây không phải khẩu hiệu — đó là một gate cứng. Một workflow mà harnessed không dùng được để phát hành chính mình là một workflow không hoạt động.

## Nó bắt được gì trong thực tế

Trong Phase 3.5 W2.1 Cycle 4, nhóm đang chạy `/auto` trên chính repo harnessed để triển khai một tính năng orchestration mới. Một bug lộ ra trong logic thứ tự spawn của `masterOrchestrator`: các subworkflow được khởi tạo sai trình tự, khiến giai đoạn task bắt đầu trước khi giai đoạn plan kịp ghi `task_plan.md`.

Bug này bị bắt như một hồi quy dogfood — nó không lộ ra trong unit test vì đường tích hợp đó chỉ chạy khi một lần `/auto` thật sự spawn agent. Chính vì harnessed đang dùng chính nó, thất bại xuất hiện tức thì và không thể chối cãi.

Bản vá được nâng lên P0 vì nó vi phạm khế ước về niềm tin: nếu harnessed không điều phối nổi việc phát triển của chính nó, người dùng không thể tin nó điều phối việc của họ.

## Hệ quả thực tiễn

**Thay đổi schema tự kiểm chứng.** Khi harnessed thêm một trường mới vào schema manifest, chu trình phát triển kế tiếp sẽ dùng chính schema đó kiểm tra các manifest của harnessed — tự động khi `harnessed install` và trong CI qua `scripts/check-workflow-schema.mjs`. Mọi hồi quy schema đều lộ ra trong lần chạy dogfood trước khi tới tay người dùng.

**Workflow mới bị thử tải trước.** Trước khi bất kỳ workflow nào được phát hành, nó đều được chạy trên chính repo harnessed. Chính codebase định nghĩa workflow cũng là bệ thử.

**Bug dogfood là P0.** Nếu chạy harnessed trên harnessed mà hỏng, đó là sự cố P0 — không phải một giới hạn đã biết để ghi vào tài liệu. Điều này tạo động lực mạnh để giữ công cụ chạy trọn vẹn từ đầu đến cuối, chứ không chỉ vượt qua unit test.

## Điều này có nghĩa gì với người dùng

Khi bạn chạy `/auto` trên dự án của mình, bạn đang chạy đúng pipeline dùng để phát hành chính harnessed. Áp lực dogfood liên tục nghĩa là:

- Hồi quy lộ ra trong lúc phát triển, không phải trong báo cáo của người dùng
- Các tình huống biên của điều phối đa agent đều được chạy thật ở mỗi bản phát hành harnessed
- Nhịp 5 giai đoạn được thử lửa trên một codebase thật, đang được bảo trì tích cực

Phương pháp này được mô tả trong [docs/WORKFLOW.md](https://github.com/easyinplay/harnessed/blob/main/docs/WORKFLOW.md) ở repo harnessed.
