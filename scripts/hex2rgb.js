const hexInput = document.getElementById('hex-input');
const convertBtn = document.getElementById('convert-btn');
const resultDiv = document.getElementById('result');

convertBtn.addEventListener('click', () => {
    const hexCode = hexInput.value.trim();
    if (hexCode.length === 7 && hexCode.startsWith('#')) {
        const rgb = hexToRgb(hexCode);
        resultDiv.textContent = `RGB: ${rgb.r}, ${rgb.g}, ${rgb.b}`;
    } else {
        resultDiv.textContent = 'Invalid hex code';
    }
});

function hexToRgb(hex) {
    const hexCode = hex.substring(1);
    const r = parseInt(hexCode.substring(0, 2), 16);
    const g = parseInt(hexCode.substring(2, 4), 16);
    const b = parseInt(hexCode.substring(4, 6), 16);
    return { r, g, b };
}