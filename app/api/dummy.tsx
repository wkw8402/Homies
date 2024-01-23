export default async function handler(req, res) {
  if (req.method === 'PUT') {
    const { content } = req.body;

    return res.status(201).json(content);
  }

  if (req.method === 'GET') {
    const { content } = req.body;

    return res.status(200).json(content);
  }

  if (req.method === 'POST') {
    const { content } = req.body;

    return res.status(200).json(content);
  }

  if (req.method === 'DELETE') {
    const { content } = req.body;

    return res.status(204).json({});
  }
}
