import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Metadata } from 'next';

import Dashboard from "./Dashboard";
import Link from 'next/link';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

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
        <section className='flex flex-row flex-wrap justify-center gap-4'>
        {checklistItems.map((item, index) => (
          <ChecklistItem key={index} emoji={item.emoji} text={item.text} />
        ))}
        </section>
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

const FindingRoommateSubComponent = ({ title, subtitle }) => (
  <Card className="flex flex-row items-center justify-center max-w-xs mx-10">
    <div className="w-16 h-16 bg-gray-200 items-left"></div>
    <CardContent>
      <p className="text-[1.25rem] leading-6 text-black">{title}</p>
    </CardContent>
    {subtitle && <p className="opacity-50 text-base leading-6">{subtitle}</p>}
  </Card>
);

const ResourcesSubComponent = ({ title, subtitle }) => (
  <Card className="flex flex-col items-center justify-center gap-4 max-w-xs mx-10">
    <CardContent>
      <p className="text-[1.25rem] leading-7 text-black">{title}</p>
    </CardContent>
    {subtitle && <p className="opacity-50 text-base leading-6">{subtitle}</p>}
  </Card>
);

const EducationContentSubComponent = ({ title, subtitle }) => (
  <Card className="flex flex-row items-center justify-center gap-4 max-w-xs mx-10">
    <div className="w-16 h-16 bg-gray-200 items-center"></div>
    <CardContent>
      <p className="text-[1.25rem] leading-7 text-black">{title}</p>
    </CardContent>
    {subtitle && <p className="opacity-50 text-base leading-6">{subtitle}</p>}
  </Card>
);

const WaysToFindRoommate = () => (
  <Card className="flex flex-col gap-12 items-center justify-center text-center py-[3.75rem] px-[10.625rem] min-h-[500px]">
    <CardContent>
      <SectionHeader>Ways to Find a Roommate</SectionHeader>
      <section className="flex justify-center gap-8">
        <InfoItem emoji="🔍" title="Online Platforms" subtitle="" />
        <InfoItem emoji="📄" title="Share your public profile" subtitle="" />
        <InfoItem emoji="👥" title="Autism Support Groups" subtitle=""/>
      </section>
    </CardContent>
  </Card>
);

const HowFindingYourRoommateWorks = () => (
  <Card className="flex flex-row gap-15 items-center justify-center text-center py-[3.75rem] px-[10.625rem] min-h-[500px]">
    <CardContent className="flex-1 text-left">
    <div className="text-sm">
      <SectionHeader>How Finding Your Roommate Works</SectionHeader>
    </div>
    </CardContent>
    <CardContent className="flex flex-col gap-8">
      <FindingRoommateSubComponent title="Profile Creation" subtitle="" />
      <FindingRoommateSubComponent title="Matchmaking" subtitle="" />
      <FindingRoommateSubComponent title="Meet your matches with confidence" subtitle=""/>
    </CardContent>
  </Card>
);

const Resources = () => (
  <Card className="flex flex-row gap-12 items-center justify-center text-center py-[3.75rem] px-[10.625rem] min-h-[500px]">
    <CardContent className="flex-1 text-left">
      <SectionHeader>Resources</SectionHeader>
    </CardContent>
    <CardContent className="flex-1 flex-col text-center">
        <ResourcesSubComponent title="Supportive Services Directory" subtitle="" />
        <ResourcesSubComponent title="Homies Community Hub" subtitle="" />
    </CardContent>
  </Card>
);

const EducationContent = () => (
  <Card className="flex flex-row gap-10 items-center justify-center text-center py-[3.75rem] px-[10.625rem] min-h-[500px]">
    <CardContent className="flex-1 text-left">
      <SectionHeader>Education Content</SectionHeader>
    </CardContent>
      <CardContent className="flex flex-col justify-center gap-8">
        <EducationContentSubComponent title="Video 1" subtitle="" />
        <EducationContentSubComponent title="Video 2" subtitle="" />
      </CardContent>
  </Card>
);

