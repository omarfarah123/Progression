const router = require('express').Router();
const { Document } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newDocument = await Document.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(Document);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const documentData = await Document.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!documentData) {
      res.status(404).json({ message: 'No document found with this id!' });
      return;
    }

    res.status(200).json(documentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;