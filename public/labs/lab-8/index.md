# Lab 8 - Agent Builder in Copilot Chat

**Ứng dụng:** Microsoft 365 Copilot Chat, Agent Builder

> [!NOTE]
> **Toàn bộ tài liệu, số liệu và tình huống trong workshop là bản nháp (draft) dùng cho mục đích đào tạo.** Tên nhân vật, khách hàng và đối tác là giả định.

---

## Mục tiêu

Sau khi hoàn thành lab này, anh/chị sẽ có thể:

- Tạo một trợ lý AI cho đội ngũ chỉ bằng ngôn ngữ tự nhiên, không cần code
- Cấu hình instructions, knowledge sources và starter prompts cho agent
- Kiểm tra câu trả lời của agent trước khi chia sẻ với đồng nghiệp

---

## Khái niệm cần biết

| Khái niệm | Giải thích |
|-----------|------------|
| **Agent** | Trợ lý AI được tuỳ chỉnh, trả lời câu hỏi dựa trên instructions và knowledge sources đã cấu hình |
| **Instructions** | Phần cấu hình quy định agent làm gì, trả lời theo giọng điệu nào và không được làm gì |
| **Knowledge source** | Tài liệu agent dùng để trả lời (file, thư mục SharePoint, website), giúp câu trả lời chính xác và có nguồn |
| **Starter prompts** | Các câu hỏi gợi ý hiển thị sẵn trên giao diện chat để người dùng bấm vào và bắt đầu |

Agent Builder có hai cách làm việc, lab này dùng lần lượt từng cách:

| Cách | Dùng để | Trong lab |
|------|---------|-----------|
| **Mô tả bằng prompt** (Describe) | Gõ mô tả agent bằng lời rồi nhấn **Send**, làm theo các câu hỏi của Agent Builder; Agent Builder tự điền cấu hình | Phần B |
| **Configure** | Xem và chỉnh trực tiếp từng trường: Name, Description, Instructions, Knowledge, Starter prompts | Phần C |

Khung chat thử nghiệm bên phải màn hình luôn hiển thị để anh/chị thử agent bất cứ lúc nào (Phần D).

---

## Tình huống

> Là Exclusive Manager, anh/chị nhận ra các RM liên tục hỏi mình và Phòng Sản phẩm cùng những câu hỏi về biểu phí, hạn mức, thẩm quyền phê duyệt. Anh/chị tạo **Exclusive Assistant** - một trợ lý nội bộ giúp đội RM tự tra cứu nhanh sản phẩm (tiền gửi, tín dụng, bancassurance, wealth management), biểu phí, điều kiện KYC, thẩm quyền phê duyệt và các đặc quyền cho khách hàng Exclusive. Agent chỉ trả lời dựa trên Sổ tay Sản phẩm và Chính sách nội bộ để đảm bảo chính xác và tuân thủ.

