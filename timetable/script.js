const timetables = {
    0: { // 11.CCP
        0: [ // Sunday
            { subject: "DB201", teacher: "DR", room: "C2", start: "07:15", end: "08:45" },
            { subject: "OS201", teacher: "AA", room: "C2", start: "08:45", end: "09:30" },
            { subject: "Break", teacher: "N/A", room: "N/A", start: "09:30", end: "09:50" },
            { subject: "OS201", teacher: "AA", room: "C2", start: "09:50", end: "10:35" },
            { subject: "WEB102", teacher: "AK", room: "C4", start: "10:35", end: "12:05" },
            { subject: "ENG201", teacher: "JP", room: "A2", start: "12:05", end: "12:45" },
            { subject: "Break", teacher: "N/A", room: "N/A", start: "12:45", end: "13:05" },
            { subject: "ENG201", teacher: "JP", room: "A2", start: "13:05", end: "13:45" },
        ],
        1: [ // Monday
            { subject: "ARC201", teacher: "MS/IA", room: "C3", start: "07:15", end: "08:00" },
            { subject: "MAT201", teacher: "YA", B6: "B6", start: "08:00", end: "08:45" },
            { subject: "WEB201", teacher: "AK", B6: "C4", start: "08:45", end: "09:30" },
            { subject: "Break", teacher: "N/A", room: "N/A", start: "09:30", end: "09:50" },
            { subject: "WEB201", teacher: "AK", B6: "C4", start: "09:50", end: "10:35" },
            { subject: "ENG201", teacher: "JP", room: "A2", start: "10:35", end: "12:05" },
            { subject: "OS201", teacher: "AA", room: "C2", start: "12:05", end: "12:45" },
            { subject: "Break", teacher: "N/A", room: "N/A", start: "12:45", end: "13:05" },
            { subject: "OS201", teacher: "AA", room: "C2", start: "13:05", end: "13:45" },
        ],
        2: [
            { subject: "CHM201", teacher: "RY/SS", room: "Ch. Lab", start: "07:15", end: "08:45" },
            { subject: "MAT201", teacher: "YA", room: "B6", start: "08:45", end: "09:30" },
            { subject: "Break", teacher: "N/A", room: "N/A", start: "09:30", end: "09:50" },
            { subject: "MAT201", teacher: "YA", room: "B6", start: "09:50", end: "10:35" },
            { subject: "PHY201", teacher: "FM", room: "B9", start: "10:35", end: "12:05" },
            { subject: "ARB", teacher: "HS", room: "A7", start: "12:05", end: "12:45" },
            { subject: "Break", teacher: "N/A", room: "N/A", start: "12:45", end: "13:05" },
            { subject: "ISL", teacher: "NS", room: "A8", start: "13:05", end: "13:45" },
        ],
        3: [
            { subject: "ARB", teacher: "HS", room: "A1", start: "07:15", end: "08:00" },
            { subject: "NE", teacher: "NS", B6: "A8", start: "08:00", end: "08:45" },
            { subject: "ARC201", teacher: "MS/IA", B6: "C3", start: "08:45", end: "09:30" },
            { subject: "Break", teacher: "N/A", room: "N/A", start: "09:30", end: "09:50" },
            { subject: "ARC201", teacher: "MS/IA", B6: "C3", start: "09:50", end: "10:35" },
            { subject: "MAT201", teacher: "YA", room: "B6", start: "10:35", end: "12:05" },
            { subject: "DB201", teacher: "DR", room: "C1", start: "12:05", end: "12:45" },
            { subject: "Break", teacher: "N/A", room: "N/A", start: "12:45", end: "13:05" },
            { subject: "DB201", teacher: "DR", room: "C1", start: "13:05", end: "13:45" },
        ],
        4: [
            { subject: "PHY201", teacher: "FM", room: "BB1", start: "07:15", end: "08:45" },
            { subject: "PE", teacher: "O", room: "PE", start: "08:45", end: "09:30" },
            { subject: "Break", teacher: "N/A", room: "N/A", start: "09:30", end: "09:50" },
            { subject: "PE-S", teacher: "New/O", room: "PE", start: "09:50", end: "10:35" },
            { subject: "ARC201", teacher: "MS/IA", room: "C1", start: "10:35", end: "12:05" },
            { subject: "ENG201", teacher: "JP", room: "A2", start: "12:05", end: "12:45" },
            { subject: "Break", teacher: "N/A", room: "N/A", start: "12:45", end: "13:05" },
            { subject: "ENG201", teacher: "JP", room: "A2", start: "13:05", end: "13:45" },
        ]
    },
    1: { // 11.AI
        0: [ // Sunday
            { subject: "BD201", teacher: "SG", room: "C1", start: "07:15", end: "08:45" },
            { subject: "ENG201", teacher: "JP", room: "A2", start: "08:45", end: "09:30" },
            { subject: "Break", teacher: "N/A", room: "N/A", start: "09:30", end: "09:50" },
            { subject: "ENG201", teacher: "JP", room: "A2", start: "09:50", end: "10:35" },
            { subject: "DB201", teacher: "DR", room: "C2", start: "10:35", end: "12:05" },
            { subject: "ARB", teacher: "HS", room: "A7", start: "12:05", end: "12:45" },
            { subject: "Break", teacher: "N/A", room: "N/A", start: "12:45", end: "13:05" },
            { subject: "NE", teacher: "NS", room: "A1", start: "13:05", end: "13:45" },
        ],
        1: [ // Monday
            { subject: "MAT", teacher: "YA", room: "C1", start: "07:15", end: "08:00" },
            { subject: "ISL", teacher: "NS", B6: "A7", start: "08:00", end: "08:45" },
            { subject: "ML201", teacher: "SG", B6: "B7", start: "08:45", end: "09:30" },
            { subject: "Break", teacher: "N/A", room: "N/A", start: "09:30", end: "09:50" },
            { subject: "ML201", teacher: "SG", room: "B7", start: "09:50", end: "10:35" },
            { subject: "PHY201", teacher: "FM", room: "Ph. Lab", start: "10:35", end: "12:05" },
            { subject: "ENG201", teacher: "JP", room: "A2", start: "12:05", end: "12:45" },
            { subject: "Break", teacher: "N/A", room: "N/A", start: "12:45", end: "13:05" },
            { subject: "ENG201", teacher: "JP", room: "A2", start: "13:05", end: "13:45" },
        ],
        2: [ // Tuesday
            { subject: "PHY201", teacher: "FM", room: "B9", start: "07:15", end: "08:45" },
            { subject: "DB201", teacher: "DR", room: "C3", start: "08:45", end: "09:30" },
            { subject: "Break", teacher: "N/A", room: "N/A", start: "09:30", end: "09:50" },
            { subject: "DB201", teacher: "DR", room: "C3", start: "09:50", end: "10:35" },
            { subject: "ARB", teacher: "HS", room: "A1", start: "10:35", end: "11:20" },
            { subject: "ML201", teacher: "SG", room: "C1", start: "11:20", end: "12:05" },
            { subject: "PE", teacher: "O", room: "PE", start: "12:05", end: "12:45" },
            { subject: "Break", teacher: "N/A", room: "N/A", start: "12:45", end: "13:05" },
            { subject: "PE-S", teacher: "New/O", room: "PE", start: "13:05", end: "13:45" },
        ],
        3: [ // Wednesday 
            { subject: "BD201", teacher: "SG", room: "C1", start: "07:15", end: "08:45" },
            { subject: "WEB201", teacher: "AK", room: "C1", start: "08:45", end: "09:30" },
            { subject: "Break", teacher: "N/A", room: "N/A", start: "09:30", end: "09:50" },
            { subject: "WEB201", teacher: "AK", room: "C1", start: "09:50", end: "10:35" },
            { subject: "CHM201", teacher: "RY", room: "Ch. Lab", start: "10:35", end: "12:05" },
            { subject: "MAT201", teacher: "YA", room: "B6", start: "12:05", end: "12:45" },
            { subject: "Break", teacher: "N/A", room: "N/A", start: "12:45", end: "13:05" },
            { subject: "MAT201", teacher: "YA", room: "B6", start: "13:05", end: "13:45" },
            
        ],
        4: [
            { subject: "MAT201", teacher: "YA", room: "B6", start: "07:15", end: "08:45" },
            { subject: "ML201", teacher: "SG", room: "C1", start: "08:45", end: "09:30" },
            { subject: "Break", teacher: "N/A", room: "N/A", start: "09:30", end: "09:50" },
            { subject: "ML201", teacher: "SG", room: "C1", start: "09:50", end: "10:35" },
            { subject: "ENG201", teacher: "JP", room: "A2", start: "10:35", end: "12:05" },
            { subject: "WEB201", teacher: "AK", room: "C2", start: "12:05", end: "12:45" },
            { subject: "Break", teacher: "N/A", room: "N/A", start: "12:45", end: "13:05" },
            { subject: "WEB201", teacher: "AK", room: "C2", start: "13:05", end: "13:45" },
        ]
    },
    2: { // 11.SEC
            0: [ // Sunday
            { subject: "SEC201", teacher: "KM", room: "C3", start: "07:15", end: "08:45" },
            { subject: "CHM201", teacher: "RY", room: "Ch. Lab", start: "08:45", end: "09:30" },
            { subject: "Break", teacher: "N/A", room: "N/A", start: "09:30", end: "09:50" },
            { subject: "CHM201", teacher: "RY", room: "Ch. Lab", start: "09:50", end: "10:35" },
            { subject: "PHY201", teacher: "FM", room: "Ph. Lab", start: "10:35", end: "12:05" },
            { subject: "ISL", teacher: "NS", room: "A8", start: "12:05", end: "12:45" },
            { subject: "Break", teacher: "N/A", room: "N/A", start: "12:45", end: "13:05" },
            { subject: "MAT201", teacher: "AQ", room: "B1", start: "13:05", end: "13:45" },
        ],
        1: [ // Monday
            { subject: "MAT", teacher: "YA", room: "C1", start: "07:15", end: "08:45" },
            { subject: "ISL", teacher: "NS", B6: "A7", start: "08:00", end: "08:45" },
            { subject: "ML201", teacher: "SG", B6: "B7", start: "08:45", end: "09:30" },
            { subject: "Break", teacher: "N/A", room: "N/A", start: "09:30", end: "09:50" },
            { subject: "ML201", teacher: "SG", room: "B7", start: "09:50", end: "10:35" },
            { subject: "PHY201", teacher: "FM", room: "Ph. Lab", start: "10:35", end: "12:05" },
            { subject: "ENG201", teacher: "JP", room: "A2", start: "12:05", end: "12:45" },
            { subject: "Break", teacher: "N/A", room: "N/A", start: "12:45", end: "13:05" },
            { subject: "ENG201", teacher: "JP", room: "A2", start: "13:05", end: "13:45" },
        ],
        2: [ // Tuesday
            { subject: "PHY201", teacher: "FM", room: "B9", start: "07:15", end: "08:45" },
            { subject: "DB201", teacher: "DR", room: "C3", start: "08:00", end: "09:30" },
            { subject: "Break", teacher: "N/A", room: "N/A", start: "09:30", end: "09:50" },
            { subject: "DB201", teacher: "DR", room: "C3", start: "09:50", end: "10:35" },
            { subject: "ARB", teacher: "HS", room: "A1", start: "10:35", end: "11:20" },
            { subject: "ML201", teacher: "SG", room: "C1", start: "11:20", end: "12:05" },
            { subject: "PE", teacher: "O", room: "PE", start: "12:05", end: "12:45" },
            { subject: "Break", teacher: "N/A", room: "N/A", start: "12:45", end: "13:05" },
            { subject: "PE-S", teacher: "New/O", room: "PE", start: "13:05", end: "13:45" },
        ],
        3: [ // Wednesday 
            { subject: "BD201", teacher: "SG", room: "C1", start: "07:15", end: "08:45" },
            { subject: "WEB201", teacher: "AK", room: "C1", start: "08:00", end: "09:30" },
            { subject: "Break", teacher: "N/A", room: "N/A", start: "09:30", end: "09:50" },
            { subject: "WEB201", teacher: "AK", room: "C1", start: "09:50", end: "10:35" },
            { subject: "CHM201", teacher: "RY", room: "Ch. Lab", start: "10:35", end: "12:05" },
            { subject: "MAT201", teacher: "YA", room: "B6", start: "12:05", end: "12:45" },
            { subject: "Break", teacher: "N/A", room: "N/A", start: "12:45", end: "13:05" },
            { subject: "MAT201", teacher: "YA", room: "B6", start: "13:05", end: "13:45" },
            
        ],
        4: [
            { subject: "MAT201", teacher: "YA", room: "B6", start: "07:15", end: "08:45" },
            { subject: "ML201", teacher: "SG", room: "C1", start: "08:00", end: "09:30" },
            { subject: "Break", teacher: "N/A", room: "N/A", start: "09:30", end: "09:50" },
            { subject: "ML201", teacher: "SG", room: "C1", start: "09:50", end: "10:35" },
            { subject: "ENG201", teacher: "JP", room: "A2", start: "10:35", end: "12:05" },
            { subject: "WEB201", teacher: "AK", room: "C2", start: "12:05", end: "12:45" },
            { subject: "Break", teacher: "N/A", room: "N/A", start: "12:45", end: "13:05" },
            { subject: "WEB201", teacher: "AK", room: "C2", start: "13:05", end: "13:45" },
        ]
    }
};
function getClassSchedule(selectedClass) {
    const now = new Date();
    const currentTime = now.toTimeString().slice(0, 5); // HH:MM format
    const currentDay = now.getDay(); // 0-6 (Sun-Sat)

    const todayClasses = timetables[selectedClass][currentDay] || [];
    let currentClass = null;
    let nextClass = null;

    todayClasses.forEach((classInfo, index) => {
        if (currentTime >= classInfo.start && currentTime < classInfo.end) {
            currentClass = classInfo;
            nextClass = todayClasses[index + 1] || null;
        }
    });

    return { currentClass, nextClass, todayClasses, currentDay };
}

