import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

export enum UserType {
  Homie = 'homie',
  Supporter = 'supporter',
}

export enum Gender {
  Male = 'male',
  Female = 'female',
  'Transgender Male' = 'transgender-male',
  'Transgender Female' = 'transgender-female',
  'Non-Binary' = 'non-binary',
  'Prefer not to say' = 'private',
  Other = 'other',
}

export enum State {
  Alabama = 'AL',
  Alaska = 'AK',
  Arizona = 'AZ',
  Arkansas = 'AR',
  California = 'CA',
  Colorado = 'CO',
  Connecticut = 'CT',
  Delaware = 'DE',
  Florida = 'FL',
  Georgia = 'GA',
  Hawaii = 'HI',
  Idaho = 'ID',
  Illinois = 'IL',
  Indiana = 'IN',
  Iowa = 'IA',
  Kansas = 'KS',
  Kentucky = 'KY',
  Louisiana = 'LA',
  Maine = 'ME',
  Maryland = 'MD',
  Massachusetts = 'MA',
  Michigan = 'MI',
  Minnesota = 'MN',
  Mississippi = 'MS',
  Missouri = 'MO',
  Montana = 'MT',
  Nebraska = 'NE',
  Nevada = 'NV',
  'New Hampshire' = 'NH',
  'New Jersey' = 'NJ',
  'New Mexico' = 'NM',
  'New York' = 'NY',
  'North Carolina' = 'NC',
  'North Dakota' = 'ND',
  Ohio = 'OH',
  Oklahoma = 'OK',
  Oregon = 'OR',
  Pennsylvania = 'PA',
  'Rhode Island' = 'RI',
  'South Carolina' = 'SC',
  'South Dakota' = 'SD',
  Tennessee = 'TN',
  Texas = 'TX',
  Utah = 'UT',
  Vermont = 'VT',
  Virginia = 'VA',
  Washington = 'WA',
  'West Virginia' = 'WV',
  Wisconsin = 'WI',
  Wyoming = 'WY',
}

export enum RegionalCenter {
  'Alta California' = 'Alta California Regional Center',
  'Central Valley' = 'Central Valley Regional Center',
  'Eastern Los Angeles' = 'Eastern Los Angeles Regional Center',
  'Far Northern' = 'Far Northern Regional Center',
  'Golden Gate' = 'Golden Gate Regional Center',
  Harbor = 'Harbor Regional Center',
  Inland = 'Inland Regional Center',
  Kern = 'Kern Regional Center',
  Lanterman = 'Lanterman Regional Center',
  'North Bay' = 'North Bay Regional Center',
  'North Los Angeles' = 'North Los Angeles County Regional Center',
  'Orange County' = 'Orange County Regional Center',
  'Redwood Coast' = 'Redwood Coast Regional Center',
  'East Bay' = 'Regional Center of the East Bay',
  'San Andreas' = 'San Andreas Regional Center',
  'San Diego' = 'San Diego Regional Center',
  'San Gabriel/Pomona' = 'San Gabriel/Pomona Regional Center',
  'South Central Los Angeles' = 'South Central Los Angeles Regional Center',
  'Tri-Counties' = 'Tri-Counties Regional Center',
  'Valley Mountain' = 'Valley Mountain Regional Center',
  'Westside' = 'Westside Regional Center',
  Unknown = 'unknown',
  Other = 'other',
}

export enum PersonalityType {
  Introverted = 'introverted',
  Extroverted = 'extroverted',
  Both = 'both',
}

export enum LifestyleChoice {
  Yes = 'yes',
  No = 'no',
  Sometimes = 'sometimes',
}

export enum RoommatePreference {
  Male = 'male',
  Female = 'female',
  'Transgender Male' = 'transgender-male',
  'Transgender Female' = 'transgender-female',
  'Non-Binary' = 'non-binary',
  'No Preference' = 'no-preference',
}

export enum ConflictResolution {
  Discuss = 'discuss',
  Avoid = 'avoid',
  Mediator = 'mediator',
}

export enum CommunicationMethod {
  'Face to Face' = 'faceToFace',
  'Phone Call' = 'phoneCall',
  'Text Email' = 'textEmail',
}

export enum CleaningFrequency {
  Daily = 'daily',
  Weekly = 'weekly',
  Monthly = 'monthly',
  Sometimes = 'sometimes',
  None = 'none',
}

export enum SleepSchedule {
  'Early Bird' = 'earlyBird',
  'Night Owl' = 'nightOwl',
  Mixed = 'mixed',
}

