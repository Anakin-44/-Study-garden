// 1. APARNA'S MCA SUBJECTS
const subjects = [
    { name: "Web Development", icon: "🌐", video: "https://youtube.com/playlist?list=PLfqMhTWNBTe0PY9xunOzsP5kmYIz2Hu7i&si=GRRzRVz612f_oFsX" }, 
    { name: "OOPs (C++)", icon: "💻", video: "" },
    { name: "Operating Systems", icon: "⚙️", video: "#" },
    { name: "Project Lab Assets", icon: "🚀", video: "#" },
    { name: "DBMS Hub", icon: "🗄️", video: "#" },
    { name: "Computer Networks", icon: "📡", video: "#" }
];

// 2. MCA CHAPTER DATA
const chapters = {
    "Web Development": [
        { name: "HTML5 & CSS3 Master Guide", link: "#" },
        { name: "Modern JS (ES6+) Notes", link: "#" },
        { name: "Bootstrap 5 Utilities PDF", link: "https://getbootstrap.com/docs/5.3/" }
    ],
    "OOPs (C++)": [
        { name: "Inheritance & Polymorphism", link: "#" },
        { name: "C++ Pointer Logic", link: "#" }
    ],
    "Project Lab Assets": [
        { name: "Responsive Page Wireframe", link: "#" },
        { name: "Dashboard UI Kit (Figma)", link: "#" }
    ],
    "Operating Systems": [
        { name: "CPU Scheduling Algorithms", link: "#" },
        { name: "Deadlock Prevention Notes", link: "#" }
    ]
};

// 3. GENERATE SHELVES
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('shelf-container');
    subjects.forEach(sub => {
        const shelf = document.createElement('div');
        shelf.className = "shelf";
        shelf.innerHTML = `
            <h3 class="shelf-title">${sub.icon} ${sub.name}</h3>
            <div class="resource-grid">
                <a href="${sub.video}" target="_blank" class="resource-card">
                    <div class="res-icon">🎥</div>
                    <span>Lectures</span>
                </a>
                <div class="resource-card" onclick="openPDFs('${sub.name}')" style="cursor:pointer">
                    <div class="res-icon">📑</div>
                    <span>Notes & Docs</span>
                </div>
            </div>
        `;
        container.appendChild(shelf);
    });
});

// 4. POPUP LOGIC
function openPDFs(subject) {
    const modal = document.getElementById('pdf-modal');
    const list = document.getElementById('chapter-pdf-list');
    const title = document.getElementById('modal-title');

    title.innerText = `${subject} Resources`;
    list.innerHTML = "";

    const pdfList = chapters[subject] || [];
    
    if (pdfList.length === 0) {
        list.innerHTML = "<p style='text-align:center; padding:20px;'>Content coming soon... ⏳</p>";
    } else {
        pdfList.forEach(ch => {
            list.innerHTML += `
                <a href="${ch.link}" target="_blank" class="pdf-row">
                    <span>📄 ${ch.name}</span>
                    <span style="color:var(--sage)">Open ➔</span>
                </a>
            `;
        });
    }

    modal.style.display = "flex";
}

function closePDFs() {
    document.getElementById('pdf-modal').style.display = "none";
}