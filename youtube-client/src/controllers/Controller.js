import ViewStart from '../views/AppViews/ViewStart';
import ModelRequest from '../models/Model';

export default class Controller {
  static start() {
    ViewStart();
    document.querySelector('input').addEventListener('keydown', (e) => {
      if (e.code === 'Enter') {
        const userRequest = document.querySelector('input').value;
        const model = new ModelRequest(userRequest);
        model.getClips();
      }
    });
  }
}
