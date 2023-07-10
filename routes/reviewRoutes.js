const reviewController = require('../controllers/reviewController');
const express = require('express');
const router = express.Router({ mergeParams: true})
const authController = require('../controllers/authController');

router.route('/')
    .get(reviewController.getAllReviews)
    .post(
        authController.protect, 
        authController.restictTo('user'), 
        reviewController.createReview
        );

        router.route('/:id').delete(reviewController.deleteReview);


module.exports = router;