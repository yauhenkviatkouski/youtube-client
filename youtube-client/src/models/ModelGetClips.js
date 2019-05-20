export default function getClips(userRequest, slider) {
  const keyClips = 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyBP9dFZ-uPuT-0ze6P2ArkkKzitTK9J7gA&type=video&part=snippet&maxResults=15&q=';
  const keyStatistics1 = 'https://www.googleapis.com/youtube/v3/videos?key=AIzaSyBP9dFZ-uPuT-0ze6P2ArkkKzitTK9J7gA&id=';
  const keyStatistics2 = '&part=snippet,statistics';
  const arrayClips = [];
  fetch(keyClips + userRequest)
    .then(res => res.json())
    .then((res) => {
      const clipsId = [];
      for (let i = 0; i < res.items.length; i += 1) {
        clipsId[i] = res.items[i].id.videoId;
      }
      fetch(keyStatistics1 + clipsId.join(',') + keyStatistics2)
        .then(resStat => resStat.json())
        .then((resStat) => {
          for (let i = 0; i < resStat.items.length; i += 1) {
            arrayClips[i] = {
              title: resStat.items[i].snippet.title,
              link: `https://www.youtube.com/watch?v=${resStat.items[i].id}`,
              picture: resStat.items[i].snippet.thumbnails.medium.url,
              description: resStat.items[i].snippet.description,
              author: resStat.items[i].snippet.channelTitle,
              date: resStat.items[i].snippet.publishedAt.match(/^.{0,10}/g),
              views: resStat.items[i].statistics.viewCount,
            };
          }
          for (let i = 0; i < arrayClips.length; i += 1) {
            const clipWrapper = document.createElement('div');
            clipWrapper.className = 'clip-wrapper';
            const clip = document.createElement('div');
            clip.className = 'clip';
            clip.insertAdjacentHTML('beforeend', `<a class='link' href='${arrayClips[i].link}'>${arrayClips[i].title}</a>`);
            clip.insertAdjacentHTML('beforeend', `<img class='clip-picture' src='${arrayClips[i].picture}' alt='${arrayClips[i].title}' width='320'>`);
            clip.insertAdjacentHTML('beforeend', `<h4 class='author'>${arrayClips[i].author}</h4>`);
            clip.insertAdjacentHTML('beforeend', `<h4 class='date'>${arrayClips[i].date}</h4>`);
            clip.insertAdjacentHTML('beforeend', `<h4 class='views'>${arrayClips[i].views}</h4>`);
            clip.insertAdjacentHTML('beforeend', `<p class='description'>${arrayClips[i].description}</p>`);
            clipWrapper.appendChild(clip);
            slider.appendChild(clipWrapper);
          }
        });
    });
}
