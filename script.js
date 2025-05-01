document.querySelectorAll('.interactive-box').forEach(box => {
    box.addEventListener('click', () => {
      // Collapse all boxes except the one clicked
      document.querySelectorAll('.interactive-box').forEach(b => {
        if (b !== box) b.classList.remove('active');
      });
  
      // Toggle the clicked box
      box.classList.toggle('active');
    });
  });
  
