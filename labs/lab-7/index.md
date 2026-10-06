# Lab 7 - Analyst Agent

**Thời lượng:** 5 phút | **Ứng dụng:** Microsoft 365 Copilot app - Analyst

> [!NOTE]
> **Minh Khang Group (MKG) là doanh nghiệp giả tưởng.** Toàn bộ tên công ty, nhân vật, số liệu và tài liệu trong lab chỉ phục vụ mục đích minh họa, không liên quan đến bất kỳ tổ chức có thật nào.

---

## Mục tiêu

Sau khi hoàn thành lab này, anh/chị sẽ có thể:

- Giao cho Analyst Agent phân tích một bộ dữ liệu dạng bảng
- Đọc kết quả kiểm định thống kê và biểu đồ do Agent tạo
- Xuất kết quả thành slide Executive Dashboard

**Analyst Agent** là một tác nhân AI của Microsoft 365 Copilot, chuyên phân tích dữ liệu dạng bảng: viết và chạy code phân tích, kiểm định thống kê, vẽ biểu đồ và xuất báo cáo hoặc slide tóm tắt.

---

## Tình huống

> **Anh Nguyễn Đức Thành** - *Chief Operating Officer (COO), MKG*
>
> Anh Thành dùng Analyst Agent để phân tích nguyên nhân gốc rễ của 210 sự cố lỗi sản xuất trong quý 3: xếp hạng các nhà máy và dây chuyền theo tổng thời gian dừng máy, đánh giá ảnh hưởng của ca sản xuất đến số lượng sản phẩm lỗi, và quy đổi tổng tổn thất sang giá trị tài chính với chi phí giả định 1,2 triệu đồng mỗi phút dừng máy và 85 nghìn đồng mỗi sản phẩm lỗi. Kết quả được trình bày kèm biểu đồ để phục vụ quyết định cải tiến vận hành.

**Tệp đính kèm:** [MKG - Nhật kí lỗi sản xuất.xlsx](#file-defect-log)

*Xem toàn bộ file demo tại trang [Giới thiệu và chuẩn bị](#module-1) và [cách tải file Word/Excel về máy](#module-1/cach-tai-file-word-excel-ve-may).*

---

### Bài tập 1: Phân tích nguyên nhân gốc rễ

**Cách thực hiện:**

1. Truy cập [https://m365.cloud.microsoft/](https://m365.cloud.microsoft/) và đăng nhập bằng **tài khoản công ty** (tài khoản Microsoft 365 do công ty cấp) - **không dùng** tài khoản Microsoft cá nhân như Outlook.com, Hotmail
2. Chọn **Analyst** trong mục Agents
3. Đính kèm file [MKG - Nhật kí lỗi sản xuất.xlsx](#file-defect-log) (xem [cách tải file Word/Excel về máy](#module-1/cach-tai-file-word-excel-ve-may))
4. Nhập prompt:

> **PROMPT:**
>
> Đây là nhật ký 210 sự cố lỗi sản xuất trong quý 3 MKG - Nhật kí lỗi sản xuất.xlsx. Hãy phân tích nguyên nhân gốc rễ: xếp hạng nhà máy và dây chuyền theo tổng thời gian dừng máy, kiểm tra xem ca sản xuất có ảnh hưởng tới số sản phẩm lỗi hay không, và quy đổi tổng tổn thất ra tiền với giá định mỗi phút dừng máy tốn 1,2 triệu đồng và mỗi sản phẩm lỗi tốn 85 nghìn đồng. Trình bày kết quả kèm biểu đồ.

**Kết quả mong đợi:** Analyst viết và chạy code phân tích, chạy kiểm định thống kê (ANOVA, Kruskal-Wallis) để xem ca sản xuất có ảnh hưởng đến số sản phẩm lỗi không, tạo biểu đồ xếp hạng nhà máy/dây chuyền và tính tổng tổn thất bằng tiền.

> [!TIP]
> Nhấn **Show work** để xem code Analyst đã chạy. Đây là cách tốt để kiểm chứng kết quả phân tích.

### Bài tập 2: Xuất Executive Dashboard

> **PROMPT:**
>
> Xuất báo cáo Executive Dashboard 1-2 slide.

**Kết quả mong đợi:** File PowerPoint 1-2 slide tóm tắt các chỉ số chính, biểu đồ và khuyến nghị cho Ban Điều hành.

> [!NOTE]
> Kết quả kiểm định thống kê phụ thuộc vào chất lượng dữ liệu. Hãy kiểm tra dữ liệu có thiếu hoặc trùng lặp trước khi dùng kết luận cho quyết định vận hành.

---

## Tổng kết

| Anh/chị đã học được | Ứng dụng |
|---------------------|----------|
| Phân tích nguyên nhân gốc rễ bằng code | Analyst |
| Kiểm định thống kê ảnh hưởng của ca sản xuất | Analyst |
| Quy đổi tổn thất và xuất Executive Dashboard | Analyst + PowerPoint |
