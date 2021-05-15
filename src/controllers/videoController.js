const fakeUser = {
  username: 'with',
  loggedIn: false,
};

// home controller
export const trending = (req, res) => {
  const videos = [
    {
      title: 'video #1',
      rating: 5,
      comments: 2,
      createdAt: '2 hours ago',
      views: 100,
    },
    {
      title: 'video #2',
      rating: 5,
      comments: 2,
      createdAt: '2 hours ago',
      views: 100,
    },
    {
      title: 'video #3',
      rating: 5,
      comments: 2,
      createdAt: '2 hours ago',
      views: 100,
    },
  ];

  return res.render('home', {
    pageTitle: 'Home',
    videos,
  });
};

// watch controller
export const see = (req, res) =>
  res.render('watch', {
    pageTitle: 'Watch', // pug에 변수를 보낼 수 있다.
  });

export const search = (req, res) => res.send('search');
export const edit = (req, res) => res.send('edit');
export const upload = (req, res) => res.send('upload');
export const deleteVideo = (req, res) => res.send('deleteVideo');
