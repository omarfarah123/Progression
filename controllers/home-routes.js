const router = require('express').Router();
const { Course, Lecture, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    // Send the rendered Handlebars.js template back as the response
    res.render('login');
});

router.get('/courses', withAuth, async (req, res) => {
    try {
      // Find the logged in user based on the session ID
      const userData = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] },
        include: [{ model: Course }],
      });
  
      const user = userData.get({ plain: true });
  
      res.render('courses', {
        ...user,
        logged_in: true
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.get('/course/:id', withAuth, async (req, res) => {
  try {
    const courseData = await Course.findByPk(req.params.id, {
      include: [{model: Lecture}],
    });

    const course = courseData.get({ plain: true });

    res.render('lectures', {
      ...course,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/lecture/:id', withAuth, async (req, res) => {
  try {
    const lectureData = await Lecture.findByPk(req.params.id);

    const lecture = lectureData.get({ plain: true });

    res.render('lecture', {
      ...lecture,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/login', (req, res) => {

  if (req.session.logged_in) {
    res.redirect('/courses');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/courses');
    return;
  }

  res.render('signup');
});
module.exports = router;
