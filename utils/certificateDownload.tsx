import fileDownload from "js-file-download";

import { DownloadCertificate } from "../api/courses";

export const downloadCertificate = async (
  courseId: string,
  courseName: string,
): Promise<void> => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await DownloadCertificate(courseId);
      fileDownload(data, `CERTYFIKAT_${courseName}.pdf`);
      resolve();
    } catch (err) {
      reject(err);
    }
  });
};
