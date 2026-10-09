# Lab 5 - Copilot trong Outlook

**Ứng dụng:** Outlook

> [!NOTE]
> **Toàn bộ tài liệu, số liệu và tình huống trong workshop là bản nháp (draft) dùng cho mục đích đào tạo.** Tên nhân vật, khách hàng và đối tác là giả định.

---

## Mục tiêu

Sau khi hoàn thành lab này, anh/chị sẽ có thể:

- Biến hộp thư thành danh sách việc cần quyết định, xếp theo mức độ ưu tiên
- Nắm nhanh một chuỗi email leo thang nhiều người tham gia và xử lý ở cấp quản lý
- Chuẩn bị cho buổi gặp khách hàng hoặc đối tác quan trọng trong vài phút

### Tính năng chính

| Tính năng | Mô tả |
|-----------|--------|
| **Email Summarizing** | Tóm tắt, phân loại email và các chuỗi trao đổi dài |
| **Email Drafting & Coaching** | Soạn thư và góp ý giọng điệu cho thư nhạy cảm |
| **Meeting Prep** | Tổng hợp email, tài liệu, cuộc họp trước liên quan để chuẩn bị cho buổi gặp |

---

## Tình huống

> **Anh Trần Quốc Tuấn** - *Giám đốc Khối Exclusive Banking Vùng*
>
> Đầu giờ sáng, hộp thư của anh Tuấn có hàng chục email: Giám đốc Trung tâm xin phê duyệt ngoại lệ, các khối nghiệp vụ gửi chỉ tiêu, và một khiếu nại của khách hàng VIP đã chuyển qua nhiều người nhưng chưa được xử lý dứt điểm. Chiều nay anh có buổi gặp một khách hàng Diamond. Anh dùng Copilot trong Outlook để quyết định việc gì trước, xử lý vụ leo thang và vào buổi gặp với đầy đủ thông tin.

> [!TIP]
> Lab này thực hành trực tiếp trên **hộp thư và lịch của anh/chị**. Khi trình chiếu, chọn những email không chứa thông tin định danh khách hàng.

---

### Bài tập 1: Hộp thư thành danh sách quyết định

**Cách thực hiện:**

1. Mở **Outlook** (bản mới hoặc Outlook on the web)
2. Bấm biểu tượng **Copilot** trên thanh công cụ
3. Nhập prompt:

> **PROMPT:**
>
> Xem các email tôi nhận trong 3 ngày qua và chia thành 3 nhóm: (1) Cần tôi quyết định hoặc phê duyệt hôm nay, (2) Có thể giao cho cấp dưới xử lý, (3) Chỉ để biết. Mỗi email một dòng gồm người gửi, việc cần làm và hạn chót nếu có. Ở nhóm 2, gợi ý nên giao cho ai dựa trên nội dung email.

**Kết quả mong đợi:** Danh sách 3 nhóm, nhìn vào biết ngay việc cần tự quyết trong ngày và việc có thể giao lại.

### Bài tập 2: Xử lý chuỗi email leo thang

1. Mở một chuỗi email dài có nhiều người tham gia (ví dụ một khiếu nại hoặc một đề nghị đã qua nhiều bộ phận)
2. Chọn **Summary by Copilot** ở đầu email, rồi mở khung Copilot và nhập:

> **PROMPT:**
>
> Tóm tắt chuỗi email này cho tôi ở góc độ người quản lý: vấn đề gốc là gì, ai đã làm gì và khi nào, điều gì đang bị tắc và vì sao, và rủi ro nếu không xử lý trong tuần này. Sau đó đề xuất tôi nên quyết định gì.

3. Soạn phản hồi bằng **Draft with Copilot**:

> **PROMPT:**
>
> Soạn thư phản hồi với tư cách Giám đốc Khối: ghi nhận vấn đề, nêu rõ người chịu trách nhiệm xử lý và thời hạn, cam kết cập nhật tiếp theo. Giọng điềm tĩnh, dứt khoát. Chỗ nào chưa chắc chắn ghi [CẦN XÁC NHẬN].

> [!TIP]
> Với thư nhạy cảm (khiếu nại khách hàng VIP, phản hồi cấp trên), hãy dùng **Coaching by Copilot** để được góp ý về giọng điệu và cảm nhận của người đọc trước khi gửi.

### Bài tập 3: Chuẩn bị cho buổi gặp khách hàng quan trọng

1. Chọn một cuộc họp sắp tới trong **Lịch**
2. Mở **Copilot** và nhập:

> **PROMPT:**
>
> Chuẩn bị cho tôi cuộc họp [tên cuộc họp]. Tóm tắt các email, tài liệu và cuộc họp trước có liên quan, những gì ngân hàng đã hứa, các vấn đề còn mở, và gợi ý 3 câu hỏi tôi nên hỏi cùng 1 điều tôi nên tránh nói. Đọc được trong 2 phút.

**Kết quả mong đợi:** Một bản brief ngắn gồm bối cảnh, cam kết trước đó, việc còn mở và câu hỏi gợi ý, kèm liên kết tới email và tài liệu nguồn.

---

## Lưu ý tuân thủ

> [!NOTE]
> Copilot chỉ soạn nháp, người gửi chịu trách nhiệm nội dung. Không cam kết lãi suất, hạn mức khi chưa có phê duyệt. Không chuyển tiếp email chứa thông tin khách hàng ra địa chỉ ngoài ngân hàng.

---

## Prompt đề xuất - Outlook

### Điều hành và giao việc

> **PROMPT:**
>
> Soạn email giao việc cho các Giám đốc Trung tâm về kế hoạch tăng CASA quý 4: mục tiêu của từng trung tâm, 3 việc cần làm trong tuần, hạn báo cáo kết quả. Nếu tôi chưa cung cấp đủ số liệu, hãy hỏi lại trước khi viết.

### Theo dõi cam kết

> **PROMPT:**
>
> Những việc nào tôi đã hứa với Ban Điều hành hoặc khách hàng trong email 2 tuần qua mà chưa hoàn thành? Liệt kê người nhận, nội dung đã hứa và ngày hứa.

### Sau thời gian vắng mặt

> **PROMPT:**
>
> Tôi vừa đi công tác 5 ngày. Tóm tắt những gì quan trọng tôi đã bỏ lỡ: quyết định đã được đưa ra, việc đang chờ tôi, và vấn đề nào cần tôi can thiệp ngay.

---

## Tổng kết

| Anh/chị đã học được | Tính năng |
|---------------------|-----------|
| Phân loại hộp thư theo việc cần quyết và việc có thể giao | Email Summarizing |
| Xử lý chuỗi email leo thang ở cấp quản lý | Summarizing + Drafting & Coaching |
| Chuẩn bị cho buổi gặp khách hàng quan trọng | Meeting Prep |
