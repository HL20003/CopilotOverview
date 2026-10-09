# Lab 2 - Copilot trong Excel

**Thời lượng:** 22 phút | **Ứng dụng:** Excel

> [!NOTE]
> **Ngân hàng TMCP Minh Khang (MKB) là ngân hàng giả tưởng.** Toàn bộ tên ngân hàng, nhân vật, khách hàng, số liệu và tài liệu trong lab chỉ phục vụ mục đích minh họa, không liên quan đến bất kỳ tổ chức có thật nào.

---

## Mục tiêu

Sau khi hoàn thành lab này, anh/chị sẽ có thể:

- Hỏi Copilot về workbook nhiều sheet như hỏi một chuyên viên phân tích, nhận câu trả lời có số liệu và nguồn
- Để Copilot viết công thức phân loại RM theo tiêu chí của anh/chị và tổng hợp theo trung tâm
- Tạo biểu đồ so sánh với chuẩn ngành, tiêu đề nói lên điều cần hành động

### Tính năng chính

| Tính năng | Mô tả |
|-----------|--------|
| **Insights** | Phân tích chuyên sâu, tìm xu hướng và biến động |
| **Formula** | Đề xuất, kiểm tra và sửa công thức |
| **Infographic** | Trực quan hóa dữ liệu bằng biểu đồ |

---

## Tình huống

> **Chị Phạm Thu Hằng** - *Giám đốc Phân tích Tài chính, Khối Khách hàng Ưu tiên, MKB*
>
> Mười phút trước cuộc họp giao ban với Ban Điều hành, chị Hằng nhận được workbook kết quả quý 3 của Khối Khách hàng Ưu tiên. Chị cần nắm nhanh bức tranh tổng thể, phân loại đội ngũ RM để biết cần hỗ trợ ai, và có một biểu đồ cho thấy Khối đang đứng ở đâu so với các ngân hàng cùng nhóm về tỷ lệ CASA.

**Tệp demo:** [MKB - Financial Analysis Q3 2026.xlsx](#file-financial), gồm các sheet *Output - Q3 Performance*, *Danh mục RM*, *Thu nhập tháng*, *TrialBalance*, *UnitEconomics*, *Comps*, *PL_Budget_Actual*

*Xem toàn bộ file demo tại trang [Giới thiệu và chuẩn bị](#module-1) và [cách tải file Word/Excel về máy](#module-1/cach-tai-file-word-excel-ve-may).*

---

### Bài tập 1: Bức tranh quý 3 trong 5 ý

**Cách thực hiện:**

1. Mở file [MKB - Financial Analysis Q3 2026.xlsx](#file-financial) (xem [cách tải file Word/Excel về máy](#module-1/cach-tai-file-word-excel-ve-may))
2. Nhấn **Copilot** trên ribbon
3. Nhập prompt:

> **PROMPT:**
>
> Tôi sắp họp với Ban Điều hành. Dựa trên workbook này, Khối Khách hàng Ưu tiên quý 3 đang tốt lên hay xấu đi so với quý 2 và so với kế hoạch? Điều gì đáng lo nhất và vì sao? Trả lời trong đúng 5 gạch đầu dòng, mỗi ý có con số cụ thể và ghi tên sheet lấy số liệu.

**Kết quả mong đợi:** 5 ý ngắn có số liệu, ví dụ: thu nhập tăng 2,1% so với quý 2 nhưng lợi nhuận trước thuế giảm 4,5% vì chi phí dự phòng cao hơn kế hoạch 79%; tỷ lệ CASA chỉ 16,5% so với kế hoạch 19%; phí bancassurance chiếm 52% tổng phí.

### Bài tập 2: Phân loại RM bằng công thức

> **PROMPT:**
>
> Trong sheet Danh mục RM, thêm cột "Xếp loại": loại A nếu AUM của RM cao hơn mức trung bình toàn khối và tỷ lệ CASA trên huy động từ 18% trở lên, loại C nếu cả hai tiêu chí đều không đạt, còn lại là loại B. Sau đó lập bảng đếm số RM loại A, B, C theo từng trung tâm.

**Kết quả mong đợi:** Cột Xếp loại dùng công thức (không phải giá trị gõ tay) và bảng tổng hợp theo trung tâm. Toàn khối có khoảng 33 RM loại A, 82 loại B và 125 loại C, cho thấy phần lớn RM chưa đạt cả hai tiêu chí.

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
> 2. Thu nhập tháng nào lệch kế hoạch nhiều nhất, và lệch do thu nhập lãi hay do thu phí?
> 3. Có mối liên hệ nào giữa thâm niên của RM và AUM họ quản lý không?

### Formulas

> **PROMPT:**
>
> 1. Thêm cột số ngày còn lại đến ngày đáo hạn của từng khoản tiền gửi và tô vàng các khoản đáo hạn trong 30 ngày tới, để RM chủ động liên hệ khách hàng tái tục.
> 2. Tính lãi tiền gửi dự kiến cho từng khách hàng theo kỳ hạn, số tiền và lãi suất cộng thêm theo hạng thành viên.
> 3. Từ bảng cân đối thử trong sheet TrialBalance, dựng bảng cân đối kế toán và báo cáo kết quả kinh doanh, thêm ô kiểm tra tổng tài sản bằng tổng nợ phải trả và vốn chủ sở hữu.

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
| Hỏi nhanh bức tranh tổng thể, có số liệu và nguồn | Insights |
| Phân loại RM bằng công thức theo tiêu chí riêng | Formula |
| Biểu đồ so sánh với chuẩn ngành, tiêu đề nêu phát hiện | Infographic |
