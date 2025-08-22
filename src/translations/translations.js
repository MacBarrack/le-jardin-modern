// Translation data for Le Jardin Eden website
export const translations = {
  en: {
    // Navigation
    nav: {
      home: 'Home',
      programs: 'Programs',
      about: 'About',
      contact: 'Contact',
      login: 'Login',
      enrollNow: 'Enroll Now',
      language: 'Language'
    },
    
    // Home Page
    home: {
      title: 'Le Jardin Eden - Premier Childcare & Early Learning Center',
      heroTitle: 'Where Little Dreams Grow',
      heroSubtitle: 'Nurturing young minds with love, care, and excellence in early childhood education. Creating a foundation for lifelong learning and growth.',
      awardWinning: 'Award-Winning Childcare Center',
      enrollToday: 'Enroll Today',
      watchTour: 'Watch Tour',
      
      // Stats
      stats: {
        happyFamilies: 'Happy Families',
        yearsExperience: 'Years Experience',
        averageRating: 'Average Rating',
        licensedInsured: 'Licensed & Insured'
      },
      
      // Programs Section
      programsTitle: 'Our Programs',
      programsSubtitle: 'Age-appropriate programs designed to nurture growth, learning, and development at every stage of your child\'s journey.',
      
      // Testimonials
      testimonialsTitle: 'What Parents Say',
      testimonialText: 'Le Jardin Eden has been a blessing for our family. Emma loves going to school every day and has grown so much!',
      testimonialAuthor: 'Sarah Johnson',
      testimonialRole: 'Parent of Emma (4 years)',
      
      // CTA Section
      ctaTitle: 'Ready to Join Our Family?',
      ctaSubtitle: 'Give your child the best start in life with our nurturing environment, experienced teachers, and comprehensive programs.',
      startEnrollment: 'Start Enrollment',
      scheduleTour: 'Schedule Tour'
    },
    
    // Programs Page
    programs: {
      title: 'Our Programs',
      subtitle: 'Age-appropriate programs designed to nurture growth, learning, and development at every stage of your child\'s journey.',
      
      infantCare: {
        title: 'Infant Care',
        ageRange: '6 weeks - 18 months',
        description: 'Our infant program provides a warm, nurturing environment where your baby can grow and develop at their own pace.',
        teacherRatio: 'Teacher Ratio',
        hours: 'Hours',
        enrollButton: 'Enroll in This Program',
        
        features: {
          title: 'Program Features',
          items: [
            'Individualized care plans',
            'Flexible feeding schedules',
            'Diaper changing and hygiene',
            'Tummy time and motor development',
            'Sensory exploration activities',
            'Daily communication with parents'
          ]
        },
        
        curriculum: {
          title: 'Curriculum Highlights',
          emotional: {
            title: 'Emotional Development',
            description: 'Building trust and security through consistent, loving care'
          },
          social: {
            title: 'Social Skills',
            description: 'Early social interaction with caregivers and peers'
          },
          language: {
            title: 'Language Development',
            description: 'Reading, singing, and talking to promote language skills'
          },
          physical: {
            title: 'Physical Development',
            description: 'Age-appropriate activities to develop motor skills'
          }
        }
      },
      
      toddler: {
        title: 'Toddler Program',
        ageRange: '18 months - 3 years',
        description: 'Our toddler program encourages exploration, independence, and social development through structured play and learning.',
        features: [
          'Potty training support',
          'Social skills development',
          'Creative expression activities',
          'Language development',
          'Independence building',
          'Structured play time'
        ]
      },
      
      preschool: {
        title: 'Preschool',
        ageRange: '3 - 5 years',
        description: 'Comprehensive pre-K curriculum preparing children for kindergarten success.',
        features: [
          'Academic readiness',
          'STEM activities',
          'Character building',
          'Reading preparation',
          'Math concepts',
          'Art and creativity'
        ]
      },
      
      schoolAge: {
        title: 'School Age',
        ageRange: '5 - 12 years',
        description: 'After-school and summer programs with homework help and enrichment activities.',
        features: [
          'Homework support',
          'Field trips',
          'Leadership skills',
          'Sports activities',
          'Arts and crafts',
          'Technology learning'
        ]
      }
    },
    
    // About Page
    about: {
      title: 'About Le Jardin Eden',
      subtitle: 'Nurturing young minds with love, care, and excellence in early childhood education since 2009.',
      
      story: {
        title: 'Our Story',
        content: 'Founded in 2009 by early childhood education specialists, Le Jardin Eden has been a cornerstone of quality childcare in our community. We believe every child deserves a nurturing environment where they can grow, learn, and thrive. Our philosophy centers on creating a "garden" where children can bloom at their own pace, supported by experienced educators who understand the unique needs of each developmental stage.'
      },
      
      features: [
        {
          title: 'Licensed & Accredited',
          description: 'State licensed and nationally accredited'
        },
        {
          title: 'Caring Environment',
          description: 'Warm, nurturing atmosphere for all children'
        },
        {
          title: 'Experienced Staff',
          description: '15+ years average teaching experience'
        },
        {
          title: 'Safe & Secure',
          description: 'Comprehensive safety and security measures'
        }
      ]
    },
    
    // Contact Page
    contact: {
      title: 'Contact Us',
      subtitle: 'We\'d love to hear from you! Get in touch to schedule a tour or ask any questions.',
      
      getInTouch: 'Get in Touch',
      
      info: {
        phone: {
          title: 'Phone',
          description: 'Call us during business hours'
        },
        email: {
          title: 'Email',
          description: 'We respond within 24 hours'
        },
        address: {
          title: 'Address',
          description: 'Visit us for a tour'
        },
        hours: {
          title: 'Hours',
          weekdays: 'Mon-Fri: 6:30 AM - 6:30 PM',
          saturday: 'Saturday: 8:00 AM - 4:00 PM'
        }
      },
      
      form: {
        title: 'Send us a Message',
        firstName: 'First Name',
        lastName: 'Last Name',
        email: 'Email',
        phone: 'Phone',
        message: 'Message',
        submit: 'Send Message'
      }
    },
    
    // Authentication
    auth: {
      login: {
        title: 'Welcome Back',
        subtitle: 'Sign in to your Le Jardin Eden account',
        email: 'Email Address',
        password: 'Password',
        signIn: 'Sign In',
        noAccount: 'Don\'t have an account?',
        registerHere: 'Register here'
      },
      
      register: {
        title: 'Join Our Family',
        subtitle: 'Create your Le Jardin Eden account and start the enrollment process',
        parentName: 'Parent/Guardian Name',
        email: 'Email Address',
        phone: 'Phone Number',
        childName: 'Child\'s Name',
        childAge: 'Child\'s Age',
        program: 'Interested Program',
        submit: 'Submit Enrollment',
        hasAccount: 'Already have an account?',
        signInHere: 'Sign in here'
      }
    },
    
    // Footer
    footer: {
      description: 'Nurturing young minds with love, care, and excellence in early childhood education. Creating a foundation for lifelong learning and growth.',
      quickLinks: 'Quick Links',
      contactInfo: 'Contact Info',
      stayConnected: 'Stay Connected',
      newsletter: 'Subscribe to our newsletter for updates, tips, and special events.',
      subscribe: 'Subscribe',
      privacy: 'We respect your privacy. Unsubscribe at any time.',
      copyright: '© 2025 Le Jardin Eden. Made with',
      forChildren: 'for children and families.',
      developedBy: 'Developed by',
      privacyPolicy: 'Privacy Policy',
      termsOfService: 'Terms of Service'
    }
  },
  
  es: {
    // Navigation
    nav: {
      home: 'Inicio',
      programs: 'Programas',
      about: 'Acerca de',
      contact: 'Contacto',
      login: 'Iniciar Sesión',
      enrollNow: 'Inscribirse Ahora',
      language: 'Idioma'
    },
    
    // Home Page
    home: {
      title: 'Le Jardin Eden - Centro Premier de Cuidado Infantil y Aprendizaje Temprano',
      heroTitle: 'Donde Crecen los Pequeños Sueños',
      heroSubtitle: 'Nutriendo mentes jóvenes con amor, cuidado y excelencia en educación infantil temprana. Creando una base para el aprendizaje y crecimiento de por vida.',
      awardWinning: 'Centro de Cuidado Infantil Galardonado',
      enrollToday: 'Inscríbete Hoy',
      watchTour: 'Ver Recorrido',
      
      // Stats
      stats: {
        happyFamilies: 'Familias Felices',
        yearsExperience: 'Años de Experiencia',
        averageRating: 'Calificación Promedio',
        licensedInsured: 'Licenciado y Asegurado'
      },
      
      // Programs Section
      programsTitle: 'Nuestros Programas',
      programsSubtitle: 'Programas apropiados para la edad diseñados para nutrir el crecimiento, aprendizaje y desarrollo en cada etapa del viaje de su hijo.',
      
      // Testimonials
      testimonialsTitle: 'Lo Que Dicen Los Padres',
      testimonialText: 'Le Jardin Eden ha sido una bendición para nuestra familia. ¡Emma ama ir a la escuela todos los días y ha crecido mucho!',
      testimonialAuthor: 'Sarah Johnson',
      testimonialRole: 'Madre de Emma (4 años)',
      
      // CTA Section
      ctaTitle: '¿Listo para Unirte a Nuestra Familia?',
      ctaSubtitle: 'Dale a tu hijo el mejor comienzo en la vida con nuestro ambiente nutritivo, maestros experimentados y programas integrales.',
      startEnrollment: 'Comenzar Inscripción',
      scheduleTour: 'Programar Recorrido'
    },
    
    // Programs Page
    programs: {
      title: 'Nuestros Programas',
      subtitle: 'Programas apropiados para la edad diseñados para nutrir el crecimiento, aprendizaje y desarrollo en cada etapa del viaje de su hijo.',
      
      infantCare: {
        title: 'Cuidado de Bebés',
        ageRange: '6 semanas - 18 meses',
        description: 'Nuestro programa para bebés proporciona un ambiente cálido y nutritivo donde su bebé puede crecer y desarrollarse a su propio ritmo.',
        teacherRatio: 'Proporción de Maestros',
        hours: 'Horarios',
        enrollButton: 'Inscribirse en Este Programa',
        
        features: {
          title: 'Características del Programa',
          items: [
            'Planes de cuidado individualizados',
            'Horarios de alimentación flexibles',
            'Cambio de pañales e higiene',
            'Tiempo boca abajo y desarrollo motor',
            'Actividades de exploración sensorial',
            'Comunicación diaria con los padres'
          ]
        },
        
        curriculum: {
          title: 'Aspectos Destacados del Currículo',
          emotional: {
            title: 'Desarrollo Emocional',
            description: 'Construyendo confianza y seguridad a través del cuidado amoroso y consistente'
          },
          social: {
            title: 'Habilidades Sociales',
            description: 'Interacción social temprana con cuidadores y compañeros'
          },
          language: {
            title: 'Desarrollo del Lenguaje',
            description: 'Lectura, canto y conversación para promover habilidades lingüísticas'
          },
          physical: {
            title: 'Desarrollo Físico',
            description: 'Actividades apropiadas para la edad para desarrollar habilidades motoras'
          }
        }
      },
      
      toddler: {
        title: 'Programa para Niños Pequeños',
        ageRange: '18 meses - 3 años',
        description: 'Nuestro programa para niños pequeños fomenta la exploración, independencia y desarrollo social a través del juego estructurado y el aprendizaje.',
        features: [
          'Apoyo para el entrenamiento del baño',
          'Desarrollo de habilidades sociales',
          'Actividades de expresión creativa',
          'Desarrollo del lenguaje',
          'Construcción de independencia',
          'Tiempo de juego estructurado'
        ]
      },
      
      preschool: {
        title: 'Preescolar',
        ageRange: '3 - 5 años',
        description: 'Currículo integral de pre-K que prepara a los niños para el éxito en el jardín de infantes.',
        features: [
          'Preparación académica',
          'Actividades STEM',
          'Construcción del carácter',
          'Preparación para la lectura',
          'Conceptos matemáticos',
          'Arte y creatividad'
        ]
      },
      
      schoolAge: {
        title: 'Edad Escolar',
        ageRange: '5 - 12 años',
        description: 'Programas después de la escuela y de verano con ayuda con las tareas y actividades de enriquecimiento.',
        features: [
          'Apoyo con las tareas',
          'Excursiones',
          'Habilidades de liderazgo',
          'Actividades deportivas',
          'Artes y manualidades',
          'Aprendizaje de tecnología'
        ]
      }
    },
    
    // About Page
    about: {
      title: 'Acerca de Le Jardin Eden',
      subtitle: 'Nutriendo mentes jóvenes con amor, cuidado y excelencia en educación infantil temprana desde 2009.',
      
      story: {
        title: 'Nuestra Historia',
        content: 'Fundado en 2009 por especialistas en educación infantil temprana, Le Jardin Eden ha sido una piedra angular del cuidado infantil de calidad en nuestra comunidad. Creemos que cada niño merece un ambiente nutritivo donde pueda crecer, aprender y prosperar. Nuestra filosofía se centra en crear un "jardín" donde los niños puedan florecer a su propio ritmo, apoyados por educadores experimentados que entienden las necesidades únicas de cada etapa de desarrollo.'
      },
      
      features: [
        {
          title: 'Licenciado y Acreditado',
          description: 'Licenciado por el estado y acreditado nacionalmente'
        },
        {
          title: 'Ambiente Cariñoso',
          description: 'Atmósfera cálida y nutritiva para todos los niños'
        },
        {
          title: 'Personal Experimentado',
          description: '15+ años de experiencia promedio en enseñanza'
        },
        {
          title: 'Seguro y Protegido',
          description: 'Medidas integrales de seguridad y protección'
        }
      ]
    },
    
    // Contact Page
    contact: {
      title: 'Contáctanos',
      subtitle: '¡Nos encantaría saber de ti! Ponte en contacto para programar un recorrido o hacer cualquier pregunta.',
      
      getInTouch: 'Ponte en Contacto',
      
      info: {
        phone: {
          title: 'Teléfono',
          description: 'Llámanos durante el horario comercial'
        },
        email: {
          title: 'Correo Electrónico',
          description: 'Respondemos dentro de 24 horas'
        },
        address: {
          title: 'Dirección',
          description: 'Visítanos para un recorrido'
        },
        hours: {
          title: 'Horarios',
          weekdays: 'Lun-Vie: 6:30 AM - 6:30 PM',
          saturday: 'Sábado: 8:00 AM - 4:00 PM'
        }
      },
      
      form: {
        title: 'Envíanos un Mensaje',
        firstName: 'Nombre',
        lastName: 'Apellido',
        email: 'Correo Electrónico',
        phone: 'Teléfono',
        message: 'Mensaje',
        submit: 'Enviar Mensaje'
      }
    },
    
    // Authentication
    auth: {
      login: {
        title: 'Bienvenido de Vuelta',
        subtitle: 'Inicia sesión en tu cuenta de Le Jardin Eden',
        email: 'Dirección de Correo Electrónico',
        password: 'Contraseña',
        signIn: 'Iniciar Sesión',
        noAccount: '¿No tienes una cuenta?',
        registerHere: 'Regístrate aquí'
      },
      
      register: {
        title: 'Únete a Nuestra Familia',
        subtitle: 'Crea tu cuenta de Le Jardin Eden y comienza el proceso de inscripción',
        parentName: 'Nombre del Padre/Tutor',
        email: 'Dirección de Correo Electrónico',
        phone: 'Número de Teléfono',
        childName: 'Nombre del Niño',
        childAge: 'Edad del Niño',
        program: 'Programa de Interés',
        submit: 'Enviar Inscripción',
        hasAccount: '¿Ya tienes una cuenta?',
        signInHere: 'Inicia sesión aquí'
      }
    },
    
    // Footer
    footer: {
      description: 'Nutriendo mentes jóvenes con amor, cuidado y excelencia en educación infantil temprana. Creando una base para el aprendizaje y crecimiento de por vida.',
      quickLinks: 'Enlaces Rápidos',
      contactInfo: 'Información de Contacto',
      stayConnected: 'Mantente Conectado',
      newsletter: 'Suscríbete a nuestro boletín para actualizaciones, consejos y eventos especiales.',
      subscribe: 'Suscribirse',
      privacy: 'Respetamos tu privacidad. Cancela la suscripción en cualquier momento.',
      copyright: '© 2025 Le Jardin Eden. Hecho con',
      forChildren: 'para niños y familias.',
      developedBy: 'Desarrollado por',
      privacyPolicy: 'Política de Privacidad',
      termsOfService: 'Términos de Servicio'
    }
  },
  
  fr: {
    // Navigation
    nav: {
      home: 'Accueil',
      programs: 'Programmes',
      about: 'À Propos',
      contact: 'Contact',
      login: 'Se Connecter',
      enrollNow: 'S\'inscrire Maintenant',
      language: 'Langue'
    },
    
    // Home Page
    home: {
      title: 'Le Jardin Eden - Centre Premier de Garde d\'Enfants et d\'Apprentissage Précoce',
      heroTitle: 'Où Grandissent les Petits Rêves',
      heroSubtitle: 'Nourrissant les jeunes esprits avec amour, soin et excellence dans l\'éducation de la petite enfance. Créant une fondation pour l\'apprentissage et la croissance à vie.',
      awardWinning: 'Centre de Garde d\'Enfants Primé',
      enrollToday: 'S\'inscrire Aujourd\'hui',
      watchTour: 'Voir la Visite',
      
      // Stats
      stats: {
        happyFamilies: 'Familles Heureuses',
        yearsExperience: 'Années d\'Expérience',
        averageRating: 'Note Moyenne',
        licensedInsured: 'Licencié et Assuré'
      },
      
      // Programs Section
      programsTitle: 'Nos Programmes',
      programsSubtitle: 'Programmes adaptés à l\'âge conçus pour nourrir la croissance, l\'apprentissage et le développement à chaque étape du parcours de votre enfant.',
      
      // Testimonials
      testimonialsTitle: 'Ce Que Disent Les Parents',
      testimonialText: 'Le Jardin Eden a été une bénédiction pour notre famille. Emma adore aller à l\'école tous les jours et a tellement grandi !',
      testimonialAuthor: 'Sarah Johnson',
      testimonialRole: 'Mère d\'Emma (4 ans)',
      
      // CTA Section
      ctaTitle: 'Prêt à Rejoindre Notre Famille ?',
      ctaSubtitle: 'Donnez à votre enfant le meilleur départ dans la vie avec notre environnement nourrissant, nos enseignants expérimentés et nos programmes complets.',
      startEnrollment: 'Commencer l\'Inscription',
      scheduleTour: 'Programmer une Visite'
    },
    
    // Programs Page
    programs: {
      title: 'Nos Programmes',
      subtitle: 'Programmes adaptés à l\'âge conçus pour nourrir la croissance, l\'apprentissage et le développement à chaque étape du parcours de votre enfant.',
      
      infantCare: {
        title: 'Soins aux Nourrissons',
        ageRange: '6 semaines - 18 mois',
        description: 'Notre programme pour nourrissons offre un environnement chaleureux et nourrissant où votre bébé peut grandir et se développer à son propre rythme.',
        teacherRatio: 'Ratio Enseignant',
        hours: 'Heures',
        enrollButton: 'S\'inscrire à Ce Programme',
        
        features: {
          title: 'Caractéristiques du Programme',
          items: [
            'Plans de soins individualisés',
            'Horaires d\'alimentation flexibles',
            'Changement de couches et hygiène',
            'Temps sur le ventre et développement moteur',
            'Activités d\'exploration sensorielle',
            'Communication quotidienne avec les parents'
          ]
        },
        
        curriculum: {
          title: 'Points Forts du Curriculum',
          emotional: {
            title: 'Développement Émotionnel',
            description: 'Construire la confiance et la sécurité grâce à des soins aimants et cohérents'
          },
          social: {
            title: 'Compétences Sociales',
            description: 'Interaction sociale précoce avec les soignants et les pairs'
          },
          language: {
            title: 'Développement du Langage',
            description: 'Lecture, chant et conversation pour promouvoir les compétences linguistiques'
          },
          physical: {
            title: 'Développement Physique',
            description: 'Activités adaptées à l\'âge pour développer les compétences motrices'
          }
        }
      },
      
      toddler: {
        title: 'Programme Tout-Petits',
        ageRange: '18 mois - 3 ans',
        description: 'Notre programme pour tout-petits encourage l\'exploration, l\'indépendance et le développement social à travers le jeu structuré et l\'apprentissage.',
        features: [
          'Soutien à l\'apprentissage de la propreté',
          'Développement des compétences sociales',
          'Activités d\'expression créative',
          'Développement du langage',
          'Construction de l\'indépendance',
          'Temps de jeu structuré'
        ]
      },
      
      preschool: {
        title: 'Préscolaire',
        ageRange: '3 - 5 ans',
        description: 'Curriculum pré-K complet préparant les enfants au succès en maternelle.',
        features: [
          'Préparation académique',
          'Activités STEM',
          'Construction du caractère',
          'Préparation à la lecture',
          'Concepts mathématiques',
          'Art et créativité'
        ]
      },
      
      schoolAge: {
        title: 'Âge Scolaire',
        ageRange: '5 - 12 ans',
        description: 'Programmes après l\'école et d\'été avec aide aux devoirs et activités d\'enrichissement.',
        features: [
          'Soutien aux devoirs',
          'Sorties éducatives',
          'Compétences de leadership',
          'Activités sportives',
          'Arts et artisanat',
          'Apprentissage technologique'
        ]
      }
    },
    
    // About Page
    about: {
      title: 'À Propos de Le Jardin Eden',
      subtitle: 'Nourrissant les jeunes esprits avec amour, soin et excellence dans l\'éducation de la petite enfance depuis 2009.',
      
      story: {
        title: 'Notre Histoire',
        content: 'Fondé en 2009 par des spécialistes de l\'éducation de la petite enfance, Le Jardin Eden a été une pierre angulaire de la garde d\'enfants de qualité dans notre communauté. Nous croyons que chaque enfant mérite un environnement nourrissant où il peut grandir, apprendre et s\'épanouir. Notre philosophie se centre sur la création d\'un "jardin" où les enfants peuvent fleurir à leur propre rythme, soutenus par des éducateurs expérimentés qui comprennent les besoins uniques de chaque étape de développement.'
      },
      
      features: [
        {
          title: 'Licencié et Accrédité',
          description: 'Licencié par l\'état et accrédité nationalement'
        },
        {
          title: 'Environnement Bienveillant',
          description: 'Atmosphère chaleureuse et nourrissante pour tous les enfants'
        },
        {
          title: 'Personnel Expérimenté',
          description: '15+ années d\'expérience moyenne en enseignement'
        },
        {
          title: 'Sûr et Sécurisé',
          description: 'Mesures complètes de sûreté et de sécurité'
        }
      ]
    },
    
    // Contact Page
    contact: {
      title: 'Contactez-Nous',
      subtitle: 'Nous aimerions avoir de vos nouvelles ! Contactez-nous pour programmer une visite ou poser des questions.',
      
      getInTouch: 'Entrer en Contact',
      
      info: {
        phone: {
          title: 'Téléphone',
          description: 'Appelez-nous pendant les heures d\'ouverture'
        },
        email: {
          title: 'Email',
          description: 'Nous répondons dans les 24 heures'
        },
        address: {
          title: 'Adresse',
          description: 'Visitez-nous pour une visite'
        },
        hours: {
          title: 'Heures',
          weekdays: 'Lun-Ven : 6h30 - 18h30',
          saturday: 'Samedi : 8h00 - 16h00'
        }
      },
      
      form: {
        title: 'Envoyez-nous un Message',
        firstName: 'Prénom',
        lastName: 'Nom de Famille',
        email: 'Email',
        phone: 'Téléphone',
        message: 'Message',
        submit: 'Envoyer le Message'
      }
    },
    
    // Authentication
    auth: {
      login: {
        title: 'Bon Retour',
        subtitle: 'Connectez-vous à votre compte Le Jardin Eden',
        email: 'Adresse Email',
        password: 'Mot de Passe',
        signIn: 'Se Connecter',
        noAccount: 'Vous n\'avez pas de compte ?',
        registerHere: 'Inscrivez-vous ici'
      },
      
      register: {
        title: 'Rejoignez Notre Famille',
        subtitle: 'Créez votre compte Le Jardin Eden et commencez le processus d\'inscription',
        parentName: 'Nom du Parent/Tuteur',
        email: 'Adresse Email',
        phone: 'Numéro de Téléphone',
        childName: 'Nom de l\'Enfant',
        childAge: 'Âge de l\'Enfant',
        program: 'Programme d\'Intérêt',
        submit: 'Soumettre l\'Inscription',
        hasAccount: 'Vous avez déjà un compte ?',
        signInHere: 'Connectez-vous ici'
      }
    },
    
    // Footer
    footer: {
      description: 'Nourrissant les jeunes esprits avec amour, soin et excellence dans l\'éducation de la petite enfance. Créant une fondation pour l\'apprentissage et la croissance à vie.',
      quickLinks: 'Liens Rapides',
      contactInfo: 'Informations de Contact',
      stayConnected: 'Restez Connecté',
      newsletter: 'Abonnez-vous à notre newsletter pour des mises à jour, conseils et événements spéciaux.',
      subscribe: 'S\'abonner',
      privacy: 'Nous respectons votre vie privée. Désabonnez-vous à tout moment.',
      copyright: '© 2025 Le Jardin Eden. Fait avec',
      forChildren: 'pour les enfants et les familles.',
      developedBy: 'Développé par',
      privacyPolicy: 'Politique de Confidentialité',
      termsOfService: 'Conditions de Service'
    }
  }
};

export default translations;

