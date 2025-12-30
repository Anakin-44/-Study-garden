// --- SELECTORS ---
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');
const fill = document.getElementById('progress-fill');
const percentText = document.getElementById('percent');
const plant = document.getElementById('plant-stage');
const syllabusStat = document.getElementById('syllabus-stat');

// --- AUDIO ASSETS ---
// Make sure you have a file named 'pop.mp3' in your assets folder
const taskSound = new Audio('assets/pop.mp3'); 

// --- PERMANENT TASKS ---
const DEFAULT_TASKS = [
    "Drink 1 Lt water",
    "Workout",
    "Talk to your Kechua"
];

// --- INITIALIZE APP ---
document.addEventListener('DOMContentLoaded', () => {
    checkAndResetDay(); 
    updateClock();      
    loadDailyTasks();   
    updateGarden();     
});

// --- THE ARCHIVE & RESET LOGIC ---
function checkAndResetDay() {
    const today = new Date().toDateString(); 
    const lastOpened = localStorage.getItem('last_opened_date');

    if (lastOpened && lastOpened !== today) {
        archiveToHistory(lastOpened);
    }
    localStorage.setItem('last_opened_date', today);
}

function archiveToHistory(oldDate) {
    const dailyTasks = JSON.parse(localStorage.getItem('sayli_daily')) || [];
    
    if (dailyTasks.length > 0) {
        const total = dailyTasks.length;
        const done = dailyTasks.filter(t => t.completed).length;
        const score = Math.round((done / total) * 100);

        const history = JSON.parse(localStorage.getItem('study_history')) || [];
        
        history.unshift({
            date: oldDate,
            score: score,
            tasks: dailyTasks
        });

        localStorage.setItem('study_history', JSON.stringify(history));
        localStorage.removeItem('sayli_daily');
    }
}

// --- TASK OPERATIONS ---
function loadDailyTasks() {
    const saved = JSON.parse(localStorage.getItem('sayli_daily')) || [];
    taskList.innerHTML = "";

    DEFAULT_TASKS.forEach(taskText => {
        const existingDefault = saved.find(t => t.text === taskText);
        const isDone = existingDefault ? existingDefault.completed : false;
        renderTask(taskText, isDone, true);
    });

    const customTasks = saved.filter(t => !DEFAULT_TASKS.includes(t.text));
    customTasks.forEach(t => renderTask(t.text, t.completed, false));
    
    saveData();
}

function addTask() {
    const val = taskInput.value.trim();
    if(!val) return;
    renderTask(val, false, false);
    saveData();
    taskInput.value = "";
    updateGarden();
}

function renderTask(text, isDone, isDefault) {
    const div = document.createElement('div');
    div.className = 'task-item';
    if(isDefault) div.classList.add('permanent-task');

    div.innerHTML = `
        <input type="checkbox" class="checker" ${isDone ? 'checked' : ''} onchange="toggleTask(this)">
        <span class="${isDone ? 'done-text' : ''}">${text}</span>
        ${isDefault 
            ? `<span style="margin-left:auto; font-size: 12px; opacity: 0.5;">🔒</span>` 
            : `<button onclick="deleteTask(this)" style="margin-left:auto; border:none; background:none; cursor:pointer;">❌</button>`
        }
    `;
    taskList.appendChild(div);
}

// --- UPDATED TOGGLE TASK (Sound + Confetti) ---
function toggleTask(cb) {
    cb.nextElementSibling.classList.toggle('done-text');
    
    if (cb.checked) {
        // 1. Play Sound
        taskSound.currentTime = 0; 
        taskSound.play().catch(e => console.log("Audio play blocked until user interacts"));

        // 2. Small Confetti Burst for task
        confetti({
            particleCount: 30,
            spread: 50,
            origin: { y: 0.8 },
            colors: ['#7fb069', '#f2c6c2', '#ffffff']
        });
    }

    saveData();
    updateGarden();
}

function deleteTask(btn) {
    btn.parentElement.remove();
    saveData();
    updateGarden();
}

function saveData() {
    const tasks = [];
    document.querySelectorAll('.task-item').forEach(item => {
        tasks.push({ 
            text: item.querySelector('span').innerText, 
            completed: item.querySelector('.checker').checked 
        });
    });
    localStorage.setItem('sayli_daily', JSON.stringify(tasks));
}

// --- GARDEN & CLOCK ---
function updateGarden() {
    const all = document.querySelectorAll('.checker');
    const checked = document.querySelectorAll('.checker:checked');
    const dailyPercent = all.length ? Math.round((checked.length / all.length) * 100) : 0;
    
    if(fill) fill.style.width = dailyPercent + "%";
    if(percentText) percentText.innerText = dailyPercent;

    const video = document.getElementById('plant-video');
    const sscProgress = parseInt(localStorage.getItem('total_ssc_progress')) || 0;
    
    updateSidebarBadge(sscProgress); // Sync badge

    if (video) {
        if (video.readyState >= 1) syncVideo(video, sscProgress);
        else video.onloadedmetadata = () => syncVideo(video, sscProgress);
    }
}

