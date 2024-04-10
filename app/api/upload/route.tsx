import { NextApiRequest, NextApiResponse } from 'next';
import { S3, PutObjectCommand } from '@aws-sdk/client-s3';

// Configure the S3 client
const s3Client = new S3({
  forcePathStyle: true, // Recommended for compatibility with non-AWS S3 services
  endpoint: process.env.SPACES_ENDPOINT,
  region: 'us-east-1',
  credentials: {
    accessKeyId: process.env.SPACES_KEY ?? '',
    secretAccessKey: process.env.SPACES_SECRET ?? '',
  },
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log('API Route hit');
  if (req.method === 'POST') {
    try {
      // Assuming the request's body is already parsed to handle file data.
      // This part might need adjustment based on how you're actually handling multipart/form-data in Next.js.
      const { file } = req.body;

      if (!file) {
        return res.status(400).json({ message: 'No file uploaded or invalid file type.' });
      }

      // This is a placeholder; you'll need to implement actual file handling logic
      // For example, using a Node.js library to parse the incoming form data

      // Upload the file to S3/DigitalOcean Spaces
      const filename = `uploads/${Date.now()}-${file.name}`;
      const data = await s3Client.send(
        new PutObjectCommand({
          Bucket: process.env.SPACES_NAME ?? '', // Make sure SPACES_NAME is defined
          Key: filename,
          Body: file, // This should be a buffer or a stream
        })
      );

      res.status(200).json({ message: 'File uploaded successfully', data });
    } catch (error) {
      console.error('Upload error:', error);
      res.status(500).json({ message: 'Upload failed', error });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
