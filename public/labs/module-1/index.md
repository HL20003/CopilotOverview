# Module 1 - Giới thiệu Copilot và chuẩn bị

> [!NOTE]
> **Toàn bộ tài liệu, số liệu và tình huống trong workshop là bản nháp (draft) dùng cho mục đích đào tạo.** Tên nhân vật, khách hàng và đối tác là giả định.

> [!NOTE]
> **Lưu ý tuân thủ khi thực hành:** không đưa dữ liệu định danh khách hàng thật (số CIF, CCCD/hộ chiếu, số tài khoản, số thẻ, số điện thoại) vào prompt. Chỉ dùng file demo của workshop hoặc dữ liệu đã được ẩn danh.

---

## Bối cảnh workshop

Các bài thực hành đặt anh/chị vào vai **đội ngũ quản lý Khối Khách hàng Ưu tiên (Exclusive Banking)** của một ngân hàng thương mại, phục vụ nhóm khách hàng cá nhân có tài sản cao với các sản phẩm tiền gửi, tín dụng, bancassurance, trái phiếu và quản lý tài sản.

| Chỉ số của Khối (số liệu minh họa) | Giá trị |
|------------------------------------|---------|
| Khách hàng Exclusive | **19.240 khách hàng** |
| Tài sản khách hàng quản lý (AUM) | **98.500 tỷ đồng** |
| RM Ưu tiên | **240 người** |
| Trung tâm Exclusive | **12 trung tâm** tại TP. Hồ Chí Minh, Hà Nội, Đà Nẵng và Cần Thơ |

### Các nhân vật trong lab

| Lab | Nhân vật | Vai trò | Ứng dụng |
|-----|----------|---------|----------|
| 1 | Anh Trần Minh Quân | Giám đốc Khối Khách hàng Ưu tiên | Copilot Chat |
| 2 | Anh Nguyễn Hoàng Vũ | Giám đốc Trung tâm Exclusive | Word |
| 3 | Chị Phạm Thu Hằng | Phó Giám đốc Khối Khách hàng Ưu tiên | Excel |
| 4 | Chị Phạm Ngọc Lan | Exclusive Manager | PowerPoint |
| 5 | Anh Trần Quốc Tuấn | Giám đốc Khối Exclusive Banking Vùng | Outlook |
| 6 | Chị Nguyễn Thu Trang | Giám đốc Trung tâm Exclusive | Teams |
| 7 | Anh Lê Quốc Hưng | Giám đốc Chiến lược và Sản phẩm, Khối Khách hàng Ưu tiên | Researcher |
| 8 | Anh/chị | Exclusive Manager | Agent Builder |

---

## Microsoft 365 Copilot là gì?

Microsoft 365 Copilot là trợ lý AI tích hợp trong các ứng dụng anh/chị dùng hằng ngày. Copilot kết hợp ba thành phần:

| Thành phần | Vai trò | Ví dụ với Exclusive Manager |
|------------|---------|-----------------------------|
| **Mô hình ngôn ngữ lớn (LLM)** | Hiểu câu hỏi và viết câu trả lời bằng ngôn ngữ tự nhiên | Soạn tờ trình, tóm tắt báo cáo cho Ban Điều hành |
| **Microsoft Graph** | "Bản đồ" dữ liệu công việc: email, lịch, file, cuộc họp, chat | Biết anh/chị vừa họp với ai, Trung tâm nào gửi báo cáo hôm qua |
| **Ứng dụng Microsoft 365** | Nơi Copilot làm việc cùng anh/chị | Nút Copilot trong Outlook, Excel, Teams... |

Nhờ Microsoft Graph, Copilot hiểu **ngữ cảnh công việc** của riêng anh/chị (còn gọi là **Work IQ**). Đây là điểm khác biệt lớn nhất so với các chatbot AI công cộng.

### Điều gì xảy ra khi anh/chị đặt câu hỏi?

| Bước | Điều gì xảy ra | Ý nghĩa với ngân hàng |
|------|----------------|------------------------|
| **1. Đặt câu hỏi** | Anh/chị nhập prompt trong Outlook, Excel, Copilot Chat... | Không nhập số CIF, CCCD, số tài khoản vào prompt |
| **2. Tìm dữ liệu** | Copilot tìm trong email, file, cuộc họp mà **anh/chị có quyền xem** | Copilot không vượt quá quyền của anh/chị |
| **3. Soạn câu trả lời** | Mô hình AI dùng dữ liệu tìm được để viết câu trả lời | Câu trả lời tốt hay không phụ thuộc vào dữ liệu nguồn |
| **4. Kiểm tra** | Hệ thống kiểm tra bảo mật, chính sách và nội dung có hại | Áp dụng các chính sách bảo vệ của ngân hàng |
| **5. Trả lời** | Kết quả hiển thị kèm **trích dẫn nguồn** | Bấm vào trích dẫn để kiểm tra lại trước khi dùng |

