const dic = {
  'name': {
    'fr': "OpenCarenet CHE",
    'en': "OpenCarenet CHE",
  },
  'description': {
    'fr': "Un monde où les responsables de la santé ne se soucient que des soins",
    'en': "A world where health officials focus solely on care",
  },
  'download': {
    'fr': "Télécharger",
    'en': "Download",
  },
  'our-mission': {
    'fr': "Notre mission",
    'en': "Our mission",
  },
  'who-we-are': {
    'fr': "Qui sommes-nous?",
    'en': "Who are we?",
  },
  'use-app': {
    'fr': "Utiliser OpenCarenet CHE",
    'en': "Use OpenCarenet CHE",
  },
  'need-help': {
    'fr': "Besoin d'aide ?",
    'en': "Need help ?",
  }
}

export const DownloadButton = (locale, homePath) => {
  return `<a class="a-buttoned"><i class="fa fa-download"></i> ${dic['download'][locale]}</a>`
}


export const DocTitle = (locale, homePath) => {
  return `OpenCarenet CHE |  ${dic['description'][locale]}`
}

export const DocDescription = (locale, homePath) => {
  return `${dic['description'][locale]}`
}


export const LearnMoreButton = (locale, homePath) => {
  return `        <a class="a-buttoned"
    >${{
      fr: `En savoir plus`,
      en: `Learn more`
    }[locale]} <i class="fa fa-arrow-right"></i>
  </a>`
}

export const Footer = (locale, homePath) => {
  return `
    <div class="f-menu">
    <div class="footer-item f-logo">
      <div class="logo">
        <img alt="OpenCarent CHE logo" src="${homePath}images/oche.png" />
        <p class="p-medium">${dic['name'][locale]}</p>
      </div>
      <p class="descr">${dic['description'][locale]}</p>
      ${DownloadButton(locale, homePath)}
    </div>
    <div class="footer-item">
      <p>${dic['our-mission'][locale]}</p>
      <a href="${homePath}features" class="p-medium">${{ fr: "Fonctionnalités", en: "Features" }[locale]}</a>
      <a class="p-medium">${{ fr: "Implémentations", en: "Implementations" }[locale]}</a>
      <a class="p-medium">${{ fr: "Securité", en: "Security" }[locale]}</a>
    </div>
    <div class="footer-item">
      <p>${dic['who-we-are'][locale]}</p>
      <a class="p-medium">${{ fr: "A propos de nous", en: "About Us" }[locale]}</a>
      <a class="p-medium">${{ fr: "Notre équipe", en: "Our team" }[locale]}</a>
    </div>
    <div class="footer-item">
      <p>${dic['use-app'][locale]}</p>
      <a class="p-medium">${{ fr: "Essayez une démo", en: "Try a demo" }[locale]}</a>
      <a class="p-medium">${{ fr: "Documentation", en: "Documentation" }[locale]}</a>
    </div>
    <div class="footer-item">
      <p>${dic['need-help'][locale]}</p>
      <a class="p-medium">${{ fr: "FAQ", en: "FAQs" }[locale]}</a>
      <a class="p-medium">${{ fr: "Contactez-nous", en: "Contact us" }[locale]}</a>
    </div>
  </div>
  <div class="f-closer">
    <p>© Copyright ${dic['name'][locale]}. ${{ fr: "Tous les droits sont réservés", en: "All rights reserved" }[locale]}</p>
    <div class="social-medias">
      <a><i class="fa-brands fa-facebook"></i></a>
      <a><i class="fa-brands fa-instagram"></i></a>
      <a><i class="fa-brands fa-twitter"></i></a>
      <a><i class="fa-brands fa-youtube"></i></a>
    </div>
    <select value=${locale} id="locale-changer">
      <option ${locale === 'fr' ? 'selected' : ''} value="fr">Français</option>
      <option ${locale === 'en' ? 'selected' : ''} value="en">English</option>
    </select>
  </div>
    `
}

export const NavBar = (locale, homePath) => {
  return `
        <div class="logo">
            <img alt="${dic['name'][locale]} logo" src="${homePath}images/oche.png" />
            <p class="p-medium">${dic['name'][locale]}</p>
        </div>
        <div class="nav-menu">
            <div class="nav-header">
              <div></div>
              <i id="close-menu-holder" class="fa fa-close" onclick="displayMenu(0)"></i>
            </div>
            <a>${dic['our-mission'][locale]}</a>
            <a>${dic['who-we-are'][locale]}</a>
            <a>${dic['use-app'][locale]}</a>
            <a>${dic['need-help'][locale]}</a>
        </div>
        ${DownloadButton(locale, homePath)}
        <div id="nav-icon">
          <i id="menu-icon-button" class="fa fa-bars action-icon" onclick="displayMenu(1)"></i>
        </div>
    `;
}

