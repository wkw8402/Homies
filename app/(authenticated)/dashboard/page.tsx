import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { authOptions } from '@/lib/auth';
import { Metadata } from 'next';
import { getServerSession } from 'next-auth';
import { MainNav } from './components/main-nav';
import { UserNav } from './components/user-nav';

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

export default async function DashboardPage() {
  return (
    <Dashboard roommateCategories={testRoommateCategories}/>
  );
}