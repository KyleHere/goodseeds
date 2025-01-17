const express = require('express');
const router = express.Router();
const db = require('../db/models');
const { csrfProtection, asyncHandler } = require('./utils');
const { requireAuth } = require('../auth');

router.use(requireAuth)

//displays shelf: with: comments, plants associated with this shelf
router.get('/:id', csrfProtection, asyncHandler(async(req, res, next) => {
    const shelf = await db.Shelf.findByPk(req.params.id);
    if(shelf == null) {
      res.redirect('/404')
    }
    const comments = await db.Comment.findAll({
      where: {
        shelfId: req.params.id
      },
      include: db.User
    })

    const plantsToShelves = await db.PlantToShelf.findAll({
      where: {
        shelfId: shelf.id
      },
      include: {
        model: db.Plant
      }
    })

    const user = res.locals.user

    if(shelf == null ) {
      res.redirect('/404')
    }
    res.render('shelf', { plantsToShelves, shelf, comments, user, csrfToken: req.csrfToken()  })
}))

//This is the AJAX call for comments
router.post('/:id', asyncHandler(async(req,res,next) => {
  const comment = req.body.comment;
  const userId = req.session.auth.userId


  const newComment = db.Comment.build({
    commentText: comment,
    userId: userId,
    shelfId: req.params.id,
    likeCount: 0,
    createdAt: new Date(),
    updatedAt: new Date()
  })
  await newComment.save();
  const listOfComments = db.Comment.findAll({
    where: {shelfId: req.params.id}
  })

 res.json(newComment)


}))

// delete form to delete association of plants to shelf in the PlantstoShelves table in database
router.get('/planttoshelf/:id', csrfProtection, asyncHandler(async(req, res, next) => {
  const referenceId = parseInt(req.params.id, 10);
  const reference = await db.PlantToShelf.findByPk(referenceId);
  if(reference == null) {
    res.redirect('/404')
  }
  const shelf = await db.Shelf.findByPk(reference.shelfId);
  if(shelf == null) {
    res.redirect('/404')
  }
  const userId = req.session.auth.userId

  if(shelf.userId.toString() !== userId.toString()) {
    res.redirect('/404')
  }

  res.render('deleteplanttoshelf', {reference, csrfToken: req.csrfToken()})
}))

//when you click delete button on this form, you delete the association of plants to shelf in the PlantstoShelves table in database
router.post('/planttoshelf/:id', csrfProtection, asyncHandler(async(req, res, next) => {
  const referenceId = parseInt(req.params.id, 10);
  const reference = await db.PlantToShelf.findByPk(referenceId);
  const plant = await db.Plant.findByPk(reference.plantId);
  const shelf = await db.Shelf.findByPk(reference.shelfId);
  const shelfIdcloneToReferenceLater = reference.shelfId

  await reference.destroy();
  res.redirect(`/shelves/${shelfIdcloneToReferenceLater}`)
}));

// delete form to delete shelf in the Shelves table in database
router.get('/delete-shelf/:id', csrfProtection, asyncHandler(async(req, res, next) => {
  const shelfId = parseInt(req.params.id, 10);
  const shelf = await db.Shelf.findByPk(shelfId);
  const userId = req.session.auth.userId

  if(shelf == null || shelf.userId.toString() !== userId.toString()) {
    res.render('404')
    return
  }

  res.render('delete-shelf', {shelf, shelfId, csrfToken: req.csrfToken()})
}))
//once you click delete shelf on the seperate form
router.post('/delete-shelf/:id', csrfProtection, asyncHandler(async(req, res, next) => {
  const shelfId = parseInt(req.params.id, 10);
  const shelf = await db.Shelf.findByPk(shelfId);
  const userId = req.session.auth.userId
  const planttoshelf = await db.PlantToShelf.findAll({
    where: {
      shelfId: shelfId
    }
  })

  const comments = await db.Comment.findAll({
    where: {shelfId: shelfId}
  })


  for(let i=0; i < comments.length; i++) {
    let comment = comments[i]
    await comment.destroy();
  }

  for(let i=0; i < planttoshelf.length; i++) {
    let plants = planttoshelf[i]
    await plants.destroy();
  }

  await shelf.destroy()

  res.redirect(`/users/${userId}/shelves`)
}))

//building a shelf (derek helped, weird route, but it works (to be streamlined later))
router.post('/', csrfProtection, asyncHandler(async(req, res, next) => {
    const userId = req.session.auth.userId
    const user = await db.User.findByPk(userId);

    const {name} = req.body;

    const shelf = db.Shelf.build({
      userId,
      name
    })

      await shelf.save();
      const shelves = await db.Shelf.findAll({
        where: {
          userId: userId
        }
      });

    res.redirect(`users/${userId}/shelves`)
  }));

module.exports = router

