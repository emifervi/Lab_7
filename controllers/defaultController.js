const defaultRoute = (_, res) => {
  return res.send({
    "error": 'La ruta especificada no es válida'
  });
};

module.exports = defaultRoute;