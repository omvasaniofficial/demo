const curriculumData = {
    1: ["Numbers 1-20", "Basic Shapes", "Time Basics", "Fact Families", "Intro to Addition", "Simple Measurement", "Patterns", "English Phonics", "Spelling 101", "Reading Fluency"],
    2: ["Addition to 100", "Subtraction", "Money Basics", "Measurements", "Place Value", "Fractions Intro", "Creative Writing", "Grammar Fun", "Science: Seasons", "Plant Life"],
    3: ["Multiplication", "Division", "Intro to Fractions", "Area & Perimeter", "Data Handling", "Abstract Logic", "Sentence Struct", "Earth & Space", "Living Things", "Social Skills"],
    4: ["Decimals", "Geometry", "Symmetry", "Complex Patterns", "Long Division", "Word Problems", "Essay Writing", "Public Speaking", "Energy & Force", "History Basics"],
    5: ["Ratios & Proportions", "Coord Geometry", "Order Operations", "Volume", "Middle School Prep", "Critical Reading", "Tech Literacy", "Life Science", "Chemistry Intro", "Global Geography"]
};

function tabClick(el, grade) {
    // Update Tab UI
    document.querySelectorAll('.curriculum-tab').forEach(tab => {
        tab.classList.remove('active', 'text-sky-500');
        tab.classList.add('text-gray-400');
    });
    el.classList.add('active', 'text-sky-500');
    el.classList.remove('text-gray-400');

    // Update Content
    renderCurriculum(grade);
}

function renderCurriculum(grade) {
    const container = document.getElementById('curriculum-content');
    container.innerHTML = '';
    
    curriculumData[grade].forEach(topic => {
        const item = document.createElement('div');
        item.className = "bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow";
        item.innerHTML = `
            <div class="w-12 h-12 bg-blue-50 text-sky-500 rounded-xl flex items-center justify-center mb-3">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd"></path></svg>
            </div>
            <span class="text-sm font-bold text-navy">${topic}</span>
        `;
        container.appendChild(item);
    });
}

// Initial Load
window.onload = () => renderCurriculum(1);
