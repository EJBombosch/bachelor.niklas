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