### Copilot nhìn thấy gì?

| Copilot có thể | Copilot không thể |
|----------------|-------------------|
| Đọc email, lịch, chat của chính anh/chị | Đọc email của đồng nghiệp hay của RM khác |
| Đọc file trên OneDrive/SharePoint anh/chị có quyền | Mở file anh/chị không được chia sẻ |
| Dùng transcript cuộc họp anh/chị tham dự (đã bật transcript) | Truy cập cuộc họp anh/chị không tham dự |
| Tìm thông tin công khai trên web (chế độ **Web**) | Đọc core banking, CRM, hệ thống thẻ... nếu ngân hàng chưa kết nối |

> [!NOTE]
> Copilot tuân theo đúng mô hình phân quyền Microsoft 365 hiện có. Copilot không cấp thêm quyền cho ai, nó chỉ giúp anh/chị **tìm nhanh hơn** những gì anh/chị vốn đã có quyền xem.

### Rủi ro thật sự với người quản lý: tài liệu chia sẻ quá rộng

Vì Copilot tìm kiếm rất giỏi, những tài liệu **đang bị chia sẻ sai** sẽ dễ bị tìm thấy hơn trước:

- File danh sách khách hàng Diamond để quyền **Everyone** trên SharePoint: mọi nhân viên đều xem được, và Copilot của họ cũng tìm thấy
- Link **"Anyone with the link"** gửi cho đối tác từ năm trước vẫn còn hiệu lực
- Thư mục của một Trung tâm mở quyền cho toàn bộ Khối thay vì chỉ RM của trung tâm đó

> [!TIP]
> Là người quản lý, anh/chị nên yêu cầu các Trung tâm rà soát quyền chia sẻ thư mục chứa danh mục khách hàng trước khi triển khai Copilot rộng rãi, và gắn **nhãn phân loại** (Nội bộ, Mật, Tuyệt mật) cho tài liệu. Tài liệu Copilot tạo ra từ một file Mật thường được gắn nhãn Mật theo.

### Câu hỏi thường gặp về bảo mật

| Câu hỏi | Trả lời |
|---------|---------|
| Dữ liệu của ngân hàng có được dùng để huấn luyện AI không? | **Không.** Prompt, câu trả lời và dữ liệu trong Microsoft 365 của ngân hàng không được dùng để huấn luyện các mô hình nền tảng. |
| Đồng nghiệp có xem được prompt của tôi không? | **Không.** Lịch sử trò chuyện với Copilot chỉ hiển thị với anh/chị. |
| Ngân hàng có lưu lại các tương tác với Copilot không? | Có thể. Ngân hàng có thể ghi nhật ký và lưu giữ tương tác với Copilot theo chính sách tuân thủ, phục vụ kiểm toán. |
| Khi Copilot tìm trên web, dữ liệu nội bộ có bị gửi ra ngoài không? | Copilot chỉ gửi một **truy vấn tìm kiếm rút gọn** tới Bing, không gửi nguyên tài liệu. Ngân hàng có thể tắt tìm kiếm web nếu cần. |
| Copilot có đọc được core banking hay CRM không? | Chỉ khi ngân hàng chủ động kết nối qua **Copilot connectors** và phân quyền. Mặc định là không. |

### Giới hạn của Copilot

| Giới hạn | Ví dụ trong ngân hàng | Cách xử lý |
|----------|-----------------------|------------|
| **Có thể trả lời sai một cách tự tin** | Đưa ra mức phí hoặc lãi suất "nghe hợp lý" nhưng không có trong biểu phí | Yêu cầu trích dẫn nguồn, đối chiếu tài liệu gốc |
| **Không có số liệu thời gian thực** | Không biết số dư hay tỷ giá hiện tại của khách hàng | Dùng hệ thống nghiệp vụ cho số liệu giao dịch |
| **Phụ thuộc vào dữ liệu nguồn** | File Excel thiếu dữ liệu thì phân tích cũng thiếu | Định dạng dữ liệu thành Table, kiểm tra trước |
| **Không thay thế phán đoán quản lý** | Không quyết định cấp tín dụng hay phê duyệt ngoại lệ thay người có thẩm quyền | Copilot gợi ý, người quản lý quyết định |

### Bản đồ Copilot trong workshop

