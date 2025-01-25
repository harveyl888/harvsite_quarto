  document.addEventListener("DOMContentLoaded", function() {
    console.log("X");
    const counts = document.querySelectorAll('.quarto-category-count');
    counts.forEach(count => {
      let text = count.textContent;
      if (text.length > 1) {
        count.textContent = text.slice(1, -1);
      } else {
        count.textContent = '';
      }
    });
  });  
