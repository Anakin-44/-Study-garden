const quizData = {
    "Responsive Web Design": {
        "Module I: HTML Basics": [
            {
                "q": "Which tag is used to define the root of an HTML document?",
                "options": ["head", "body", "html", "!DOCTYPE"],
                "correct": 2
            },
            {
                "q": "What is the correct tag for a line break?",
                "options": ["lb", "break", "br", "hr"],
                "correct": 2
            },
            {
                "q": "Which attribute is used to provide the destination URL for a hyperlink?",
                "options": ["src", "link", "href", "target"],
                "correct": 2
            }
        ],
        "Module II: HTML5 Features": [
            {
                "q": "Which of these is a semantic HTML5 tag?",
                "options": ["div", "span", "article", "b"],
                "correct": 2
            },
            {
                "q": "Which HTML5 API allows storing data in the browser with no expiration date?",
                "options": ["Session Storage", "Local Storage", "Cookies", "Cache Storage"],
                "correct": 1
            }
        ],
        "Module III: Mastering CSS3": [
            {
                "q": "In the CSS Box Model, which layer is between the padding and the margin?",
                "options": ["Content", "Outline", "Border", "Background"],
                "correct": 2
            },
            {
                "q": "Which property is used to create a 'hover' transition effect?",
                "options": ["animation", "transform", "transition", "display"],
                "correct": 2
            }
        ],
        "Module IV: Responsive Design": [
            {
                "q": "Which meta tag is crucial for making a website mobile-responsive?",
                "options": ["charset", "description", "viewport", "author"],
                "correct": 2
            },
            {
                "q": "In Flexbox, which property defines the main axis alignment?",
                "options": ["align-items", "justify-content", "flex-direction", "flex-wrap"],
                "correct": 1
            },
            {
                "q": "Which property is required on a parent element to turn it into a Flex Container?",
    "options": ["display: block;", "display: flex;", "flex-direction: row;", "align-items: center;"],
    "correct": 1
},
{
    "q": "In CSS Grid, what does the 'fr' unit stand for?",
    "options": ["Fixed Radius", "Font Relative", "Fractional unit of available space", "Frame Rate"],
    "correct": 2
},
{
    "q": "Which Flexbox property allows items to move to the next line if there isn't enough space?",
    "options": ["flex-flow", "flex-wrap", "justify-content", "align-content"],
    "correct": 1
},
{
    "q": "How do you create a grid with 3 equal columns using grid-template-columns?",
    "options": ["repeat(3, 1fr)", "33% 33% 33%", "1fr 1fr 1fr", "Both A and C"],
    "correct": 3
},
{
    "q": "Which property is used to align grid items along the inline (horizontal) axis?",
    "options": ["align-self", "justify-self", "place-content", "grid-area"],
    "correct": 1
}
        ],
        "Module V: JavaScript": [
            {
                "q": "Which keyword is used to declare a variable that cannot be reassigned?",
                "options": ["var", "let", "const", "static"],
                "correct": 2
            },
            {
                "q": "What does DOM stand for?",
                "options": ["Data Object Model", "Document Object Model", "Digital Object Management", "Document Order Model"],
                "correct": 1
            }
        ],
        "Module VI: Bootstrap": [
            {
                "q": "How many columns are in the default Bootstrap grid system?",
                "options": ["6", "10", "12", "16"],
                "correct": 2
            },
            {
                "q": "Which class is used to make an image responsive in Bootstrap 5?",
                "options": [".img-responsive", ".img-fluid", ".img-fit", ".container-img"],
                "correct": 1
            }
        ]
    },
    "Object Oriented Programming": {
        "Unit I: Intro to OOP": [
            {
                "q": "Which concept allows hiding the internal details of an object?",
                "options": ["Inheritance", "Polymorphism", "Encapsulation", "Dynamic Binding"],
                "correct": 2
            },
            {
                "q": "What is the process by which one object acquires the properties of another?",
                "options": ["Abstraction", "Inheritance", "Encapsulation", "Message Passing"],
                "correct": 1
            }
        ],
        "Unit II: Functions & Overloading": [
            {
                "q": "Which function type reduces the overhead of a function call by replacing the call with the actual code?",
                "options": ["Virtual Function", "Friend Function", "Inline Function", "Static Function"],
                "correct": 2
            }
        ],
        "Unit III: Classes & Operators": [
            {
                "q": "A constructor has the same name as the class and...",
                "options": ["Returns int", "Returns void", "Has no return type", "Returns an object"],
                "correct": 2
            }
        ]
    },
    "Advanced Operating Systems": {
        "Unit I: OS Introduction": [
            {
                "q": "Which system structure organizes the OS into layers, each built on top of lower layers?",
                "options": ["Monolithic", "Microkernel", "Layered Approach", "Hybrid"],
                "correct": 2
            }
        ],
        "Unit II: Process Management": [
            {
                "q": "What is a 'Context Switch'?",
                "options": ["Changing the OS theme", "Saving state of an old process and loading a new one", "Moving a process to the bin", "A hardware failure"],
                "correct": 1
            }
        ],
        "Unit III: Synchronization & Deadlocks": [
            {
                "q": "Which of these is NOT a necessary condition for a deadlock?",
                "options": ["Mutual Exclusion", "No Preemption", "Circular Wait", "Paging"],
                "correct": 3
            }
        ],
        "Unit IV: Storage Management": [
            {
                "q": "What is the main cause of 'Thrashing'?",
                "options": ["Low CPU speed", "Frequent page faults", "Too much RAM", "Paging algorithms being too fast"],
                "correct": 1
            }
        ]
    }
};