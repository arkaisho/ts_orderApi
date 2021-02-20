import { getRepository } from "typeorm";
import { Request, Response } from "express";
import { sign, verify } from "jsonwebtoken";

const login = async (req: Request, res: Response) => {
  if (
    (req.body.user === process.env.LOGIN_USERNAME,
    req.body.password === process.env.LOGIN_PASSWORD)
  ) {
    const id = 1;
    const token = sign({ id }, process.env.JWT_KEY, { expiresIn: 3600 });
    return res.json({ auth: true, token: token });
  }
  res.status(500).json({ message: "Login inválido." });
};

const verifyJWT = async (req: Request, res: Response, next) => {
  const token = req.headers["token"];
  if (!token)
    return res
      .status(401)
      .json({ auth: false, message: "Nenhum token informado." });

  verify(token.toString(), process.env.JWT_KEY, function (err, decoded) {
    if (err)
      return res
        .status(500)
        .json({ auth: false, message: "Token invalido." });

    req.body.userId = decoded["id"];
    next();
  });
};

export default { login, verifyJWT };
