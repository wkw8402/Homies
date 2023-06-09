export const onboardingPages = [
  {
    step: 'get-started',
    title: 'Welcome to Homies!',
    description:
      'Homies is a program that helps individuals with disabilities find a more independent living situation. \n\nWe pair people with disabilities with a friend, family member or compatible supportive roommate. \n\nWe are excited to help you get started!',
    blocks: [
      {
        question: 'I am signing up as a...',
        placeholder: '',
        fieldName: 'user_type',
        blockType: 'radio',
        options: [
          {
            label: 'Neurodivergent individual',
            description:
              'Select this option if you are signing up for a loved one.',
            value: 'homie',
          },
          {
            label: 'Caregiver roommate, family member or friend',
            description:
              'I want to take care of and live with a neurodivergent individual.',
            value: 'supporter',
          },
        ],
        rules: {
          required: 'Please select an option',
        },
        dbField: 'user_type',
      },
    ],
  },
  {
    step: 'get-started/account',
    title: "Let's Create Your Account",
    isAuth: true,
    description:
      'Please enter the email address of the individual that will be utilizing the Homies program. \n\nThis will be the credentials you use to log in.',
    blocks: [
      {
        question: 'Email Address',
        placeholder: 'name@example.com',
        fieldName: 'email',
        blockType: 'email',
        description: "We'll send you updates via email about your application.",
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
      {
        question: 'Create a Password',
        placeholder: '********',
        description: 'Your password must be at least 8 characters.',
        fieldName: 'password',
        blockType: 'password',
        options: null,
        rules: {
          required: 'Password is required',
          minLength: {
            value: 8,
            message: 'Password must be at least 8 characters',
          },
        },
        dbField: 'user_pass',
      },
    ],
  },
  // {
  //   step: 'login',
  //   title: 'Check Your Email',
  //   description:
  //     'Please enter the 6-digit code sent to your email address. The code was sent to {{email}}.',
  //   blocks: [
  //     {
  //       question: 'Enter Code',
  //       placeholder: '000000',
  //       fieldName: 'code',
  //       blockType: 'text',
  //       options: null,
  //       rules: {
  //         required: 'Please enter the code',
  //       },
  //       dbField: 'code',
  //     },
  //   ],
  // },
  {
    step: 'name',
    title: 'Your Full Name',
    disableBack: true,
    description:
      'Please enter the name of the individual that will be utilizing the Homies program.',
    blocks: [
      {
        question: 'What is your name?',
        placeholder: 'John Appleseed',
        fieldName: 'name',
        autoFocus: true,
        blockType: 'text',
        options: null,
        rules: { required: 'Your name is required' },
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
        blockType: 'text',
        options: null,
        rules: { required: 'Phone number is required' },
        dbField: 'user.phone',
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
        blockType: 'radio',
        options: [
          { label: 'Male', value: 'male' },
          { label: 'Female', value: 'female' },
          { label: 'Transgender Male', value: 'transgender-male' },
          { label: 'Transgender Female', value: 'transgender-female' },
          { label: 'Non-binary', value: 'non-binary' },
          { label: 'Prefer not to say', value: 'private' },
          { label: 'Other...', value: 'other' },
        ],
        rules: { required: 'Gender selection is required' },
        dbField: 'profile.gender',
      },
      {
        showIf: { fieldName: 'gender', value: 'other' },
        // question: 'Other Regional Center',
        description:
          'Since you selected "Other" above, please enter your gender here.',
        rules: { required: 'Please fill out this field' },
        fieldName: 'otherGender',
        blockType: 'text',
        dbField: 'profile.gender',
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
        blockType: 'text',
        options: null,
        rules: { required: 'Address is required' },
        dbField: 'address1',
      },
      {
        question: 'Apt, suite, etc. (optional)',
        fieldName: 'address2',
        blockType: 'text',
        options: null,
        dbField: 'address2',
      },
      {
        question: 'City',
        fieldName: 'city',
        blockType: 'text',
        options: null,
        rules: { required: 'City is required' },
        dbField: 'user_city',
      },
      {
        question: 'State',
        fieldName: 'state',
        blockType: 'select',
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
        blockType: 'text',
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
        blockType: 'select',
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
        blockType: 'text',
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
        question: 'What are your hobbies & interests?',
        description: "Select as many as you'd like.",
        fieldName: 'interests',
        blockType: 'chips',
        defaultValue: [],
        rules: { required: 'Select your favorite hobbies & interests' },
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
          'Since you selected "Other" above, please enter your other hobbies & interests.',
        rules: { required: 'Please fill out this field' },
        fieldName: 'otherInterests',
        blockType: 'textarea',
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
        blockType: 'radio',
        rules: { required: 'Please select an option' },
        options: [
          { label: 'Yes', value: 'yes' },
          { label: 'No', value: 'no' },
        ],
        dbField: 'smoke',
      },
      {
        question: 'Do you drink alcohol?',
        fieldName: 'alcohol',
        blockType: 'radio',
        rules: { required: 'Please select an option' },
        options: [
          { label: 'Yes', value: 'yes' },
          { label: 'No', value: 'no' },
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
        blockType: 'radio',
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
        blockType: 'radio',
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
        blockType: 'radio',
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
        question: 'Gender Preference (optional)',
        description: 'Do you prefer your roommate to be a specific gender?',
        fieldName: 'roommatePreferences',
        blockType: 'checkbox',
        defaultValue: [],
        options: [
          { label: 'Male', value: 'male' },
          { label: 'Female', value: 'female' },
          { label: 'Transgender Male', value: 'transgender-male' },
          { label: 'Transgender Female', value: 'transgender-female' },
          { label: 'Non-binary', value: 'non-binary' },
          { label: 'No preference', value: 'no-preference' },
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
        blockType: 'radio',
        rules: { required: 'Please select an option' },
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
        blockType: 'radio',
        rules: { required: 'Please select an option' },
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
        rules: { required: 'Please select an option' },
        blockType: 'radio',
        options: [
          {
            label: 'Discuss the issue directly but respectfully',
            value: 'discuss',
          },
          { label: 'Avoid confrontation, keep it to myself', value: 'avoid' },
          {
            label: 'Seek help from a mediator or third-party intervention',
            value: 'mediator',
          },
        ],
        dbField: 'conflictResolution',
      },
      {
        question:
          "What's your preferred method of communication for important matters?",
        fieldName: 'communicationMethod',
        rules: { required: 'Please select an option' },
        blockType: 'radio',
        options: [
          { label: 'Discuss face to face', value: 'faceToFace' },
          { label: 'Talk on the phone', value: 'phoneCall' },
          { label: 'Text message or email', value: 'textEmail' },
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
        blockType: 'radio',
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
        blockType: 'textarea',
        dbField: 'petsDescription',
      },
      {
        question: 'Are you okay living with someone who has a pet?',
        fieldName: 'openPets',
        rules: { required: 'Please select an option' },
        blockType: 'radio',
        options: [
          { label: 'Yes', value: 'yes' },
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
      blockType: 'radio',
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
      blockType: 'text',
      options: null,
    },
    {
      question: 'How often do you clean your living space?',
      fieldName: 'cleaning',
      blockType: 'select',
      options: [
        { label: 'Daily', value: 'daily' },
        { label: 'Weekly', value: 'weekly' },
        { label: 'Monthly', value: 'monthly' },
      ],
    },
  ],
};