function syncVideo(video, progress) {
    const duration = video.duration;
    if (!duration) return;
    const targetTime = (duration * progress) / 100;
    video.currentTime = targetTime;
}

function updateClock() {
    const now = new Date();
    const dEl = document.getElementById('current-date');
    const tEl = document.getElementById('current-time');
    if(dEl) dEl.innerText = now.toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'short' });
    if(tEl) tEl.innerText = now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true });
}

setInterval(updateClock, 1000);
taskInput.addEventListener("keypress", (e) => { if(e.key === "Enter") addTask(); });

const myMessages = [
    "Even lattu wants you to take care of yourself",
    "You're the only 'Task' I’d never want to finish—I just want to keep working on 'us' forever. 💖",
    "My heart doesn't have a 'Guest Mode.' You have full Admin access. 🔑",
    "Take a break, baby. I have a much better reward waiting for you than a progress bar. 😜",
    "I've cached all my favorite memories of us so I can replay them offline. 📜",
    "Study hard, but remember: you're already the topper in the only subject I care about... Me. 😌❤",
    "You’re my favorite notification. Everything else is just noise. 📱✨",
    "I’d trade all my code for just one more minute of your smile. 💎",
    "Warning: Looking at you for too long causes my system to crash. You're too beautiful. ⚠️❤️"
];

// --- UPDATED SURPRISE (Big Confetti) ---
function showSurprise() {
    const modal = document.getElementById('surprise-overlay');
    const textEl = document.getElementById('surprise-text');
    const randomMsg = myMessages[Math.floor(Math.random() * myMessages.length)];
    textEl.innerText = randomMsg;
    modal.style.display = "flex";

    // Big Confetti Blast
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
}

function closeSurprise() {
    document.getElementById('surprise-overlay').style.display = "none";
}

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
}

function updateSidebarBadge(progress) {
    const sideBadge = document.getElementById('side-syllabus-stat');
    if(sideBadge) sideBadge.innerText = progress + "%";
}

let dialogueIndex = 0;
const pikuDialogues = [
    "Hello Aparna! I'm Piku! 🌸",
    "Umm... Om sent me for you so that whenever you get bored you can play with me",
    "i really love to play",
    "umm...ok let me ask a riddle"
];

function startPikuTalk() {
    const isUnlocked = localStorage.getItem('pikuUnlocked');
    const modal = document.getElementById('puzzle-overlay');
    const pikuText = document.getElementById('piku-text');
    const puzzleArea = document.getElementById('puzzle-area');
    const footer = document.getElementById('dialogue-footer');

    modal.style.display = 'flex';

    if (isUnlocked === 'true') {
        // --- RETURNING USER FLOW ---
        // Hide the riddle area entirely
        puzzleArea.style.display = 'none';
        
        // Piku's greeting
        pikuText.innerText = "Welcome back, Aparna! 🐢 Piku was waiting for you. Ready to relax and play some games?";
        
        // Show the "Continue" button
        footer.innerHTML = `<button onclick="window.location.href='surprise.html'" class="piku-btn">Let's Play! 🎮</button>`;
    } else {
        // --- NEW USER FLOW (First time) ---
        // Run your original dialogue/riddle logic
        typeNextDialogue(); 
    }
}

function typeNextDialogue() {
    const textElement = document.getElementById('piku-text');
    const pikuModalImg = document.getElementById('piku-sprite-modal');
    
    if (dialogueIndex < pikuDialogues.length) {
        // Add talking animation
        pikuModalImg.classList.add('piku-talking');
        textElement.innerText = pikuDialogues[dialogueIndex];
        
        dialogueIndex++;

        // Stop talking animation after a short delay
        setTimeout(() => {
            pikuModalImg.classList.remove('piku-talking');
        }, 1200);

        // If it's the last dialogue line
        if (dialogueIndex === pikuDialogues.length) {
            document.getElementById('next-diag-btn').style.display = 'none';
            setTimeout(() => {
                document.getElementById('puzzle-area').style.display = 'block';
            }, 1000);
        }
    }
}

function checkPuzzle() {
    const answer = document.getElementById('puzzle-input').value.toLowerCase().trim();
    
    if (answer === "bottle" || answer === "a bottle") {
        localStorage.setItem('pikuUnlocked', 'true'); // Save the progress!
        
        confetti(); 
        
        document.getElementById('piku-text').innerText = "Yay! You got it! You're so smart. Piku is happy to have you here. ✨";
        document.getElementById('puzzle-area').style.display = 'none';
        
        const footer = document.getElementById('dialogue-footer');
        footer.innerHTML = `<button onclick="window.location.href='surprise.html'" class="piku-btn">Continue to Games →</button>`;
    } else {
        alert("Piku says: That's not it! Try again, Aparna! 🤔");
    }
}

function closePikuTalk() {
    const modal = document.getElementById('puzzle-overlay');
    modal.style.display = 'none';
    
    // Optional: Stop the Piku modal image from wobbling if it was talking
    const pikuModalImg = document.getElementById('piku-sprite-modal');
    pikuModalImg.classList.remove('piku-talking');
}