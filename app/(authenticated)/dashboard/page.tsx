import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Metadata } from 'next';

import Dashboard from "./Dashboard";

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Example dashboard app built using the components.',
};

const testRoommateCategories = [
  {
    categoryType: "Requests",
    categoryTitle: "Roommate Recommendations",
    titleType: "bold",
    numRoommates: 2,
    showNumRoommates: true,
    roommatesList: [
      {
        name: "Alex Wilson",
        gender: "Male",
        age: 30,
        profileIcon: "🤝",
      },
      {
        name: "Emily Taylor",
        gender: "Female",
        age: 24,
        profileIcon: "🙋‍♀️"
      },
    ],
    description: "Here are a list of recommended roommates for you."
  },
  {
    categoryType: "Requested",
    categoryTitle: "Roommates Requested",
    titleType: "normal",
    numRoommates: 3,
    showNumRoommates: true,
    roommatesList: [
      {
        name: "Chris Jackson",
        gender: "Male",
        age: 29,
        profileIcon: "🤔",
      },
      {
        name: "Samantha Evans",
        gender: "Female",
        age: 26,
        profileIcon: "😉"
      },
    ],
    description: ""
  },
  {
    categoryType: "Not Interested",
    categoryTitle: "Not Interested",
    titleType: "faded",
    numRoommates: 2,
    showNumRoommates: false,
    roommatesList: [
      {
        name: "Sarah Thompson",
        gender: "Female",
        age: 26,
        profileIcon: "😔",
      },
      {
        name: "Mike Johnson",
        gender: "Male",
        age: 27,
        profileIcon: "😕"
      },
    ],
    description: ""
  },
]

const ChecklistItem = ({ emoji, text }) => (
  <div className="flex flex-col items-center justify-center gap-4 max-w-[160px] h-[200px]">
    <div className="flex justify-center text-center">
      <div className="rounded-full bg-gray-200 text-[3.90625rem] leading-[6.25rem] w-[6.25rem] h-[6.25rem] ">
          {emoji}
        </div>
    </div>
    <span className="text-sm">{text}</span>
  </div>
);

const MoveInChecklist = () => {
  const checklistItems = [
    { emoji: '✍️', text: 'Sign up/create profile' },
    { emoji: '🚪', text: 'Secure Housing' },
    { emoji: '🤝', text: 'Connect Homies to Regional Center case manager' },
    { emoji: '📋', text: 'Identify Care Needs' },
    { emoji: '👥', text: 'Who your perfect match is' },
    { emoji: '🔒', text: 'Finalize roommate' },
    { emoji: '🎓', text: 'Training' },
    { emoji: '📝', text: 'Sign contract' },
    { emoji: '🚚', text: 'Move In' },
    { emoji: '🤲', text: 'Ongoing support' },
  ];

  return (
    <Card className="flex flex-col gap-6 items-center justify-center text-center py-[3.75rem] px-[8.625rem]">
      <CardContent>
        <CardHeader>
          <div className="text-title font-bold mb-2">Move-in Checklist</div>
          <div className="text-m">Follow these steps to start your life-sharing journey:</div>
        </CardHeader>
        <CardDescription className='flex flex-row flex-wrap justify-center gap-4'>
        {checklistItems.map((item, index) => (
          <ChecklistItem key={index} emoji={item.emoji} text={item.text} />
        ))}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

const SectionHeader = ({ children }) => (
  <div className="text-title font-bold mb-12">{children}</div>
);

const InfoItem = ({ emoji, title, subtitle }) => (
  <div className="flex flex-col items-center justify-center gap-4 max-w-xs mx-10">
    <div className="flex justify-center text-center">
      <div className="rounded-full bg-gray-200 text-[3.90625rem] leading-[6.25rem] w-[6.25rem] h-[6.25rem] ">
          {emoji}
        </div>
    </div>
    <p className="text-[1.25rem] leading-7 text-black">{title}</p>
    {subtitle && <p className="opacity-50 text-base leading-6">{subtitle}</p>}
  </div>
);

const WaysToFindRoommate = () => (
  <Card className="flex flex-col gap-12 items-center justify-center text-center py-[3.75rem] px-[10.625rem] min-h-[500px]">
    <CardContent>
      <SectionHeader>Ways to Find a Roommate</SectionHeader>
      <CardDescription className="flex justify-center gap-8">
        <InfoItem emoji="🔍" title="Online Platforms" subtitle="" />
        <InfoItem emoji="📄" title="Share your public profile" subtitle="" />
        <InfoItem emoji="👥" title="Autism Support Groups" subtitle=""/>
      </CardDescription>
    </CardContent>
  </Card>
);


const EmergencyContacts = () => (
  <Card className="flex flex-col gap-12 items-center justify-center text-center py-[3.75rem] px-[10.625rem] min-h-[500px]">
    <CardContent>
      <SectionHeader>Emergency Contacts</SectionHeader>
      <CardDescription className="flex justify-center gap-8">
        <InfoItem emoji="👨‍👩‍👧‍👦" title="Family Members" subtitle="Priority 1" />
        <InfoItem emoji="👫" title="Friends" subtitle="Priority 2" />
        <InfoItem emoji="👩‍⚕️" title="Service Coordinator" subtitle="Priority 3" />
      </CardDescription>
    </CardContent>
  </Card>
);

const WeeklyUpdates = () => (
  <Card className="flex flex-col gap-12 items-center justify-center text-center py-[3.75rem] px-[10.625rem] min-h-[500px]">
    <CardContent>
      <SectionHeader>Weekly Updates</SectionHeader>
      <CardDescription className="flex justify-center gap-8">
        <InfoItem emoji="📰" title="News Updates" subtitle="Read the latest articles and blog posts" />
        <InfoItem emoji="🎥" title="Webinar Recordings" subtitle="Access recordings of our informative webinars" />
        <InfoItem emoji="📅" title="Upcoming Events" subtitle="Check out our calendar for upcoming events" />
      </CardDescription>
    </CardContent>
  </Card>
);

const EmergencyResources = () => (
  <Card className="flex flex-col gap-12 items-center justify-center text-center py-[3.75rem] px-[10.625rem] min-h-[500px]">
    <CardContent>
      <SectionHeader>Emergency Resources</SectionHeader>
      <CardDescription className="flex justify-center gap-8">
        <InfoItem emoji="📞" title="911" subtitle="" />
        <InfoItem emoji="⛑️" title="Suicide Prevention Hotline" subtitle="" />
        <InfoItem emoji="💼" title="Professional Help" subtitle=""/>
      </CardDescription>
    </CardContent>
  </Card>
);

export default async function DashboardPage() {
  return (
    <>
    <MoveInChecklist />
    <Dashboard roommateCategories={testRoommateCategories}/>
    <WaysToFindRoommate />
    <EmergencyContacts />
    <WeeklyUpdates />
    <EmergencyResources />
    </>
  );
}