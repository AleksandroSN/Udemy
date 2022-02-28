import { applyDecorators, UseInterceptors } from "@nestjs/common";
import { FileInterceptor, FilesInterceptor } from "@nestjs/platform-express";
import { MulterOptions } from "@nestjs/platform-express/multer/interfaces/multer-options.interface";

export const Uploader = (fieldName: string, options?: MulterOptions) => {
  const maxCount = 3;
  if (fieldName === "image") {
    return applyDecorators(UseInterceptors(FileInterceptor(fieldName, options)));
  }
  return applyDecorators(UseInterceptors(FilesInterceptor(fieldName, maxCount, options)));
};
