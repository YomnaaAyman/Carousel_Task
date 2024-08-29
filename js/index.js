let currentIndex = 0;
const items = document.querySelectorAll("#carousel-inner > div");
const totalItems = items.length;

function showSlide(index) {
  const carouselInner = document.getElementById("carousel-inner");
  carouselInner.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalItems;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalItems) % totalItems;
  showSlide(currentIndex);
}

showSlide(currentIndex);
