import { Request, Response } from "express";

/**
 * Echo endpoint
 */
const postRoot = (req : Request, res : Response) => {
    const json = req.body;
    res.json(json);
}

export default postRoot;