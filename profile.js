// Function to toggle profile dropdown visibility
function toggleProfileDropdown() {
    const dropdown = document.getElementById('profileDropdown');
    dropdown.style.display === 'none' || dropdown.style.display === ''
      ? dropdown.style.display = 'block'
      : dropdown.style.display = 'none';
  }
  