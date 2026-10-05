// Thư mục SharePoint chứa toàn bộ file demo của workshop
const DEMO_FOLDER_URL = 'https://onelabvietnam-my.sharepoint.com/:f:/g/personal/tan_minh_swotestinglabs_onmicrosoft_com/IgB0o4AtCLPHRqaBGbZrU3gKATUL0KNX3G2FWH7ICeEuZ4s?e=ue1xwC';

// File demo cho buổi học - mặc định mở thư mục; thay url bằng link riêng của từng file nếu có
const demoFiles = [
    { name: 'MKG - Đề xuất Hợp tác Chiến lược VN.docx', desc: 'Lab 1 - Word (anh Hoàng Vũ)', icon: 'word', url: DEMO_FOLDER_URL },
    { name: 'Chính sách Bảo mật Thông tin.docx + SAMPLE.pdf', desc: 'Lab 1 - Word (anh Minh Quân)', icon: 'word', url: DEMO_FOLDER_URL },
    { name: 'MKG - Financial Analysis Q3 2026.xlsx', desc: 'Lab 2 - Excel (chị Thu Hằng)', icon: 'excel', url: DEMO_FOLDER_URL },
    { name: 'MKG - Chính sách giữ chân nhân sự.docx + logo MKG', desc: 'Lab 3 - PowerPoint (chị Ngọc Lan)', icon: 'word', url: DEMO_FOLDER_URL },
    { name: 'MKG_Data.xlsx', desc: 'Lab 6 - Researcher Agent (anh Quốc Hưng)', icon: 'excel', url: DEMO_FOLDER_URL },
    { name: 'MKG - Nhật kí lỗi sản xuất.xlsx', desc: 'Lab 7 - Analyst Agent (anh Đức Thành)', icon: 'excel', url: DEMO_FOLDER_URL },
];

// Danh sách module và file markdown tương ứng
const modules = {
    'module-1': { title: 'Giới thiệu và chuẩn bị', file: 'labs/module-1/index.md' },
    'lab-1':    { title: 'Lab 1 - Copilot trong Word', file: 'labs/lab-1/index.md' },
    'lab-2':    { title: 'Lab 2 - Copilot trong Excel', file: 'labs/lab-2/index.md' },
    'lab-3':    { title: 'Lab 3 - Copilot trong PowerPoint', file: 'labs/lab-3/index.md' },
    'lab-4':    { title: 'Lab 4 - Copilot trong Outlook', file: 'labs/lab-4/index.md' },
    'lab-5':    { title: 'Lab 5 - Copilot trong Teams', file: 'labs/lab-5/index.md' },
    'lab-6':    { title: 'Lab 6 - Researcher Agent', file: 'labs/lab-6/index.md' },
    'lab-7':    { title: 'Lab 7 - Analyst Agent', file: 'labs/lab-7/index.md' },
    'lab-8':    { title: 'Lab 8 - Agent Builder in Copilot Chat', file: 'labs/lab-8/index.md' },
    'wrap':     { title: 'Tổng kết', file: 'labs/wrap/index.md' }
};

// Tải và hiển thị một module
async function loadModule(key) {
    const mod = modules[key];
    if (!mod) return;
    const content = document.getElementById('module-content');

    try {
        const res = await fetch(mod.file);
        if (!res.ok) throw new Error(`Không tải được ${mod.file}`);
        content.innerHTML = marked.parse(await res.text());
        processCustomBlocks(content);
    } catch (err) {
        content.innerHTML = `<blockquote class="note"><p>Không tải được nội dung <code>${mod.file}</code>.
            Hãy mở trang qua một web server (ví dụ VS Code Live Server) thay vì mở trực tiếp file.</p><p>${escapeHtml(err.message)}</p></blockquote>`;
    }

    updateSidebar(key);
    showView('module');
    window.scrollTo(0, 0);
}

// Chuyển blockquote đặc biệt thành thẻ TIP / NOTE / PROMPT
function processCustomBlocks(content) {
    content.querySelectorAll('blockquote').forEach(bq => {
        const html = bq.innerHTML;
        if (html.includes('[!TIP]')) {
            bq.className = 'tip';
            bq.innerHTML = html.replace(/\[!TIP\]/g, '').trim();
        } else if (html.includes('[!NOTE]')) {
            bq.className = 'note';
            bq.innerHTML = html.replace(/\[!NOTE\]/g, '').trim();
        } else if (html.includes('<strong>PROMPT:</strong>')) {
            const inner = html.replace(/<p><strong>PROMPT:<\/strong><\/p>/g, '').replace(/<strong>PROMPT:<\/strong>/g, '').trim();
            bq.insertAdjacentHTML('afterend', buildPromptCard(inner));
            bq.remove();
        }
    });

    content.querySelectorAll('p').forEach(p => {
        const tag = p.textContent.trim();
        if (tag === '[download-files]') p.outerHTML = buildDownloadBlock();
        else if (tag === '[demo-folder]') p.outerHTML = buildFolderLink();
    });
}

