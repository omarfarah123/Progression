const router = require('express').Router();
const { Course } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newCourse = await Course.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newCourse);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const courseData = await Course.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!courseData) {
      res.status(404).json({ message: 'No course found with this id!' });
      return;
    }

    res.status(200).json(courseData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
