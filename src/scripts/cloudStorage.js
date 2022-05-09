// NPM packages
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

// Project files
import { cloudStorageInstance } from "scripts/firebase";
import readImage from "./upload-image/readImage";
import resizeImage from "./upload-image/resizeImage";
import dataUrlToFile from "./upload-image/dataUrlToFile";

export async function uploadFile(file, filename = "new-file") {
  const storageReference = ref(cloudStorageInstance, filename);
  await uploadBytes(storageReference, file);

  return await getDownloadURL(storageReference);
}

export async function uploadImage(event, filename) {
  const file = event.target.files[0];
  const originalImage = await readImage(file);
  const resizedImaged = await resizeImage(originalImage, 80, 80);
  const imageForFirebase = await dataUrlToFile(
    resizedImaged,
    `${filename}.png`
  );
  const newImageURL = await uploadFile(imageForFirebase, filename);

  return newImageURL;
}
