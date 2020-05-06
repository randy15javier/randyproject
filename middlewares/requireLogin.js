module.exports = (req, res, next) => {
  if (!req.user) {
    return res.status(401).send({ error: "Debes hacer login" });
  }
  // Si no hay problemas puede continuar
  next();
};
