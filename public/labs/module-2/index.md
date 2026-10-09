# Module 2 - Viết prompt hiệu quả

> [!NOTE]
> **Toàn bộ tài liệu, số liệu và tình huống trong workshop là bản nháp (draft) dùng cho mục đích đào tạo.** Tên nhân vật, khách hàng và đối tác là giả định.

---

## Mục tiêu

Sau module này, anh/chị sẽ:

- Viết prompt rõ ràng theo công thức 4 thành phần
- Biết cách hỏi tiếp để cải thiện kết quả thay vì viết lại từ đầu
- Dùng 5 kỹ thuật giúp câu trả lời an toàn và chính xác hơn trong môi trường ngân hàng
- Có sẵn bộ prompt mẫu cho công việc hằng ngày của Exclusive Manager

---

## Prompt là gì?

**Prompt** là yêu cầu anh/chị gửi cho Copilot bằng ngôn ngữ tự nhiên, giống như giao việc cho một trợ lý. Giao việc càng rõ, kết quả càng sát ý.

| Prompt chưa tốt | Prompt tốt hơn |
|-----------------|----------------|
| "Trả lời email này." | "Soạn thư trả lời khách hàng hạng Platinum đang hỏi lịch tư vấn danh mục, đề xuất 2 khung giờ tuần sau, giọng lịch sự và ngắn gọn." |
| "Tóm tắt báo cáo." | "Tóm tắt báo cáo KPI quý 3 thành 5 ý cho Ban Điều hành, mỗi ý có một con số cụ thể." |
| "Vẽ biểu đồ." | "Tạo biểu đồ cột tỷ lệ CASA theo trung tâm, sắp xếp giảm dần, tiêu đề nêu trung tâm thấp nhất." |

---

## Công thức 4 thành phần

| Thành phần | Câu hỏi tự đặt ra | Ví dụ |
|------------|-------------------|-------|
| **Mục tiêu** | Tôi cần Copilot làm gì? | "Soạn email nhắc chỉ tiêu..." |
| **Ngữ cảnh** | Cho ai, để làm gì, tôi là ai? | "...gửi 25 RM của Vùng miền Nam, đang thiếu 1.200 tỷ CASA quý 4..." |
| **Nguồn** | Dựa trên tài liệu nào? | "...dựa trên file /Báo cáo KPI tháng 9..." |
| **Kỳ vọng** | Kết quả trông như thế nào? | "...giọng động viên, dưới 150 chữ, kết thúc bằng 3 việc cần làm trong tuần." |

### Ví dụ ghép đủ 4 thành phần

> **PROMPT:**
>
> Soạn email nhắc chỉ tiêu CASA quý 4 gửi 25 RM của Vùng miền Nam, hiện còn thiếu 1.200 tỷ đồng so với kế hoạch. Dựa trên số liệu trong file /Báo cáo KPI tháng 9. Giọng động viên, dưới 150 chữ, kết thúc bằng 3 việc cụ thể cần làm trong tuần này.

> [!TIP]
> Không cần đủ 4 thành phần trong mọi prompt. Với việc đơn giản, một câu là đủ. Khi kết quả chưa sát ý, hãy bổ sung thành phần còn thiếu.

---

## Hỏi tiếp để cải thiện

Không cần viết prompt hoàn hảo ngay lần đầu. Hãy bắt đầu đơn giản rồi hỏi tiếp trong cùng cuộc trò chuyện:

| Lần | Prompt | Kết quả |
|-----|--------|---------|
| 1 | "Tóm tắt email chưa đọc." | Danh sách dài, khó biết việc nào gấp |
| 2 | "Chỉ giữ email của khách hàng và RM, cho tôi biết việc cần làm." | Gọn hơn, có việc cần làm |
| 3 | "Trình bày dạng bảng, thêm cột hạn chót, xếp việc gấp lên đầu." | Dùng được ngay để xử lý trong buổi sáng |

Một số câu hỏi tiếp hay dùng: *"ngắn hơn"*, *"trình bày dạng bảng"*, *"thêm số liệu"*, *"giọng trang trọng hơn"*, *"viết lại cho khách hàng là người nước ngoài"*.

---

## 5 kỹ thuật nâng cao cho môi trường ngân hàng

### 1. Giao vai cho Copilot

Nói cho Copilot biết nó nên suy nghĩ như ai.

> **PROMPT:**
>
> Bạn là chuyên viên Pháp chế và Tuân thủ của ngân hàng. Hãy đọc thư tư vấn này và chỉ ra những câu có thể bị khách hàng hiểu là cam kết lợi nhuận.

### 2. Đặt ràng buộc an toàn

Ngăn Copilot tự "điền" những thông tin chưa chắc chắn.

> **PROMPT:**
>
> Soạn thư trả lời khách hàng về tiến độ phê duyệt hạn mức. Không nêu con số lãi suất hay hạn mức nào chưa có trong email. Chỗ nào chưa chắc chắn thì ghi [CẦN XÁC NHẬN].

