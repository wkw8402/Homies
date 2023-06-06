import { onboardingPages } from '../../../lib/onboardingPages';

let userDB = {
  completedSteps: [],
};

export default function handler(req, res) {
  // const allSteps = ['name', 'gender', 'address', 'city', 'state', 'zip'];
  const allSteps = onboardingPages.map((page) => page.step);

  if (req.method === 'GET') {
    const missingSteps = allSteps.filter(
      (step) => !userDB.completedSteps.includes(step)
    );

    res.status(200).json(missingSteps);
  } else if (req.method === 'POST') {
    const data = req.body;
    console.log(data);

    // Here we're updating our "database" when an address detail is submitted
    if (data) {
      // Simulate saving to DB. In a real-world scenario, you'd perform an actual DB operation here
      userDB.completedSteps.push(data);
      res.status(200).json({ message: `Successfully updated ${data}` });
    } else {
      res.status(400).json({ message: `Invalid step: ${data}` });
    }
  } else {
    res.status(405).json({ message: 'Only GET and POST methods are allowed' });
  }
}
