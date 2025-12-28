let habitData = JSON.parse(localStorage.getItem('aparna_habit_tracking')) || {};
// Structure: { "DSA": ["2025-12-01", "2025-12-05"], "Yoga": ["2025-12-02"] }

function createNewHabit() {
    const name = prompt("Enter habit name (e.g., Coding, Math, Reading):");
    if (name && !habitData[name]) {
        habitData[name] = [];
        saveData();
        updateSelector(name);
    }
}

function updateSelector(selectedName) {
    const selector = document.getElementById('habit-selector');
    selector.innerHTML = Object.keys(habitData).map(name => 
        `<option value="${name}" ${name === selectedName ? 'selected' : ''}>${name}</option>`
    ).join('');
    loadCalendar();
}

function loadCalendar() {
    const habitName = document.getElementById('habit-selector').value;
    if (!habitName) return;

    const grid = document.getElementById('calendar-grid');
    grid.innerHTML = '';
    
    const now = new Date();
    const daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
    const completedDays = habitData[habitName];

    for (let i = 1; i <= daysInMonth; i++) {
        const dateStr = `${now.getFullYear()}-${(now.getMonth() + 1).toString().padStart(2, '0')}-${i.toString().padStart(2, '0')}`;
        const isCompleted = completedDays.includes(dateStr);
        
        const cell = document.createElement('div');
        cell.className = `day-cell ${isCompleted ? 'completed' : ''}`;
        cell.innerText = i;
        cell.onclick = () => toggleDay(habitName, dateStr);
        grid.appendChild(cell);
    }
    
    updateStats(completedDays);
}

function toggleDay(habitName, dateStr) {
    const index = habitData[habitName].indexOf(dateStr);
    if (index > -1) {
        habitData[habitName].splice(index, 1);
    } else {
        habitData[habitName].push(dateStr);
    }
    saveData();
    loadCalendar();
}

function saveData() {
    localStorage.setItem('aparna_habit_tracking', JSON.stringify(habitData));
}

function updateStats(completedDays) {
    document.getElementById('month-total').innerText = completedDays.length;
    // Simple streak logic can be expanded here
}

// Initialize
if (Object.keys(habitData).length === 0) {
    habitData["Daily Coding"] = [];
}
updateSelector(Object.keys(habitData)[0]);