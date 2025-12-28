let chatHistory = JSON.parse(localStorage.getItem('munni_memory')) || [];

// 1. Load history and handle Settings Modal
document.addEventListener('DOMContentLoaded', () => {
    const box = document.getElementById('chat-box');
    if (chatHistory.length > 0) {
        // Render history starting from actual conversation
        chatHistory.slice(2).forEach(msg => {
            const role = msg.role === 'user' ? 'user' : 'bot';
            box.innerHTML += `<div class="msg ${role}">${msg.parts[0].text}</div>`;
        });
        box.scrollTop = box.scrollHeight;
    }
});

function openSettings() {
    document.getElementById('api-modal').style.display = "flex";
}

function clearChat() {
    if(confirm("Wipe Munni's memory for a new study session?")) {
        chatHistory = [];
        localStorage.removeItem('munni_memory');
        document.getElementById('chat-box').innerHTML = `
            <div class="msg bot">Memory wiped! 🌸</div>
        `;
        document.getElementById('api-modal').style.display = "none";
    }
}

function saveKey() {
    const key = document.getElementById('api-key-val').value.trim();
    if(key) {
        localStorage.setItem('gemini_key', key);
        document.getElementById('api-modal').style.display = "none";
        alert("Munni is now initialized! 🤖");
    }
}

// 2. Main Chat Logic
async function sendMessage() {
    const input = document.getElementById('ai-input');
    const box = document.getElementById('chat-box');
    const text = input.value.trim();
    const apiKey = localStorage.getItem('gemini_key');

    if (!text) return;
    if (!apiKey) { 
        document.getElementById('api-modal').style.display = "flex"; 
        return; 
    }

    // Show User Message
    box.innerHTML += `<div class="msg user">${text}</div>`;
    input.value = "";
    
    // Create Loading indicator
    const loadingId = "loading-" + Date.now();
    box.innerHTML += `<div class="msg bot" id="${loadingId}">Munni is thinking... ✨</div>`;
    box.scrollTo({ top: box.scrollHeight, behavior: 'smooth' });

    // Setup Context if new
   // Inside Aparna's version of sendMessage()
if (chatHistory.length === 0) {
    chatHistory.push({
        role: "user",
        parts: [{ text: `
            You are Munni, Aparna's personal MCA Mentor. 
            Aparna is a Master of Computer Applications student. 
            Your goal is to help her with:
            1. Coding (HTML,CSS, javascript,Java, Python, C++, Web Dev).
            2. Data Structures & Algorithms (explain with simple analogies).
            3. Database Management (SQL) and Software Engineering.
            
            Style: 
            - Use technical but clear language.
            - When she asks for code, provide clean, commented snippets.
            - Always encourage her with "Namaste Aparna!" or "Code on, Aparna! 💻"
            - Keep explanations concise but include a 'Pro-Tip' for exams.
        `}]
    });
    chatHistory.push({
        role: "model",
        parts: [{ text: "Namaste Aparna! I am Munni, your MCA Tech-Guide. Ready to debug your doubts or master a new algorithm? Let's start! 🚀" }]
    });
}

    chatHistory.push({ role: "user", parts: [{ text: text }] });

    try {
        // STABLE 2025 ENDPOINT: Using gemini-2.5-flash (The auto-updated stable alias)
        const response = await fetch(`https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ contents: chatHistory })
        });

        const data = await response.json();
        const loadingEl = document.getElementById(loadingId);

        if (data.error) {
            console.error("API Error:", data.error);
            loadingEl.innerText = `Error: ${data.error.message}. Please check if your API key is correct.`;
            return;
        }

        const aiResponse = data.candidates[0].content.parts[0].text;

        // Update UI with AI Response
        loadingEl.innerText = aiResponse;
        chatHistory.push({ role: "model", parts: [{ text: aiResponse }] });
        
        // Save last 15 messages
        localStorage.setItem('munni_memory', JSON.stringify(chatHistory.slice(-15)));
        box.scrollTo({ top: box.scrollHeight, behavior: 'smooth' });

    } catch (error) {
        console.error("Fetch Error:", error);
        document.getElementById(loadingId).innerText = "Connection lost. Please try again! 😓";
    }
}

// Enter key support
document.getElementById('ai-input').addEventListener("keypress", (e) => {
    if(e.key === "Enter") sendMessage();
}); 