| Công cụ | Dùng để làm gì | Lab |
|---------|----------------|-----|
| **Copilot Chat** | Hỏi đáp xuyên ứng dụng, tổng hợp từ nhiều nguồn | Lab 1 |
| **Copilot trong Word, Excel, PowerPoint** | Rà soát, phân tích, trình bày trên tài liệu đang mở | Lab 2, 3, 4 |
| **Copilot trong Outlook, Teams** | Điều hành qua email, cuộc họp, chat | Lab 5, 6 |
| **Researcher** | Nghiên cứu chuyên sâu nhiều bước từ web và tài liệu nội bộ | Lab 7 |
| **Agent Builder** | Tự tạo trợ lý AI riêng cho đội ngũ | Lab 8 |

Trong Copilot Chat có nút chuyển **Work / Web**: **Work** trả lời dựa trên email, file, cuộc họp anh/chị có quyền truy cập; **Web** trả lời dựa trên thông tin công khai trên internet.

---

## Quy định sử dụng Copilot (giả định)

Các bài thực hành tuân theo bộ quy định giả định dưới đây, mô phỏng mục "Sử dụng công cụ trí tuệ nhân tạo" trong chính sách bảo mật thông tin khách hàng của một ngân hàng:

| Được làm | Không được làm |
|----------|----------------|
| Dùng Microsoft 365 Copilot, Copilot Chat và agent trong môi trường Microsoft 365 của ngân hàng | Đưa dữ liệu nội bộ vào công cụ AI công cộng hoặc tài khoản AI cá nhân |
| Xử lý tài liệu Mật khi file đã gắn nhãn và anh/chị có quyền truy cập | Đưa thông tin Tuyệt mật vào bất kỳ công cụ AI nào |
| Dùng mã khách hàng đã ẩn danh khi cần nói về một khách hàng cụ thể | Nhập số CIF, CCCD, hộ chiếu, số tài khoản, số thẻ vào prompt |
| Dùng Copilot soạn nháp tờ trình, báo cáo, biên bản rồi tự kiểm tra trước khi gửi | Để AI quyết định cấp tín dụng, phê duyệt ngoại lệ hay đưa khuyến nghị đầu tư cho khách hàng cụ thể |
| Bật transcript cuộc họp có khách hàng, đối tác **sau khi** đã thông báo và được đồng ý | Bật ghi âm, transcript mà không xin phép người tham dự bên ngoài |
| Chia sẻ agent tự tạo trong đơn vị, knowledge là SharePoint có phân quyền | Chia sẻ agent cho khách hàng bên ngoài khi chưa được phê duyệt |

---

## Chuẩn bị

1. Đăng nhập Microsoft 365 bằng **tài khoản công ty** đã được cấp licence **Microsoft 365 Copilot**
2. Kiểm tra licence theo bảng bên dưới
3. Tải các file demo và lưu vào **OneDrive** (xem [cách tải file Word/Excel về máy](#module-1/cach-tai-file-word-excel-ve-may))

### Kiểm tra licence

| Ứng dụng | Cách kiểm tra |
|----------|---------------|
| **Outlook** | Mở Outlook (web hoặc bản mới), thấy biểu tượng **Copilot** trên thanh công cụ |
| **Word, Excel, PowerPoint** | Mở một file bất kỳ, thấy nút **Copilot** trên ribbon, tab **Home** |
| **Teams** | Trong một cuộc họp hoặc khung chat, thấy biểu tượng **Copilot** |
| **Copilot Chat** | Truy cập [m365.cloud.microsoft](https://m365.cloud.microsoft/), thấy nút chuyển **Work / Web** |

> [!TIP]
> Nếu không thấy biểu tượng Copilot, hãy báo ngay cho người hướng dẫn để kiểm tra licence trước khi vào lab.

**Tiêu chí hoàn thành buổi học:** mỗi anh/chị chạy thành công **ít nhất 3 prompt** với công việc thật của mình (trên hộp thư, lịch hoặc tài liệu không chứa thông tin định danh khách hàng).

### Tải file demo

[download-files]

### Cách tải file Word/Excel về máy

1. Bấm vào từng file demo ở trên để tải về máy, hoặc bấm **Tải tất cả (.zip)** rồi giải nén
2. Mở [OneDrive](https://m365.cloud.microsoft/onedrive) bằng tài khoản công ty, tạo thư mục **Copilot Workshop**
3. Chọn **Add new** (hoặc **Upload**) > **Files**, chọn các file vừa tải về

> [!TIP]
> Copilot chỉ tham chiếu được file lưu trên OneDrive hoặc SharePoint. Khi viết prompt, gõ "/" để Copilot gợi ý file cần đính kèm.

---

Tiếp theo: **[Module 2 - Viết prompt hiệu quả](#module-2)**.
