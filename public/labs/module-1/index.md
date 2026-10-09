# Module 1 - Giới thiệu và chuẩn bị

**Thời lượng:** 10 phút

> [!NOTE]
> **Ngân hàng TMCP Minh Khang (MKB) là ngân hàng giả tưởng.** Toàn bộ tên ngân hàng, nhân vật, khách hàng, số liệu và tài liệu trong lab chỉ phục vụ mục đích minh họa, không liên quan đến bất kỳ tổ chức có thật nào.

> [!NOTE]
> **Lưu ý tuân thủ khi thực hành:** không đưa dữ liệu định danh khách hàng thật (số CIF, CCCD/hộ chiếu, số tài khoản, số thẻ, số điện thoại) vào prompt khi demo. Chỉ dùng file demo của workshop hoặc dữ liệu đã được ẩn danh.

---

## Về Ngân hàng Minh Khang (MKB)

**MKB - Ngân hàng TMCP Minh Khang** có trụ sở tại TP. Hồ Chí Minh. Khối Khách hàng Ưu tiên **MKB Exclusive** phục vụ nhóm khách hàng cá nhân có tài sản cao (high-net-worth) với các sản phẩm tiền gửi, tín dụng, bancassurance, trái phiếu và quản lý tài sản.

| Chỉ số | Giá trị |
|--------|---------|
| Tổng tài sản 31/12/2025 | **312.400 tỷ đồng** |
| Khách hàng Exclusive | **18.600 khách hàng** |
| Tài sản khách hàng Exclusive quản lý (AUM) | **96.800 tỷ đồng** |
| RM Ưu tiên | **240 người** |
| Trung tâm Exclusive | **12 trung tâm** tại TP. Hồ Chí Minh, Hà Nội, Đà Nẵng và Cần Thơ |

### Ba khối kinh doanh

| Khối | Lĩnh vực |
|------|----------|
| **Khối Khách hàng Ưu tiên (MKB Exclusive)** | Quản lý quan hệ khách hàng VIP: tiền gửi, CASA, tín dụng cá nhân cao cấp, bancassurance, trái phiếu và wealth management |
| **Khối Tín dụng** | Thẩm định, phê duyệt hạn mức, quản trị rủi ro tín dụng và chất lượng danh mục cho vay |
| **Khối Nguồn vốn và Đầu tư** | Quản lý thanh khoản, định giá điều chuyển vốn (FTP), kinh doanh ngoại tệ và phân phối trái phiếu |

---

## Các nhân vật trong lab

Mỗi lab đặt anh/chị vào vai một nhân sự của MKB:

| Lab | Nhân vật | Vai trò | Ứng dụng |
|-----|----------|---------|----------|
| 1 | Anh Nguyễn Hoàng Vũ | Senior Exclusive Relationship Manager | Word |
| 1 | Anh Trần Minh Quân | Giám đốc Pháp chế và Tuân thủ | Word |
| 2 | Chị Phạm Thu Hằng | Giám đốc Phân tích Tài chính, Khối Khách hàng Ưu tiên | Excel |
| 3 | Chị Phạm Ngọc Lan | Giám đốc Phát triển Khách hàng Ưu tiên | PowerPoint |
| 4 | Anh Trần Quốc Tuấn | Giám đốc Khối Exclusive Banking Vùng miền Nam | Outlook |
| 5 | Chị Nguyễn Thu Trang | Exclusive RM phụ trách Đối tác Quốc tế | Teams |
| 6 | Anh Lê Quốc Hưng | Giám đốc Rủi ro Tín dụng, Khối Khách hàng Ưu tiên | Researcher Agent |
| 7 | Anh Nguyễn Đức Thành | Giám đốc Vận hành và Dịch vụ Khách hàng Ưu tiên | Analyst Agent |

---

## Quy định sử dụng Copilot tại MKB

Mọi bài tập trong workshop tuân theo Mục VII "Sử dụng công cụ trí tuệ nhân tạo" trong Chính sách Bảo mật Thông tin Khách hàng của MKB (giả định). Tóm tắt:

| Được làm | Không được làm |
|----------|----------------|
| Dùng Microsoft 365 Copilot, Copilot Chat và agent trong môi trường Microsoft 365 của MKB | Đưa dữ liệu nội bộ vào công cụ AI công cộng hoặc tài khoản AI cá nhân |
| Xử lý tài liệu Cấp 3 (Mật) khi file đã gắn nhãn và anh/chị có quyền truy cập | Đưa thông tin Cấp 4 (Tuyệt mật) vào bất kỳ công cụ AI nào |
| Dùng mã khách hàng đã ẩn danh khi cần nói về một khách hàng cụ thể | Nhập số CIF, CCCD, hộ chiếu, số tài khoản, số thẻ vào prompt |
| Dùng Copilot soạn nháp thư, tờ trình, biên bản rồi tự kiểm tra trước khi gửi | Để AI quyết định cấp tín dụng, phê duyệt ngoại lệ hay đưa khuyến nghị đầu tư cho khách hàng cụ thể |
| Bật transcript cuộc họp có khách hàng, đối tác **sau khi** đã thông báo và được đồng ý | Bật ghi âm, transcript mà không xin phép người tham dự bên ngoài |
| Chia sẻ agent tự tạo trong đơn vị, knowledge là SharePoint có phân quyền | Chia sẻ agent cho khách hàng bên ngoài khi chưa được Khối Công nghệ và Pháp chế phê duyệt |

> [!TIP]
> Copilot tôn trọng phân quyền: Copilot chỉ đọc được những gì anh/chị được phép đọc. Vì vậy, phân quyền đúng trên SharePoint/OneDrive quan trọng không kém việc viết prompt đúng.

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

Riêng file *Transcript - BRK311 - Copy.docx* mở trên SharePoint. Để tải bản sao về máy: ở góc trái trên cùng chọn **File** > **Create a Copy** > **Download a copy**.

![Tải bản sao file Word trên SharePoint về máy: File > Create a Copy > Download a copy](images/download-a-copy.png)

Sau khi tải lên **OneDrive**, Copilot mới có thể tham chiếu các file này.

> [!TIP]
> Copilot chỉ tham chiếu được file lưu trên OneDrive hoặc SharePoint. Khi viết prompt, gõ "/" để Copilot gợi ý file cần đính kèm.


---

Sẵn sàng chưa? Chuyển sang **[Module 2 - Copilot là gì](#module-2)** để hiểu Copilot hoạt động thế nào trong môi trường ngân hàng.
