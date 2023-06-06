export const onboardingPages = [
  {
    step: 'get-started',
    title: 'Welcome to Homies',
    description:
      'Please enter the email address of the individual that will be utilizing the Homies program. \n\nThis will be the email you use to login. \n\nIf you already have an account, please enter your email below.',
    blocks: [
      {
        question: 'Email Address',
        placeholder: '',
        fieldName: 'email',
        fieldType: 'text',
        options: null,
        rules: {
          required: 'Email address is required',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Invalid email address',
          },
        },
        dbField: 'user_email',
      },
    ],
  },
  {
    step: 'login',
    title: 'Check Your Email',
    description:
      'Please enter the 6-digit code sent to your email address. The code was sent to {{email}}.',
    blocks: [
      {
        question: 'Enter code:',
        placeholder: '000000',
        fieldName: 'code',
        fieldType: 'text',
        options: null,
        rules: {
          required: 'Please enter the code',
        },
        dbField: 'code',
      },
    ],
  },
  {
    step: 'name',
    title: 'Full Name',
    description:
      'Please enter the name of the individual that will be utilizing the Homies program.',
    blocks: [
      {
        question: 'What is your name?',
        placeholder: 'John Appleseed',
        fieldName: 'name',
        autoFocus: true,
        fieldType: 'text',
        options: null,
        rules: { required: 'Name is required' },
        dbField: 'user_name',
      },
    ],
  },
  {
    step: 'phone',
    title: 'Phone Number',
    description: 'Please enter the phone number we can reach you at.',
    blocks: [
      {
        question: 'What is your phone number?',
        placeholder: '(951) 456-7890',
        fieldName: 'phone',
        fieldType: 'text',
        options: null,
        rules: { required: 'Phone number is required' },
        dbField: 'user_phone',
      },
    ],
  },
  {
    step: 'gender',
    title: 'How do you identify?',
    description: 'Select the gender you identify with.',
    blocks: [
      {
        question: 'What is your gender?',
        fieldName: 'gender',
        fieldType: 'radio',
        options: [
          { label: 'Male', value: 'Male' },
          { label: 'Female', value: 'Female' },
          { label: 'Non-Binary', value: 'Non-Binary' },
          { label: 'Prefer not to say', value: 'Prefer not to say' },
          { label: 'Other...', value: 'other' },
        ],
        rules: { required: 'Gender selection is required' },
        dbField: 'user_gender',
      },
    ],
  },
  {
    step: 'address',
    title: 'Current Address',
    description:
      'Let us know where you currently live so we can send you information about the Homies program.',
    blocks: [
      {
        question: 'Address',
        fieldName: 'address1',
        fieldType: 'text',
        options: null,
        rules: { required: 'Address is required' },
        dbField: 'address1',
      },
      {
        question: 'Apt, suite, etc. (optional)',
        fieldName: 'address2',
        fieldType: 'text',
        options: null,
        dbField: 'address2',
      },
      {
        question: 'City',
        fieldName: 'city',
        fieldType: 'text',
        options: null,
        rules: { required: 'City is required' },
        dbField: 'user_city',
      },
      {
        question: 'State',
        fieldName: 'state',
        fieldType: 'select',
        options: [
          { label: 'Alabama', value: 'AL' },
          { label: 'Alaska', value: 'AK' },
          { label: 'Arizona', value: 'AZ' },
          { label: 'Arkansas', value: 'AR' },
          { label: 'California', value: 'CA' },
          { label: 'Colorado', value: 'CO' },
          { label: 'Connecticut', value: 'CT' },
          { label: 'Delaware', value: 'DE' },
          { label: 'Florida', value: 'FL' },
          { label: 'Georgia', value: 'GA' },
          { label: 'Hawaii', value: 'HI' },
          { label: 'Idaho', value: 'ID' },
          { label: 'Illinois', value: 'IL' },
          { label: 'Indiana', value: 'IN' },
          { label: 'Iowa', value: 'IA' },
          { label: 'Kansas', value: 'KS' },
          { label: 'Kentucky', value: 'KY' },
          { label: 'Louisiana', value: 'LA' },
          { label: 'Maine', value: 'ME' },
          { label: 'Maryland', value: 'MD' },
          { label: 'Massachusetts', value: 'MA' },
          { label: 'Michigan', value: 'MI' },
          { label: 'Minnesota', value: 'MN' },
          { label: 'Mississippi', value: 'MS' },
          { label: 'Missouri', value: 'MO' },
          { label: 'Montana', value: 'MT' },
          { label: 'Nebraska', value: 'NE' },
          { label: 'Nevada', value: 'NV' },
          { label: 'New Hampshire', value: 'NH' },
          { label: 'New Jersey', value: 'NJ' },
          { label: 'New Mexico', value: 'NM' },
          { label: 'New York', value: 'NY' },
          { label: 'North Carolina', value: 'NC' },
          { label: 'North Dakota', value: 'ND' },
          { label: 'Ohio', value: 'OH' },
          { label: 'Oklahoma', value: 'OK' },
          { label: 'Oregon', value: 'OR' },
          { label: 'Pennsylvania', value: 'PA' },
          { label: 'Rhode Island', value: 'RI' },
          { label: 'South Carolina', value: 'SC' },
          { label: 'South Dakota', value: 'SD' },
          { label: 'Tennessee', value: 'TN' },
          { label: 'Texas', value: 'TX' },
          { label: 'Utah', value: 'UT' },
          { label: 'Vermont', value: 'VT' },
          { label: 'Virginia', value: 'VA' },
          { label: 'Washington', value: 'WA' },
          { label: 'West Virginia', value: 'WV' },
          { label: 'Wisconsin', value: 'WI' },
          { label: 'Wyoming', value: 'WY' },
        ],
        rules: { required: 'State selection is required' },
        dbField: 'user_state',
      },
      {
        question: 'Zip Code',
        fieldName: 'zip',
        fieldType: 'text',
        options: null,
        rules: { required: 'Zip Code is required' },
        dbField: 'user_zip',
      },
    ],
  },
  {
    step: 'regional-center',
    title: 'Regional Center',
    description:
      'Select the regional center you work with in California. If you\'re not sure which regional center you work with, please select "Not sure".',
    blocks: [
      {
        question: 'Select your Regional Center',
        fieldName: 'regionalCenter',
        fieldType: 'select',
        options: [
          {
            label: 'Alta California Regional Center',
            value: 'Alta California Regional Center',
          },
          {
            label: 'Central Valley Regional Center',
            value: 'Central Valley Regional Center',
          },
          {
            label: 'Eastern Los Angeles Regional Center',
            value: 'Eastern Los Angeles Regional Center',
          },
          {
            label: 'Far Northern Regional Center',
            value: 'Far Northern Regional Center',
          },
          {
            label: 'Golden Gate Regional Center',
            value: 'Golden Gate Regional Center',
          },
          { label: 'Harbor Regional Center', value: 'Harbor Regional Center' },
          { label: 'Inland Regional Center', value: 'Inland Regional Center' },
          { label: 'Kern Regional Center', value: 'Kern Regional Center' },
          {
            label: 'Lanterman Regional Center',
            value: 'Lanterman Regional Center',
          },
          {
            label: 'North Bay Regional Center',
            value: 'North Bay Regional Center',
          },
          {
            label: 'North Los Angeles County Regional Center',
            value: 'North Los Angeles County Regional Center',
          },
          {
            label: 'Orange County Regional Center',
            value: 'Orange County Regional Center',
          },
          {
            label: 'Redwood Coast Regional Center',
            value: 'Redwood Coast Regional Center',
          },
          {
            label: 'Regional Center of the East Bay',
            value: 'Regional Center of the East Bay',
          },
          {
            label: 'San Andreas Regional Center',
            value: 'San Andreas Regional Center',
          },
          {
            label: 'San Diego Regional Center',
            value: 'San Diego Regional Center',
          },
          {
            label: 'San Gabriel/Pomona Regional Center',
            value: 'San Gabriel/Pomona Regional Center',
          },
          {
            label: 'South Central Los Angeles Regional Center',
            value: 'South Central Los Angeles Regional Center',
          },
          {
            label: 'Tri-Counties Regional Center',
            value: 'Tri-Counties Regional Center',
          },
          {
            label: 'Valley Mountain Regional Center',
            value: 'Valley Mountain Regional Center',
          },
          {
            label: 'Westside Regional Center',
            value: 'Westside Regional Center',
          },
          {
            label: `Not sure`,
            value: 'unknown',
          },
          {
            label: `Other...`,
            value: 'other',
          },
        ],
        rules: { required: 'Regional center selection is required' },
        dbField: 'regional_center',
      },
      {
        showIf: { fieldName: 'regionalCenter', value: 'other' },
        // question: 'Other Regional Center',
        description:
          'Since you selected "Other" above, please enter your regional center here.',
        rules: { required: 'Please fill out this field' },
        fieldName: 'otherRegionalCenter',
        fieldType: 'text',
        dbField: 'regionalCenter',
      },
    ],
  },
  {
    step: 'lifestyle',
    title: 'Lifestyle & Habits',
    description:
      'We need this information to find the perfect roommate for you to match your lifestyle and habits.',
    blocks: [
      {
        question: 'Do you smoke?',
        fieldName: 'smoke',
        fieldType: 'radio',
        rules: { required: 'Please select an option' },
        options: [
          { label: 'Yes', value: 'Yes' },
          { label: 'No', value: 'No' },
          { label: 'Sometimes', value: 'Sometimes' },
        ],
        dbField: 'smoke',
      },
      {
        question: 'Do you drink alcohol?',
        fieldName: 'alcohol',
        fieldType: 'radio',
        rules: { required: 'Please select an option' },
        options: [
          { label: 'Yes', value: 'Yes' },
          { label: 'No', value: 'No' },
          { label: 'Sometimes', value: 'Sometimes' },
        ],
        dbField: 'alcohol',
      },
      {
        question: 'How often do you clean your living space?',
        fieldName: 'cleaning',
        fieldType: 'radio',
        rules: { required: 'Please select an option' },
        options: [
          { label: 'Daily', value: 'daily' },
          { label: 'Weekly', value: 'weekly' },
          { label: 'Monthly', value: 'monthly' },
          { label: 'Every once in awhile', value: 'sometimes' },
          { label: `I don't clean`, value: 'none' },
        ],
        dbField: 'alcohol',
      },
      {
        question: 'What time do you usually go to bed?',
        fieldName: 'bedtime',
        fieldType: 'radio',
        rules: { required: 'Please select an option' },
        options: [
          { label: 'Early bird (early to bed, early to rise)', value: 'early' },
          { label: 'Night owl (late to bed, late to rise)', value: 'late' },
          {
            label: 'It varies (sometimes early, sometimes late)',
            value: 'varies',
          },
        ],
        dbField: 'alcohol',
      },
    ],
  },
  {
    step: 'pets',
    title: 'Pets & Animals',
    description:
      'We need this information to find the perfect roommate for you to match your lifestyle and habits.',
    blocks: [
      {
        question: 'Do you have any pets?',
        fieldName: 'pets',
        fieldType: 'radio',
        rules: { required: 'Please select an option' },
        options: [
          { label: 'Yes', value: 'Yes' },
          { label: 'No', value: 'No' },
        ],
        dbField: 'pets',
      },
      {
        showIf: { fieldName: 'pets', value: 'Yes' },
        question: 'Share a little about your pets!',
        description: 'What kind of animals do you have? What are their names?',
        rules: { required: 'Please tell us about your pets' },
        fieldName: 'petsDescription',
        fieldType: 'textarea',
        dbField: 'petsDescription',
      },
      {
        question: 'Are you open to living with someone who has pets?',
        fieldName: 'openPets',
        rules: { required: 'Please select an option' },
        fieldType: 'radio',
        options: [
          { label: 'Yes, I love all pets', value: 'yes' },
          { label: 'Yes, but only dogs', value: 'yes-dogs' },
          { label: 'Yes, but only cats', value: 'yes-cats' },
          {
            label: 'Yes, but only under certain circumstances',
            value: 'yes-other',
          },
          { label: 'No', value: 'no' },
        ],
        dbField: 'openPets',
      },
    ],
  },
];

// formatting

const formatting = {
  step: 'lifestyle',
  title: 'Lifestyle/Habits',
  description:
    'We need this information to find the perfect roommate for you to match your lifestyle and habits.',
  blocks: [
    {
      question: 'Do you smoke?',
      fieldName: 'smoke',
      fieldType: 'radio',
      options: [
        { label: 'Yes', value: 'Yes' },
        { label: 'No', value: 'No' },
        { label: 'Sometimes', value: 'Sometimes' },
      ],
      dbField: 'smoke',
    },
    {
      question: 'Do you drink alcohol?',
      fieldName: 'alcohol',
      fieldType: 'text',
      options: null,
    },
    {
      question: 'How often do you clean your living space?',
      fieldName: 'cleaning',
      fieldType: 'select',
      options: [
        { label: 'Daily', value: 'daily' },
        { label: 'Weekly', value: 'weekly' },
        { label: 'Monthly', value: 'monthly' },
      ],
    },
  ],
};
