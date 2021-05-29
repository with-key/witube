import Video from '../model/Video';

// callback 또는 promise 를 이용한다. 비동기 처리를 위해서
export const home = async (req, res) => {
  const videos = await Video.find({}); // async 함수에서 await을 통해 코드를 대기 시킬 수 있다.
  return res.render('home', { pageTitle: 'home', videos });
};

export const watch = async (req, res) => {
  const { id } = req.params;
  const video = await Video.findById(id);

  // 존재하지 않는 페이지 예외처리
  if (video === null) {
    return res.render('404', { pageTitle: 'Video Not found' });
  }
  return res.render('watch', {
    pageTitle: video.title, // pug에 변수를 보낼 수 있다.
    video,
  });
};

export const getEdit = async (req, res) => {
  const { id } = req.params;
  const video = await Video.findById(id);
  console.log(video.hashtags);
  return res.render('edit', { pageTitle: `Editing ${video.title}`, video });
};

// 내용 수정
export const postEdit = async (req, res) => {
  // 요청받은 페이지의 id 확인
  const { id } = req.params;
  // form.body에서 받은 내용 확인
  const { title, description, hashtags } = req.body;
  // 요청 받은 페이지의 id가 가진 값을 가져와서
  // const video = await Video.findById();
  const video = await Video.exists({ _id: id });
  if (!video) {
    // 그 id에 데이터가 정상적으로 존재하지 않는다면, 404를 띄우고
    return res.render('404', { pageTitle: 'Video Not found' });
  }
  // 정상적이라면, 제목, 내용, 해시태그를 form.body에서 받은 내용으로 수정해서
  // 1. mongoose model method를 이용하는 방법
  // findByIdAndUpdate를 사용하고 파라미터에 id와 수정할 대상에 req.body를 담는다.
  await Video.findByIdAndUpdate(id, {
    title,
    description,
    hashtags: Video.formatHashtags(hashtags),
  });
  return res.redirect(`/videos/${id}`);

  // 2. rawble 한 방법
  // video.title = title;
  // video.description = description;
  // video.hashtags = hashtags
  // .split(',')
  // startsWith : 스트링이 시작하는 문자열을 확인해서 boolean을 reutrn
  // .map((word) => (word.startsWith('#') ? word : `#${word}`));
  // db 에 저장 후 기다린다음 (await)
  // await video.save();
  // 저장이 완료되면, redirecting 한다.
  // return res.redirect(`/videos/${id}`);
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
  // Video create function을 사용하여 아래 코드를 생략함
  // const dbVideo = await video.save(); //save는 Promise를 return 한다. 데이터가 db에 저장되는 시간을 await해야 한다. 그래서 async / await를 사용한다.
  return res.redirect('/');
};
