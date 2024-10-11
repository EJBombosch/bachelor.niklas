// Modal öffnen und schließen
const openModalBtn = document.getElementById('openModalBtn');
const modal = document.getElementById('modal');
const closeModal = document.getElementById('closeModal');

openModalBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Schritte im Modal
let currentStep = 1;
const maxChars = 1000;

// Elemente für die Schritte
const step1 = document.getElementById('step-1');
const step2 = document.getElementById('step-2');
const step3 = document.getElementById('step-3');

// Buttons
const nextStepBtn1 = document.getElementById('nextStepBtn1');
const prevStepBtn2 = document.getElementById('prevStepBtn2');
const nextStepBtn2 = document.getElementById('nextStepBtn2');
const prevStepBtn3 = document.getElementById('prevStepBtn3');
const submitBtn = document.getElementById('submitBtn');

// Char Count und Textprüfung
const storyInput = document.getElementById('storyInput');
const charCount = document.getElementById('charCount');
const errorMessage = document.getElementById('errorMessage');

// Zeichen zählen und prüfen
storyInput.addEventListener('input', () => {
    const textLength = storyInput.value.length;
    charCount.textContent = `${textLength}/1000`;

    if (textLength > maxChars) {
        errorMessage.style.display = 'block';
    } else {
        errorMessage.style.display = 'none';
    }
});

// Schritt 1: Zurück zu Schritt 1
nextStepBtn1.addEventListener('click', () => {
    const textLength = storyInput.value.length;
    if (textLength <= maxChars) {
        changeStep(2);
    }
});

// Schritt 2: Vor und Zurück
prevStepBtn2.addEventListener('click', () => changeStep(1));
nextStepBtn2.addEventListener('click', () => changeStep(3));

// Schritt 3: Zurück zu Schritt 2
prevStepBtn3.addEventListener('click', () => changeStep(2));

// Schritt wechseln
function changeStep(step) {
    currentStep = step;

    // Alle Schritte ausblenden
    step1.style.display = 'none';
    step2.style.display = 'none';
    step3.style.display = 'none';

    // Zeige aktuellen Schritt
    switch (step) {
        case 1:
            step1.style.display = 'block';
            break;
        case 2:
            step2.style.display = 'block';
            break;
        case 3:
            step3.style.display = 'block';
            break;
    }
}

// Initialer Schritt
changeStep(1);
