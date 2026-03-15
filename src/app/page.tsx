"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroSplitDualMedia from '@/components/sections/hero/HeroSplitDualMedia';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import FeatureCardTwentyFour from '@/components/sections/feature/FeatureCardTwentyFour';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import { Droplet, Info, Sparkles, Star } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
      contentWidth="medium"
      sizing="large"
      background="circleGradient"
      cardStyle="glass-depth"
      primaryButtonStyle="double-inset"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="light"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="Mr Wash"
          navItems={[
            { name: "Home", id: "home" },
            { name: "Services", id: "services" },
            { name: "Why Us", id: "why-us" },
            { name: "Reviews", id: "reviews" }
          ]}
          button={{ text: "Call Now", href: "tel:+923001234567" }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplitDualMedia
          title="Premium Automatic Car Wash in Lahore"
          description="Experience the fastest, cleanest car wash in Johar Town. Professional automatic washing system with latest technology. Quick, affordable, and trusted by 319+ satisfied customers."
          tag="4.2★ Rated | 319 Reviews"
          tagIcon={Star}
          buttons={[
            { text: "Call: +923001234567", href: "tel:+923001234567" },
            { text: "Get Directions" }
          ]}
          mediaItems={[
            { imageSrc: "http://img.b2bpic.net/free-photo/cleaning-car-front-glass_53876-30980.jpg", imageAlt: "automatic car wash machine lahore" },
            { imageSrc: "http://img.b2bpic.net/free-photo/handsomen-man-white-shirt-washing-his-car_1157-27224.jpg", imageAlt: "car wash facility exterior building" }
          ]}
          background={{ variant: "noise" }}
          rating={4.2}
          ratingText="4.2 out of 5 from 319 reviews"
          mediaAnimation="slide-up"
          tagAnimation="slide-up"
          buttonAnimation="slide-up"
        />
      </div>

      <div id="about" data-section="about">
        <TestimonialAboutCard
          tag="About Mr Wash"
          tagIcon={Info}
          title="Lahore's Most Trusted Automatic Car Wash"
          description="Mr Wash provides the quickest and cleanest car wash in town with the latest automatic washing machines and trained staff dedicated to keeping your vehicle spotless."
          subdescription="Located near Topaz Shadi Hall in Block R-2, Johar Town, we've been serving Lahore's car owners with professional, reliable, and affordable car washing services."
          icon={Droplet}
          imageSrc="http://img.b2bpic.net/free-photo/close-up-car-care-process_23-2149193167.jpg"
          imageAlt="car wash interior machines equipment"
          mediaAnimation="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardTwentyFour
          title="Our Premium Services"
          description="Choose from our range of professional car washing services designed to meet every need and budget."
          tag="Expert Care"
          tagIcon={Sparkles}
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          features={[
            {
              id: "automatic-wash",              title: "Automatic Wash",              author: "Standard Service",              description: "Fast and efficient automatic washing system that gently cleans your vehicle without scratches. Perfect for daily maintenance.",              tags: ["Quick", "Affordable", "Gentle"],
              imageSrc: "http://img.b2bpic.net/free-photo/south-asian-man-indian-male-washing-his-white-transportation-car-wash_627829-4995.jpg",              imageAlt: "automatic car wash machine gentle"
            },
            {
              id: "premium-wash",              title: "Premium Wash",              author: "Enhanced Service",              description: "Advanced washing with premium soaps and spot-free rinse. Ideal for maintaining your car's shine and paint protection.",              tags: ["Premium", "Shine", "Protected"],
              imageSrc: "http://img.b2bpic.net/free-photo/man-white-shirt-wipes-car-car-wash_1157-27235.jpg",              imageAlt: "premium car wash shiny finish"
            },
            {
              id: "express-service",              title: "Express Service",              author: "Quick Option",              description: "Get your car cleaned in minutes with our express automatic wash. No appointment needed—just drive in and drive out clean.",              tags: ["Fast", "Convenient", "No Wait"],
              imageSrc: "http://img.b2bpic.net/free-photo/car-wash-detailing-station_1303-22314.jpg",              imageAlt: "quick fast car wash service"
            }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardTwo
          title="Why Choose Mr Wash"
          description="Trusted by hundreds of car owners for quality, speed, and reliability."
          tag="Performance"
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          gridVariant="uniform-all-items-equal"
          metrics={[
            { id: "customers", value: "319+", description: "Satisfied Customers" },
            { id: "rating", value: "4.2★", description: "Average Rating" },
            { id: "speed", value: "8 min", description: "Average Wash Time" }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Customers Say"
          description="Read reviews from satisfied car owners who trust Mr Wash for their vehicle care."
          tag="Customer Reviews"
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          gridVariant="three-columns-all-equal-width"
          testimonials={[
            {
              id: "1",              name: "Ahmed Hassan",              role: "Business Owner",              company: "Lahore",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/young-businessman-happy-expression_1194-1602.jpg",              imageAlt: "professional man business portrait"
            },
            {
              id: "2",              name: "Fatima Khan",              role: "Executive",              company: "Johar Town",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/afro-american-woman-smiling-close-up_23-2148336947.jpg",              imageAlt: "professional woman business executive"
            },
            {
              id: "3",              name: "Usman Ali",              role: "Professional",              company: "Lahore",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/closeup-shot-young-male-blue-suit_181624-55728.jpg",              imageAlt: "professional man portrait confident"
            },
            {
              id: "4",              name: "Zainab Malik",              role: "Car Enthusiast",              company: "Block R2",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/image-corporate-woman-working-office-sitting-front-laptop-preparing-business_1258-194628.jpg",              imageAlt: "professional woman portrait confident"
            }
          ]}
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Trusted Across Lahore"
          description="Featured on leading platforms. Join hundreds of satisfied customers who choose Mr Wash."
          names={["Google Maps", "Facebook", "Local Reviews", "Community Trusted", "5-Star Rated", "Verified Business", "Award Winning"]}
          textboxLayout="default"
          useInvertedBackground={false}
          showCard={true}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Frequently Asked Questions"
          sideDescription="Find answers to common questions about our services, pricing, and booking."
          buttons={[{ text: "Call Us", href: "tel:+923001234567" }]}
          textPosition="left"
          useInvertedBackground={false}
          faqsAnimation="slide-up"
          faqs={[
            {
              id: "1",              title: "How long does a car wash take?",              content: "Our automatic wash typically takes 6-8 minutes from start to finish. Express service can be completed in as little as 5 minutes."
            },
            {
              id: "2",              title: "Is automatic washing safe for my car?",              content: "Yes, our latest automatic washing system is designed to be gentle on your vehicle's paint and finish. We use soft-touch technology to prevent scratches."
            },
            {
              id: "3",              title: "What are your operating hours?",              content: "We're open from 7 AM to 10 PM daily, providing convenient service throughout the day for your car washing needs."
            },
            {
              id: "4",              title: "Do you offer discounts or loyalty programs?",              content: "Yes, we offer competitive pricing and special packages for regular customers. Call us for current promotions and bulk discounts."
            },
            {
              id: "5",              title: "Where is your location?",              content: "We're located at 261 R2 Shaukat Khanum Hospital Road, near Topaz Shadi Hall, Block R-2, Phase 2, Johar Town, Lahore."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Book Your Car Wash Today"
          description="Get in touch with us for service inquiries, special requests, or to book an appointment. We're here to help!"
          inputs={[
            { name: "fullName", type: "text", placeholder: "Your Full Name", required: true },
            { name: "phone", type: "tel", placeholder: "Your Phone Number", required: true }
          ]}
          textarea={{ name: "message", placeholder: "Tell us about your car or service request", rows: 4, required: true }}
          useInvertedBackground={false}
          imageSrc="http://img.b2bpic.net/free-photo/team-agents-customer-support-office-using-headset-mic-talk-with-clients_482257-118005.jpg"
          imageAlt="contact us form phone service"
          mediaAnimation="slide-up"
          buttonText="Send Request"
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSimple
          columns={[
            {
              title: "Quick Links",              items: [
                { label: "Home", href: "#home" },
                { label: "Services", href: "#services" },
                { label: "Why Us", href: "#why-us" },
                { label: "Reviews", href: "#reviews" }
              ]
            },
            {
              title: "Contact",              items: [
                { label: "Phone: +923001234567", href: "tel:+923001234567" },
                { label: "261 R2, Johar Town, Lahore", href: "https://maps.google.com" },
                { label: "Hours: 7 AM - 10 PM", href: "#" }
              ]
            },
            {
              title: "Follow Us",              items: [
                { label: "Facebook", href: "https://facebook.com/mrwashjohartown" },
                { label: "Google Maps", href: "https://maps.google.com" },
                { label: "Get Directions", href: "https://maps.google.com" }
              ]
            }
          ]}
          bottomLeftText="© 2024 Mr Wash Automatic Car Wash. All rights reserved."
          bottomRightText="Serving Lahore with Quality Car Care"
        />
      </div>
    </ThemeProvider>
  );
}