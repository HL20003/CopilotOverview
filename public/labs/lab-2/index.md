# Lab 2 - Copilot trong Word

**Ứng dụng:** Word

> [!NOTE]
> **Toàn bộ tài liệu, số liệu và tình huống trong workshop là bản nháp (draft) dùng cho mục đích đào tạo.** Tên nhân vật, khách hàng và đối tác là giả định.

---

## Mục tiêu

Sau khi hoàn thành lab này, anh/chị sẽ có thể:

- Rà soát một dự thảo dài như người phê duyệt: nắm điều khoản chính, rủi ro và câu hỏi cần làm rõ
- Đối chiếu dự thảo với chính sách sản phẩm để phát hiện ưu đãi vượt thẩm quyền
- Soạn tờ trình xin phê duyệt ngoại lệ gửi cấp trên

### Tính năng chính

| Tính năng | Mô tả |
|-----------|--------|
| **Document Q&A / Summarizing** | Hỏi đáp và tóm tắt trên tài liệu đang mở |
| **Đối chiếu tài liệu** | Tham chiếu file khác bằng "/" để so sánh với chính sách |
| **Content Generating** | Soạn văn bản mới dựa trên tài liệu nguồn |

---

## Tình huống

> **Anh Nguyễn Hoàng Vũ** - *Giám đốc Trung tâm Exclusive*
>
> RM của trung tâm vừa đàm phán xong dự thảo Thỏa thuận khung với Nordvik Engineering Việt Nam, doanh nghiệp FDI muốn ngân hàng phục vụ 85 lãnh đạo và chuyên gia của họ theo gói Exclusive, đổi lại chuyển chi lương 420 nhân viên về ngân hàng. Trước khi trình ký, anh Vũ phải đánh giá dự thảo, kiểm tra các ưu đãi đã hứa có nằm trong chính sách hay không, và xin phê duyệt cho những điểm vượt thẩm quyền.

