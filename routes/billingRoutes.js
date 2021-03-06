const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecretKey);
const requireLogin = require("../middlewares/requireLogin");

module.exports = (app) => {
  app.post("/api/stripe", requireLogin, async (req, res) => {
    console.log(req.body.id);
    const charge = await stripe.charges.create({
      amount: 500,
      currency: "usd",
      description: "Compra de medicamentos online",
      source: req.body.id,
    });

    req.user.credits += 1;
    const user = await req.user.save();
    res.send(user);
  });
};
