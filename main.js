document.addEventListener('DOMContentLoaded', () => {
  const generateBtn = document.getElementById('generate-btn');
  const resultContainer = document.getElementById('result');
  const themeToggleBtn = document.getElementById('theme-toggle');

  // Theme checking logic
  const currentTheme = localStorage.getItem('theme');
  if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
      themeToggleBtn.textContent = '☀️';
    }
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeToggleBtn.textContent = '☀️';
  }

  // Theme toggle click event
  themeToggleBtn.addEventListener('click', () => {
    let theme = document.documentElement.getAttribute('data-theme');
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
      themeToggleBtn.textContent = '🌙';
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
      themeToggleBtn.textContent = '☀️';
    }
  });

  generateBtn.addEventListener('click', generateLottoNumbers);

  function generateLottoNumbers() {
    const numbers = new Set();
    while (numbers.size < 6) {
      const randomNum = Math.floor(Math.random() * 45) + 1;
      numbers.add(randomNum);
    }

    const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);
    displayNumbers(sortedNumbers);
  }

  function displayNumbers(numbers) {
    resultContainer.innerHTML = ''; // Clear previous numbers
    
    numbers.forEach(num => {
      const numberElement = document.createElement('div');
      numberElement.classList.add('number');
      numberElement.textContent = num;
      
      // Assign color class based on number range
      if (num <= 10) {
        numberElement.classList.add('color-yellow');
      } else if (num <= 20) {
        numberElement.classList.add('color-blue');
      } else if (num <= 30) {
        numberElement.classList.add('color-red');
      } else if (num <= 40) {
        numberElement.classList.add('color-gray');
      } else {
        numberElement.classList.add('color-green');
      }

      resultContainer.appendChild(numberElement);
    });
  }
});