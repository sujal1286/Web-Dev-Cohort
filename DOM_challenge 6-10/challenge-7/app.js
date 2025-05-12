const accordionButtons = document.querySelectorAll('.accordion-button');

accordionButtons.forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.accordion-item').forEach(item => {
      const content = item.querySelector('.accordion-content');
      item.classList.toggle('active', item === button.parentElement && !item.classList.contains('active'));
      content.style.maxHeight = item.classList.contains('active') ? content.scrollHeight + 'px' : '0';
    });
  });
});

window.addEventListener('DOMContentLoaded', () => {
  const firstItem = document.querySelector('.accordion-item');
  if (firstItem) {
    firstItem.classList.add('active');
    const content = firstItem.querySelector('.accordion-content');
    content.style.maxHeight = content.scrollHeight + 'px';
  }
});