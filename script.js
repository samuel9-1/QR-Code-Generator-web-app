const generateBtn = document.getElementById('generateBtn');
const downloadBtn = document.getElementById('downloadBtn');
const qrContainer = document.getElementById('qrContainer');

let qr;

generateBtn.addEventListener('click', () => {
    const qrText = document.getElementById('qrText').value;

    if (qrText.trim() === '') {
        alert('Please enter some text or URL');
        return;
    }

    // Clear previous QR code if any
    qrContainer.innerHTML = '';

    // Generate QR code
    qr = new QRCode(qrContainer, {
        text: qrText,
        width: 200,
        height: 200
    });

    // Show download button
    setTimeout(() => {
        downloadBtn.style.display = 'inline-block';
    }, 300);
});

downloadBtn.addEventListener('click', () => {
    const img = qrContainer.querySelector('img');
    if (img) {
        const link = document.createElement('a');
        link.href = img.src;
        link.download = 'qr-code.png';
        link.click();
    }
});