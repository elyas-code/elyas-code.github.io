// Sample timetable data with days of the week
const timetable = {
    1: [ // Sunday
        { subject: "DB201", teacher: "DR", room: "C2", start: "07:15", end: "08:45" },
        { subject: "OS201", teacher: "AA", room: "C2", start: "08:00", end: "9:30" },
        { subject: "Break", teacher: "N/A", room: "N/A", start: "09:30", end: "9:50" },
        { subject: "OS201", teacher: "AA", room: "C2", start: "09:50", end: "10:35" },
    ],
    2: [ // Monday
        { subject: "WEB102", teacher: "B8 AK", room: "WEB102", start: "08:45", end: "09:30" },
        { subject: "Math", teacher: "B6 YA", room: "Math", start: "09:50", end: "10:35" },
    ],
    3: [ // Tuesday
        { subject: "Phy", teacher: "FM", room: "Ph. Lab", start: "10:35", end: "11:20" },
        { subject: "Chem", teacher: "RY / SS", room: "CH.Lab", start: "11:20", end: "12:05" },
    ],
    4: [ // Wednesday
        { subject: "Islam", teacher: "A8 NS", room: "Islam", start: "12:05", end: "12:45" },
        { subject: "PE", teacher: "O", room: "PE", start: "13:05", end: "13:45" },
    ],
    5: [ // Thursday
        { subject: "DB201", teacher: "C2 DR", room: "DB20", start: "07:15", end: "08:00" },
    ]
};

// Function to get current class and next class
function getClassSchedule() {
    const now = new Date();
    const currentTime = now.toTimeString().slice(0, 5); // HH:MM format
    const currentDay = now.getDay(); // 0-6 (Sun-Sat)

    // Get today's classes
    const todayClasses = timetable[currentDay];

    // Find current and next class
    let currentClass = null;
    let nextClass = null;
    let currentClassEnd = null;

    todayClasses.forEach((classInfo, index) => {
        if (currentTime >= classInfo.start && currentTime < classInfo.end) {
            currentClass = classInfo;
            currentClassEnd = new Date(now);
            const [endHour, endMinute] = classInfo.end.split(':');
            currentClassEnd.setHours(endHour, endMinute, 0);
        } else if (currentClass === null && currentTime < classInfo.start) {
            nextClass = classInfo;
        }
    });

    return { currentClass, nextClass, currentClassEnd };
}

// Display class information
function displayClasses() {
    const { currentClass, nextClass, currentClassEnd } = getClassSchedule();
    const currentClassDiv = document.getElementById('current-class');
    const timeRemainingDiv = document.getElementById('time-remaining');
    const nextClassDiv = document.getElementById('next-class');

    if (currentClass) {
        currentClassDiv.innerHTML = `Current Class: ${currentClass.subject} (${currentClass.teacher}, Room: ${currentClass.room})`;
        const remainingTime = Math.ceil((currentClassEnd - new Date()) / 60000); // in minutes
        timeRemainingDiv.innerHTML = `Time Remaining: ${remainingTime} minutes`;
    } else {
        currentClassDiv.innerHTML = "No current class.";
    }

    if (nextClass) {
        nextClassDiv.innerHTML = `Next Class: ${nextClass.subject} (${nextClass.teacher}, Room: ${nextClass.room})`;
    } else {
        nextClassDiv.innerHTML = "No more classes for today.";
    }
}

// Call the display function
displayClasses();