function displayClasses() {
    const classSelect = document.getElementById('class-select');
    const selectedClass = classSelect.value;
    const currentClassDiv = document.getElementById('current-class');
    const timeRemainingDiv = document.getElementById('time-remaining');
    const nextClassDiv = document.getElementById('next-class');
    const scheduleBody = document.getElementById('schedule-body');

    // Clear the table body
    scheduleBody.innerHTML = '';

    const now = new Date();
    const currentDay = now.getDay(); // 0-6 (Sun-Sat)
    const todayClasses = timetables[selectedClass][currentDay] || [];
    
    // Get the current class and next class
    const { currentClass, nextClass } = getClassSchedule(selectedClass);

    // Populate the schedule table for today's classes
    todayClasses.forEach((classInfo) => {
        const row = document.createElement('tr');
        
        // Highlight the current class
        if (currentClass && classInfo.subject === currentClass.subject && classInfo.teacher === currentClass.teacher) {
            row.classList.add('highlight'); // Add highlight class
        }

        row.innerHTML = `
            <td>${classInfo.start}</td>
            <td>${classInfo.end}</td>
            <td>${classInfo.subject}</td>
            <td>${classInfo.teacher}</td>
            <td>${classInfo.room}</td>
        `;
        scheduleBody.appendChild(row);
    });

    // Display current class information
    if (currentClass) {
        currentClassDiv.innerHTML = `Current Class: ${currentClass.subject}`;
        const currentClassEnd = new Date();
        const [endHour, endMinute] = currentClass.end.split(':');
        currentClassEnd.setHours(endHour, endMinute, 0);
        const remainingTime = Math.ceil((currentClassEnd - new Date()) / 1000); // in seconds

        if (remainingTime > 0) {
            const minutes = Math.floor(remainingTime / 60);
            const seconds = remainingTime % 60;
            timeRemainingDiv.innerHTML = `Time Remaining: ${minutes} minutes and ${seconds} seconds`;
        } else {
            timeRemainingDiv.innerHTML = "Class has ended.";
        }
    } else {
        currentClassDiv.innerHTML = "No current class.";
        timeRemainingDiv.innerHTML = "";
    }

    // Check for the next class
    if (nextClass) {
        nextClassDiv.innerHTML = `Next Class: ${nextClass.subject}`;
        
        // Check if there's 1 minute left for the next class
        const nextClassStart = new Date();
        const [startHour, startMinute] = nextClass.start.split(':');
        nextClassStart.setHours(startHour, startMinute, 0);
        const timeUntilNextClass = Math.ceil((nextClassStart - new Date()) / 1000); // in seconds
        
        if (timeUntilNextClass <= 60 && timeUntilNextClass > 0) {
            nextClassDiv.classList.add('blinking-red');
        } else {
            nextClassDiv.classList.remove('blinking-red');
        }
    } else {
        nextClassDiv.innerHTML = "No more classes for today.";
        nextClassDiv.classList.remove('blinking-red');
    }
}

// Initial call to populate the display
displayClasses();

// Update the display every second
setInterval(displayClasses, 1000);

document.getElementById('class-select').addEventListener('change', displayClasses);

const toggleThemeButton = document.getElementById('toggle-theme');

toggleThemeButton.addEventListener('click', () => {
    // Toggle dark class on body
    document.body.classList.toggle('dark');

    // Toggle dark class on container
    const container = document.querySelector('.container');
    container.classList.toggle('dark');
    const header = document.querySelector('h1');
    header.classList.toggle('dark');

});