const EmergencyContacts = () => (
  <Card className="flex flex-col gap-12 items-center justify-center text-center py-[3.75rem] px-[10.625rem] min-h-[500px]">
    <CardContent>
      <SectionHeader>Emergency Contacts</SectionHeader>
      <section className="flex justify-center gap-8">
        <InfoItem emoji="👨‍👩‍👧‍👦" title="Family Members" subtitle="Priority 1" />
        <InfoItem emoji="👫" title="Friends" subtitle="Priority 2" />
        <InfoItem emoji="👩‍⚕️" title="Service Coordinator" subtitle="Priority 3" />
      </section>
    </CardContent>
  </Card>
);

const WeeklyUpdates = () => (
  <Card className="flex flex-col gap-12 items-center justify-center text-center py-[3.75rem] px-[10.625rem] min-h-[500px]">
    <CardContent>
      <SectionHeader>Weekly Updates</SectionHeader>
      <section className="flex justify-center gap-8">
        <InfoItem emoji="📰" title="News Updates" subtitle="Read the latest articles and blog posts" />
        <InfoItem emoji="🎥" title="Webinar Recordings" subtitle="Access recordings of our informative webinars" />
        <InfoItem emoji="📅" title="Upcoming Events" subtitle="Check out our calendar for upcoming events" />
      </section>
    </CardContent>
  </Card>
);

const EmergencyResources = () => (
  <Card className="flex flex-col gap-12 items-center justify-center text-center py-[3.75rem] px-[10.625rem] min-h-[500px]">
    <CardContent>
      <SectionHeader>Emergency Resources</SectionHeader>
      <section className="flex justify-center gap-8">
        <InfoItem emoji="📞" title="911" subtitle="" />
        <InfoItem emoji="⛑️" title="Suicide Prevention Hotline" subtitle="" />
        <InfoItem emoji="💼" title="Professional Help" subtitle=""/>
      </section>
    </CardContent>
  </Card>
);

const WelcomeBanner = () => (
  <div className="flex flex-col items-center justify-center text-center py-12">
    <div className="text-title font-bold mb-6">Welcome to Homies!</div>
    <p className="mb-4">Find a caregiver roommate to live independently.</p>
    <div className="flex flex-col items-center gap-4">
      <input
        type="text"
        placeholder="How are you feeling today?"
        className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none min-w-[400px]"
      />
      <button className="bg-black text-white rounded-lg px-6 py-2">Submit</button>
    </div>
  </div>
);

const UserProfileCard = ({ bio, name }) => {
  return (
    <div className="flex flex-row items-center justify-center text-center py-8 px-12 bg-white rounded-lg shadow">
      <div className="flex flex-col items-center justify-center text-center py-8 px-1 mr-[200px]">
        <div className="flex justify-center text-center">
          <div className="rounded-full bg-gray-100 text-[3.90625rem] leading-[6.25rem] w-[6.25rem] h-[6.25rem] ">
          👤
          </div>
        </div>
        <h3 className="mt-4 font-bold text-xl">{name}</h3>
        <p className="text-gray-600">{bio}</p>
      </div>
      
      <div className="flex gap-4 mt-4">
        <Link href="/profile">
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
            View Profile
          </button>
        </Link>
      </div>
    </div>
  );
};

const Footer = () => (
  <footer className="bg-gray-100 py-4">
  <div className="max-w-6xl mx-auto px-4 flex flex-col items-center">
    <div className="text-center mb-4">
      <p className="text-sm text-gray-700">© 2022 Homies Inc.</p>
    </div>
    <div className="text-center">
      <a className="text-sm text-gray-700 hover:underline">Terms of Service</a>
      <span className="mx-2">|</span>
      <a className="text-sm text-gray-700 hover:underline">Privacy Policy</a>
    </div>
  </div>
</footer>

);

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);
  const name = session?.user?.name;
  return (
    <>
    <WelcomeBanner />
    <UserProfileCard
        bio="Individual with Autism. Looking for a supportive roommate."
        name={name}
      />
    <MoveInChecklist />
    <Dashboard roommateCategories={testRoommateCategories}/>
    <WaysToFindRoommate />
    <HowFindingYourRoommateWorks />
    <Resources />
    <EducationContent />
    <EmergencyContacts />
    <WeeklyUpdates />
    <EmergencyResources />
    <Footer />
    </>
  );
}