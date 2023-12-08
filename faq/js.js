document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', () => {
      const content = button.nextElementSibling;
      if (content.style.display !== "block") {
        content.style.display = "block";
      } else{
        content.style.display = "none";
      }
    });
  });