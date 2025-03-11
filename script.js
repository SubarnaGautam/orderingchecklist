document.addEventListener('DOMContentLoaded', () => {
    // ...existing code...

    const resultEl = document.getElementById('result-el');
    const resultContent = document.getElementById('result-content');

    // Function to update the result content
    function updateResult(content) {
        resultContent.textContent = content;
        resultEl.style.display = 'block'; // Ensure the result container is visible
    }

    // Example usage
    updateResult('This is the updated result content.'); // Example content update

    // ...existing code...
});