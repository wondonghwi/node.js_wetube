import Video from '../../models/Video';

export const home = async (req, res) => {
  //TODO 콜백 처리방식

  // Video.find({}, (error, videos) => {
  //   return res.render('home', { pageTitle: 'Home', videos });
  // });

  //TODO Promise 처리방식
  try {
    const videos = await Video.find({});
    console.log(videos);
    return res.render('home', { pageTitle: 'Home', videos });
  } catch (error) {
    console.log(error);
    return res.render('server-error');
  }
};
export const watch = (req, res) => {
  const { id } = req.params;
  return res.render('watch', { pageTitle: `Watching` });
};
export const getEdit = (req, res) => {
  const { id } = req.params;
  return res.render('edit', { pageTitle: `Editing` });
};
export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  return res.redirect(`/videos/${id}`);
};

export const getUpload = (req, res) => {
  return res.render('upload', { pageTitle: 'Upload Video' });
};

export const postUpload = async (req, res) => {
  const { title, description, hashtags } = req.body;
  await Video.create({
    title,
    description,
    createdAt: Date.now(),
    hashtags: hashtags.split(',').map(word => `#${word}`),
    meta: {
      views: 0,
      rating: 0,
    },
  });
  return res.redirect('/');
};