// Thẻ prompt có nút sao chép
function buildPromptCard(innerHtml) {
    const tmp = document.createElement('div');
    tmp.innerHTML = innerHtml;
    // textContent bỏ mất số thứ tự của <ol>, nên thêm lại
    tmp.querySelectorAll('ol').forEach(ol => {
        Array.from(ol.children).forEach((li, i) => li.prepend(`${ol.start + i}. `));
    });
    const plainText = tmp.textContent.trim();

    return `<div class="prompt-card">
        <div class="prompt-card-header">
            <span class="prompt-label">Prompt</span>
            <button class="copy-btn" data-copy="${escapeAttr(plainText)}" aria-label="Sao chép prompt">
                <span class="copy-label">Sao chép</span>
            </button>
        </div>
        <div class="prompt-body">${innerHtml}</div>
    </div>`;
}

// Khối tải file demo
function buildDownloadBlock() {
    const colors = { excel: '#107c10', word: '#2b579a', powerpoint: '#d24726' };
    const letters = { excel: 'X', word: 'W', powerpoint: 'P' };
    const items = demoFiles.map(f => {
        const placeholder = f.url === '#';
        return `<a href="${escapeAttr(f.url)}" class="download-item${placeholder ? ' download-item--placeholder' : ''}"
            ${placeholder ? '' : 'target="_blank" rel="noopener noreferrer"'}>
            <span class="download-icon" style="background:${colors[f.icon]};color:#fff;font-weight:700">${letters[f.icon]}</span>
            <span class="download-info">
                <span class="download-name">${escapeHtml(f.name)}</span>
                <span class="download-desc">${escapeHtml(f.desc)}</span>
            </span>
        </a>`;
    }).join('');

    return `<div class="download-block">
        <div class="download-block-header">
            <span>File demo cho buổi học</span>
            <a class="folder-btn" href="${escapeAttr(DEMO_FOLDER_URL)}" target="_blank" rel="noopener noreferrer">📁 Mở thư mục trên SharePoint</a>
        </div>
        <p class="download-block-hint">Tải về và lưu vào <strong>OneDrive</strong> của anh/chị trước khi bắt đầu Lab. Bấm vào từng file để mở thư mục chứa file đó.</p>
        <div class="download-list">${items}</div>
    </div>`;
}

// Dòng gọi nhanh tới thư mục file demo, dùng trong từng lab
function buildFolderLink() {
    return `<a class="folder-callout" href="${escapeAttr(DEMO_FOLDER_URL)}" target="_blank" rel="noopener noreferrer">
        <span class="folder-callout-icon" aria-hidden="true">📁</span>
        <span><strong>Thư mục file demo</strong><br><span class="folder-callout-desc">Mở thư mục SharePoint để tải file dùng cho bài tập này</span></span>
        <span class="folder-callout-arrow" aria-hidden="true">↗</span>
    </a>`;
}

// Sao chép prompt (dùng event delegation)
document.addEventListener('click', async e => {
    const btn = e.target.closest('.copy-btn');
    if (!btn) return;
    const text = btn.dataset.copy;
    try {
        await navigator.clipboard.writeText(text);
    } catch {
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        ta.remove();
    }
    btn.classList.add('copied');
    btn.querySelector('.copy-label').textContent = 'Đã sao chép!';
    setTimeout(() => {
        btn.classList.remove('copied');
        btn.querySelector('.copy-label').textContent = 'Sao chép';
    }, 2000);
});

function escapeHtml(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function escapeAttr(str) {
    return str.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/\n/g, '&#10;');
}

function updateSidebar(activeKey) {
    document.getElementById('module-nav').innerHTML = Object.entries(modules)
        .map(([key, mod]) => `<a href="#${key}" class="${key === activeKey ? 'active' : ''}">${mod.title}</a>`)
        .join('');
}

function showView(name) {
    document.getElementById('home-view').classList.toggle('active', name === 'home');
    document.getElementById('module-view').classList.toggle('active', name === 'module');
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.toggle('active', name === 'home' && link.dataset.view === 'home');
    });
}

// Điều hướng bằng hash: #lab-1, #lab-2...
function route() {
    const key = location.hash.replace('#', '');
    if (modules[key]) loadModule(key);
    else showView('home');
}

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        history.pushState(null, '', location.pathname);
        showView('home');
        if (link.dataset.view === 'agenda') document.querySelector('.agenda-section').scrollIntoView();
        else window.scrollTo(0, 0);
    });
});

window.addEventListener('hashchange', route);
route();
