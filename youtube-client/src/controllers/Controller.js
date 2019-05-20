import ViewStart from '../views/AppViews/ViewStart';
import ViewSlider from '../views/AppViews/ViewSlider';
import moveSlider from '../views/AppViews/MoveSlider';

export default class Controller {
  static start() {
    ViewStart();
    document.querySelector('input').addEventListener('keydown', (e) => {
      if (e.code === 'Enter') {
        const userRequest = document.querySelector('input').value;
        ViewSlider();
        moveSlider(userRequest);
      }
    });
    document.querySelector('input').addEventListener('keydown', () => {
      setTimeout(() => {
        const userRequest = document.querySelector('input').value;
        ViewSlider();
        moveSlider(userRequest);
      }, 1000);
    });
  }
}
