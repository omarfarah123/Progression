const router = require('express').Router();
const { Brick } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newBrick = await Brick.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newBrick);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const brickData = await Brick.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!brickData) {
      res.status(404).json({ message: 'No brick found with this id!' });
      return;
    }

    res.status(200).json(brickData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
