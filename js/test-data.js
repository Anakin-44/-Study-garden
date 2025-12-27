const quizData = {
    "Responsive Web Design": {
        "Module I: HTML Basics": [
            { "q": "Which tag is used to define the root of an HTML document?", "options": ["head", "body", "html", "!DOCTYPE"], "correct": 2 },
            { "q": "What is the correct tag for a line break?", "options": ["lb", "break", "br", "hr"], "correct": 2 },
            { "q": "Which attribute is used to provide the destination URL for a hyperlink?", "options": ["src", "link", "href", "target"], "correct": 2 },
            { "q": "Which tag is used to create an unordered list?", "options": ["ol", "ul", "li", "list"], "correct": 1 },
            { "q": "Which HTML element is used for the largest heading?", "options": ["head", "h6", "heading", "h1"], "correct": 3 }
        ],
        "Module II: HTML5 Features": [
            { "q": "Which of these is a semantic HTML5 tag?", "options": ["div", "span", "article", "b"], "correct": 2 },
            { "q": "Which HTML5 API allows storing data in the browser with no expiration date?", "options": ["Session Storage", "Local Storage", "Cookies", "Cache Storage"], "correct": 1 },
            { "q": "Which HTML5 element is used to draw graphics via JavaScript?", "options": ["canvas", "paint", "svg", "draw"], "correct": 0 },
            { "q": "In HTML5, which attribute is used to specify that an input field must be filled out?", "options": ["validate", "placeholder", "required", "check"], "correct": 2 },
            { "q": "Which new HTML5 tag is used to wrap a self-contained content like a photo with a caption?", "options": ["figure", "section", "aside", "header"], "correct": 0 }
        ],
        "Module III: Mastering CSS3": [
            { "q": "In the CSS Box Model, which layer is between the padding and the margin?", "options": ["Content", "Outline", "Border", "Background"], "correct": 2 },
            { "q": "Which property is used to create a 'hover' transition effect?", "options": ["animation", "transform", "transition", "display"], "correct": 2 },
            { "q": "Which CSS property controls the text size?", "options": ["font-style", "text-size", "font-size", "text-style"], "correct": 2 },
            { "q": "How do you select an element with id 'demo' in CSS?", "options": [".demo", "demo", "#demo", "*demo"], "correct": 2 },
            { "q": "Which property is used to change the background color?", "options": ["color", "background-color", "bgcolor", "fill-color"], "correct": 1 }
        ],
        "Module IV: Responsive Design": [
            { "q": "Which meta tag is crucial for making a website mobile-responsive?", "options": ["charset", "description", "viewport", "author"], "correct": 2 },
            { "q": "In Flexbox, which property defines the main axis alignment?", "options": ["align-items", "justify-content", "flex-direction", "flex-wrap"], "correct": 1 },
            { "q": "Which property is required on a parent element to turn it into a Flex Container?", "options": ["display: block;", "display: flex;", "flex-direction: row;", "align-items: center;"], "correct": 1 },
            { "q": "In CSS Grid, what does the 'fr' unit stand for?", "options": ["Fixed Radius", "Font Relative", "Fractional unit of available space", "Frame Rate"], "correct": 2 },
            { "q": "Which Flexbox property allows items to move to the next line if there isn't enough space?", "options": ["flex-flow", "flex-wrap", "justify-content", "align-content"], "correct": 1 }
        ],
        "Module V: JavaScript": [
            { "q": "Which keyword is used to declare a variable that cannot be reassigned?", "options": ["var", "let", "const", "static"], "correct": 2 },
            { "q": "What does DOM stand for?", "options": ["Data Object Model", "Document Object Model", "Digital Object Management", "Document Order Model"], "correct": 1 },
            { "q": "Which built-in method adds one or more elements to the end of an array?", "options": ["pop()", "shift()", "push()", "unshift()"], "correct": 2 },
            { "q": "How do you write 'Hello World' in an alert box?", "options": ["msg('Hello World')", "alertBox('Hello World')", "msgBox('Hello World')", "alert('Hello World')"], "correct": 3 },
            { "q": "Which operator is used to assign a value to a variable?", "options": ["*", "-", "=", "x"], "correct": 2 }
        ],
        "Module VI: Bootstrap": [
            { "q": "How many columns are in the default Bootstrap grid system?", "options": ["6", "10", "12", "16"], "correct": 2 },
            { "q": "Which class is used to make an image responsive in Bootstrap 5?", "options": [".img-responsive", ".img-fluid", ".img-fit", ".container-img"], "correct": 1 },
            { "q": "Which Bootstrap class provides a full-width container?", "options": [".container", ".container-fixed", ".container-fluid", ".container-all"], "correct": 2 },
            { "q": "In Bootstrap, which class is used to create a button with a blue background?", "options": [".btn-info", ".btn-primary", ".btn-link", ".btn-blue"], "correct": 1 },
            { "q": "Which utility class is used to center text in Bootstrap?", "options": [".text-center", ".align-center", ".justify-center", ".center-text"], "correct": 0 }
        ]
    },
    "Object Oriented Programming": {
        "Unit I: Intro to OOP": [
            { "q": "Which concept allows hiding the internal details of an object?", "options": ["Inheritance", "Polymorphism", "Encapsulation", "Dynamic Binding"], "correct": 2 },
            { "q": "What is the process by which one object acquires the properties of another?", "options": ["Abstraction", "Inheritance", "Encapsulation", "Message Passing"], "correct": 1 },
            { "q": "Which of the following is an 'abstract' data type in C++?", "options": ["int", "double", "class", "char"], "correct": 2 },
            { "q": "Wrapping of data and functions into a single unit is called:", "options": ["Abstraction", "Encapsulation", "Polymorphism", "Inheritance"], "correct": 1 },
            { "q": "Which feature of OOP facilitates code reusability?", "options": ["Inheritance", "Abstraction", "Polymorphism", "Encapsulation"], "correct": 0 }
        ],
        "Unit II: Functions & Overloading": [
            { "q": "Which function type reduces the overhead of a function call by replacing the call with code?", "options": ["Virtual Function", "Friend Function", "Inline Function", "Static Function"], "correct": 2 },
            { "q": "When two or more functions have the same name but different parameters, it is called:", "options": ["Function Overriding", "Function Overloading", "Encapsulation", "Recursion"], "correct": 1 },
            { "q": "A function that can access private members of a class even though it is not a member is a:", "options": ["Static Function", "Virtual Function", "Inline Function", "Friend Function"], "correct": 3 }
        ],
        "Unit III: Classes & Operators": [
            { "q": "A constructor has the same name as the class and...", "options": ["Returns int", "Returns void", "Has no return type", "Returns an object"], "correct": 2 },
            { "q": "Which operator cannot be overloaded in C++?", "options": ["+", "-", "::", "++"], "correct": 2 },
            { "q": "The destructor's name is preceded by which symbol?", "options": ["!", "~", "#", "$"], "correct": 1 },
            { "q": "Static member functions can only access:", "options": ["Private data", "Public data", "Static data", "Dynamic data"], "correct": 2 }
        ],
        "Unit IV: Inheritance & Files": [
            { "q": "Which type of inheritance involves one class being derived from another derived class?", "options": ["Multiple", "Multilevel", "Hierarchical", "Single"], "correct": 1 },
            { "q": "Which stream class is used for writing data to a file?", "options": ["ifstream", "ofstream", "fstream", "iostream"], "correct": 1 }
        ]
    },
    "Advanced Operating Systems": {
        "Unit I: OS Introduction": [
            { "q": "Which system structure organizes the OS into layers, each built on top of lower layers?", "options": ["Monolithic", "Microkernel", "Layered Approach", "Hybrid"], "correct": 2 },
            { "q": "What is the primary purpose of an Operating System?", "options": ["To build hardware", "To act as an interface between user and hardware", "To create documents", "To browse the internet"], "correct": 1 },
            { "q": "Which system type allows multiple processors to share a single clock and memory?", "options": ["Distributed", "Clustered", "Parallel/Multi-processor", "Single Processor"], "correct": 2 }
        ],
        "Unit II: Process Management": [
            { "q": "What is a 'Context Switch'?", "options": ["Changing the OS theme", "Saving state of an old process and loading a new one", "Moving a process to the bin", "A hardware failure"], "correct": 1 },
            { "q": "Which scheduling algorithm gives each process a small unit of CPU time (time quantum)?", "options": ["FCFS", "SJF", "Round Robin", "Priority Scheduling"], "correct": 2 },
            { "q": "The state of a process after it has finished execution is:", "options": ["Ready", "Running", "Waiting", "Terminated"], "correct": 3 }
        ],
        "Unit III: Synchronization & Deadlocks": [
            { "q": "Which of these is NOT a necessary condition for a deadlock?", "options": ["Mutual Exclusion", "No Preemption", "Circular Wait", "Paging"], "correct": 3 },
            { "q": "A semaphore is a/an _______ variable used for process synchronization.", "options": ["String", "Integer", "Boolean", "Float"], "correct": 1 },
            { "q": "The Banker's algorithm is used for Deadlock:", "options": ["Prevention", "Avoidance", "Detection", "Recovery"], "correct": 1 }
        ],
        "Unit IV: Storage Management": [
            { "q": "What is the main cause of 'Thrashing'?", "options": ["Low CPU speed", "Frequent page faults", "Too much RAM", "Paging algorithms being too fast"], "correct": 1 },
            { "q": "Which memory management scheme allows the physical address space of a process to be non-contiguous?", "options": ["Contiguous Allocation", "Paging", "Swapping", "Switched Memory"], "correct": 1 },
            { "q": "In Virtual Memory, what does 'Demand Paging' mean?", "options": ["Pages are loaded only when requested", "All pages are loaded at startup", "Memory is swapped to the cloud", "Hard disk is partitioned"], "correct": 0 }
        ],
        "Unit V: File & Disk Management": [
            { "q": "Which disk scheduling algorithm services requests in the order they arrive?", "options": ["SCAN", "SSTF", "FCFS", "C-LOOK"], "correct": 2 },
            { "q": "The process of dividing a disk into sectors that the disk controller can read/write is:", "options": ["Partitioning", "Logical Formatting", "Physical Formatting", "Booting"], "correct": 2 }
        ]
    }
};