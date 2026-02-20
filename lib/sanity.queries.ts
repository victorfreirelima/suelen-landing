export const siteSettingsQuery = `
  *[_type == "siteSettings" && !(_id in path("drafts.**"))][0] {
    siteName,
    logo,
    primaryCta,
    secondaryCta,
    socialLinks,
    languages,
    defaultLocale,
    analytics,
    seoDefaults
  }
`;

export const landingPageQuery = `
  *[_type == "landingPage" && !(_id in path("drafts.**"))][0] {
    seo,
    hero,
    navigation[] {
      id,
      label,
      targetSectionId
    },
    sections[] {
      _type,
      sectionId,
      enabled,
      backgroundStyle,
      paddingStyle,
      maxWidth,
      
      // Fields for statsSection
      _type == "statsSection" => {
        title,
        body,
        stats[] {
          label,
          value
        }
      },
      
      // Fields for expertiseGridSection
      _type == "expertiseGridSection" => {
        title,
        subtitle,
        cards[] {
          title,
          description,
          iconKey
        }
      },
      
      // Fields for frameworksSection
      _type == "frameworksSection" => {
        title,
        body,
        bullets,
        sideCardSteps[] {
          title,
          description
        }
      },
      
      // Fields for journeySection
      _type == "journeySection" => {
        title,
        roles[] {
          title,
          companyLine,
          dates,
          bullets
        }
      },
      
      // Fields for testimonialsSection
      _type == "testimonialsSection" => {
        title,
        testimonials[] {
          quote,
          name,
          role,
          company
        }
      },
      
      // Fields for ctaSection
      _type == "ctaSection" => {
        title,
        subtitle,
        buttons[] {
          label,
          href,
          variant
        }
      },
      
      // Fields for footerSection
      _type == "footerSection" => {
        copyright,
        locationLine,
        links[] {
          label,
          href
        }
      }
    }
  }
`;
