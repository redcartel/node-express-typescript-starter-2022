import express from 'express';
import getRoot from 'src/controllers/root/getRoot';
import postRoot from 'src/controllers/root/postRoot';

const root = express.Router();

root.get('/', getRoot);
root.post('/', postRoot);

export default root;