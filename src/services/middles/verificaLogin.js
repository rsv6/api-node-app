
export const verificaLogin = (req, res, next) => {
  const { login, senha } = req.body;

  if (login === "rsv" && senha === "123456") {

    next();
  } else {
    res.status(400).json({ usuario: `Usuário: '${login}'não encontrado!`})
  }
}

