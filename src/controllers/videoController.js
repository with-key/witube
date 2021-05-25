import Video from '../model/Video';

// callback 또는 promise 를 이용한다. 비동기 처리를 위해서
export const home = async (req, res) => {
  const videos = await Video.find({}); // async 함수에서 await을 통해 코드를 대기 시킬 수 있다.
  return res.render('home', { pageTitle: 'home', videos });
};

export const watch = (req, res) => {
  const { id } = req.params;
  return res.render('watch', {
    pageTitle: `Watching, `, // pug에 변수를 보낼 수 있다.
    video,
  });
};

export const getEdit = (req, res) => {
  const { id } = req.params;
  return res.render('edit', { pageTitle: `Editing ${video.title}`, video });
};

export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  return res.redirect(`/videos/${id}`);
};

export const getUpload = (req, res) => {
  const { id } = req.params;
  return res.render('upload');
};

export const postUpload = async (req, res) => {
  const { title, description, hashtags } = req.body;
  const video = new Video({
    title,
    description,
    createdAt: Date.now(),
    hashtags: hashtags.split(',').map((word) => `#${word}`),
    meta: {
      views: 0,
      rating: 0,
    },
  });
  const dbVideo = await video.save(); //save는 Promise를 return 한다. 데이터가 db에 저장되는 시간을 await해야 한다. 그래서 async / await를 사용한다.
  console.log(dbVideo);

  return res.redirect('/');
};
