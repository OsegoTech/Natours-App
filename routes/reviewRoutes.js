const reviewController = require('../controllers/reviewController');
const express = require('express');
const router = express.Router({ mergeParams: true });
const authController = require('../controllers/authController');


router.use(authController.protect);
router
  .route('/')
  .get(reviewController.getAllReviews)
  .post(
    authController.restictTo('user'),
    reviewController.setTourUserIds,
    reviewController.createReview
  );

router
  .route('/:id')
  .get(reviewController.getReview)
  .delete(authController.restictTo('user', 'admin'), reviewController.deleteReview)
  .patch(authController.restictTo('user', 'admin'), reviewController.updateReview);

module.exports = router;