export const LandingBody = (locale, homePath) => {
  return `
    <section id="landing">
      <img
        src="${homePath}images/landing.jpg"
        alt="OpenCarenet Community Health Edition"
      />
      <div class="curtain">
        <h1 class="large-title">${dic['description'][locale]} </h1>
        <p class="p-medium">
        ${{
      fr: `Un outil de collecte et de reporting qui permet aux agents de santé communautaire de collecter des données de santé sans se soucier des agrégations de données et de générer un rapport mensuel.`,
      en: `A collection and reporting tool that allows community health workers to collect health data without worrying about data aggregations and generate a monthly report`
    }[locale]}
        </p>
        ${DownloadButton(locale, homePath)}
      </div>
    </section>
    <section class="l-r-section">
      <div class="l-r-section-child l">
        <p class="large-title">
        ${{
      fr: `Tout vos registres de collecte de données sanitaires regroupés dans
            une application mobile`,
      en: `All your health data collection registers packed in
            a mobile application`
    }[locale]}
        </p>
        <p class="p-medium">
        ${{
      fr: `Les agents de la santé de la communauté utilisent des registres en
            papier pour recueillir, regrouper, conserver et diffuser des
            informations relatives à la santé. Transformez ces registres en une
            série de questions faciles à remplir avec OpenCarenet CHE.`,
      en: `Community health workers use registers
            paper to collect, group, preserve and disseminate information
            health information. Transform these registers into a
            series of easy-to-fill questions with OpenCarenet CHE.`
    }[locale]}

        </p>
        ${LearnMoreButton(locale, homePath)}
      </div>
      <div class="l-r-section-child img-side">
        <img src="${homePath}images/registers.jpg" alt="${dic['name'][locale]} Home" />
      </div>
    </section>
    <section class="l-r-section l-r-section-colored col-reversed">
      <div class="l-r-section-child img-side">
        <img src="${homePath}images/patients.png" alt="${dic['name'][locale]} Home" />
      </div>
      <div class="l-r-section-child l">
        <p class="large-title">
        ${{
      fr: `Une gestion locale des patients dans votre application mobile`,
      en: `Local patient management in your mobile application`
    }[locale]}
        </p>
        <p class="p-medium">
        ${{
      fr: `Enregistrer les patients et utilisez leurs informations dans divers
            registres.`,
      en: `Register patients and use their information in various
            registers.`
    }[locale]}
        </p>
        ${LearnMoreButton(locale, homePath)}
      </div>
    </section>
    <section class="l-r-section">
      <div class="l-r-section-child l">
        <p class="large-title">
        ${{
      fr: `Laissez-nous aggréger vos données primaires et produire le rapport
            pour vous`,
      en: `Let us aggregate your primary data and produce the report
            for you`
    }[locale]}
          
        </p>
        <p class="p-medium">
        ${{
      fr: `Le but est de permettre aux agents de sante communautaire de se
            concentrer sur les activités promotionnelles, préventives et curative
            ansi que la collecte de données primaires. OpenCarenet CHE effectue
            l'agrégation des données et produit un rapport mensuel selon vos
            modèles de reporting DHIS2.`,
      en: `The aim is to enable community health workers to
            focus on promotional, preventive and curative activities
            as well as the collection of primary data. OpenCarenet CHE performs
            data aggregation and produces a monthly report according to your
            DHIS2 reporting models.`
    }[locale]}

        </p>
        ${LearnMoreButton(locale, homePath)}
      </div>
      <div class="l-r-section-child img-side">
        <img src="${homePath}images/report.jpg" alt="${dic['name'][locale]} Home" />
      </div>
    </section>
    <section class="l-r-section col-reversed">
      <div class="l-r-section-child img-side">
        <img src="${homePath}images/sync.png" alt="${dic['name'][locale]} Home" />
      </div>
      <div class="l-r-section-child l">
        <p class="large-title">
        ${{
      fr: `  Cela convient également à ceux qui travaillent dans les zones rurales
            où l'accès à Internet est difficile.`,
      en: `Suitable for those who work in rural areas
            where Internet access is difficult.`
    }[locale]}
        
        </p>
        <p class="p-medium">
        ${{
      fr: `      Synchronisez vos données lorsque vous êtes connecté à Internet,
            travaillez hors ligne et envoyez à tout moment votre rapport mensuel.`,
      en: `Synchronize your data when you are connected to the Internet,
            work offline and send your monthly report at any time.`
    }[locale]}
    
        </p>
        ${LearnMoreButton(locale, homePath)}
      </div>
    </section>
    <section class="l-r-section">
      <div class="l-r-section-child l">
    
   
        <p class="large-title">  ${{
      fr: `Interopérable avec DHIS2`,
      en: `Interoperable with DHIS2`
    }[locale]}</p>
        <p class="p-medium">
        ${{
      fr: `Les organisations qui utilisent DHIS2 pour la collecte, la
            notification, l'analyse et la distribution peuvent utiliser
            OpenCarenet CHE pour la collecte de données primaires.`,
      en: `Organizations that use DHIS2 for collection,
            notification, analysis and distribution can use
            OpenCarenet CHE for primary data collection.`
    }[locale]}
        </p>
        ${LearnMoreButton(locale, homePath)}
      </div>
      <div class="l-r-section-child img-side">
        <img src="${homePath}images/1 (2).png" alt="${dic['name'][locale]} Home" />
      </div>
    </section>
    `;
}