(function() {
  const container = document.getElementById('typing-container');
  const texts = [
    'Search for AI automation solutions...',
    'Find voice AI agents for your business',
    'Discover hyper-personalized outreach tools',
    'Explore knowledge & process AI systems',
    'Get started with Phimes today'
  ];
  
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let currentText = '';
  
  // Create input field structure
  const inputField = document.createElement('div');
  inputField.className = 'input-field';
  const inputText = document.createElement('span');
  inputText.className = 'input-text';
  const cursor = document.createElement('span');
  cursor.className = 'input-cursor';
  inputField.appendChild(inputText);
  inputField.appendChild(cursor);
  container.appendChild(inputField);
  
  function typeText() {
    const currentTarget = texts[textIndex];
    
    if (isDeleting) {
      // Delete characters
      currentText = currentTarget.substring(0, charIndex - 1);
      charIndex--;
      inputText.textContent = currentText;
      
      if (charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(typeText, 500);
      } else {
        setTimeout(typeText, 30);
      }
    } else {
      // Type characters
      currentText = currentTarget.substring(0, charIndex + 1);
      charIndex++;
      inputText.textContent = currentText;
      
      if (charIndex === currentTarget.length) {
        // Finished typing, wait then start deleting
        setTimeout(() => {
          isDeleting = true;
          typeText();
        }, 2000);
      } else {
        setTimeout(typeText, 80);
      }
    }
  }
  
  // Start typing animation
  setTimeout(typeText, 500);
})();
