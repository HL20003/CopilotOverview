# Lab 3 - Copilot trong PowerPoint

**Thời lượng:** 20 phút | **Ứng dụng:** PowerPoint

> [!NOTE]
> **Ngân hàng TMCP Minh Khang (MKB) là ngân hàng giả tưởng.** Toàn bộ tên ngân hàng, nhân vật, khách hàng, số liệu và tài liệu trong lab chỉ phục vụ mục đích minh họa, không liên quan đến bất kỳ tổ chức có thật nào.

---

## Mục tiêu

Sau khi hoàn thành lab này, anh/chị sẽ có thể:

- Tạo bộ slide trình phê duyệt từ tài liệu Word, tập trung vào quyết định cần có
- Đưa nhận diện thương hiệu (logo, màu) vào toàn bộ deck
- Tạo phiên bản rút gọn gửi khách hàng, loại bỏ thông tin nội bộ

### Tính năng chính

| Tính năng | Mô tả |
|-----------|--------|
| **Slide Creating** | Tạo bài thuyết trình từ file Word hoặc PDF |
| **Slide Formatting** | Chuẩn hóa logo, màu sắc, font, bố cục toàn bộ deck |
| **Script (Speaker notes)** | Tự động viết lời thoại cho từng slide |

---

## Tình huống

> **Chị Phạm Ngọc Lan** - *Giám đốc Phát triển Khách hàng Ưu tiên, MKB*
>
> Dự thảo Chương trình Đặc quyền Khách hàng Exclusive 2027 đã xong. Tuần này chị Lan phải trình Ban Điều hành phê duyệt ngân sách 186 tỷ đồng, và nếu được duyệt, RM cần ngay một trang giới thiệu gọn gàng để gửi khách hàng. Chị dùng Copilot trong PowerPoint để làm cả hai từ cùng một tài liệu nguồn.

**Tài liệu nguồn:** [MKB - Chương trình Đặc quyền Exclusive 2027.docx](#file-privilege) - dự thảo "Chương trình Đặc quyền Khách hàng Exclusive 2027", Khối Khách hàng Ưu tiên. Ảnh logo: [MKB - logo.png](#file-logo).

*Xem toàn bộ file demo tại trang [Giới thiệu và chuẩn bị](#module-1) và [cách tải file Word/Excel về máy](#module-1/cach-tai-file-word-excel-ve-may).*

---

### Bài tập 1: Bộ slide trình Ban Điều hành phê duyệt

**Cách thực hiện:**

1. Mở PowerPoint, tạo bản trình bày mới
2. Nhấn **Copilot** trên ribbon
3. Gõ "/" để đính kèm file [MKB - Chương trình Đặc quyền Exclusive 2027.docx](#file-privilege) (xem [cách tải file Word/Excel về máy](#module-1/cach-tai-file-word-excel-ve-may)), rồi nhập prompt:

> **PROMPT:**
>
> Dựa trên file đính kèm, tạo bộ slide 8 trang để trình Ban Điều hành phê duyệt chương trình. Slide đầu nêu thông điệp chính trong một câu. Có một slide so sánh 3 hạng thành viên dạng bảng, một slide ngân sách đặt cạnh thu nhập tăng thêm dự kiến, và slide cuối liệt kê rõ các quyết định cần Ban Điều hành phê duyệt. Thêm speaker notes cho mỗi slide, kèm một câu hỏi Ban Điều hành có thể đặt ra và gợi ý trả lời.

**Kết quả mong đợi:** Bộ slide 8 trang đi từ vấn đề (CASA thấp, phụ thuộc bancassurance) đến đề xuất và quyết định cần phê duyệt; speaker notes có sẵn câu hỏi dự phòng.

> [!TIP]
> Bộ slide trình phê duyệt nên kết thúc bằng **quyết định cần có**, không phải lời cảm ơn. Nói rõ điều này trong prompt để Copilot sắp xếp nội dung đúng mạch.

### Bài tập 2: Đưa nhận diện thương hiệu vào deck

1. Tải file ảnh [MKB - logo.png](#file-logo)
2. Đính kèm ảnh logo vào khung Copilot và nhập prompt:

> **PROMPT:**
>
> Thêm logo Minh Khang Bank vào góc trên bên phải của mọi slide, trừ slide bìa. Đổi màu chủ đạo của bộ slide sang xanh navy và vàng gold theo màu logo, dùng font Arial cho toàn bộ nội dung.

### Bài tập 3: Bản rút gọn gửi khách hàng

> **PROMPT:**
>
> Từ bộ slide này, tạo thêm một slide duy nhất giới thiệu chương trình để RM gửi kèm email cho khách hàng. Chỉ giữ thông tin dành cho khách hàng: các hạng thành viên, tiêu chí và đặc quyền nổi bật. Bỏ toàn bộ ngân sách, chỉ tiêu và số liệu nội bộ. Thêm dòng chú thích nhỏ "Ưu đãi áp dụng theo điều kiện và điều khoản của MKB".

**Kết quả mong đợi:** Một slide sạch, không còn con số ngân sách hay chỉ tiêu nội bộ, phù hợp để xuất PDF gửi khách hàng.

---

## Lưu ý tuân thủ

> [!NOTE]
> Slide nội bộ chứa kết quả kinh doanh là tài liệu Mật, không gửi ra ngoài. Slide trình khách hàng không được nêu lợi nhuận chắc chắn và phải có tuyên bố rủi ro với sản phẩm đầu tư. Luôn kiểm tra số liệu trên slide khớp với file nguồn.

---

## Prompt đề xuất - PowerPoint

### Script Generation

> **PROMPT:**
>
> Viết speaker notes cho toàn bộ bài thuyết trình, mỗi slide gồm 3 ý chính và một câu chuyển sang slide tiếp theo, trình bày trong khoảng 45 giây, giọng tự tin và đi thẳng vào vấn đề.

### Slide Formatting

> **PROMPT:**
>
> 1. Sắp xếp lại các slide theo trình tự: vấn đề, giải pháp, chi phí và lợi ích, quyết định cần có.
> 2. Rút gọn chữ trên mọi slide còn tối đa 5 gạch đầu dòng, chuyển phần giải thích chi tiết xuống speaker notes.

### Deck Generation

> **PROMPT:**
>
> Tạo bài trình bày 5 slide từ file /[báo cáo tháng] để báo cáo kết quả Vùng tại họp Ban Điều hành Khối, có một slide riêng nêu 3 rủi ro cần lưu ý.

> [!NOTE]
> File Word cần được lưu trên OneDrive hoặc SharePoint thì Copilot mới tham chiếu được.

---

## Tổng kết

| Anh/chị đã học được | Tính năng |
|---------------------|-----------|
| Tạo bộ slide trình phê duyệt từ file Word | Slide Creating |
| Đưa logo, màu thương hiệu vào toàn bộ deck | Slide Formatting |
| Speaker notes kèm câu hỏi dự phòng, bản rút gọn cho khách hàng | Script + Slide Creating |
