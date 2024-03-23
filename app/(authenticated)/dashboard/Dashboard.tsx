'use client';

import React from 'react';
import PotentialRoommates from './components/PotentialRoommates/PotentialRoomates';
import { useState, useEffect } from 'react';
import { redirect } from 'next/navigation';

interface User {
  id: string;
  onboardingCompleted: boolean;
}

export default function Dashboard(props) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch('/api/user');
      if (response.ok) {
        const userData: User = await response.json();
        setUser(userData);
      } else {
        console.error("Failed to retrieve user data");
      }
    };

    fetchUser();
  });

  if (user) {
    if (!user.onboardingCompleted) {
      return redirect('/onboarding');
    }
  }
  
  return (
    <div id="Dashboard">
      <PotentialRoommates roommateCategories={props.roommateCategories} />
    </div>
  );
}
