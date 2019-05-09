const keyClips = 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyDO6KI4q3O7h3qORmeC4w1hXqhs1o8WAyI&type=video&part=snippet&maxResults=2&q=';
const keyStatistics1 = 'https://www.googleapis.com/youtube/v3/videos?key=AIzaSyDO6KI4q3O7h3qORmeC4w1hXqhs1o8WAyI&id=';
const keyStatistics2 = '&part=snippet,statistics';

export default class ModelRequest {
  constructor(userRequest) {
    this.userRequest = userRequest;
    this.keyClips = keyClips;
    this.arrayClips = [];
  }

  getClips() {
    fetch(this.keyClips + this.userRequest)
      .then(res => res.json())
      .then((res) => {
        const clipsId = [];
        for (let i = 0; i < res.items.length; i += 1) {
          clipsId[i] = res.items[i].id.videoId;
        }
        fetch(keyStatistics1 + clipsId.join(',') + keyStatistics2)
          .then(resStat => resStat.json())
          .then((resStat) => {
            // eslint-disable-next-line no-console
            console.log(resStat);
          });
      });
  }
}
