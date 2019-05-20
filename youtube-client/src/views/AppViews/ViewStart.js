import '../StyleViews/Start.css';
import '../StyleViews/normalize.css';

export default function ViewStart() {
  const content = document.createElement('div');
  content.className = 'wrapper';
  content.innerHTML = '<header><button class="btn-search">Search</button><input type="text" name="request" placeholder="Type your search phrase"></header><div class="slider-wrapper"></div>';
  document.body.appendChild(content);
  document.head.insertAdjacentHTML('beforeend', '<meta name="viewport" content="width=device-width,initial-scale=1">');
}
