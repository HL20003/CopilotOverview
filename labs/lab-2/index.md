# Lab 2 - Copilot trong Excel

**Thời lượng:** 22 phút | **Ứng dụng:** Excel

> [!NOTE]
> **Minh Khang Group (MKG) là doanh nghiệp giả tưởng.** Toàn bộ tên công ty, nhân vật, số liệu và tài liệu trong lab chỉ phục vụ mục đích minh họa, không liên quan đến bất kỳ tổ chức có thật nào.

---

## Mục tiêu

Sau khi hoàn thành lab này, anh/chị sẽ có thể:

- Dùng Copilot phân tích dữ liệu trên workbook nhiều sheet
- Dùng built-in skill để dựng báo cáo tài chính từ bảng cân đối thử
- Tạo biểu đồ có tiêu đề nêu đúng phát hiện chính

### Tính năng chính

| Tính năng | Mô tả |
|-----------|--------|
| **Insights** | Phân tích chuyên sâu, tìm xu hướng và biến động |
| **Formula** | Đề xuất, kiểm tra và sửa công thức |
| **Infographic** | Trực quan hóa dữ liệu bằng biểu đồ |

---

## Tình huống

> **Chị Phạm Thu Hằng** - *Financial Analysis Manager, MKG*
>
> Chị Hằng dùng Copilot trong Excel để phân tích kết quả kinh doanh quý 3/2026, so sánh số liệu thực hiện với kế hoạch và quý 2, xác định ba khoản mục biến động đáng chú ý nhất và đề xuất hành động cải thiện. Chị còn dùng built-in skills để dựng bảng cân đối kế toán, báo cáo kết quả kinh doanh và biểu đồ doanh thu thực tế so với kế hoạch theo tháng, phục vụ báo cáo Ban Lãnh đạo.

**Tệp demo:** `MKG - Financial Analysis Q3 2026.xlsx`, gồm các sheet *Đơn hàng*, *Doanh thu tháng*, *TrialBalance*, *UnitEconomics*, *Comps*, *PL_Budget*...

[demo-folder]

---

### Bài tập 1: Phân tích kết quả kinh doanh Q3

**Cách thực hiện:**

1. Mở file `MKG - Financial Analysis Q3 2026.xlsx`
2. Nhấn **Copilot** trên ribbon
3. Nhập prompt:

> **PROMPT:**
>
> Phân tích kết quả kinh doanh Q3/2026, so sánh thực hiện với kế hoạch và Q2, xác định 3 khoản mục biến động đáng chú ý nhất, đồng thời đề xuất hành động cải thiện.

**Kết quả mong đợi:** Copilot đọc dữ liệu trên nhiều sheet, nêu 3 khoản mục biến động lớn nhất (mức chênh lệch so với kế hoạch và Q2) kèm đề xuất hành động.

### Bài tập 2: Dựng báo cáo tài chính (skill "3-statements")

> **PROMPT:**
>
> Hãy dựng bảng cân đối kế toán và báo cáo kết quả kinh doanh cho Tập đoàn Minh Khang từ bảng cân đối thử trong trang TrialBalance. Liên kết lợi nhuận sau thuế vào phần lợi nhuận chưa phân phối trên bảng cân đối kế toán, và thêm một ô kiểm tra xác nhận tổng tài sản bằng tổng nguồn vốn.

> [!TIP]
> Ô kiểm tra "tổng tài sản = tổng nguồn vốn" giúp anh/chị tự xác minh kết quả Copilot tạo ra. Luôn yêu cầu Copilot thêm bước kiểm tra khi dựng mô hình tài chính.

### Bài tập 3: Biểu đồ thực tế vs kế hoạch (skill "chart-design")

> **PROMPT:**
>
> Từ dữ liệu trang Doanh thu tháng, hãy tạo biểu đồ so sánh doanh thu thực tế với kế hoạch theo tháng, đặt tiêu đề nêu đúng phát hiện chính chứ không chỉ ghi tên chỉ số, và đặt biểu đồ bên dưới bảng dữ liệu.

**Kết quả mong đợi:** Biểu đồ cột thực tế vs kế hoạch theo tháng, tiêu đề nêu phát hiện (ví dụ *"Doanh thu vượt kế hoạch 6/9 tháng, riêng tháng 8 hụt 8%"*) thay vì chỉ ghi *"Doanh thu theo tháng"*.

---

## Prompt đề xuất - Excel

### Insights Analysis

> **PROMPT:**
>
> 1. Phân tích workbook này và cho tôi 5 insight quan trọng nhất từ dữ liệu.
> 2. Tóm tắt các xu hướng nổi bật, các giá trị bất thường và những phát hiện đáng chú ý trong bảng dữ liệu này.
> 3. Tìm các mối tương quan đáng chú ý giữa các cột dữ liệu.

### Formulas

> **PROMPT:**
>
> 1. Đề xuất công thức phù hợp để tính lợi nhuận cho bảng này.
> 2. Kiểm tra và sửa các công thức bị lỗi trong bảng.
> 3. Tạo công thức để tính doanh thu lũy kế theo tháng.

### Chart / Infographic Generation

> **PROMPT:**
>
> Tạo biểu đồ cột thể hiện doanh thu theo từng tháng.

> [!NOTE]
> Dữ liệu nên được định dạng dạng **Table** (Ctrl + T) để Copilot đọc chính xác hơn.

---

## Tổng kết

| Anh/chị đã học được | Tính năng |
|---------------------|-----------|
| Phân tích biến động so với kế hoạch và kỳ trước | Insights |
| Dựng BCĐKT, BCKQKD kèm ô kiểm tra | Formula (skill 3-statements) |
| Tạo biểu đồ có tiêu đề nêu phát hiện | Infographic (skill chart-design) |
