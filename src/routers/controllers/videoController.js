export const trending = (req, res) => res.render('home');
export const watch = (req, res) => res.send('Watch');
export const edit = (req, res) => res.send('Edit');
export const search = (req, res) => res.send('Search');
export const upload = (req, res) => res.send('Upload');
export const deleteVideo = (req, res) => {
  return res.send('Delete Video');
};
