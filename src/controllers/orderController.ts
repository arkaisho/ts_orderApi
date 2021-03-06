import { getRepository } from "typeorm";
import { Request, Response } from "express";
import Order from "../entity/order";

const index = async (req: Request, res: Response) => {
  return res.json(await getRepository(Order).find());
};
const show = async (req: Request, res: Response) => {
  return res.json(await getRepository(Order).findOne(req.params.id));
};
const create = async (req: Request, res: Response) => {
  const order = getRepository(Order).create(req.body);
  const result = await getRepository(Order).save(order);
  return res.json(result);
};
const update = async (req: Request, res: Response) => {
  const order = await getRepository(Order).findOne(req.params.id);
  getRepository(Order).merge(order, req.body);
  const results = await getRepository(Order).save(order);
  return res.send(results);
};
const destroy = async (req: Request, res: Response) => {
  return res.json(await getRepository(Order).delete(req.params.id));
};

export default { index, show, create, update, destroy };
