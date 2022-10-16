
export const verificaUsuario = (req, res, next) => {
  const { usuario } = req.body;

  if (usuario === "rafael") {
    return next();
  }

  return res.status(400).json({ usuario: `Usuário: ${usuario} não encontrado!`})
}

