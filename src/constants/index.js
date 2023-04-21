import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "Introduction",
    },
    {
      id: "work",
      title: "Résultats",
    },
    {
      id: "contact",
      title: "Conclusion",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Analyse des lieux de naissances d'artistes",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Analyse 1 & 2",
      
      points: [
        
        "Le premier diagramme et la table suivant démontre le nombre total de chaque origines éthniques des artistes observées et ensuite une comparaison avec les différents rôles artistiques.",
        "On peut voir que sur la scène théâtrale française, 69,7% des artistes sont d'origine ethnique nord-américaine autre qu'autochtone. Cela prouve que la majorité des artistes sur scène proviennent du Canada. Cela signifie que le CNA met en avant ces artistes. Cependant, moins de 1% ont une origine autochtone, ce qui peut signifier que le CNA pourrait encourager de plus en plus les artistes autochtones.",
        "Dans le deuxième tableau croisé, on étudie l'origine éthnique en lien avec les différents rôles artistique. ",
        "Premièrement, 79,8% des acteurs sont sont d'origine ethnique nord-américaine autre qu'autochtone. On peut voir que ceux qui ce situe sur scène sont des acteurs blancs. De plus, on peut ajouter à ce pourcentage les données des origines européennes qui signifie des acteurs blancs sur la scène. Autres origines comme origine africaines, asiatiques ne représente qu'un pourcentage minime. On peut alors tirer certaines conclusion au sujet de la raison qu'il y a moins de représentation d'acteurs non-blancs sur la scène théâtrale canadienne. Soit la decénnie peut avoir impacte ainsi que les pièces choisit de l'époque. De même pour les autres rôles artistiques, l'origine numéro 2 est majoritaire comparer aux autres. ",
      ],

      image: "<img src='/anal1.png' alt='Lieux de naissance d'artistes' />",
      
    },
    {
      title: "Analyse entre les genres d'artistes et de leur origine éthnique ",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Analyse 3",
      points: [
        "Pour le tableau donné, on peut observer que la majorité sont des hommes qui provennent de pays autre que le Canada. ",
        "De plus, on peut aussi que la majorité qui sont nés au Canada, il y une différence de plus de 100 artistes de plus qui sont des hommes que sont des femmes qui proviennent de l'origine numéro 2. Ces données on pu être impactées par la période socio-culturelle des années 2000 à 2009 et aussi sur bien avant lors des opportunités dans l'industrie artistique auparavent.  ",
        "Bref, pour toutes les origines sauf pour l'origine autochtones nord-américaines, plus d'hommes pour chaque origine éthnique différente. Cela dit, on peut tirer que les histoires et cultures étaient racontées et dirigées par majoritairement des hommes blancs nord-américains et d'hommes européens'.",

      ],
      image: "<img src='/anal2.png' alt='Lieux de naissance d'artistes' />",
      
    },
    {
      title: "Analyse entre les rôles artistiques et leur genre",
      icon: shopify,
      iconBg: "#383E56",
      date: "Analyse 4",
      points: [
        "Ici on démontre les rôles artistiques et le genre des artistes par l'entremise du tableau croisé.",
        "On peut tirer certaines observations comme: il y a plus d'actrices que d'acteurs et aucune directrices artistique sur une période de dix ans.",

      ],
      image: "<img src='/anal3.png' alt='Lieux de naissance d'artistes' />",
    },
    {
      title: "Analyse entre les pays des artistes et le rôle artistique",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Analyse 5",
      points: [
        "Pour la dernière analyse on présente le pays d'origine et le nombre d'artistes. Durant la manipulation des données, on a pas compter les pays avec des comptes plus bas que 5 afin de pouvoir lire une table plus simple et concise.",
        "Selon le tableau croisé, 80% des artistes sont Canadiens. De ce fait, il est important que la scène canadienne est occupée par des artistes Canadiens peu importe la couleur et leur origines ethniques. Souvent les pièces du CNA sont présentées à la population canadienne ce qui promouvoit le talent canadien. ",
        "Moins d'artistes provenant d'autres pays sont non-canadiens",
      ],
      image: "<img src='/anal4.png' alt='Lieux de naissance d'artistes' />",
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };