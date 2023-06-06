export const onboardingPages = [
  {
    step: 'get-started',
    title: 'Welcome to Homies!',
    description:
      'Please enter the email address of the individual that will be utilizing the Homies program. \n\nThis will be the email you use to log in.',
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
        question: 'Enter Code',
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
    title: 'Your Full Name',
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
    step: 'about-you',
    title: 'About You',
    description:
      'We ask for this information so we can find a great roommate match for you.',
    blocks: [
      {
        question: 'What are your interests & hobbies?',
        description: "Select as many as you'd like.",
        fieldName: 'interests',
        fieldType: 'checkbox',
        defaultValue: [],
        rules: { required: 'Select your favorite interests and hobbies' },
        options: [
          ...[
            { label: 'Reading', value: 'reading' },
            { label: 'Exercising', value: 'exercising' },
            { label: 'Gaming', value: 'gaming' },
            { label: 'Cooking', value: 'cooking' },
            { label: 'Watching TV', value: 'watching_tv' },
            { label: 'Listening to Music', value: 'listening_to_music' },
            { label: 'Playing Music', value: 'playing_music' },
            { label: 'Sports', value: 'sports' },
            { label: 'Traveling', value: 'traveling' },
            { label: 'Shopping', value: 'shopping' },
            { label: 'Volunteering', value: 'volunteering' },
            { label: 'Socializing', value: 'socializing' },
          ].sort((a, b) => a.label.localeCompare(b.label)),
          { label: 'Other...', value: 'other' },
        ],
        dbField: 'interests',
      },
      {
        showIf: { fieldName: 'interests', value: 'other' },
        description:
          'Since you selected "Other" above, please enter your other interests.',
        rules: { required: 'Please fill out this field' },
        fieldName: 'otherInterests',
        fieldType: 'textarea',
        dbField: 'regionalCenter',
      },
    ],
  },
  {
    step: 'lifestyle/habits',
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
    ],
  },
  {
    step: 'lifestyle/daily',
    title: 'Lifestyle & Habits',
    description:
      'We need this information to find the perfect roommate for you to match your lifestyle and habits.',
    blocks: [
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
        dbField: 'cleaning',
      },
      {
        question: 'What is your sleep schedule like?',
        fieldName: 'sleepSchedule',
        fieldType: 'radio',
        rules: { required: 'Please select an option' },
        options: [
          {
            label: 'Early bird (awake early, sleep early)',
            value: 'earlyBird',
          },
          { label: 'Night owl (awake late, sleep late)', value: 'nightOwl' },
          { label: 'Mixed (varies daily)', value: 'mixed' },
        ],
        dbField: 'sleepSchedule',
      },
    ],
  },
  {
    step: 'lifestyle/social',
    title: 'Lifestyle & Habits',
    description:
      'We need this information to find the perfect roommate for you to match your lifestyle and habits.',
    blocks: [
      {
        question: 'Do you enjoy hosting gatherings or parties?',
        fieldName: 'parties',
        fieldType: 'radio',
        rules: { required: 'Please select an option' },
        options: [
          { label: 'Yes', value: 'Yes' },
          { label: 'No', value: 'No' },
          { label: 'Sometimes', value: 'Sometimes' },
        ],
        dbField: 'parties',
      },
    ],
  },
  {
    step: 'roommate-preferences/basics',
    title: 'Roommate Preferences',
    description:
      'Let us know your preferences to help find a compatible roommate.',
    blocks: [
      {
        question: 'Gender Preference (Select all that apply)',
        description: 'Do you prefer your roommate to be a specific gender?',
        fieldName: 'roommatePreferences',
        fieldType: 'checkbox',
        rules: { required: 'Please select an option' },
        defaultValue: [],
        options: [
          { label: 'Cis-Male', value: 'Male' },
          { label: 'Cis-Female', value: 'Female' },
          { label: 'Transgender Male', value: 'T-Male' },
          { label: 'Transgender Female', value: 'T-Female' },

          { label: 'Non-Binary', value: 'Non-Binary' },
          { label: 'No preference', value: 'No Preference' },
        ],
        dbField: 'roommate.gender',
      },
    ],
  },
  {
    step: 'roommate-preferences/sharing',
    title: 'Roommate Preferences',
    description:
      'Let us know your preferences to help find a compatible roommate.',
    blocks: [
      {
        question: 'How do you feel about guests?',
        fieldName: 'guests',
        fieldType: 'radio',
        options: [
          { label: 'The more the merrier', value: 'merrier' },
          { label: 'Occasional guests are fine', value: 'occasional' },
          { label: 'Prefer no guests', value: 'noGuests' },
        ],
        dbField: 'guests',
      },
      {
        question: 'Are you okay with sharing food or other items?',
        fieldName: 'sharing',
        fieldType: 'radio',
        options: [
          { label: "Yes, I don't mind sharing", value: 'yesSharing' },
          { label: 'Some things, but not all', value: 'someSharing' },
          { label: 'I prefer to keep my things separate', value: 'noSharing' },
        ],
        dbField: 'sharing',
      },
    ],
  },
  {
    step: 'roommate-preferences/conflict',
    title: 'Roommate Conflicts',
    description:
      'Let us know your preferences to help find a compatible roommate.',
    blocks: [
      {
        question:
          'How do you usually handle conflict or issues with roommates?',
        fieldName: 'conflictResolution',
        fieldType: 'radio',
        options: [
          {
            label: 'Discuss the issue directly but respectfully',
            value: 'discuss',
          },
          { label: 'Avoid confrontation, keep it to myself', value: 'avoid' },
          {
            label: 'Seek a mediator or third-party intervention',
            value: 'mediator',
          },
        ],
        dbField: 'conflictResolution',
      },
      {
        question:
          "What's your preferred method of communication for important matters?",
        fieldName: 'communicationMethod',
        fieldType: 'radio',
        options: [
          { label: 'Face to face conversation', value: 'faceToFace' },
          { label: 'Phone call', value: 'phoneCall' },
          { label: 'Text or email', value: 'textEmail' },
        ],
        dbField: 'communicationMethod',
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
