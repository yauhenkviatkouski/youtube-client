import '../StyleViews/Start.css';
import '../StyleViews/normalize.css';

export default function ViewStart() {
  const content = document.createElement('div');
  content.className = 'wrapper';
  content.innerHTML = '<header><input type="text" name="request" placeholder="Type your search phrase"></header>';
  document.body.appendChild(content);
}
