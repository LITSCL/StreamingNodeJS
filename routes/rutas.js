const { Router } = require("express");
const router = Router();

router.get("/", function(request, response) {
    response.redirect("emisor.html"); //Aca se redirecciona al usuario.
});

module.exports = router;