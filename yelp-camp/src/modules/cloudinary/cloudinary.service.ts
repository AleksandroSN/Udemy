import { Injectable } from "@nestjs/common";
import { IMAGE_EXTENSIONS } from "@shared";
import { v2, UploadApiErrorResponse, UploadApiResponse } from "cloudinary";
import { Readable } from "stream";

@Injectable()
export class CloudinaryService {
  async uploadImage(
    file: Express.Multer.File,
    folder: string,
  ): Promise<UploadApiResponse | UploadApiErrorResponse> {
    return new Promise((resolve, reject) => {
      const upload = v2.uploader.upload_stream(
        {
          folder,
          allowed_formats: IMAGE_EXTENSIONS,
          overwrite: true,
          unique_filename: true,
        },
        (err, result) => {
          if (err) return reject(err);
          return resolve(result);
        },
      );

      Readable.from(file.buffer).pipe(upload);
    });
  }
}
