# Lab 5 - Copilot trong Teams

**Thời lượng:** 10 phút | **Ứng dụng:** Teams

> [!NOTE]
> **Ngân hàng TMCP Minh Khang (MKB) là ngân hàng giả tưởng.** Toàn bộ tên ngân hàng, nhân vật, khách hàng, số liệu và tài liệu trong lab chỉ phục vụ mục đích minh họa, không liên quan đến bất kỳ tổ chức có thật nào.

---

## Mục tiêu

Sau khi hoàn thành lab này, anh/chị sẽ có thể:

- Bắt kịp cuộc họp khi vào muộn mà không làm gián đoạn người khác
- Phát hiện những điểm còn bất đồng trước khi cuộc họp kết thúc
- Họp với đối tác nước ngoài bằng phụ đề dịch và Interpreter

### Tính năng chính

| Tính năng | Mô tả |
|-----------|--------|
| **Recap** | Tóm tắt cuộc họp, trả lời câu hỏi về nội dung đã thảo luận |
| **Translated Live Captions** | Phụ đề được dịch theo thời gian thực |
| **Interpreter** | Thông dịch trực tiếp giọng nói sang ngôn ngữ đã chọn |

---

## Tình huống

> **Chị Nguyễn Thu Trang** - *Exclusive RM phụ trách Đối tác Quốc tế, MKB*
>
> Chị Trang vào muộn 15 phút cuộc họp với một công ty quản lý quỹ ở Singapore và một hãng bảo hiểm ở Đức về sản phẩm wealth management và bancassurance dành cho khách hàng Exclusive. Chị cần nắm ngay những gì đã quyết, biết điểm nào hai bên còn chưa thống nhất để kịp đặt câu hỏi, và theo dõi được phần trình bày bằng tiếng Anh, tiếng Đức của đối tác.

> [!NOTE]
> Copilot trong cuộc họp cần **bật transcript** (ghi lời thoại). Theo quy định sử dụng AI của MKB, với cuộc họp có khách hàng hoặc đối tác bên ngoài, người chủ trì phải **thông báo và được các bên đồng ý** trước khi bật Recording & Transcription.

> [!TIP]
> Lab này thực hành trên **một cuộc họp Teams có thật** của anh/chị (đã bật transcript), ví dụ buổi giao ban RM.

---

### Bài tập 1: Vào họp muộn, bắt kịp trong 30 giây

**Cách thực hiện:**

1. Tham gia một cuộc họp Teams đã bật transcript
2. Nhấn nút **Copilot** trên thanh công cụ cuộc họp
3. Nhập prompt:

> **PROMPT:**
>
> Tôi vừa vào cuộc họp. Trong 3 câu, cho tôi biết đã quyết định những gì, ai đang phụ trách việc gì, và hiện mọi người đang thảo luận vấn đề nào.

### Bài tập 2: Tìm điểm còn bất đồng

> **PROMPT:**
>
> Trong cuộc họp này, có vấn đề nào các bên chưa thống nhất hoặc câu hỏi nào chưa được trả lời không? Ai đang giữ quan điểm nào? Gợi ý cho tôi một câu hỏi để chốt lại từng vấn đề.

**Kết quả mong đợi:** Danh sách vấn đề còn mở kèm quan điểm của từng bên, giúp anh/chị chủ động chốt trước khi cuộc họp kết thúc.

### Bài tập 3: Bật Translated Live Captions

1. Trên thanh công cụ cuộc họp, chọn **More (...)** > **Language and speech** > **Turn on live captions**
2. Mở **Captions settings** > **Translate to**, chọn **Vietnamese**
3. Đổi sang **English** hoặc **Chinese (Simplified)** để thấy phụ đề thay đổi theo thời gian thực

### Bài tập 4: Bật Interpreter

1. Trên thanh công cụ cuộc họp, chọn **More (...)** > **Language and speech** > **Interpreter**
2. Chọn **Choose interpretation language** - ngôn ngữ anh/chị muốn nghe
3. Điều chỉnh âm lượng giữa giọng gốc và giọng thông dịch

> [!TIP]
> Interpreter giúp người tham dự nước ngoài nghe bằng ngôn ngữ của họ mà không cần phiên dịch viên.

---

## Lưu ý tuân thủ

> [!NOTE]
> Chỉ bật Recording và Transcription sau khi đã thông báo và được người tham dự bên ngoài đồng ý. Transcript cuộc họp có khách hàng là dữ liệu Mật, chỉ lưu trong Teams/SharePoint của ngân hàng. Biên bản do Copilot tạo phải được người chủ trì rà soát trước khi gửi.

---

## Prompt đề xuất - Teams

### Teams - Recap

> **PROMPT:**
>
> 1. Có nội dung nào trong cuộc họp yêu cầu tôi thực hiện hoặc phản hồi không?
> 2. Tóm tắt các câu hỏi và trả lời trong phần Q&A, đánh dấu câu nào chưa được trả lời đầy đủ.
> 3. Đối tác đã đưa ra những con số nào (phí, thời gian, chỉ tiêu)? Liệt kê kèm thời điểm được nhắc trong cuộc họp.

### Teams - Follow-up

> **PROMPT:**
>
> Soạn email follow-up gửi các bên sau cuộc họp: cảm ơn, tóm tắt 3 quyết định chính, bảng việc cần làm gồm Việc | Người phụ trách | Thời hạn, và đề xuất thời gian họp tiếp theo.

### Teams - Chat Summarizing

> **PROMPT:**
>
> Tóm tắt các trao đổi trong nhóm chat RM của Trung tâm trong 7 ngày qua: vấn đề khách hàng nổi bật, câu hỏi chưa được trả lời và việc tôi cần quyết định.

---

## Tổng kết

| Anh/chị đã học được | Tính năng |
|---------------------|-----------|
| Bắt kịp cuộc họp và tìm điểm còn bất đồng | Recap |
| Xem phụ đề được dịch theo thời gian thực | Translated Live Captions |
| Nghe cuộc họp bằng ngôn ngữ mong muốn | Interpreter |
