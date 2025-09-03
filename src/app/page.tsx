'use client';

import { HeroSection } from '@/components/hero/HeroSection';
import { FeaturesSection } from '@/components/features/FeaturesSection';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Features Section */}
      <FeaturesSection />
    </div>
  );
}
