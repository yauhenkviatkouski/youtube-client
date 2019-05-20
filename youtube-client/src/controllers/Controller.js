import ViewStart from '../views/AppViews/ViewStart';
import ViewSlider from '../views/AppViews/ViewSlider';
import moveSlider from '../models/MoveSlider';

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
    document.querySelector('.btn-search').addEventListener('click', () => {
      const userRequest = document.querySelector('input').value;
      ViewSlider();
      moveSlider(userRequest);
    });
  }
}