### 3. Yêu cầu trích dẫn nguồn

Giúp anh/chị kiểm tra nhanh câu trả lời đến từ đâu.

> **PROMPT:**
>
> Phí chuyển tiền quốc tế cho khách hàng hạng Platinum là bao nhiêu? Trả lời dựa trên file /Sổ tay Sản phẩm và ghi rõ mục tham chiếu. Nếu tài liệu không có thông tin, hãy nói rõ là không có.

### 4. Bảo Copilot hỏi lại khi thiếu thông tin

Tránh để Copilot đoán.

> **PROMPT:**
>
> Tôi cần soạn tờ trình xin phê duyệt ngoại lệ hạn mức thấu chi cho một khách hàng Platinum. Trước khi viết, hãy hỏi tôi những thông tin còn thiếu.

### 5. Đưa mẫu đầu ra

Khi cần kết quả theo đúng định dạng quen thuộc, hãy cho Copilot xem một ví dụ.

> **PROMPT:**
>
> Tóm tắt cuộc họp giao ban theo đúng mẫu sau cho từng RM: "RM [tên] - Cam kết: [nội dung] - Hạn: [ngày] - Cần hỗ trợ: [có/không]".

---

## Đính kèm file và Prompt Gallery

### Gõ "/" để chỉ đúng tài liệu

- **Copilot Chat, Outlook, PowerPoint:** gõ `/` rồi chọn file trên OneDrive/SharePoint
- **Word, Excel:** Copilot làm việc trực tiếp với file đang mở
- Chỉ đúng file giúp Copilot không phải tự đoán và trả lời chính xác hơn

### Prompt Gallery

Microsoft có thư viện prompt mẫu để anh/chị tham khảo và lưu lại:

- **Trong ứng dụng:** mở Copilot, xem các prompt gợi ý
- **Online:** [Copilot Prompt Gallery](https://copilot.cloud.microsoft/prompts)
- Prompt hay của mình có thể **lưu lại** và **chia sẻ** cho đội RM

---

## Thư viện prompt cho Exclusive Manager

Bộ prompt theo nhịp làm việc trong ngày. Anh/chị có thể sao chép và chỉnh lại cho phù hợp.

### Đầu ngày

> **PROMPT:**
>
> Tóm tắt email chưa đọc từ hôm qua, chia thành: việc cần tôi phê duyệt hôm nay, khách hàng cần phản hồi, và thông tin chỉ để biết.

### Trước khi gặp khách hàng

> **PROMPT:**
>
> Chuẩn bị cho tôi cuộc họp [tên cuộc họp]: tóm tắt các email và tài liệu liên quan, những gì đã hứa với khách hàng, và 3 câu hỏi nên hỏi.

### Sau cuộc họp với đội RM

> **PROMPT:**
>
> Liệt kê các cam kết của từng RM trong cuộc họp vừa rồi, kèm chỉ tiêu và thời hạn, đánh dấu cam kết chưa có thời hạn rõ ràng.

### Cuối tuần

> **PROMPT:**
>
> Tóm tắt những việc quan trọng tôi đã xử lý trong tuần qua dựa trên email, cuộc họp và tài liệu, và liệt kê các việc còn tồn để chuyển sang tuần sau.

---

## Thực hành nhanh

Mở [Copilot Chat](https://m365.cloud.microsoft/) ở chế độ **Work** và thử hai prompt dưới đây với dữ liệu của chính anh/chị:

> **PROMPT:**
>
> Tuần này tôi có những cuộc họp nào và cần chuẩn bị gì cho từng cuộc họp?

> **PROMPT:**
>
> Những việc nào tôi đã hứa với người khác trong email 7 ngày qua mà chưa hoàn thành?

> [!NOTE]
> Hai prompt trên chỉ dùng dữ liệu anh/chị có quyền xem. Nếu kết quả trống, có thể do hộp thư hoặc lịch chưa có nhiều dữ liệu, hãy thử với khoảng thời gian dài hơn.

---

## Tóm lại

| Nguyên tắc | Ý chính |
|------------|---------|
| **Rõ ràng** | Mục tiêu, ngữ cảnh, nguồn, kỳ vọng |
| **Hỏi tiếp** | Bắt đầu đơn giản, chỉnh dần trong cùng cuộc trò chuyện |
| **An toàn** | Giao vai, ràng buộc, yêu cầu trích dẫn, bảo Copilot hỏi lại |
| **Chỉ đúng nguồn** | Gõ "/" để đính kèm file |
| **Dùng lại** | Lưu prompt hay vào Prompt Gallery và chia sẻ cho đội |

Tiếp theo: **[Module 3 - Personalization in Copilot](#module-3)**, để Copilot nhớ cách anh/chị làm việc.
