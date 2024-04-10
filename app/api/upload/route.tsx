import { NextApiRequest, NextApiResponse } from 'next';
import { S3, PutObjectCommand } from '@aws-sdk/client-s3';

const s3Client = new S3({
  forcePathStyle: true, 
  endpoint: process.env.SPACES_ENDPOINT,
  region: 'us-east-1',
  credentials: {
    accessKeyId: process.env.SPACES_KEY ?? '',
    secretAccessKey: process.env.SPACES_SECRET ?? '',
  },
});

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  console.log('API Route hit');
  try {
    // Handling the file upload logic
    const { file } = req.body;

    if (!file) {
      return res.status(400).json({ message: 'No file uploaded or invalid file type.' });
    }

    const filename = `uploads/${Date.now()}-${file.name}`;
    const data = await s3Client.send(
      new PutObjectCommand({
        Bucket: process.env.SPACES_NAME ?? '', // Ensure SPACES_NAME is defined
        Key: filename,
        Body: file,
      })
    );

    res.status(200).json({ message: 'File uploaded successfully', data });
  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({ message: 'Upload failed', error });
  }
}