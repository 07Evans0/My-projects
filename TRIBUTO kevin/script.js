const spider = document.querySelector('.spider');

setInterval(() => {
  spider.style.transform = 'scale(1.1)';
  setTimeout(() => {
    spider.style.transform = 'scale(1)';
  }, 300);
}, 800);
