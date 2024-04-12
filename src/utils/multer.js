import multer, { diskStorage } from "multer";

export const fileUpload = () => {
  return multer({ storage: diskStorage({}) });
};
