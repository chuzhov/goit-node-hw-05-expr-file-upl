const multer = require("multer");
const path = require("path");

const tempDir = path.join(
  __dirname,
  "../",
  "uploads"
);

const multerConfig = multer.diskStorage({
  destination: tempDir,
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const uploadAvatar = multer({
  storage: multerConfig,
});

module.exports = uploadAvatar;
