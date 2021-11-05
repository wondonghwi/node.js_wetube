import multer from 'multer';

export const localsMiddleware = (req, res, next) => {
  res.locals.loggedIn = !!req.session.loggedIn;
  res.locals.siteName = 'Wetube';
  res.locals.loggedInUser = req.session.user || {};
  console.log(res.locals.loggedInUser);
  next();
};

export const protectorMiddleware = (req, res, next) => {
  if (req.session.loggedIn) {
    return next();
  } else {
    return res.redirect('/login');
  }
};

export const publicOnlyMiddleware = (req, res, next) => {
  if (!req.session.loggedIn) {
    return next();
  } else {
    return res.redirect('/');
  }
};

export const avatarUpload = multer({
  dest: 'uploads/avatars/',
  limits: {
    //3mb
    fileSize: 3000000,
  },
});

export const videoUpload = multer({
  dest: 'uploads/videos/',
  limits: {
    //10mb
    fileSize: 10000000,
  },
});
