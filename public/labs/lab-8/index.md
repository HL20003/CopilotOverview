# Lab 8 - Agent Builder in Copilot Chat

**Ứng dụng:** Microsoft 365 Copilot Chat, Agent Builder

> [!NOTE]
> **Toàn bộ tài liệu, số liệu và tình huống trong workshop là bản nháp (draft) dùng cho mục đích đào tạo.** Tên nhân vật, khách hàng và đối tác là giả định.

---

## Mục tiêu

Sau khi hoàn thành lab này, anh/chị sẽ có thể:

- Tạo một trợ lý AI cho đội ngũ chỉ bằng ngôn ngữ tự nhiên, không cần code
- Cấu hình instructions, knowledge sources và starter prompts cho agent
- Chia sẻ agent với đồng nghiệp

---

## Khái niệm cần biết

| Khái niệm | Giải thích |
|-----------|------------|
| **Agent** | Trợ lý AI được tuỳ chỉnh, có thể trả lời câu hỏi và hướng dẫn người dùng dựa trên instructions và knowledge sources đã cấu hình |
| **Knowledge source** | Tài liệu mà agent dùng để trả lời (file, thư mục SharePoint, website), giúp câu trả lời chính xác và có nguồn |
| **Instruction** | Cấu hình định nghĩa cách agent hoạt động - giọng điệu, tính cách, ưu tiên và giới hạn |
| **Starter Prompts** | Các câu hỏi gợi ý hiển thị trên giao diện chat để hướng dẫn người dùng bắt đầu |

---

## Tình huống

> Là Exclusive Manager, anh/chị nhận ra các RM liên tục hỏi mình và Phòng Sản phẩm cùng những câu hỏi về biểu phí, hạn mức, thẩm quyền phê duyệt. Anh/chị tạo **Exclusive Assistant** - một trợ lý nội bộ giúp đội RM tự tra cứu nhanh sản phẩm (tiền gửi, tín dụng, bancassurance, wealth management), biểu phí, điều kiện KYC và thẩm quyền phê duyệt, cùng các chính sách ưu đãi cho khách hàng Exclusive. Agent chỉ trả lời dựa trên Sổ tay Sản phẩm và Chính sách nội bộ để đảm bảo chính xác và tuân thủ.

