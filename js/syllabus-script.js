const syllabusData = {
    web: [
        "HTML: Tags, Structure & Multimedia", "HTML5: Semantic Tags & Storage", 
        "CSS3: Box Model & Selectors", "CSS3: Flexbox & Grid Layouts", 
        "CSS3: Transitions & Animations", "Responsive Design & Media Queries",
        "JavaScript: Basics, Loops & Functions", "JavaScript: Arrays & Objects",
        "JavaScript: DOM & Event Handling", "JavaScript: ES6 & Async/Await",
        "Bootstrap: Grid & Components", "Intro to Node.js & Express"
    ],
    cpp: [
        "Basic concepts of OOPs", "Encapsulation & Abstraction", "Inheritance & Polymorphism",
        "Functions: Inline, Friend & Overloading", "Constructors & Destructors", 
        "Operator Overloading", "File Streams & Handling", "Object & Dynamic Modeling"
    ],
    os: [
        "OS Structure & System Calls", "Process Management & Threads", 
        "CPU Scheduling Algorithms", "Process Sync & Deadlocks", 
        "Memory: Paging & Segmentation", "Virtual Memory & Thrashing", 
        "Disk Management & Security"
    ],
    projects: [
        "Project 1: Responsive Landing Page", "Project 2: Blog Layout", 
        "Project 3: E-commerce Product Page", "Project 4: Admin Dashboard"
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    // Inject all subjects
    Object.keys(syllabusData).forEach(subjectKey => {
        const listContainer = document.getElementById(`${subjectKey}-list`);
        if (listContainer) {
            listContainer.innerHTML = syllabusData[subjectKey].map((topic, index) => {
                const id = `aparna_${subjectKey}_${index}`;
                const isChecked = localStorage.getItem(id) === 'true' ? 'checked' : '';
                return `
                    <div class="topic-row">
                        <span class="${isChecked ? 'completed-text' : ''}">${topic}</span>
                        <input type="checkbox" id="${id}" class="check-input sub-${subjectKey}" ${isChecked} onchange="saveAndCalc(this)">
                    </div>
                `;
            }).join('');
        }
    });
    calculateProgress();
});

function saveAndCalc(el) {
    localStorage.setItem(el.id, el.checked);
    // Add/Remove strikethrough class
    const span = el.previousElementSibling;
    if(el.checked) span.classList.add('completed-text');
    else span.classList.remove('completed-text');
    
    calculateProgress();
}

function calculateProgress() {
    const subjects = ['web', 'cpp', 'os', 'projects'];
    let totalChecked = 0;
    let totalTopics = 0;

    subjects.forEach(sub => {
        const checks = document.querySelectorAll(`.sub-${sub}`);
        const checked = document.querySelectorAll(`.sub-${sub}:checked`);
        
        totalChecked += checked.length;
        totalTopics += checks.length;

        let subPercent = Math.round((checked.length / checks.length) * 100) || 0;
        
        document.getElementById(`${sub}-percent`).innerText = subPercent + "%";
        document.getElementById(`${sub}-fill`).style.width = subPercent + "%";
    });

    const grandPercent = Math.round((totalChecked / totalTopics) * 100) || 0;
    
    // SAVE to share with Dashboard
    localStorage.setItem('total_ssc_progress', grandPercent);
    
    document.getElementById('overall-fill').style.width = grandPercent + "%";
    document.getElementById('stat-text').innerText = `${totalChecked} / ${totalTopics} Topics Completed (${grandPercent}%)`;
}