**Knowledge source:** [Sổ tay Sản phẩm và Chính sách Exclusive.docx](#file-handbook) - tải file và lưu vào **OneDrive** của anh/chị trước khi bắt đầu (xem [cách tải file Word/Excel về máy](#module-1/cach-tai-file-word-excel-ve-may)).

**Kết quả cuối lab:** một agent tên **Exclusive Assistant**, trả lời từ Sổ tay, có dẫn mục, từ chối câu hỏi ngoài phạm vi và có link chia sẻ cho đồng nghiệp.

---

## Phần A: Mở Agent Builder

### Bước 1: Mở Agent Builder

1. Trong ứng dụng **Microsoft Copilot** (đã mở ở các lab trước), ở thanh điều hướng bên trái, tìm mục **Agents**
2. Chọn **New Agent**
3. Màn hình Agent Builder mở ra: ô mô tả agent ở giữa, nút **Configure** để chỉnh chi tiết, khung chat thử nghiệm ở bên phải

> [!TIP]
> Agent Builder còn cho phép **chọn một template có sẵn** trong danh sách rồi tuỳ chỉnh bằng **Configure**. Lab này tạo agent từ đầu bằng prompt để anh/chị nắm được từng phần cấu hình.

> [!NOTE]
> Microsoft đang triển khai giao diện **Home** mới cho Copilot, nên vị trí nút và tên gọi trên máy anh/chị có thể hơi khác hướng dẫn. Nếu không thấy **New Agent**, nhấn `Ctrl + F5` để tải lại trang.

---

## Phần B: Mô tả agent bằng prompt

Nhập lần lượt **cả 3 prompt** dưới đây vào ô mô tả, mỗi prompt nhấn **Send**. Sau mỗi prompt, đợi Agent Builder trả lời xong rồi mới gửi prompt tiếp theo. Agent Builder có thể hỏi thêm để làm rõ; 3 prompt dưới đây đã trả lời sẵn các câu hỏi thường gặp, nên anh/chị chỉ cần gửi prompt tiếp theo.

### Bước 2: Mô tả mục đích của agent

> **PROMPT:**
>
> Tôi muốn xây dựng một trợ lý nội bộ tên "Exclusive Assistant" cho các RM phục vụ khách hàng Exclusive. Agent giúp RM tra cứu nhanh: hạng thành viên và tiêu chí xét hạng, sản phẩm tiền gửi, tín dụng, bancassurance và wealth management, biểu phí dịch vụ, hồ sơ KYC, thẩm quyền phê duyệt hạn mức và các đặc quyền phi tài chính.

### Bước 3: Quy định giọng điệu và cách trình bày

> **PROMPT:**
>
> Giọng điệu chuyên nghiệp, rõ ràng, đi thẳng vào vấn đề, phù hợp với RM cần câu trả lời nhanh khi đang tư vấn khách hàng. Trả lời ngắn gọn, trình bày điều kiện và biểu phí dưới dạng bảng khi có thể. Cuối mỗi câu trả lời ghi rõ mục tương ứng trong Sổ tay, ví dụ "(Nguồn: Sổ tay, Mục 7)".

### Bước 4: Định nghĩa giới hạn của agent

> **PROMPT:**
>
> Agent chỉ trả lời dựa trên Sổ tay Sản phẩm và Chính sách Exclusive. Nếu Sổ tay không có thông tin, nói rõ là chưa có thông tin và đề nghị RM liên hệ đơn vị đầu mối theo Mục 10 của Sổ tay. Không trả lời câu hỏi ngoài phạm vi sản phẩm và chính sách Exclusive. Không đưa ra khuyến nghị đầu tư cho một khách hàng cụ thể, không cam kết lãi suất hay hạn mức thay cho cấp phê duyệt. Khi câu hỏi cần phê duyệt ngoại lệ, chỉ ra đúng cấp phê duyệt. Nếu người dùng nhập số CIF, số CCCD, số tài khoản hoặc thông tin định danh khách hàng, nhắc họ không chia sẻ dữ liệu này trong cuộc trò chuyện.

> [!NOTE]
> Sau 3 prompt, Agent Builder đã tự điền **tên**, **mô tả**, **instructions** và **starter prompts**. Nội dung tự sinh có thể hơi khác nhau giữa các học viên, điều này là bình thường. Phần C sẽ kiểm tra và chỉnh lại.

---

## Phần C: Kiểm tra và hoàn thiện trong Configure

### Bước 5: Kiểm tra Name, Description và Instructions

1. Chọn **Configure**
2. Kiểm tra từng trường:

| Trường | Cần thấy | Nếu chưa đúng |
|--------|----------|---------------|
| **Name** | Exclusive Assistant | Sửa trực tiếp trong ô Name |
| **Description** | Một câu mô tả agent hỗ trợ RM tra cứu sản phẩm và chính sách Exclusive | Sửa trực tiếp |
| **Instructions** | Có đủ: phạm vi, giọng điệu, dẫn mục Sổ tay, không cam kết thay cấp phê duyệt, nhắc không nhập dữ liệu khách hàng | Bổ sung câu còn thiếu vào cuối ô Instructions |

> [!TIP]
> Từ đây trở đi, nên chỉnh trực tiếp trong **Configure** thay vì quay lại gõ prompt mô tả. Prompt mô tả mới có thể khiến Agent Builder viết lại toàn bộ Instructions và làm mất phần anh/chị đã sửa tay.

### Bước 6: Thêm Sổ tay làm knowledge source

1. Kéo xuống phần **Knowledge**
2. Thêm file [Sổ tay Sản phẩm và Chính sách Exclusive.docx](#file-handbook): chọn file đã lưu trên **OneDrive**, hoặc tải file lên trực tiếp
3. Bật toggle **Only use specified sources** để agent chỉ dùng Sổ tay, không dùng kiến thức chung của mô hình hay nội dung web

> [!NOTE]
> Với nghiệp vụ ngân hàng, nên luôn bật **Only use specified sources**: câu trả lời kiểm chứng được và agent không tự "bịa" biểu phí hay điều kiện sản phẩm. Đổi lại, agent sẽ không trả lời được câu hỏi nằm ngoài Sổ tay, và đó chính là hành vi mong muốn.

### Bước 7: Chỉnh starter prompts

Kéo xuống phần **Starter prompts**. Giữ hoặc thay để có các câu hỏi RM hay hỏi nhất, ví dụ:

| Title | Message |
|-------|---------|
| Xét hạng thành viên | Khách hàng có tổng tài sản bao nhiêu thì đạt từng hạng Exclusive? |
| Biểu phí | Biểu phí chuyển tiền quốc tế theo từng hạng là bao nhiêu? |
| Thẩm quyền phê duyệt | Hạn mức thấu chi không tài sản bảo đảm do cấp nào phê duyệt? |
| Quy định bancassurance | RM cần lưu ý gì khi tư vấn bảo hiểm liên kết đầu tư? |

---

## Phần D: Test agent trước khi tạo

### Bước 8: Thử agent trong khung chat thử nghiệm

Nhập lần lượt các câu hỏi dưới đây vào khung chat thử nghiệm bên phải, nhấn **Send**, và so sánh với cột **Câu trả lời đúng**.

> **PROMPT:**
>
> Khách hàng có tổng tài sản bình quân 3 tháng tại ngân hàng là 3,5 tỷ đồng thì đạt hạng thành viên nào và được những đặc quyền gì?

> **PROMPT:**
>
> Phí chuyển tiền quốc tế cho khách hàng hạng Exclusive Platinum là bao nhiêu và có được miễn phí không?

> **PROMPT:**
>
> Tôi cần đề xuất hạn mức thấu chi 1,5 tỷ đồng không tài sản bảo đảm cho khách hàng hạng Diamond. Cần hồ sơ gì và ai có thẩm quyền phê duyệt?

> **PROMPT:**
>
> Khi tư vấn bảo hiểm liên kết đầu tư cho khách hàng đang có khoản vay, RM cần lưu ý những quy định gì?

> **PROMPT:**
>
> Giá vàng tuần tới có tăng không? Tôi có nên khuyên khách hàng mua vàng không?

| Câu hỏi | Câu trả lời đúng (theo Sổ tay) |
|---------|--------------------------------|
| 3,5 tỷ đồng | Hạng **Exclusive Gold** (2 tỷ đến dưới 5 tỷ). Kèm đặc quyền Gold ở Mục 3, 7, 9, ví dụ phòng chờ sân bay 4 lượt/năm. Nguồn: Mục 2 |
| Chuyển tiền quốc tế, Platinum | **Miễn 5 giao dịch/tháng**, sau đó 0,03% (tối thiểu 5 USD, tối đa 100 USD). Nguồn: Mục 7 |
| Thấu chi 1,5 tỷ, Diamond | Nằm trong hạn mức tối đa Diamond (2 tỷ). Phê duyệt: **Hội đồng Tín dụng Khối Khách hàng Ưu tiên** sau thẩm định độc lập của Khối Tín dụng. Hồ sơ theo Mục 4.3, bổ sung báo cáo tài sản và tờ trình thẩm định vì trên 1 tỷ. Nguồn: Mục 4 |
| Bảo hiểm khi có khoản vay | Không giới thiệu bảo hiểm liên kết đầu tư trong **60 ngày trước và sau ngày giải ngân**; không gắn bảo hiểm với điều kiện vay; buổi tư vấn phải ghi âm/ghi hình. Nguồn: Mục 5 |
| Giá vàng | Agent **từ chối** vì ngoài phạm vi Sổ tay và không đưa khuyến nghị đầu tư |

Nếu câu trả lời chưa đạt (không dẫn mục, sai số liệu, vẫn trả lời câu hỏi giá vàng), quay lại **Configure**: kiểm tra toggle **Only use specified sources** đã bật chưa, và bổ sung vào ô **Instructions** quy tắc còn thiếu. Sau đó test lại.

---

## Phần E: Tạo và chia sẻ agent

### Bước 9: Tạo agent và lấy link chia sẻ

1. Khi đã hài lòng với kết quả test, chọn **Create**
2. Khi tạo xong, màn hình hiện liên kết tới agent. Nhấn **Copy** để sao chép liên kết
3. Chọn **Change sharing settings** và chọn phạm vi chia sẻ. Vì agent dùng file trên OneDrive/SharePoint làm knowledge source, nên chọn **Specific users in your organization** và nhập tên đồng nghiệp hoặc nhóm cần dùng
4. Nhấn **Save**
5. Dán liên kết vào email hoặc Teams chat để gửi cho đồng nghiệp
6. Mở agent từ mục **Agents** ở thanh điều hướng bên trái và hỏi lại một câu trong Bước 8

> [!NOTE]
> - Người nhận chỉ dùng được agent, **không sửa được**; chỉ chủ sở hữu agent mới chỉnh sửa được.
> - Agent tôn trọng phân quyền: người không có **quyền đọc** file Sổ tay thì agent không trả lời từ file đó cho người ấy. Trong môi trường thật, nên đặt Sổ tay trong một **thư mục hoặc site SharePoint** do Phòng Sản phẩm quản lý và cấp quyền đọc cho đúng nhóm RM; khi tài liệu được cập nhật, agent tự dùng phiên bản mới.

> [!TIP]
> Để chia sẻ lại sau này: chọn **Exclusive Assistant** ở thanh điều hướng bên trái → **... (More)** → **Share**. Menu **...** này cũng là nơi mở lại agent để chỉnh sửa.

---

## Lưu ý tuân thủ

> [!NOTE]
> - Agent tự tạo chỉ được chia sẻ trong phạm vi đơn vị; knowledge source phải là thư mục SharePoint có phân quyền.
> - Agent phục vụ khách hàng bên ngoài phải được Khối Công nghệ và Pháp chế phê duyệt.
> - Bật **Only use specified sources** với mọi agent trả lời về sản phẩm và biểu phí.

---

## Tự thực hành: Tạo agent cho công việc của anh/chị

Lặp lại quy trình trên với một chủ đề của riêng anh/chị:

1. **Chủ đề** - Agent hỗ trợ việc gì? (onboarding RM mới, FAQ quy trình KYC, tra cứu chỉ tiêu và cơ chế thưởng, hỏi đáp chính sách tín dụng...)
2. **Người dùng và giọng điệu** - Dành cho ai? Trang trọng hay thân thiện?
3. **Knowledge sources** - Thư mục hoặc site SharePoint nào làm nguồn? Ai đang có quyền đọc?
4. **Giới hạn** - Agent không được trả lời hoặc cam kết điều gì?
5. **Starter prompts** - 3-4 câu hỏi người dùng hay hỏi nhất
6. **Bộ câu test** - 3 câu có đáp án rõ trong tài liệu và 1 câu ngoài phạm vi để kiểm tra agent có từ chối không

---

## Tổng kết

| Anh/chị đã làm được | Ở bước |
|---------------------|--------|
| Mô tả agent bằng ngôn ngữ tự nhiên, không cần code | Mô tả bằng prompt (Bước 2-4) |
| Kiểm tra và chỉnh Name, Description, Instructions | Configure (Bước 5) |
| Gắn Sổ tay làm knowledge source, giới hạn agent chỉ dùng nguồn này | Configure (Bước 6) |
| Thiết kế starter prompts | Configure (Bước 7) |
| Test bằng bộ câu hỏi có đáp án, kể cả câu ngoài phạm vi | Khung chat thử nghiệm (Bước 8) |
| Tạo agent và chia sẻ link cho đồng nghiệp | Create (Bước 9) |
