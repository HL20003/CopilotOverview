# Lab 3 - Copilot trong Excel

**Ứng dụng:** Excel

> [!NOTE]
> **Toàn bộ tài liệu, số liệu và tình huống trong workshop là bản nháp (draft) dùng cho mục đích đào tạo.** Tên nhân vật, khách hàng và đối tác là giả định.

---

## Mục tiêu

Sau khi hoàn thành lab này, anh/chị sẽ có thể:

- Hỏi Copilot về workbook nhiều sheet như hỏi một chuyên viên phân tích, nhận câu trả lời có số liệu và nguồn
- Phân loại đội ngũ RM theo tiêu chí của mình để biết cần hỗ trợ ai
- Tạo biểu đồ so sánh với chuẩn ngành, tiêu đề nói lên điều cần hành động

### Tính năng chính

| Tính năng | Mô tả |
|-----------|--------|
| **Insights** | Phân tích chuyên sâu, tìm xu hướng và biến động |
| **Formula** | Tạo cột tính toán, phân loại theo tiêu chí |
| **Infographic** | Trực quan hóa dữ liệu bằng biểu đồ |

---

## Tình huống

> **Chị Phạm Thu Hằng** - *Phó Giám đốc Khối Khách hàng Ưu tiên*
>
> Mười phút trước cuộc họp giao ban với Ban Điều hành, chị Hằng nhận được workbook kết quả quý 3 của Khối. Chị cần nắm nhanh bức tranh tổng thể, biết nhóm RM nào cần hỗ trợ, và có một biểu đồ cho thấy Khối đang đứng ở đâu so với các ngân hàng cùng nhóm về tỷ lệ CASA.

**Tệp demo:** [Financial Analysis Q3 2026.xlsx](#file-financial), gồm các sheet *Output - Q3 Performance*, *Danh mục RM*, *Thu nhập tháng*, *TrialBalance*, *UnitEconomics*, *Comps*, *PL_Budget_Actual*

*Xem toàn bộ file demo tại trang [Module 1](#module-1) và [cách tải file Word/Excel về máy](#module-1/cach-tai-file-word-excel-ve-may).*

---

### Bài tập 1: Bức tranh quý 3 trong 5 ý

**Cách thực hiện:**

1. Mở file [Financial Analysis Q3 2026.xlsx](#file-financial)
2. Nhấn **Copilot** trên ribbon
3. Nhập prompt:

> **PROMPT:**
>
> Tôi sắp họp với Ban Điều hành. Dựa trên workbook này, Khối Khách hàng Ưu tiên quý 3 đang tốt lên hay xấu đi so với quý 2 và so với kế hoạch? Điều gì đáng lo nhất và vì sao? Trả lời trong đúng 5 gạch đầu dòng, mỗi ý có con số cụ thể và ghi tên sheet lấy số liệu.

**Kết quả mong đợi:** 5 ý ngắn có số liệu, ví dụ: thu nhập tăng 2,1% so với quý 2 nhưng lợi nhuận trước thuế giảm 4,5% vì chi phí dự phòng cao hơn kế hoạch 79%; tỷ lệ CASA chỉ 16,5% so với kế hoạch 19%; phí bancassurance chiếm 52% tổng phí.

### Bài tập 2: Phân loại đội ngũ RM để lên kế hoạch hỗ trợ

> **PROMPT:**
>
> Trong sheet Danh mục RM, thêm cột "Xếp loại": loại A nếu AUM của RM cao hơn mức trung bình toàn khối và tỷ lệ CASA trên huy động từ 18% trở lên, loại C nếu cả hai tiêu chí đều không đạt, còn lại là loại B. Sau đó lập bảng đếm số RM loại A, B, C theo từng trung tâm và chỉ ra 3 trung tâm có tỷ lệ RM loại C cao nhất.

**Kết quả mong đợi:** Cột Xếp loại dùng công thức và bảng tổng hợp theo trung tâm. Toàn khối có khoảng 33 RM loại A, 82 loại B và 125 loại C, cho thấy cần một chương trình hỗ trợ tập trung cho nhóm C.

> [!TIP]
> Bấm vào một ô trong cột mới để xem công thức Copilot đã viết. Hiểu công thức giúp anh/chị tự điều chỉnh tiêu chí (ví dụ đổi ngưỡng CASA thành 20%) mà không cần hỏi lại.

### Bài tập 3: So sánh với chuẩn ngành

> **PROMPT:**
>
> Từ sheet UnitEconomics, tạo biểu đồ cột thể hiện tỷ lệ CASA của từng trung tâm, sắp xếp từ cao xuống thấp, thêm một đường ngang là trung vị của nhóm ngân hàng so sánh lấy từ sheet Comps. Tô màu khác cho các trung tâm dưới 15%. Đặt tiêu đề nêu đúng phát hiện chính, không chỉ ghi tên chỉ số.

**Kết quả mong đợi:** Biểu đồ có đường chuẩn 24,5%, tiêu đề nêu phát hiện, ví dụ *"Cả 12 trung tâm có tỷ lệ CASA dưới trung vị ngành 24,5%, thấp nhất là Ninh Kiều với 11,9%"*.

---

## Lưu ý tuân thủ

> [!NOTE]
> Danh mục khách hàng theo RM là thông tin Mật. Chỉ dùng Copilot với file đã gắn nhãn phân loại và mã khách hàng đã ẩn danh, không gửi bảng chi tiết khách hàng qua email ra ngoài. Số liệu Copilot tính phải được đối chiếu với báo cáo chính thức trước khi trình.

---

## Prompt đề xuất - Excel

### Insights Analysis

> **PROMPT:**
>
> 1. So sánh hai trung tâm [tên trung tâm] và [tên trung tâm]: khác nhau ở đâu về số khách hàng mỗi RM, AUM bình quân mỗi khách hàng và thu nhập mỗi RM? Điều gì giải thích chênh lệch?
> 2. Với tốc độ hiện tại, Khối có hoàn thành chỉ tiêu CASA cuối năm không? Cần tăng thêm bao nhiêu mỗi tháng để đạt?

### Formulas

> **PROMPT:**
>
> 1. Phân bổ chỉ tiêu huy động CASA quý 4 cho từng trung tâm theo tỷ trọng AUM hiện tại, thêm cột chênh lệch giữa chỉ tiêu và số dư hiện có.
> 2. Thêm cột cảnh báo cho các RM có số khách hàng vượt quá 120 người.

### Chart / Infographic Generation

> **PROMPT:**
>
> Từ sheet PL_Budget_Actual, tạo biểu đồ thác nước (waterfall) giải thích chênh lệch giữa lợi nhuận trước thuế kế hoạch và thực hiện quý 3 theo từng khoản mục thu nhập và chi phí.

> [!NOTE]
> Dữ liệu nên được định dạng dạng **Table** (Ctrl + T) để Copilot đọc chính xác hơn.

---

## Tổng kết

| Anh/chị đã học được | Tính năng |
|---------------------|-----------|
| Nắm nhanh bức tranh tổng thể, có số liệu và nguồn | Insights |
| Phân loại đội ngũ RM theo tiêu chí riêng | Formula |
| Biểu đồ so sánh với chuẩn ngành, tiêu đề nêu phát hiện | Infographic |
