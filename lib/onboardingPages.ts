export const onboardingPages = [
  {
    step: 'name',
    blocks: [
      {
        question: 'What is your full name?',
        placeholder: 'First Last',
        fieldName: 'name',
        fieldType: 'text',
        options: null,
        rules: { required: 'Name is required' },
        dbField: 'user_name',
      },
    ],
  },
  {
    step: 'gender',
    blocks: [
      {
        question: 'What is your gender?',
        fieldName: 'gender',
        fieldType: 'radio',
        options: [
          { label: 'Male', value: 'Male' },
          { label: 'Female', value: 'Female' },
          { label: 'Other', value: 'Other' },
        ],
        rules: { required: 'Gender selection is required' },
        dbField: 'user_gender',
      },
    ],
  },
  {
    step: 'address',
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
            value: 'Not sure',
          },
          {
            label: `Other`,
            value: 'Other',
          },
        ],
        rules: { required: 'Regional center selection is required' },
        dbField: 'regional_center',
      },
    ],
  },
];
