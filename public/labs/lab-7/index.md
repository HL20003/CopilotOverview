# Lab 7 - Researcher Agent

**Ứng dụng:** Microsoft 365 Copilot app - Researcher

> [!NOTE]
> **Toàn bộ tài liệu, số liệu và tình huống trong workshop là bản nháp (draft) dùng cho mục đích đào tạo.** Tên nhân vật, khách hàng và đối tác là giả định.

---

## Mục tiêu

Sau khi hoàn thành lab này, anh/chị sẽ có thể:

- Giao cho Researcher một đề bài dạng câu hỏi chiến lược, không chỉ "nghiên cứu về..."
- Định hình báo cáo theo người đọc thông qua câu hỏi làm rõ
- Kết nối nghiên cứu bên ngoài với số liệu nội bộ để ra đề xuất hành động

**Researcher Agent** là một tác nhân AI của Microsoft 365 Copilot, chuyên nghiên cứu sâu, tổng hợp thông tin từ nhiều nguồn (web và tài liệu nội bộ) và đối chiếu với dữ liệu doanh nghiệp để đưa ra báo cáo phân tích chuyên sâu.

---

## Tình huống

> **Anh Lê Quốc Hưng** - *Giám đốc Chiến lược và Sản phẩm, Khối Khách hàng Ưu tiên*
>
> Ban Điều hành chuẩn bị chốt chiến lược Khối Khách hàng Ưu tiên năm 2027 và giao anh Hưng chuẩn bị đề xuất: những thay đổi pháp lý gần đây ảnh hưởng thế nào tới cách Khối đang cho vay và bán chéo sản phẩm? Thay vì tự đọc hàng chục văn bản và bài phân tích, anh Hưng giao cho Researcher ba câu hỏi cụ thể, yêu cầu đối chiếu với số liệu quý 3 của Khối và trả về một memo có đề xuất.

**Tệp đính kèm:** [Financial Analysis Q3 2026.xlsx](#file-financial)

*Xem toàn bộ file demo tại trang [Module 1](#module-1) và [cách tải file Word/Excel về máy](#module-1/cach-tai-file-word-excel-ve-may).*

---

### Bài tập 1: Giao đề bài nghiên cứu

**Cách thực hiện:**

1. Truy cập [https://m365.cloud.microsoft/](https://m365.cloud.microsoft/) và đăng nhập bằng **tài khoản công ty** (tài khoản Microsoft 365 do công ty cấp) - **không dùng** tài khoản Microsoft cá nhân như Outlook.com, Hotmail
2. Chọn **Researcher** trong mục Agents
3. Đính kèm file [Financial Analysis Q3 2026.xlsx](#file-financial) (xem [cách tải file Word/Excel về máy](#module-1/cach-tai-file-word-excel-ve-may))
4. Nhập prompt:

> **PROMPT:**
>
> Tôi cần chuẩn bị đề xuất cho chiến lược Khối Khách hàng Ưu tiên năm 2027. Hãy trả lời 3 câu hỏi:
> 1. Trong 12 tháng qua, những quy định nào mới ban hành hoặc được siết lại ảnh hưởng tới cho vay, bán bảo hiểm qua ngân hàng (bancassurance) và phân phối sản phẩm đầu tư cho khách hàng cá nhân tại Việt Nam?
> 2. Đặt cạnh số liệu trong file Financial Analysis Q3 2026.xlsx (sheet PL_Budget_Actual và Comps), Khối đang chịu rủi ro lớn nhất ở đâu so với các ngân hàng cùng nhóm?
> 3. Đề xuất 3 điều chỉnh chiến lược, mỗi điều chỉnh nêu tác động dự kiến và mức độ ưu tiên.
>
> Mỗi kết luận về quy định phải có trích dẫn nguồn.

### Bài tập 2: Trả lời câu hỏi làm rõ

Researcher sẽ hỏi lại để làm rõ phạm vi nghiên cứu. Đây là lúc định hình báo cáo theo người đọc. Trả lời:

> **PROMPT:**
>
> 12 tháng tính đến hiện tại, so sánh với các ngân hàng thương mại cổ phần có quy mô tương đương. Người đọc là Ban Điều hành nên viết dạng memo khoảng 3-4 trang: mở đầu bằng bảng tóm tắt rủi ro (vấn đề, mức độ, đề xuất), phần phân tích chi tiết để sau.

**Kết quả mong đợi:** Agent lập **Research Plan** nhiều bước, tự thu thập dữ liệu, đối chiếu với `Financial Analysis Q3 2026.xlsx` và xuất memo Word có bảng tóm tắt rủi ro ở đầu. Hai rủi ro nổi bật nên được chỉ ra: phí bancassurance chiếm 52% tổng phí (nhóm so sánh khoảng 31%) trong bối cảnh siết bán chéo bảo hiểm, và tỷ trọng cho vay bất động sản, chứng khoán 39% đi kèm nợ nhóm 2 tăng từ 1,9% lên 2,9%.

> [!TIP]
> Researcher thường mất vài phút để hoàn thành. Anh/chị có thể chuyển sang việc khác và quay lại khi báo cáo xong.

> [!NOTE]
> Luôn kiểm tra nguồn trích dẫn trong báo cáo của Researcher, đặc biệt với thông tin pháp lý và số liệu ngành, trước khi dùng cho quyết định quan trọng.

---

## Lưu ý tuân thủ

> [!NOTE]
> Researcher kết hợp dữ liệu web và tài liệu nội bộ. Không đưa tên hay thông tin định danh khách hàng vào đề bài. Báo cáo là tài liệu tham khảo, không thay thế ý kiến của Pháp chế; luôn mở nguồn trích dẫn để kiểm tra văn bản pháp luật gốc.

---

## Tổng kết

| Anh/chị đã học được | Ứng dụng |
|---------------------|----------|
| Giao đề bài dạng câu hỏi chiến lược | Researcher |
| Định hình báo cáo theo người đọc | Researcher |
| Kết nối nghiên cứu với số liệu nội bộ để ra đề xuất | Researcher + Excel |
