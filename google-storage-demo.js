const { Storage } = require("@google-cloud/storage");

const storage = new Storage();
const bucketName = "images-55-test";
const filePath = "./tmp/img_avatar.png";
const destFileName = "img_avatar.jpeg";

const downloadFilePath = "img_avatar.jpeg";
const downloadDestination = "./tmp/downloaded_image.png";

async function launchDemo() {
  // Uploading
  //   await storage.bucket(bucketName).upload(filePath, {
  //     destination: destFileName,
  //   });

  //   console.log(`${filePath} uploaded to ${bucketName}`);

  // Downloading
  await storage.bucket(bucketName).file(downloadFilePath).download({
    destination: downloadDestination,
  });

  console.log(
    `gs://${bucketName}/${downloadFilePath} downloaded to ${downloadDestination}.`
  );
}

// launchDemo().catch(console.error);