**Knowledge source:** [Sổ tay Sản phẩm và Chính sách Exclusive.docx](#file-handbook) - lưu file này vào **OneDrive** của anh/chị trước khi bắt đầu (xem [cách tải file Word/Excel về máy](#module-1/cach-tai-file-word-excel-ve-may)).

---

## Phần A: Truy cập Agent Builder

### Bước 1: Mở Microsoft 365 Copilot Chat

1. Mở trình duyệt và truy cập [https://m365.cloud.microsoft/](https://m365.cloud.microsoft/) (hoặc [https://copilot.cloud.microsoft/](https://copilot.cloud.microsoft/) - cả hai đều vào được Copilot)
2. Đăng nhập bằng **tài khoản công ty** (tài khoản Microsoft 365 do công ty cấp) - **không dùng** tài khoản Microsoft cá nhân như Outlook.com, Hotmail
3. Chuyển sang tab **Chat**

> [!TIP]
> Lab này dùng file trên OneDrive/SharePoint làm knowledge source, nên cần tài khoản có licence **Microsoft 365 Copilot**. Nếu anh/chị thấy toggle **Work / Web** trên giao diện, hãy chọn **Work**.

### Bước 2: Mở Agent Builder

1. Trong panel bên trái, tìm mục **Agents** và mở rộng nó
2. Nhấn **New agent** để bắt đầu tạo agent mới

> [!TIP]
> Nếu không thấy nút **New agent**, thử nhấn `Ctrl + F5` để refresh. Tài khoản của anh/chị có thể đang trong quá trình khởi tạo dịch vụ.

---

## Phần B: Tạo Agent bằng ngôn ngữ tự nhiên

### Bước 3: Mô tả agent bằng tiếng tự nhiên

1. Chọn tab **Describe**
2. Nhập mô tả sau vào ô input và nhấn **Send**:

> **PROMPT:**
>
> Tôi muốn xây dựng một trợ lý nội bộ cho các RM Ưu tiên của Khối Khách hàng Ưu tiên. Agent giúp RM tra cứu nhanh thông tin sản phẩm dành cho khách hàng Exclusive gồm tiền gửi, tín dụng, bancassurance và wealth management, biểu phí, điều kiện xét hạng thành viên, hồ sơ KYC và thẩm quyền phê duyệt hạn mức, cùng các chính sách ưu đãi cho khách hàng VIP. Agent trả lời ngắn gọn, có dẫn mục tương ứng trong Sổ tay, và khi câu hỏi cần phê duyệt ngoại lệ thì hướng RM đến đúng cấp phê duyệt.

Agent Builder sẽ tự động tạo **tên**, **mô tả**, **instructions** và **starter prompts** dựa trên mô tả của anh/chị.

### Bước 4: Tinh chỉnh tên và giọng điệu

Nếu tên agent không phải là "Exclusive Assistant", nhập prompt sau:

> **PROMPT:**
>
> Đặt tên agent là "Exclusive Assistant". Giọng điệu chuyên nghiệp, rõ ràng và đi thẳng vào vấn đề, phù hợp với RM đang cần câu trả lời nhanh khi đang tư vấn khách hàng. Trình bày điều kiện và biểu phí dưới dạng bảng khi có thể.

### Bước 5: Định nghĩa giới hạn của agent

Nếu được hỏi về phạm vi hoạt động, trả lời:

> **PROMPT:**
>
> Agent chỉ trả lời các câu hỏi về sản phẩm, biểu phí, quy trình và chính sách dành cho khách hàng Exclusive dựa trên Sổ tay nội bộ. Không trả lời câu hỏi ngoài phạm vi này. Không đưa ra khuyến nghị đầu tư cho một khách hàng cụ thể, không cam kết lãi suất hay hạn mức thay cho cấp phê duyệt. Nếu người dùng nhập số CIF, số CCCD, số tài khoản hoặc thông tin định danh khách hàng, hãy nhắc họ không chia sẻ dữ liệu này trong cuộc trò chuyện.

---

## Phần C: Thêm Knowledge Sources

### Bước 6: Gắn kết agent với Sổ tay Sản phẩm nội bộ

1. Chuyển sang tab **Configure**, kéo xuống phần **Knowledge**
2. Thêm file [Sổ tay Sản phẩm và Chính sách Exclusive.docx](#file-handbook): chọn file đã lưu trên **OneDrive/SharePoint**, hoặc tải file lên trực tiếp
3. Quay lại tab **Describe** và nhập prompt để agent ưu tiên dùng tài liệu này:

> **PROMPT:**
>
> Dùng file Sổ tay Sản phẩm và Chính sách Exclusive làm nguồn tham chiếu chính. Khi trả lời, ghi rõ mục tương ứng trong Sổ tay. Nếu Sổ tay không có thông tin, hãy nói rõ là chưa có thông tin và đề nghị RM liên hệ Phòng Sản phẩm Khách hàng Ưu tiên.

> [!TIP]
> Trong môi trường thật, nên dùng một **thư mục hoặc site SharePoint** do Phòng Sản phẩm quản lý làm knowledge source. Khi tài liệu được cập nhật, agent tự dùng phiên bản mới, và agent tôn trọng phân quyền: người dùng không có quyền đọc file thì agent cũng không trả lời từ file đó.

---

## Phần D: Hoàn thiện cấu hình

### Bước 7: Xem và chỉnh sửa trong tab Configure

1. Chuyển sang tab **Configure**
2. Xem lại toàn bộ cấu hình được tạo tự động:
   - **Name** - tên agent
   - **Description** - mô tả ngắn
   - **Instructions** - hành vi và giới hạn của agent
   - **Knowledge sources** - file Sổ tay đã thêm
   - **Starter prompts** - các câu hỏi gợi ý

3. Trong phần **Knowledge**, bật toggle **"Only use selected sources"** để agent chỉ dùng các knowledge sources đã cấu hình, không dùng kiến thức chung của LLM

> [!NOTE]
> Với nghiệp vụ ngân hàng, nên luôn bật "Only use selected sources": agent cho kết quả chính xác, có thể kiểm chứng và tránh "bịa" biểu phí hay điều kiện sản phẩm. Đổi lại, agent sẽ không trả lời các câu hỏi ngoài phạm vi Sổ tay.

### Bước 8: Test agent trước khi publish

1. Dùng **Test pane** bên phải để thử agent
2. Nhập câu hỏi thử:

> **PROMPT:**
>
> Khách hàng có tổng tài sản tại ngân hàng 3,5 tỷ đồng thì đạt hạng thành viên nào và được những đặc quyền gì?

3. Kiểm tra xem câu trả lời có đúng với Sổ tay, có dẫn mục và phù hợp với giọng điệu mong muốn không

### Bước 9: Tạo và chia sẻ agent

1. Nhấn **Create** ở góc trên bên phải để publish agent
2. Sau khi tạo xong, anh/chị sẽ nhận được một **liên kết chia sẻ**
3. Chia sẻ liên kết này với đồng nghiệp để họ có thể dùng agent của anh/chị
4. Nhấn **Go to agent** để thử nghiệm agent đã publish

> [!NOTE]
> Người được chia sẻ agent cũng cần **quyền đọc** file Sổ tay trên OneDrive/SharePoint thì agent mới trả lời được từ file đó. Theo quy định sử dụng AI, agent tự tạo chỉ chia sẻ trong phạm vi đơn vị; agent phục vụ khách hàng bên ngoài phải được Khối Công nghệ và Pháp chế phê duyệt.

---

## Phần E: Thử nghiệm Agent đã hoàn thành

Sau khi agent được tạo, thử các câu hỏi sau:

> **PROMPT:**
>
> Phí chuyển tiền quốc tế cho khách hàng hạng Exclusive Platinum là bao nhiêu và có được miễn phí không?

> **PROMPT:**
>
> Tôi cần đề xuất hạn mức thấu chi 1,5 tỷ đồng không tài sản bảo đảm cho khách hàng hạng Diamond. Cần hồ sơ gì và ai có thẩm quyền phê duyệt?

> **PROMPT:**
>
> Khi tư vấn bảo hiểm liên kết cho khách hàng đang có khoản vay, RM cần lưu ý những quy định gì?

---

## Lưu ý tuân thủ

> [!NOTE]
> Agent tự tạo chỉ chia sẻ trong phạm vi đơn vị, knowledge source phải là thư mục SharePoint có phân quyền. Agent phục vụ khách hàng bên ngoài cần được Khối Công nghệ và Pháp chế phê duyệt. Bật "Only use selected sources" với mọi agent trả lời về sản phẩm và biểu phí.

---

## Tự thực hành: Tạo agent cho tình huống của anh/chị

Bây giờ hãy thử tạo một agent phù hợp với công việc thực tế của anh/chị:

1. **Xác định chủ đề** - Agent sẽ hỗ trợ mảng gì? (onboarding RM mới, FAQ quy trình KYC, tra cứu chỉ tiêu và cơ chế thưởng, hỏi đáp chính sách tín dụng...)
2. **Xác định giọng điệu** - Trang trọng hay thân thiện? Dành cho ai?
3. **Xác định knowledge sources** - Thư mục hoặc site SharePoint nào sẽ làm nguồn dữ liệu? Ai đang có quyền đọc?
4. **Thiết kế starter prompts** - 3-5 câu hỏi mà RM thường xuyên hỏi nhất

---

## Tổng kết

| Anh/chị đã học được | Chi tiết |
|-----------------|----------|
| Tạo trợ lý AI cho đội ngũ | Dùng ngôn ngữ tự nhiên, không cần code |
| Cấu hình instructions | Định nghĩa tính cách, giới hạn và hành vi |
| Thêm knowledge sources | Grounding agent với tài liệu nội bộ trên OneDrive/SharePoint |
| Kiểm soát phạm vi | Bật "Only use selected sources" |
| Publish và chia sẻ | Tạo liên kết chia sẻ cho đồng nghiệp |
| Test và cải thiện | Thử nghiệm và cải thiện agent dần |

> [!TIP]
> Để cập nhật agent sau khi đã tạo: nhấn **...** cạnh tên agent → chọn **Edit**, hoặc vào **Create agent** → chọn **My agents**.
