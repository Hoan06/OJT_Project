



document.addEventListener('DOMContentLoaded', () => {
    const addCourseButton = document.querySelector('.btn-add-account');
    const backdrop = document.querySelector('.backdrop');
    const closeIcon = document.querySelector('.icon-close-overlay');
    const cancelButton = document.querySelector('.btn-cancel');
  
    function showOverlay() {
      backdrop.classList.add('active');
    }
  
    function hideOverlay() {
      backdrop.classList.remove('active');
    }
  
    addCourseButton.addEventListener('click', showOverlay);
  
    closeIcon.addEventListener('click', hideOverlay);
  
    cancelButton.addEventListener('click', hideOverlay);
  
    backdrop.addEventListener('click', (event) => {
      if (event.target === backdrop) {
        hideOverlay();
      }
    });
  });