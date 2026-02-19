export const landingPageQuery = `
  *[_type == "landingPage"][0] {
    navbar {
      brandName { "text": select($lang == "en" => en, ptBR) },
      navLinks[] { 
        label { "text": select($lang == "en" => en, ptBR) },
        anchorId 
      },
      ctaButton { 
        label { "text": select($lang == "en" => en, ptBR) },
        anchorId 
      }
    },
    hero {
      labelPill { "text": select($lang == "en" => en, ptBR) },
      headline { "text": select($lang == "en" => en, ptBR) },
      highlightWord { "text": select($lang == "en" => en, ptBR) },
      subheadline { "text": select($lang == "en" => en, ptBR) },
      primaryCTA { 
        label { "text": select($lang == "en" => en, ptBR) },
        anchorId 
      },
      secondaryCTA { 
        label { "text": select($lang == "en" => en, ptBR) },
        anchorId 
      },
      portraitImage,
      socialLinks[] { iconName, url }
    },
    impactSection {
      heading { "text": select($lang == "en" => en, ptBR) },
      body { "text": select($lang == "en" => en, ptBR) },
      stats[] {
        label { "text": select($lang == "en" => en, ptBR) },
        value
      }
    },
    coreExpertise {
      heading { "text": select($lang == "en" => en, ptBR) },
      subtitle { "text": select($lang == "en" => en, ptBR) },
      cards[] {
        iconName,
        title { "text": select($lang == "en" => en, ptBR) },
        description { "text": select($lang == "en" => en, ptBR) }
      }
    },
    frameworksSection {
      heading { "text": select($lang == "en" => en, ptBR) },
      body { "text": select($lang == "en" => en, ptBR) },
      bullets[] { "text": select($lang == "en" => en, ptBR) },
      rightCardSteps[] {
        number,
        title { "text": select($lang == "en" => en, ptBR) },
        description { "text": select($lang == "en" => en, ptBR) }
      }
    },
    professionalJourney {
      heading { "text": select($lang == "en" => en, ptBR) },
      roles[] {
        title { "text": select($lang == "en" => en, ptBR) },
        org { "text": select($lang == "en" => en, ptBR) },
        dateBadge,
        bullets[] { "text": select($lang == "en" => en, ptBR) }
      }
    },
    whyWorkWithMe {
      heading { "text": select($lang == "en" => en, ptBR) },
      features[] {
        title { "text": select($lang == "en" => en, ptBR) },
        description { "text": select($lang == "en" => en, ptBR) }
      },
      testimonial {
        quote { "text": select($lang == "en" => en, ptBR) },
        name,
        roleCompany { "text": select($lang == "en" => en, ptBR) }
      }
    },
    finalCTA {
      heading { "text": select($lang == "en" => en, ptBR) },
      body { "text": select($lang == "en" => en, ptBR) },
      buttons[] {
        label { "text": select($lang == "en" => en, ptBR) },
        url
      }
    },
    footer {
      smallText { "text": select($lang == "en" => en, ptBR) }
    },
    seo {
      metaTitle { "text": select($lang == "en" => en, ptBR) },
      metaDescription { "text": select($lang == "en" => en, ptBR) },
      ogImage
    }
  }
`;
