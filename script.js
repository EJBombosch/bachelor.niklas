// Modal öffnen und schließen
const modal = document.getElementById('comicModal');
const createComicBtn = document.getElementById('createComicBtn');
const closeModal = document.getElementsByClassName('close')[0];

createComicBtn.onclick = function() {
    modal.style.display = 'block';
}

closeModal.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Zeichenanzahl im Textfeld prüfen
const storyInput = document.getElementById('storyInput');
const charCount = document.getElementById('charCount');
const errorMessage = document.getElementById('errorMessage');

storyInput.addEventListener('input', function() {
    const textLength = storyInput.value.length;
    charCount.textContent = `${textLength}/1000`;

    if (textLength > 1000) {
        errorMessage.textContent = 'Bitte kürze deine Geschichte auf 1000 Zeichen';
    } else {
        errorMessage.textContent = '';
    }
});

// Nächster Schritt im Modal
const nextBtn1 = document.getElementById('nextBtn1');
const nextBtn2 = document.getElementById('nextBtn2');
const prevBtn2 = document.getElementById('prevBtn2');  // Hinzugefügter Zurück-Button
const step1 = document.getElementById('step1');
const step2 = document.getElementById('step2');

nextBtn1.onclick = function() {
    if (storyInput.value.length <= 1000) {
        step1.style.display = 'none';
        step2.style.display = 'block';
    } else {
        errorMessage.textContent = 'Bitte kürze deine Geschichte auf 1000 Zeichen';
    }
}

// Zurück zu Schritt 1
prevBtn2.onclick = function() {
    step2.style.display = 'none';
    step1.style.display = 'block';
}

// Bild-Upload-Prüfung
const imageUpload = document.getElementById('imageUpload');
const uploadCount = document.getElementById('uploadCount');

imageUpload.addEventListener('change', function() {
    const files = imageUpload.files;
    if (files.length > 6) {
        alert('Du kannst maximal 6 Bilder hochladen.');
        imageUpload.value = '';  // Reset the file input
    } else {
        uploadCount.textContent = `${files.length}/6 Bilder`;
    }
});

// Automatischer Slider
const sliderTrack = document.querySelector('.slider-track');
const sliderItems = document.querySelectorAll('.slider-item');
let index = 1; // Start bei 1, da wir den Klon des ersten Elements anzeigen
let isSliding = false;

// Klone das erste und letzte Element
const firstClone = sliderItems[0].cloneNode(true);
const lastClone = sliderItems[sliderItems.length - 1].cloneNode(true);

// Füge die Klone ans Ende und den Anfang
sliderTrack.appendChild(firstClone);
sliderTrack.insertBefore(lastClone, sliderItems[0]);

// Aktualisiere die Breite des Slider-Tracks
const totalItems = sliderTrack.children.length;
sliderTrack.style.width = `${totalItems * 412}px`; // 412px Breite pro Item

// Start-Position auf das erste "echte" Element setzen
sliderTrack.style.transform = `translateX(-${412}px)`;

// Funktion zum automatischen Sliden
function slide() {
    if (isSliding) return;
    isSliding = true;

    sliderTrack.style.transition = 'transform 0.5s ease-in-out';
    index++;

    sliderTrack.style.transform = `translateX(-${index * 412}px)`;

    // Wenn der letzte Klon erreicht ist, springe unsichtbar zurück zum ersten Original
    setTimeout(() => {
        if (index === totalItems - 1) {
            sliderTrack.style.transition = 'none'; // Transition ausschalten
            index = 1; // Zurück zum ersten Original
            sliderTrack.style.transform = `translateX(-${index * 412}px)`;
        }
        isSliding = false;
    }, 500); // Die Zeit hier muss mit der Übergangszeit (0.5s) übereinstimmen
}

// Alle 3 Sekunden zum nächsten Slide wechseln
setInterval(slide, 3000);

// Falls der erste Klon erreicht wird, springe unsichtbar zurück zum letzten Original
sliderTrack.addEventListener('transitionend', () => {
    if (index === 0) {
        sliderTrack.style.transition = 'none'; // Transition ausschalten
        index = totalItems - 2; // Zum letzten Original springen
        sliderTrack.style.transform = `translateX(-${index * 412}px)`;
    }
});

