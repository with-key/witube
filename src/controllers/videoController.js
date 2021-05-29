import Video from '../model/Video';

export const home = async (req, res) => {
  const videos = await Video.find({}).sort({ createdAt: 'desc' });
  return res.render('home', { pageTitle: 'home', videos });
};

export const watch = async (req, res) => {
  const { id } = req.params;
  const video = await Video.findById(id);

  if (video === null) {
    return res.render('404', { pageTitle: 'Video Not found' });
  }
  return res.render('watch', {
    pageTitle: video.title,
    video,
  });
};

export const getEdit = async (req, res) => {
  const { id } = req.params;
  const video = await Video.findById(id);
  console.log(video.hashtags);
  return res.render('edit', { pageTitle: `Editing ${video.title}`, video });
};

export const postEdit = async (req, res) => {
  const { id } = req.params;
  const { title, description, hashtags } = req.body;

  const video = await Video.exists({ _id: id });
  if (!video) {
    return res.render('404', { pageTitle: 'Video Not found' });
  }
  await Video.findByIdAndUpdate(id, {
    title,
    description,
    hashtags: Video.formatHashtags(hashtags),
  });
  return res.redirect(`/videos/${id}`);
};

export const getUpload = (req, res) => {
  const { id } = req.params;
  return res.render('upload');
};

export const postUpload = async (req, res) => {
  const { title, description, hashtags } = req.body;
  console.log(title, description, hashtags);
  try {
    await Video.create({
      title,
      description,
      hashtags: Video.formatHashtags(hashtags),
    });
  } catch (e) {
    return res.render('upload', {
      pageTitle: 'Upload Video',
      errorMsg: e._message,
    });
  }
  return res.redirect('/');
};

export const deleteVideo = async (req, res) => {
  const { id } = req.params;
  await Video.findByIdAndDelete(id);

  return res.redirect('/');
};

export const search = async (req, res) => {
  const { id } = req.params;
  const { q } = req.query;

  let videos = [];

  if (q) {
    videos = await Video.find({
      title: {
        $regex: new RegExp(q, 'i'),
      },
    });
  }
  return res.render('search', { pageTitle: 'Search', videos });
};
