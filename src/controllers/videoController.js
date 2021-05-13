// home controller
export const trending = (req, res) =>
  res.render('home', {
    pageTitle: 'Home',
  });

// watch controller
export const see = (req, res) =>
  res.render('watch', {
    pageTitle: 'Watch',
  });

export const search = (req, res) => res.send('search');
export const edit = (req, res) => res.send('edit');
export const upload = (req, res) => res.send('upload');
export const deleteVideo = (req, res) => res.send('deleteVideo');
