const router = require('express').Router()
const user_controller = require('../controllers/user_controller')

router.route('/outline')
    .get(user_controller.get_user_outline)

router.route("/content")
    .get(user_controller.get_content)

module.exports = router