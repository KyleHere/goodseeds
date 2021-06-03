const express = require('express');
const router = express.Router();
const db = require('../db/models');
const { asyncHandler } = require('./utils');

router.get('/', asyncHandler(async(req, res, next) => {
    const plants = await db.Plant.findAll();
    res.render('plants', { plants })
}))

router.get('/:id', asyncHandler(async(req, res, next) => {
    const plant = await db.Plant.findByPk(req.params.id);
    const reviews = await db.Review.findAll({
        where: {
            plantId: req.params.id
        },
        include: db.User
    })
    let avgRating = 0;
    if (reviews.length){
        const ratingsArray = []

        for (let i = 0 ; i < reviews.length; i++){
            ratingsArray.push(reviews[i].rating)
        }

        const ratingSum = ratingsArray.reduce((accum, el) => {
            return accum + el;
        })
        avgRating = ratingSum/ratingsArray.length
    }

    res.render('plants-id', { plant, reviews, avgRating } )
}));

router.get('/:id/reviews', asyncHandler(async(req, res) => {
    const plant = await db.Plant.findByPk(req.params.id);

    res.render('plants-id-reviews', { plant })
}))

router.post('/:id/reviews', asyncHandler(async(req, res) => {
    const plantId = req.params.id
    const userIdNum = parseInt(req.session.auth.userId, 10)
    const user = await db.User.findByPk(userIdNum)
    const userId = user.id
    // console.log("req.session.auth.userId", req.session.auth.userId);
    // const plant = await db.Plant.findByPk(req.params.id);
    const { reviewText, rating } = req.body;

    const newReview = db.Review.build({
        reviewText,
        rating,
        plantId,
        userId
    })

    await newReview.save();

    // res.render('plants-id', { plant, newReview })
    res.redirect(`/plants/${plantId}`)
}))



module.exports = router
