const router = require('express').Router();

const {
    getUser,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controllers/userController');

// get all and post
router.route('/').get(getUser).post(createUser);

// get one user, put and delete user's id
router.route('/:userId')
.get(getSingleUser)
.put(updateUser)
.delete(deleteUser);

// post and delete a friend by id
router.route('/:userId/friends/:friendId')
.post(addFriend)
.delete(deleteFriend);

module.exports = router;