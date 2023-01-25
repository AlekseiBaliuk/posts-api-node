const express = require('express');
const multer = require('multer');
const path = require('path');
const { v4: uuid } = require('uuid');
// const { randomUUID } = require("crypto");

const FILE_DIR = path.resolve('./tmp');
const router = new express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, FILE_DIR);
  },
  filename: (req, file, cb) => {
    const [, extension] = file.originalname.split('.');
    cb(null, `${uuid()}.${extension}`);
  },
});

const uploadMiddleware = multer({storage});

const {asyncWrapper} = require('../helpers/apiHelpers');

const {uploadController} = require('../controllers/filesController');

router.post('/upload', uploadMiddleware.single('avatar'), asyncWrapper(uploadController));

router.use('/download', express.static(FILE_DIR));

module.exports = {filesRouter: router};
