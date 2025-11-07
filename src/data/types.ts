//src/data/types.ts

export interface BenefitItem {
  id: number;
  icon: string;
  altText: string;
  title: string;
  description: string;
}

export interface ReviewItem {
  id: number;
  avatar: string;
  altText: string;
  name: string;
  reviewText: string;
  rating?: number;
}

export interface HeroSectionData {
  title: string;
  subtitle?: string;
  callToActionButtonText: string;
  callToActionLink: string;
}

export interface BenefitsSectionData {
  title: string;
  items: BenefitItem[];
}

export interface ReviewsSectionData {
  title: string;
  reviews: ReviewItem[];
}

export interface FooterData {
  logoUrl: string;
  altText: string;
  address: string;
  email: string;
  phoneNumber: string;
  // Можна додати: socialLinks: { icon: string, url: string }[]
}

export interface LandingPageData {
  id: string;
  metaTitle: string;
  pixelIdentifier: string; // Для ідентифікації в аналітиці (Lead Event)

  heroSection: HeroSectionData;
  benefitsSection: BenefitsSectionData;
  reviewSection: ReviewsSectionData;
  footer: FooterData;
}