**Tài liệu demo:** [Thỏa thuận Hợp tác Exclusive Banking.docx](#file-proposal) (dự thảo, cuối tài liệu có phần *Ghi chú của người soạn thảo* về các điểm đã đàm phán) và [Sổ tay Sản phẩm và Chính sách Exclusive.docx](#file-handbook).

*Xem toàn bộ file demo tại trang [Module 1](#module-1) và [cách tải file Word/Excel về máy](#module-1/cach-tai-file-word-excel-ve-may).*

---

### Bài tập 1: Rà soát dự thảo như người phê duyệt

**Cách thực hiện:**

1. Mở file [Thỏa thuận Hợp tác Exclusive Banking.docx](#file-proposal)
2. Nhấn **Copilot** trên ribbon, nhập prompt:

> **PROMPT:**
>
> Tôi là Giám đốc Trung tâm, cần quyết định có trình ký thỏa thuận này hay không. Hãy tóm tắt trong một bảng: các cam kết chính của ngân hàng, các cam kết chính của Nordvik, lợi ích ngân hàng nhận được, và 5 rủi ro lớn nhất cho ngân hàng. Cuối cùng liệt kê những điểm còn chưa chốt cần làm rõ với Pháp chế.

**Kết quả mong đợi:** Bảng tóm tắt hai chiều cam kết, lợi ích (chi lương 420 nhân viên, CASA cam kết 30 tỷ đồng/quý), rủi ro (thấu chi không tài sản bảo đảm, mức phạt chưa thống nhất, thời hạn cho vay chuyên gia nước ngoài) và danh sách điểm cần làm rõ.

### Bài tập 2: Đối chiếu với chính sách sản phẩm

1. Vẫn trong khung Copilot, gõ "/" để tham chiếu file [Sổ tay Sản phẩm và Chính sách Exclusive.docx](#file-handbook)
2. Nhập prompt:

> **PROMPT:**
>
> Đối chiếu các ưu đãi trong phần Ghi chú đàm phán của thỏa thuận với Sổ tay Sản phẩm và Chính sách Exclusive. Lập bảng: ưu đãi trong thỏa thuận, mức chuẩn theo Sổ tay cho đúng hạng thành viên, có vượt chính sách không, và cấp nào có thẩm quyền phê duyệt. Ghi rõ mục tham chiếu trong Sổ tay.

**Kết quả mong đợi:** Copilot chỉ ra các điểm vượt chính sách, ví dụ thấu chi 1 tỷ đồng cho lãnh đạo (hạng Platinum tối đa 800 triệu) và 500 triệu cho chuyên gia (hạng Gold tối đa 300 triệu), giảm 30% chênh lệch tỷ giá (chuẩn 15-25%), miễn 5 giao dịch chuyển tiền quốc tế cho hạng Gold (chuẩn 2 giao dịch), kèm cấp phê duyệt ngoại lệ theo Mục 4.2 của Sổ tay.

> [!TIP]
> Yêu cầu **ghi rõ mục tham chiếu** giúp anh/chị kiểm tra nhanh từng kết luận, thay vì phải tin hoàn toàn vào Copilot.

### Bài tập 3: Soạn tờ trình xin phê duyệt ngoại lệ

1. Mở một file Word mới, nhấn **Copilot**, gõ "/" để tham chiếu cả hai file
2. Nhập prompt:

> **PROMPT:**
>
> Dựa trên thỏa thuận với Nordvik và các điểm vượt chính sách so với Sổ tay, soạn tờ trình một trang gửi Phó Tổng Giám đốc phụ trách Khối xin phê duyệt ngoại lệ. Gồm: bối cảnh, các ưu đãi cần phê duyệt (dạng bảng), lợi ích kinh doanh cho ngân hàng, rủi ro và biện pháp kiểm soát, đề xuất của Giám đốc Trung tâm. Giọng văn hành chính, ngắn gọn. Chỗ nào cần số liệu tôi bổ sung thì ghi [CẦN XÁC NHẬN].

**Kết quả mong đợi:** Bản nháp tờ trình đủ cấu trúc, bảng ưu đãi cần phê duyệt khớp với kết quả Bài tập 2, sẵn sàng để anh/chị chỉnh và trình ký.

---

## Mở rộng: từ chính sách thành hướng dẫn cho đội ngũ

File [SAMPLE Chính sách Bảo mật Thông tin Khách hàng.docx](#file-policy-sample) là bản chuyển từ PDF, định dạng còn lỗi. Copilot vẫn đọc được nội dung. Mở file và nhập:

> **PROMPT:**
>
> Từ chính sách này, soạn bản hướng dẫn một trang gửi các RM với tiêu đề "Dùng AI với dữ liệu khách hàng: được làm và không được làm". Dạng bảng hai cột, tối đa 8 dòng, ngôn ngữ dễ hiểu, cuối trang nêu đầu mối liên hệ khi có sự cố.

---

## Lưu ý tuân thủ

> [!NOTE]
> Tờ trình và bảng đối chiếu do Copilot tạo chỉ là bản nháp: mọi con số, hạn mức và cấp phê duyệt phải được đối chiếu lại với văn bản gốc trước khi trình ký. Không đưa thông tin định danh khách hàng vào tài liệu nháp.

---

## Prompt đề xuất - Word

### Summarizing

> **PROMPT:**
>
> Tóm tắt văn bản này thành một trang cho người quản lý: thay đổi chính so với trước, ảnh hưởng tới Khối Khách hàng Ưu tiên, và những việc RM cần làm khác đi từ tháng tới.

### Review

> **PROMPT:**
>
> So sánh tài liệu này với phiên bản trước /[tên file]: liệt kê các thay đổi về điều khoản, số liệu và cam kết, đánh dấu thay đổi nào bất lợi cho ngân hàng.

### Content Generating

> **PROMPT:**
>
> Soạn thư gửi khách hàng hạng Diamond thông báo thay đổi chính sách ưu đãi từ quý tới: giọng trân trọng, nêu rõ quyền lợi được giữ nguyên, quyền lợi thay đổi, và RM phụ trách sẽ liên hệ để giải đáp.

---

## Tổng kết

| Anh/chị đã học được | Tính năng |
|---------------------|-----------|
| Rà soát dự thảo như người phê duyệt | Document Q&A / Summarizing |
| Đối chiếu ưu đãi với chính sách, xác định cấp phê duyệt | Đối chiếu tài liệu |
| Soạn tờ trình xin phê duyệt ngoại lệ | Content Generating |
