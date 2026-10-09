# Lab 7 - Analyst Agent

**Thời lượng:** 5 phút | **Ứng dụng:** Microsoft 365 Copilot app - Analyst

> [!NOTE]
> **Ngân hàng TMCP Minh Khang (MKB) là ngân hàng giả tưởng.** Toàn bộ tên ngân hàng, nhân vật, khách hàng, số liệu và tài liệu trong lab chỉ phục vụ mục đích minh họa, không liên quan đến bất kỳ tổ chức có thật nào.

---

## Mục tiêu

Sau khi hoàn thành lab này, anh/chị sẽ có thể:

- Đặt câu hỏi kinh doanh cho Analyst thay vì yêu cầu kỹ thuật
- Kiểm chứng một nhận định bằng kiểm định thống kê và chạy kịch bản "giả sử"
- Xuất kết quả thành Executive Dashboard có khuyến nghị và người phụ trách

**Analyst Agent** là một tác nhân AI của Microsoft 365 Copilot, chuyên phân tích dữ liệu dạng bảng: viết và chạy code phân tích, kiểm định thống kê, vẽ biểu đồ và xuất báo cáo hoặc slide tóm tắt.

---

## Tình huống

> **Anh Nguyễn Đức Thành** - *Giám đốc Vận hành và Dịch vụ Khách hàng Ưu tiên, MKB*
>
> Quý 3 có 210 sự cố dịch vụ với khách hàng Ưu tiên. Các Giám đốc Trung tâm cho rằng "khiếu nại tăng vì ca tối thiếu người", nhưng anh Thành cần bằng chứng trước khi xin thêm nhân sự. Anh cũng muốn biết nên ưu tiên cải tiến loại sự cố nào để tiết kiệm nhiều nhất. Anh giao cho Analyst các câu hỏi kinh doanh, để Agent tự viết code, chạy kiểm định và tính toán.

**Tệp đính kèm:** [MKB - Nhật ký sự cố dịch vụ Exclusive Q3.xlsx](#file-incident-log)

*Xem toàn bộ file demo tại trang [Giới thiệu và chuẩn bị](#module-1) và [cách tải file Word/Excel về máy](#module-1/cach-tai-file-word-excel-ve-may).*

---

### Bài tập 1: Phân tích nguyên nhân gốc rễ

**Cách thực hiện:**

1. Truy cập [https://m365.cloud.microsoft/](https://m365.cloud.microsoft/) và đăng nhập bằng **tài khoản công ty** (tài khoản Microsoft 365 do công ty cấp) - **không dùng** tài khoản Microsoft cá nhân như Outlook.com, Hotmail
2. Chọn **Analyst** trong mục Agents
3. Đính kèm file [MKB - Nhật ký sự cố dịch vụ Exclusive Q3.xlsx](#file-incident-log) (xem [cách tải file Word/Excel về máy](#module-1/cach-tai-file-word-excel-ve-may))
4. Nhập prompt:

> **PROMPT:**
>
> Đây là nhật ký 210 sự cố dịch vụ khách hàng Ưu tiên quý 3. Tôi là Giám đốc Dịch vụ, hãy trả lời:
> 1. Loại sự cố nào tốn nhiều thời gian xử lý nhất và tập trung ở trung tâm nào?
> 2. Khiếu nại có thực sự tăng vào ca tối không? Kiểm định thống kê để chắc chắn đó không phải ngẫu nhiên.
> 3. Với giả định mỗi phút xử lý tốn 50 nghìn đồng và mỗi khiếu nại tốn 2 triệu đồng, tổng tổn thất quý 3 là bao nhiêu? Nếu giảm 30% thời gian xử lý của loại sự cố tốn kém nhất, mỗi quý tiết kiệm được bao nhiêu?
>
> Trình bày kết quả kèm biểu đồ, giải thích bằng ngôn ngữ cho người không chuyên thống kê.

**Kết quả mong đợi:** Analyst viết và chạy code, kết luận chậm xử lý chuyển tiền quốc tế là loại tốn kém nhất (khoảng 7.200 phút, tập trung ở Trung tâm Tân Bình); kiểm định ANOVA hoặc Kruskal-Wallis xác nhận ca tối có nhiều khiếu nại hơn có ý nghĩa thống kê; tổng tổn thất khoảng 2 tỷ đồng và kịch bản giảm 30% tiết kiệm khoảng 108 triệu đồng mỗi quý.

> [!TIP]
> Nhấn **Show work** để xem code Analyst đã chạy. Đây là cách tốt để kiểm chứng kết quả phân tích.

### Bài tập 2: Xuất Executive Dashboard

> **PROMPT:**
>
> Xuất Executive Dashboard 1 slide: 3 chỉ số chính ở trên cùng, 1 biểu đồ quan trọng nhất, và 3 khuyến nghị, mỗi khuyến nghị có đơn vị phụ trách và thời hạn đề xuất.

**Kết quả mong đợi:** File PowerPoint 1 slide đủ để Ban Điều hành ra quyết định trong 1 phút: con số, biểu đồ và ai làm gì.

> [!NOTE]
> Kết quả kiểm định thống kê phụ thuộc vào chất lượng dữ liệu. Hãy kiểm tra dữ liệu có thiếu hoặc trùng lặp trước khi dùng kết luận cho quyết định vận hành. File demo không chứa thông tin định danh khách hàng; khi dùng dữ liệu thật, hãy ẩn danh mã khách hàng trước khi đưa vào Analyst.

---

## Lưu ý tuân thủ

> [!NOTE]
> Ẩn danh mã khách hàng trước khi tải dữ liệu lên Analyst. Mở Show work để kiểm tra code trước khi dùng kết luận. Kết quả thống kê chỉ gợi ý nguyên nhân, không thay thế quy trình điều tra sự cố và xử lý khiếu nại chính thức.

---

## Tổng kết

| Anh/chị đã học được | Ứng dụng |
|---------------------|----------|
| Đặt câu hỏi kinh doanh để Analyst tự phân tích bằng code | Analyst |
| Kiểm chứng nhận định bằng thống kê, chạy kịch bản "giả sử" | Analyst |
| Xuất Executive Dashboard có khuyến nghị | Analyst + PowerPoint |
