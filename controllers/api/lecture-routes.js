const router = require('express').Router();
const { Lecture } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newLecture = await Lecture.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newLecture);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const lectureData = await Lecture.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!lectureData) {
      res.status(404).json({ message: 'No lecture found with this id!' });
      return;
    }

    res.status(200).json(lectureData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
