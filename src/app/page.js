import FAQSection from '@/components/Homepage/FAQSection'
import HeroSection from '@/components/Homepage/HeroSection'
import HowItWorksSection from '@/components/Homepage/HowItWorks'
import MultiSpecialitySection from '@/components/Homepage/MultiSpeciality'
import SyntomsSection from '@/components/Homepage/SyntomsSection'
import TestimonialsSection from '@/components/Homepage/TestimonialSection'
import TreatmentExperience from '@/components/Homepage/TreatmentSection'
import React from 'react'

const page = () => {
  return (
    <div>
      <HeroSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <MultiSpecialitySection />
      <SyntomsSection />
      <TreatmentExperience />
      <FAQSection />
    </div>
  )
}

export default page