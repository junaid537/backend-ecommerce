const router = require("express").Router();

const {
  getReviewsById,
  postReviewByProductId,
} = require("../controllers/reviewController");

router.get("/:product_id/reviews", getReviewsById);

router.post("/:product_id/reviews/create", postReviewByProductId);

module.exports = router;


