const defaultRoute = (_, res) => {
  res.send({
    "error": 'La ruta especificada no es válida'
  });
}

module.exports = defaultRoute;