const videos = [
  {
    title: 'video #1',
    rating: 5,
    comments: 2,
    createdAt: '2 hours ago',
    views: 100,
    id: 1,
  },
  {
    title: 'video #2',
    rating: 5,
    comments: 2,
    createdAt: '2 hours ago',
    views: 100,
    id: 2,
  },
  {
    title: 'video #3',
    rating: 5,
    comments: 2,
    createdAt: '2 hours ago',
    views: 100,
    id: 3,
  },
];

// home controller
export const trending = (req, res) => {
  return res.render('home', {
    pageTitle: 'Home',
    videos,
  });
};

// watch controller
export const watch = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render('watch', {
    pageTitle: `Watching, ${video.title}`, // pug에 변수를 보낼 수 있다.
    video,
  });
};

export const getEdit = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render('edit', { pageTitle: `Editing ${video.title}`, video });
};

export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  videos[id - 1].title = title;
  return res.redirect(`/videos/${id}`);
};

export const getUpload = (req, res) => {
  const { id } = req.params;
  return res.render('upload', { pageTitle: 'Upload Page!' });
};

export const postUpload = (req, res) => {
  const { title } = req.body;
  const newVideo = {
    title,
  };
  videos.push(newVideo);
  return res.redirect('/');
};
