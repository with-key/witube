export const trending = (req, res) => res.render('home');

export const search = (req, res) => res.send('search');
export const see = (req, res) => {
  console.log(req.params);
  return res.send('see');
};

export const edit = (req, res) => res.send('edit');
export const upload = (req, res) => res.send('upload');
export const deleteVideo = (req, res) => res.send('deleteVideo');