export enum SharingPreference {
  'Yes, I want to share' = 'yesSharing',
  'Somewhat, I want to share' = 'someSharing',
  'No, I do not want to share' = 'noSharing',
}

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
        fieldName: 'userType',
        blockType: 'radio',
        options: [
          {
            label: 'Neurodivergent individual',
            description:
              'Select this option if you are signing up for a loved one.',
            value: UserType.Homie,
          },
          {
            label: 'Caregiver roommate, family member or friend',
            description:
              'I want to take care of and live with a neurodivergent individual.',
            value: UserType.Supporter,
          },
        ],
        rules: {
          required: 'Please select an option',
        },
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
        autoComplete: 'email',
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
        dbField: 'user.email',
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
        dbField: 'user.password',
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
        autoComplete: 'name',
        autoFocus: true,
        blockType: 'text',
        options: null,
        rules: { required: 'Your name is required' },
        dbField: 'user.name',
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
        autoComplete: 'tel',
        blockType: 'text',
        options: null,
        rules: {
          required: 'Phone Number is Required',
          minLength: {
            value: 10,
            message: 'Invalid Phone Number Length',
          },
          pattern: {
            value: /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i,
            message: 'Phone Number Contains Invalid Characters',
          },
        },
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
          { label: 'Male', value: Gender.Male },
          { label: 'Female', value: Gender.Female },
          { label: 'Transgender Male', value: Gender.TransgenderMale },
          { label: 'Transgender Female', value: Gender.TransgenderFemale },
          { label: 'Non-binary', value: Gender.NonBinary },
          { label: 'Prefer not to say', value: Gender.Private },
          { label: 'Other...', value: Gender.Other },
        ],
        rules: { required: 'Gender selection is required' },
        dbField: 'user.gender',
      },
      {
        showIf: { fieldName: 'gender', value: 'other' },
        // question: 'Other Regional Center',
        description:
          'Since you selected "Other" above, please enter your gender here.',
        rules: { required: 'Please fill out this field' },
        fieldName: 'genderOther',
        blockType: 'text',
        dbField: 'user.genderOther',
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
        autoComplete: 'address-line1',
        options: null,
        rules: {
          required: 'Address is required',
          pattern: {
            // value: /^([a-zA-Z0-9\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]*$/gi,
            value: /^[#.0-9a-zA-Z\s,-]+$/g,
            message: 'Invalid Street Address',
          },
        },
        dbField: 'address.address1',
      },
      {
        question: 'Apt, suite, etc. (optional)',
        fieldName: 'address2',
        autoComplete: 'address-line2',
        blockType: 'text',
        options: null,
        dbField: 'address.address2',
      },
      {
        question: 'City',
        fieldName: 'city',
        autoComplete: 'address-level2',
        blockType: 'text',
        options: null,
        rules: {
          required: 'City is required',
          pattern: {
            value:
              /^([a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]*$/gi,
            message: "Invalid City (Must Only Contain A-Z,-,')",
          },
        },
        dbField: 'address.city',
      },
      {
        question: 'State',
        fieldName: 'state',
        autoComplete: 'address-level1',
        blockType: 'select',
        options: Object.entries(State).map(([fullName, abbr]) => ({
          label: fullName,
          value: abbr,
        })),
        rules: { required: 'State selection is required' },
        dbField: 'address.state',
      },
      {
        question: 'Zip Code',
        fieldName: 'zip',
        blockType: 'text',
        autoComplete: 'postal-code',
        options: null,
        rules: {
          required: 'Zip Code is required',
          pattern: {
            value: /^[0-9]*$/gi,
            message:
              'Zip Code Contains Invalid Characters (Must Only Contain 0-9)',
          },
        },
        dbField: 'address.zip',
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
        options: Object.values(RegionalCenter).map((center) => ({
          label: center,
          value: center,
        })),
        rules: { required: 'Regional center selection is required' },
        dbField: 'user.regionalCenter',
      },
      {
        showIf: { fieldName: 'regionalCenter', value: 'other' },
        // question: 'Other Regional Center',
        description:
          'Since you selected "Other" above, please enter your regional center here.',
        rules: { required: 'Please fill out this field' },
        fieldName: 'otherRegionalCenter',
        blockType: 'text',
        dbField: 'user.regionalCenterOther',
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
        dbField: 'profile.interests',
      },
      {
        showIf: { fieldName: 'interests', value: 'other' },
        description:
          'Since you selected "Other" above, please enter your other hobbies & interests.',
        rules: { required: 'Please fill out this field' },
        fieldName: 'interestsOther',
        blockType: 'textarea',
        dbField: 'profile.interestsOther',
      },
    ],
  },
  {
    step: 'about-you-personality',
    title: 'Tell Us About Yourself',
    description:
      'Knowing more about your personality helps us to better match you with a compatible roommate.',
    blocks: [
      {
        question: 'I am...',
        fieldName: 'personalityType',
        blockType: 'radio',
        options: [
          { label: 'Introverted', value: PersonalityType.Introverted },
          { label: 'Extroverted', value: PersonalityType.Extroverted },
          {
            label: 'Both introverted & extroverted',
            value: PersonalityType.Both,
          },
        ],
        rules: { required: 'Please select an option' },
        dbField: 'profile.personalityType',
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
          { label: 'Yes', value: LifestyleChoice.Yes },
          { label: 'No', value: LifestyleChoice.No },
        ],
        dbField: 'profile.smoking',
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
        dbField: 'profile.alcohol',
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
        dbField: 'profile.cleaning',
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
        dbField: 'profile.sleepSchedule',
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
        dbField: 'profile.likesParties',
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
        dbField: 'profile.roommateGender',
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
        dbField: 'profile.roommateGuests',
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
        dbField: 'profile.roommateSharing',
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
        dbField: 'profile.roommateConflict',
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
        dbField: 'profile.communicationMethod',
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
          { label: 'Yes', value: 'yes' },
          { label: 'No', value: 'no' },
        ],
        dbField: 'profile.hasPets',
      },
      {
        showIf: { fieldName: 'pets', value: 'yes' },
        question: 'Share a little about your pets!',
        description: 'What kind of animals do you have? What are their names?',
        rules: { required: 'Please tell us about your pets' },
        fieldName: 'petsDescription',
        blockType: 'textarea',
        dbField: 'profile.petsDescription',
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
        dbField: 'profile.likesPets',
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
      dbField: 'profile.smoke',
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
