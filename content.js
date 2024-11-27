let extractedValues = [];

// Function to extract text and store it as an array
function extractNoteBoxText() {
  const noteBox = document.querySelector("div.noteBox.commonScroll");
  if (noteBox) {
    extractedValues = noteBox.innerText.split(',').map(item => item.trim());
    console.log("Extracted Values:", extractedValues);
  }
}

// Function to check items in the modal
function checkMatchingItems() {
  const modalBody = document.querySelector(".jlCustomModalBody");
  if (modalBody) {
    const rows = modalBody.querySelectorAll("tr"); // Assuming rows in a table
    rows.forEach(row => {
      const cellText = row.innerText.trim();
      if (extractedValues.includes(cellText)) {
        const checkbox = row.querySelector("input[type='checkbox']");
        if (checkbox && !checkbox.checked) {
          checkbox.checked = true; // Check the box
          console.log(`Checked item: ${cellText}`);
        }
      }
    });
  }
}

// Observe DOM for modal appearance
const observer = new MutationObserver(() => {
  const modal = document.querySelector(".jlCustomModalBody");
  if (modal) {
    checkMatchingItems();
  }
});

// Observe the entire document for changes
observer.observe(document.body, { childList: true, subtree: true });

// Run the extraction when the page loads
window.addEventListener("load", extractNoteBoxText);
