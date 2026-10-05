# Lab 6 - Researcher Agent

**Thời lượng:** 10 phút | **Ứng dụng:** Microsoft 365 Copilot app - Researcher

> [!NOTE]
> **Minh Khang Group (MKG) là doanh nghiệp giả tưởng.** Toàn bộ tên công ty, nhân vật, số liệu và tài liệu trong lab chỉ phục vụ mục đích minh họa, không liên quan đến bất kỳ tổ chức có thật nào.

---

## Mục tiêu

Sau khi hoàn thành lab này, anh/chị sẽ có thể:

- Giao cho Researcher Agent một đề bài nghiên cứu nhiều bước
- Trả lời câu hỏi làm rõ để Agent lập kế hoạch nghiên cứu
- Đối chiếu kết quả nghiên cứu với dữ liệu nội bộ

**Researcher Agent** là một tác nhân AI của Microsoft 365 Copilot, chuyên nghiên cứu sâu, tổng hợp thông tin từ nhiều nguồn (web và tài liệu nội bộ) và đối chiếu với dữ liệu doanh nghiệp để đưa ra báo cáo phân tích chuyên sâu.

---

## Tình huống

> **Anh Lê Quốc Hưng** - *Credit Risk Manager, MKG Finance*
>
> Anh Hưng được giao đánh giá mức độ phù hợp của chiến lược tín dụng hiện tại trước những thay đổi của thị trường tài chính tiêu dùng. Anh dùng Researcher Agent để phân tích xu hướng pháp lý, điều tiết và chất lượng tài sản của ngành trong 12 tháng qua. Agent đối chiếu với số liệu tài chính của Tập đoàn (kết quả kinh doanh, cơ cấu vay nợ, so sánh với doanh nghiệp cùng ngành), xác định hai điểm chưa phù hợp với xu hướng thị trường và đánh giá mức độ rủi ro để hỗ trợ Ban Điều hành xem xét điều chỉnh chiến lược.

**Tệp đính kèm:** `MKG - Financial Analysis Q3 2026.xlsx`

---

### Bài tập 1: Giao đề bài nghiên cứu

**Cách thực hiện:**

1. Mở **Microsoft 365 Copilot app** (m365.cloud.microsoft) và chọn **Researcher** trong mục Agents
2. Đính kèm file `MKG - Financial Analysis Q3 2026.xlsx`
3. Nhập prompt:

> **PROMPT:**
>
> Nghiên cứu môi trường pháp lý và điều tiết đối với hoạt động tài chính tiêu dùng tại Việt Nam trong 12 tháng qua: định hướng tăng trưởng tín dụng, các thay đổi về quy định giám sát, và xu hướng chất lượng tài sản của ngành. Sau đó đối chiếu với số liệu tài chính trong file MKG - Financial Analysis Q3 2026.xlsx (các sheet TrialBalance, PL_Budget_Actual và Comps) và chỉ ra hai điểm trong kết quả kinh doanh hoặc cơ cấu vay nợ của Tập đoàn đang lệch so với xu hướng ngành, kèm mức độ rủi ro của từng điểm.

### Bài tập 2: Trả lời câu hỏi làm rõ

Researcher sẽ hỏi lại để làm rõ phạm vi nghiên cứu (khoảng thời gian, nhóm so sánh, độ dài báo cáo). Trả lời:

> **PROMPT:**
>
> 12 tháng tính đến hiện tại. A) các công ty tài chính tiêu dùng phù hợp. Chọn độ dài báo cáo: Long (5+ trang).

**Kết quả mong đợi:** Agent lập **Research Plan** nhiều bước, tự thu thập dữ liệu, đối chiếu với `MKG - Financial Analysis Q3 2026.xlsx` và xuất báo cáo Word *"Phân tích môi trường pháp lý tài chính"*.

> [!TIP]
> Researcher thường mất vài phút để hoàn thành. Anh/chị có thể chuyển sang việc khác và quay lại khi báo cáo xong.

> [!NOTE]
> Luôn kiểm tra nguồn trích dẫn trong báo cáo của Researcher, đặc biệt với thông tin pháp lý và số liệu ngành, trước khi dùng cho quyết định quan trọng.

---

## Tổng kết

| Anh/chị đã học được | Ứng dụng |
|---------------------|----------|
| Giao đề bài nghiên cứu nhiều bước | Researcher |
| Trả lời câu hỏi làm rõ phạm vi | Researcher |
| Đối chiếu nghiên cứu với dữ liệu nội bộ | Researcher + Excel |
