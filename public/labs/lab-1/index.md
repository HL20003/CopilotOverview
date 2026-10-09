# Lab 1 - Copilot Chat

**Ứng dụng:** Microsoft 365 Copilot Chat

> [!NOTE]
> **Toàn bộ tài liệu, số liệu và tình huống trong workshop là bản nháp (draft) dùng cho mục đích đào tạo.** Tên nhân vật, khách hàng và đối tác là giả định.

---

## Mục tiêu

Sau khi hoàn thành lab này, anh/chị sẽ có thể:

- Tổng hợp tình hình từ email, cuộc họp và tài liệu thành một bản cập nhật cho Ban Điều hành
- Đặt nhiều tài liệu cạnh nhau để Copilot chỉ ra điểm khớp và điểm hở trước khi ra quyết định
- Chuyển sang chế độ Web để cập nhật diễn biến thị trường ảnh hưởng tới khách hàng

### Tính năng chính

| Tính năng | Mô tả |
|-----------|--------|
| **Work grounding** | Trả lời dựa trên email, lịch, cuộc họp, file mà anh/chị có quyền truy cập |
| **Phân tích nhiều tài liệu** | Đính kèm nhiều file bằng "/" và hỏi xuyên suốt các file |
| **Work / Web** | Chuyển giữa dữ liệu công việc nội bộ và thông tin công khai trên internet |

---

## Tình huống

> **Anh Trần Minh Quân** - *Giám đốc Khối Khách hàng Ưu tiên*
>
> Sáng thứ Hai, anh Quân cần gửi Ban Điều hành bản cập nhật tình hình Khối, đồng thời chuẩn bị ý kiến về dự thảo Chương trình Đặc quyền 2027 trước khi Phòng Phát triển Khách hàng trình chính thức. Thông tin nằm rải rác trong hộp thư, các cuộc họp tuần qua và nhiều file khác nhau. Anh dùng Copilot Chat để gom lại, đối chiếu và ra quyết định.

**Tài liệu demo:** [Financial Analysis Q3 2026.xlsx](#file-financial) và [Chương trình Đặc quyền Exclusive 2027.docx](#file-privilege), đã lưu trên OneDrive.

*Xem toàn bộ file demo tại trang [Module 1](#module-1) và [cách tải file Word/Excel về máy](#module-1/cach-tai-file-word-excel-ve-may).*

---

### Bài tập 1: Bản cập nhật tuần cho Ban Điều hành

**Cách thực hiện:**

1. Truy cập [https://m365.cloud.microsoft/](https://m365.cloud.microsoft/), đăng nhập bằng **tài khoản công ty**
2. Chọn **Copilot**, đảm bảo đang ở chế độ **Work**
3. Nhập prompt:

> **PROMPT:**
>
> Dựa trên email, cuộc họp và tài liệu của tôi trong 7 ngày qua, soạn bản cập nhật tình hình gửi Ban Điều hành gồm 4 phần: kết quả nổi bật, vấn đề cần lưu ý, quyết định cần Ban Điều hành phê duyệt, và kế hoạch tuần tới. Mỗi ý ghi rõ nguồn thông tin. Tối đa một trang.

**Kết quả mong đợi:** Một bản cập nhật có cấu trúc, mỗi ý có trích dẫn tới email, cuộc họp hoặc file gốc để anh/chị kiểm tra trước khi gửi.

> [!TIP]
> Bấm vào từng trích dẫn để kiểm tra. Ý nào không có nguồn rõ ràng, hãy hỏi tiếp: *"Ý thứ 3 lấy từ đâu?"*

### Bài tập 2: Đối chiếu tài liệu trước khi ra quyết định

1. Mở cuộc trò chuyện mới, gõ "/" để đính kèm hai file [Financial Analysis Q3 2026.xlsx](#file-financial) và [Chương trình Đặc quyền Exclusive 2027.docx](#file-privilege)
2. Nhập prompt:

> **PROMPT:**
>
> Tôi cần cho ý kiến về dự thảo Chương trình Đặc quyền 2027 trước khi trình Ban Điều hành. Đặt chương trình cạnh kết quả kinh doanh quý 3 trong file Excel và cho tôi biết: chương trình giải quyết được những vấn đề nào của Khối, vấn đề nào chưa được giải quyết, và 2 điều chỉnh tôi nên yêu cầu trước khi trình. Trình bày dạng bảng.

**Kết quả mong đợi:** Copilot chỉ ra chương trình đã nhắm vào tỷ lệ CASA thấp (CASA Booster) và sự phụ thuộc vào phí bancassurance (mục tiêu tăng phí wealth management), nhưng **chưa đề cập** rủi ro tín dụng đang tăng: dư nợ cho vay bất động sản, chứng khoán chiếm 39% và nợ nhóm 2 tăng lên 2,9%.

### Bài tập 3: Cập nhật thị trường với chế độ Web

1. Chuyển nút **Work / Web** sang **Web**
2. Nhập prompt:

> **PROMPT:**
>
> Tóm tắt những diễn biến trong 2 tuần qua về lãi suất huy động, thị trường trái phiếu doanh nghiệp và chính sách tín dụng tại Việt Nam có thể ảnh hưởng tới nhóm khách hàng cá nhân có tài sản cao. Với mỗi diễn biến, nêu tác động có thể có tới danh mục khách hàng và việc Khối nên làm. Kèm nguồn cho từng ý.

3. Hỏi tiếp để đưa kết quả vào công việc:

> **PROMPT:**
>
> Từ các diễn biến trên, soạn 3 thông điệp ngắn để các Giám đốc Trung tâm hướng dẫn RM trao đổi với khách hàng trong tuần này. Không đưa ra dự báo hay cam kết về lợi nhuận.

> [!TIP]
> Dùng **Work** cho câu hỏi về công việc nội bộ, **Web** cho thông tin thị trường công khai. Ở chế độ Web, Copilot không dùng email hay file nội bộ của anh/chị.

---

## Lưu ý tuân thủ

> [!NOTE]
> Bản cập nhật gửi Ban Điều hành là tài liệu Mật: kiểm tra nhãn phân loại trước khi chia sẻ. Thông tin từ chế độ Web cần được kiểm tra nguồn trước khi chuyển cho RM hoặc khách hàng. Không nhập thông tin định danh khách hàng vào prompt.

---

## Prompt đề xuất - Copilot Chat

### Điều hành hằng ngày

> **PROMPT:**
>
> 1. Những việc nào tôi đã hứa với Ban Điều hành hoặc các Giám đốc Trung tâm trong 2 tuần qua mà chưa hoàn thành?
> 2. Tuần này tôi có những cuộc họp nào quan trọng, và cần chuẩn bị gì cho từng cuộc họp?

### Ra quyết định

> **PROMPT:**
>
> So sánh hai phương án trong file /[tên file]: ưu điểm, rủi ro, chi phí và tác động tới khách hàng của từng phương án. Đề xuất phương án nên chọn và lý do.

---

## Tổng kết

| Anh/chị đã học được | Tính năng |
|---------------------|-----------|
| Tổng hợp tình hình từ nhiều nguồn thành báo cáo lãnh đạo | Work grounding |
| Đối chiếu tài liệu để chỉ ra điểm hở trước khi quyết định | Phân tích nhiều tài liệu |
| Cập nhật thị trường và chuyển thành thông điệp cho đội ngũ | Work / Web |
