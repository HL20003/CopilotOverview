# Module 2 - Copilot là gì

**Thời lượng:** 15 phút

---

## Mục tiêu

Sau module này, anh/chị sẽ:

- Hiểu Copilot lấy thông tin từ đâu và vì sao câu trả lời "biết" về công việc của mình
- Biết Copilot nhìn thấy gì, không nhìn thấy gì, và vì sao phân quyền tài liệu quan trọng hơn bao giờ hết
- Trả lời được những câu hỏi thường gặp về bảo mật khi dùng Copilot trong ngân hàng
- Nhận biết giới hạn của Copilot để dùng đúng chỗ

---

## Microsoft 365 Copilot là gì?

Microsoft 365 Copilot là trợ lý AI tích hợp trong các ứng dụng anh/chị dùng hằng ngày: Outlook, Teams, Word, Excel, PowerPoint. Copilot kết hợp ba thành phần:

| Thành phần | Vai trò | Ví dụ với Exclusive Manager |
|------------|---------|-----------------------------|
| **Mô hình ngôn ngữ lớn (LLM)** | Hiểu câu hỏi và viết câu trả lời bằng ngôn ngữ tự nhiên | Viết thư trả lời khách hàng, tóm tắt báo cáo |
| **Microsoft Graph** | "Bản đồ" dữ liệu công việc: email, lịch, file, cuộc họp, chat | Biết anh/chị vừa họp với ai, khách hàng nào gửi email hôm qua |
| **Ứng dụng Microsoft 365** | Nơi Copilot làm việc cùng anh/chị | Nút Copilot trong Outlook, Excel, Teams... |

Nhờ Microsoft Graph, Copilot hiểu **ngữ cảnh công việc** của riêng anh/chị (còn gọi là **Work IQ**). Đây là điểm khác biệt lớn nhất so với các chatbot AI công cộng.

---

## Điều gì xảy ra khi anh/chị đặt câu hỏi?

| Bước | Điều gì xảy ra | Ý nghĩa với ngân hàng |
|------|----------------|------------------------|
| **1. Đặt câu hỏi** | Anh/chị nhập prompt trong Outlook, Excel, Copilot Chat... | Không nhập số CIF, CCCD, số tài khoản vào prompt |
| **2. Tìm dữ liệu** | Copilot tìm trong email, file, cuộc họp mà **anh/chị có quyền xem** | Copilot không vượt quá quyền của anh/chị |
| **3. Soạn câu trả lời** | Mô hình AI dùng dữ liệu tìm được để viết câu trả lời | Câu trả lời tốt hay không phụ thuộc vào dữ liệu nguồn |
| **4. Kiểm tra** | Hệ thống kiểm tra bảo mật, chính sách và nội dung có hại | Áp dụng các chính sách bảo vệ của ngân hàng |
| **5. Trả lời** | Kết quả hiển thị kèm **trích dẫn nguồn** | Bấm vào trích dẫn để kiểm tra lại trước khi dùng |

---

## Copilot nhìn thấy gì?

### Nguyên tắc quan trọng nhất: Copilot chỉ thấy những gì anh/chị được phép xem

| Copilot có thể | Copilot không thể |
|--------------------|------------------------|
| Đọc email, lịch, chat của chính anh/chị | Đọc email của đồng nghiệp hay của RM khác |
| Đọc file trên OneDrive/SharePoint anh/chị có quyền | Mở file anh/chị không được chia sẻ |
| Dùng transcript cuộc họp anh/chị tham dự (đã bật transcript) | Truy cập cuộc họp anh/chị không tham dự |
| Tìm thông tin công khai trên web (chế độ **Web**) | Đọc core banking, CRM, hệ thống thẻ... nếu ngân hàng chưa kết nối |

> [!NOTE]
> Copilot tuân theo đúng mô hình phân quyền Microsoft 365 hiện có của ngân hàng. Copilot không cấp thêm quyền cho ai, nó chỉ giúp anh/chị **tìm nhanh hơn** những gì anh/chị vốn đã có quyền xem.

### Rủi ro thật sự: tài liệu đang được chia sẻ quá rộng

Vì Copilot tìm kiếm rất giỏi, những tài liệu **đang bị chia sẻ sai** sẽ dễ bị tìm thấy hơn trước. Ví dụ:

- File "Danh sách khách hàng Diamond.xlsx" để quyền **Everyone** trên SharePoint: mọi nhân viên đều có quyền xem, và Copilot của họ cũng tìm thấy.
- Link chia sẻ **"Anyone with the link"** gửi cho đối tác từ năm trước vẫn còn hiệu lực.
- Thư mục của một Trung tâm Exclusive mở quyền cho toàn bộ Khối thay vì chỉ RM của trung tâm đó.

> [!TIP]
> Trước khi triển khai Copilot rộng rãi, mỗi Trung tâm nên rà soát quyền chia sẻ các thư mục chứa danh mục khách hàng. Nguyên tắc: **chia sẻ đúng người, đúng việc** (need-to-know).

### Nhãn phân loại tài liệu (sensitivity label)

Khi tài liệu được gắn nhãn như **Nội bộ**, **Mật**, **Tuyệt mật**:

- Copilot tôn trọng các giới hạn mà nhãn đặt ra
- Tài liệu Copilot tạo ra từ một file **Mật** thường được gắn nhãn **Mật** theo
- Nhờ đó, bản tóm tắt hay bộ slide được tạo từ báo cáo Mật không vô tình bị gửi ra ngoài như tài liệu thường

---

## Câu hỏi thường gặp về bảo mật

| Câu hỏi | Trả lời |
|---------|---------|
| Dữ liệu của ngân hàng có được dùng để huấn luyện AI không? | **Không.** Prompt, câu trả lời và dữ liệu trong Microsoft 365 của ngân hàng không được dùng để huấn luyện các mô hình nền tảng. |
| Đồng nghiệp có xem được prompt của tôi không? | **Không.** Lịch sử trò chuyện với Copilot chỉ hiển thị với anh/chị. |
| Ngân hàng có lưu lại các tương tác với Copilot không? | Có thể. Ngân hàng có thể ghi nhật ký và lưu giữ tương tác với Copilot theo chính sách tuân thủ, phục vụ kiểm toán. |
| Khi Copilot tìm trên web, dữ liệu nội bộ có bị gửi ra ngoài không? | Copilot chỉ gửi một **truy vấn tìm kiếm rút gọn** tới Bing, không gửi nguyên tài liệu. Ngân hàng có thể tắt tính năng tìm kiếm web nếu cần. |
| Copilot có đọc được hệ thống core banking hay CRM không? | Chỉ khi ngân hàng chủ động kết nối qua **Copilot connectors** và phân quyền. Mặc định là không. |
| Copilot Chat miễn phí khác gì Microsoft 365 Copilot? | Copilot Chat chủ yếu dùng thông tin web và file anh/chị đưa vào. Microsoft 365 Copilot (có licence) làm việc trực tiếp trong Outlook, Teams, Word, Excel và dùng dữ liệu công việc của anh/chị. |

---

## Giới hạn của Copilot

| Giới hạn | Ví dụ trong ngân hàng | Cách xử lý |
|----------|-----------------------|------------|
| **Có thể trả lời sai một cách tự tin** | Đưa ra mức phí chuyển tiền hoặc lãi suất "nghe hợp lý" nhưng không có trong biểu phí | Yêu cầu trích dẫn nguồn, đối chiếu tài liệu gốc |
| **Không có số liệu thời gian thực** | Không biết số dư hay tỷ giá hiện tại của khách hàng | Dùng hệ thống nghiệp vụ cho số liệu giao dịch |
| **Phụ thuộc vào dữ liệu nguồn** | File Excel thiếu dữ liệu thì phân tích cũng thiếu | Định dạng dữ liệu thành Table, kiểm tra dữ liệu trước |
| **Không thay thế phán đoán nghiệp vụ** | Không quyết định cấp tín dụng hay tư vấn đầu tư thay RM | Copilot gợi ý, con người quyết định |
| **Giới hạn độ dài** | Tài liệu quá dài có thể bị tóm tắt thiếu ý | Chia nhỏ yêu cầu, chỉ rõ phần cần đọc |

> [!TIP]
> Hãy coi Copilot như **một chuyên viên mới rất nhanh nhẹn**: làm nháp tốt, tìm kiếm giỏi, nhưng mọi thứ gửi khách hàng hay trình lãnh đạo đều cần anh/chị duyệt.

---

## Bản đồ Copilot trong workshop

| Công cụ | Dùng để làm gì | Lab |
|---------|----------------|-----|
| **Copilot trong Word, Excel, PowerPoint** | Soạn thảo, phân tích, trình bày trên tài liệu đang mở | Lab 1, 2, 3 |
| **Copilot trong Outlook, Teams** | Xử lý email, cuộc họp, chat | Lab 4, 5 |
| **Researcher** | Nghiên cứu chuyên sâu nhiều bước từ web và tài liệu nội bộ | Lab 6 |
| **Analyst** | Phân tích dữ liệu bằng code, thống kê, biểu đồ | Lab 7 |
| **Agent Builder** | Tự tạo trợ lý AI riêng cho đội ngũ | Lab 8 |

### Work hay Web?

Trong Copilot Chat có nút chuyển **Work / Web**:

- **Work**: trả lời dựa trên email, file, cuộc họp anh/chị có quyền truy cập. Dùng cho công việc hằng ngày.
- **Web**: trả lời dựa trên thông tin công khai trên internet. Dùng khi cần kiến thức chung, tin tức thị trường.

---

## Tóm lại

1. Copilot = mô hình AI + dữ liệu công việc (Microsoft Graph) + ứng dụng Microsoft 365
2. Copilot chỉ thấy những gì anh/chị có quyền xem, nên **phân quyền tài liệu đúng** là nền tảng an toàn
3. Dữ liệu của ngân hàng không được dùng để huấn luyện mô hình
4. Copilot có thể sai: luôn kiểm tra trích dẫn và số liệu trước khi dùng

Tiếp theo: **[Module 3 - Viết prompt hiệu quả](#module-3)**.
