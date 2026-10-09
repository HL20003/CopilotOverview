# Lab 6 - Copilot trong Teams

**Ứng dụng:** Teams

> [!NOTE]
> **Toàn bộ tài liệu, số liệu và tình huống trong workshop là bản nháp (draft) dùng cho mục đích đào tạo.** Tên nhân vật, khách hàng và đối tác là giả định.

---

## Mục tiêu

Sau khi hoàn thành lab này, anh/chị sẽ có thể:

- Bắt kịp cuộc họp khi vào muộn và phát hiện những điểm còn bất đồng để chốt
- Biến cuộc họp thành biên bản điều hành: quyết định, người phụ trách, thời hạn
- Nắm nhanh những gì đang diễn ra trong các nhóm chat của đội ngũ

### Tính năng chính

| Tính năng | Mô tả |
|-----------|--------|
| **Copilot trong cuộc họp** | Hỏi đáp về nội dung cuộc họp đang diễn ra |
| **Recap** | Tóm tắt sau cuộc họp, ghi chú và việc cần làm |
| **Chat & Channel Summarizing** | Tóm tắt các cuộc trò chuyện nhóm và kênh |

---

## Tình huống

> **Chị Nguyễn Thu Trang** - *Giám đốc Trung tâm Exclusive*
>
> Chị Trang vào muộn 15 phút buổi giao ban với các RM của trung tâm về kế hoạch tăng CASA quý 4. Chị cần nắm ngay những gì đã thống nhất, chốt các điểm còn tranh luận trước khi cuộc họp kết thúc, và sau đó có biên bản để theo dõi từng RM. Trong tuần, chị cũng cần biết nhóm chat của trung tâm đang có vấn đề gì cần mình xử lý.

> [!NOTE]
> Copilot trong cuộc họp cần **bật transcript** (ghi lời thoại). Với cuộc họp có khách hàng hoặc đối tác bên ngoài, người chủ trì phải **thông báo và được các bên đồng ý** trước khi bật Recording & Transcription.

> [!TIP]
> Lab này thực hành trên **một cuộc họp Teams có thật** của anh/chị (đã bật transcript), ví dụ buổi giao ban với đội ngũ.

---

### Bài tập 1: Vào họp muộn, bắt kịp trong 30 giây

**Cách thực hiện:**

1. Tham gia một cuộc họp Teams đã bật transcript
2. Nhấn nút **Copilot** trên thanh công cụ cuộc họp
3. Nhập prompt:

> **PROMPT:**
>
> Tôi vừa vào cuộc họp. Trong 3 câu, cho tôi biết đã quyết định những gì, ai đang phụ trách việc gì, và hiện mọi người đang thảo luận vấn đề nào.

### Bài tập 2: Tìm điểm còn bất đồng để chốt

> **PROMPT:**
>
> Trong cuộc họp này, có vấn đề nào mọi người chưa thống nhất hoặc câu hỏi nào chưa được trả lời không? Ai đang giữ quan điểm nào? Gợi ý cho tôi một câu hỏi để chốt lại từng vấn đề trước khi kết thúc họp.

**Kết quả mong đợi:** Danh sách vấn đề còn mở kèm quan điểm của từng người, giúp anh/chị chủ động chốt trước khi cuộc họp kết thúc.

### Bài tập 3: Biên bản điều hành sau cuộc họp

1. Sau cuộc họp, mở cuộc họp trong **Chat** hoặc **Calendar**, chọn tab **Recap**
2. Mở **Copilot** và nhập:

> **PROMPT:**
>
> Tạo biên bản điều hành của cuộc họp: các quyết định đã chốt, bảng việc cần làm gồm Việc | Người phụ trách | Chỉ tiêu | Thời hạn, và các vấn đề còn treo cần tôi quyết định. Đánh dấu những cam kết chưa có thời hạn rõ ràng.

3. Hỏi tiếp để gửi cho cả nhóm:

> **PROMPT:**
>
> Soạn tin nhắn gửi nhóm họp: cảm ơn, tóm tắt 3 quyết định chính, nhắc từng người việc của mình và thời hạn.

### Bài tập 4: Tóm tắt nhóm chat của đội ngũ

1. Mở một nhóm chat hoặc kênh của đội (ví dụ nhóm chat các RM của trung tâm)
2. Bấm **Copilot** ở góc trên khung chat và nhập:

> **PROMPT:**
>
> Tóm tắt các trao đổi trong 7 ngày qua: vấn đề khách hàng nổi bật, câu hỏi chưa được trả lời, và những việc đang chờ tôi quyết định hoặc phản hồi.

---

## Lưu ý tuân thủ

> [!NOTE]
> Chỉ bật Recording và Transcription sau khi đã thông báo và được người tham dự bên ngoài đồng ý. Transcript cuộc họp có khách hàng là dữ liệu Mật, chỉ lưu trong Teams/SharePoint của ngân hàng. Biên bản do Copilot tạo phải được người chủ trì rà soát trước khi gửi.

---

## Prompt đề xuất - Teams

### Trong cuộc họp

> **PROMPT:**
>
> 1. Có nội dung nào trong cuộc họp yêu cầu tôi thực hiện hoặc phản hồi không?
> 2. Những con số nào đã được đưa ra trong cuộc họp (chỉ tiêu, chi phí, thời hạn)? Liệt kê kèm người nói.

### Sau cuộc họp

> **PROMPT:**
>
> So sánh cuộc họp này với cuộc họp giao ban tuần trước: những cam kết nào đã hoàn thành, những cam kết nào bị lùi thời hạn?

### Chat & Channel

> **PROMPT:**
>
> Trong kênh của Khối tuần này, có thông báo hoặc quyết định nào tôi cần truyền đạt lại cho đội ngũ của mình không?

---

## Tổng kết

| Anh/chị đã học được | Tính năng |
|---------------------|-----------|
| Bắt kịp cuộc họp và chốt điểm còn bất đồng | Copilot trong cuộc họp |
| Biên bản điều hành có người phụ trách, thời hạn | Recap |
| Nắm nhanh tình hình trong nhóm chat của đội | Chat & Channel Summarizing |
