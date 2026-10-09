# Lab 1 - Copilot trong Word

**Thời lượng:** 22 phút | **Ứng dụng:** Word

> [!NOTE]
> **Ngân hàng TMCP Minh Khang (MKB) là ngân hàng giả tưởng.** Toàn bộ tên ngân hàng, nhân vật, khách hàng, số liệu và tài liệu trong lab chỉ phục vụ mục đích minh họa, không liên quan đến bất kỳ tổ chức có thật nào.

---

## Mục tiêu

Sau khi hoàn thành lab này, anh/chị sẽ có thể:

- Biến ghi chú đàm phán rời rạc thành điều khoản hợp đồng hoàn chỉnh, không để Copilot tự "điền" những điểm chưa chốt
- Dịch tài liệu cho đối tác nước ngoài và tạo bản tóm tắt dành riêng cho lãnh đạo của họ
- Đưa một tài liệu lỗi định dạng về chuẩn văn bản nội bộ, rồi rút ra bản tóm tắt để phổ biến

### Tính năng chính

| Tính năng | Mô tả |
|-----------|--------|
| **Document Content Generating** | Tạo hoặc viết tiếp nội dung dựa trên ngữ cảnh tài liệu |
| **Document Translations** | Dịch tài liệu sang ngôn ngữ khác, giữ nguyên cấu trúc |
| **Document Formatting** | Chuẩn hóa font, heading, đánh số theo mẫu |

---

## Phần A: Hoàn thiện và dịch thỏa thuận hợp tác

### Tình huống

> **Anh Nguyễn Hoàng Vũ** - *Senior Exclusive Relationship Manager, MKB*
>
> Sau buổi đàm phán với Nordvik Engineering Việt Nam, một doanh nghiệp FDI muốn MKB phục vụ ban lãnh đạo và chuyên gia nước ngoài của họ theo gói Exclusive, anh Vũ chỉ kịp ghi vội các điểm đã thống nhất ở cuối dự thảo. Anh cần biến những ghi chú đó thành Mục 7 hoàn chỉnh, sau đó gửi bản tiếng Anh cho Tổng Giám đốc Nordvik, người không có thời gian đọc hết cả văn bản.

**Tài liệu demo:** [MKB - Thỏa thuận Hợp tác Exclusive Banking.docx](#file-proposal) - dự thảo thỏa thuận khung giữa Ngân hàng TMCP Minh Khang và Công ty TNHH Nordvik Engineering Việt Nam, cuối tài liệu có phần *Ghi chú của người soạn thảo*.

*Xem toàn bộ file demo tại trang [Giới thiệu và chuẩn bị](#module-1) và [cách tải file Word/Excel về máy](#module-1/cach-tai-file-word-excel-ve-may).*

### Bài tập 1: Từ ghi chú đàm phán thành Mục 7

**Cách thực hiện:**

1. Mở file [MKB - Thỏa thuận Hợp tác Exclusive Banking.docx](#file-proposal) và đọc lướt phần *Ghi chú của người soạn thảo* ở cuối
2. Đặt con trỏ ở cuối tài liệu, mở **Copilot** trên ribbon
3. Nhập prompt:

> **PROMPT:**
>
> Dựa trên phần "Ghi chú của người soạn thảo" ở cuối tài liệu, hãy viết Mục 7 "Điều khoản tài chính và tín dụng" theo đúng văn phong và cách đánh số của Mục 1 đến Mục 6. Mỗi ý trong ghi chú trở thành một điều khoản con, nêu rõ công thức lãi suất, các khoản phí được miễn, điều kiện giải ngân, số dư cam kết và chế tài. Những điểm ghi chú nói là chưa thống nhất hoặc chưa chốt thì không tự điền con số, mà ghi [CHỜ PHÁP CHẾ XÁC NHẬN] kèm câu hỏi cần làm rõ.

**Kết quả mong đợi:** Mục 7 có các điều khoản 7.1, 7.2... đúng nội dung đã đàm phán: lãi suất cố định 6,2%/năm trong 12 tháng đầu, thấu chi tối đa 500 triệu/1 tỷ đồng, số dư CASA cam kết 30 tỷ đồng/quý... Hai điểm mức phạt và thời hạn cho vay chuyên gia nước ngoài được để ở dạng [CHỜ PHÁP CHẾ XÁC NHẬN].

> [!TIP]
> Câu "không tự điền con số" là cách giữ Copilot trong giới hạn. Với tài liệu pháp lý, chỗ trống được đánh dấu rõ ràng an toàn hơn một con số "nghe hợp lý" mà không ai đàm phán.

### Bài tập 2: Bản tiếng Anh và tóm tắt cho lãnh đạo đối tác

> **PROMPT:**
>
> Dịch toàn bộ thỏa thuận sang tiếng Anh theo văn phong hợp đồng ngân hàng quốc tế, giữ nguyên số liệu, tên riêng và cách đánh số. Thêm ở đầu bản dịch một phần "Executive Summary" khoảng 150 từ dành cho Tổng Giám đốc Nordvik: 5 lợi ích chính cho nhân viên của họ và 3 nghĩa vụ phía Nordvik cần thực hiện. Cuối bản dịch lập bảng đối chiếu thuật ngữ Việt - Anh.

**Kết quả mong đợi:** Bản tiếng Anh có Executive Summary ở đầu và bảng thuật ngữ ở cuối, ví dụ:

| Tiếng Việt | English |
|------------|---------|
| Hợp đồng khung | Framework Agreement |
| Số dư cam kết tối thiểu | Minimum Committed Balance |
| Lãi suất tham chiếu | Reference Rate |
| Tiền gửi không kỳ hạn | Current Account and Savings Account (CASA) |

---

## Phần B: Chuẩn hóa định dạng tài liệu

### Tình huống

> **Anh Trần Minh Quân** - *Giám đốc Pháp chế và Tuân thủ, MKB*
>
> Chính sách Bảo mật Thông tin Khách hàng vừa được bổ sung mục về sử dụng AI, nhưng bản Word chuyển từ PDF bị lỗi font, mất dấu tiếng Việt, câu bị ngắt dòng giữa chừng. Anh Quân cần đưa tài liệu về chuẩn văn bản nội bộ trước khi trình Ban Điều hành, đồng thời có ngay một bản tóm tắt ngắn để gửi toàn bộ RM.

**Tài liệu demo:** [SAMPLE Chính sách Bảo mật Thông tin Khách hàng.docx](#file-policy-sample) (bản chuyển đổi từ PDF, bị lỗi font chữ và định dạng), cùng các tệp tham chiếu [Transcript - BRK311 - Copy.docx](#file-transcript) (biên bản một buổi trình bày tại Microsoft Ignite) và [MKB - Financial Analysis Q3 2026.xlsx](#file-financial).

*Xem [cách tải file Word/Excel về máy](#module-1/cach-tai-file-word-excel-ve-may).*

### Bài tập 3: Chuẩn hóa tài liệu và rút ra bản phổ biến

**Cách thực hiện:**

1. Mở file [SAMPLE Chính sách Bảo mật Thông tin Khách hàng.docx](#file-policy-sample). Để ý các chữ mất dấu, font lẫn lộn và câu bị ngắt giữa chừng
2. Nhấn **Copilot** trên ribbon và nhập prompt:

> **PROMPT:**
>
> Đưa tài liệu này về chuẩn văn bản nội bộ: toàn bộ dùng font Arial cỡ 12, các mục chính đánh số thống nhất 1, 2, 3... và dùng Heading 1, các ý bên trong dùng gạch đầu dòng. Sửa các chữ tiếng Việt bị mất dấu hoặc bị tách, nối lại các câu bị ngắt dòng giữa chừng, xóa các dòng số trang lạc trong nội dung. Không thay đổi ý nghĩa của bất kỳ quy định nào.

3. Sau khi tài liệu đã gọn, hỏi tiếp trong cùng khung Copilot:

> **PROMPT:**
>
> Tóm tắt mục "Sử dụng công cụ trí tuệ nhân tạo" thành một bảng hai cột "Được làm" và "Không được làm", tối đa 6 dòng, ngôn ngữ dễ hiểu để gửi email cho toàn bộ RM.

> [!NOTE]
> Copilot xử lý tốt font, heading và đánh số. Một số lỗi bố cục phức tạp (bảng bị vỡ, hình ảnh lệch) có thể vẫn cần chỉnh thủ công.

---

## Lưu ý tuân thủ

> [!NOTE]
> Lãi suất, biểu phí, hạn mức do Copilot soạn chỉ là bản nháp, phải đối chiếu biểu phí hiện hành và được Pháp chế duyệt trước khi gửi khách hàng. Với tài liệu pháp lý song ngữ, bản tiếng Việt đã duyệt là bản gốc. Không đưa số CIF, CCCD, số tài khoản của khách hàng vào tài liệu nháp.

---

## Prompt đề xuất - Word

### Translation

> **PROMPT:**
>
> 1. Dịch thư này sang tiếng Anh theo văn phong private banking: trang trọng, ấm áp, không dùng từ ngữ hứa hẹn lợi nhuận. Đặt bản tiếng Việt bên dưới để tôi đối chiếu.
> 2. Rà soát bản tiếng Anh này như một người bản xứ làm ngân hàng, chỉ ra những câu nghe "dịch máy" và đề xuất cách viết tự nhiên hơn.

### Content Generating

> **PROMPT:**
>
> 1. Từ file /[biên bản họp hoặc email], soạn tờ trình xin phê duyệt ngoại lệ hạn mức gồm: bối cảnh khách hàng (đã ẩn danh), đề xuất, căn cứ, rủi ro và biện pháp giảm thiểu. Đánh dấu những chỗ tôi cần bổ sung số liệu.
> 2. Viết thư tri ân khách hàng Diamond nhân dịp tròn 5 năm gắn bó với MKB, khoảng 120 từ, giọng chân thành, nhắc tới [sở thích hoặc dấu mốc của khách hàng], không giới thiệu sản phẩm.

### Formatting

> **PROMPT:**
>
> Chuyển nội dung này thành mẫu tờ trình nội bộ: tiêu đề in hoa, phần "Kính gửi", bảng tóm tắt đề xuất ngay đầu trang, các mục chính đánh số La Mã, font Arial cỡ 12 và đánh số trang ở chân trang.

---

## Tổng kết

| Anh/chị đã học được | Tính năng |
|---------------------|-----------|
| Biến ghi chú thành điều khoản, giữ chỗ trống cho phần chưa chốt | Content Generating |
| Dịch tài liệu và tạo Executive Summary cho đối tác | Translations |
| Chuẩn hóa tài liệu và rút ra bản tóm tắt để phổ biến | Formatting + Content Generating |
