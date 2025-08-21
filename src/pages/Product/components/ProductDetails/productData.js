import { product1, product2, product3, product4 } from "../../../../assets/product/product";


const products = [
  {
    id: 1,
    name: 'Nexemy',
    tagline: 'Empower Learning, Anywhere',
    description: 'Take control of your education with a modern e-learning platform...',
    imageUrl: product4,
    rating: 4.8,
    reviews: 234,
    features: [
      'Personalized learning paths',
      'Real-time progress tracking',
      'Interactive content',
      'Mobile-friendly design',
      'Certificate completion'
    ],
    category: 'Education',
    detailedDescription: 'Nexemy revolutionizes the way we approach education...',
    specifications: [
      'Cloud-based platform',
      '99.9% uptime guarantee',
      'Multi-device synchronization',
      'Offline content access',
      '24/7 technical support'
    ]
  },
  {
    id: 2,
    name: "Roriri's Attendance App",
    tagline: 'Revolutionize Attendance Tracking',
    description: 'Revolutionize attendance tracking with Roriri\'s easy-to-use app...',
    imageUrl: product1,
    rating: 4.6,
    reviews: 156,
    features: [
      'Easy attendance marking',
      'Detailed reporting',
      'Multi-organization support',
      'Time-saving automation',
      'Export capabilities'
    ],
    category: 'Productivity',
    detailedDescription: 'Roriri\'s Attendance App streamlines attendance management...',
    specifications: [
      'Cross-platform compatibility',
      'Real-time synchronization',
      'Advanced analytics dashboard',
      'Bulk data import/export',
      'Role-based access control'
    ]
  },
  {
    id: 3,
    name: 'Referral Dashboard',
    tagline: 'Effortless Campaign Management',
    description: 'Track and manage referral campaigns effortlessly...',
    imageUrl: product2,
    rating: 4.9,
    reviews: 89,
    features: [
      'Campaign tracking',
      'Performance analytics',
      'Reward management',
      'Integration support',
      'Growth insights'
    ],
    category: 'Marketing',
    detailedDescription: 'Our Referral Dashboard provides businesses with a powerful tool...',
    specifications: [
      'API integrations',
      'Custom reward structures',
      'Advanced reporting',
      'White-label options',
      'Fraud detection system'
    ]
  },
  {
    id: 4,
    name: 'Sales Management Dashboard',
    tagline: 'Actionable Sales Insights',
    description: 'Actionable insights into your sales pipeline with a powerful dashboard...',
    imageUrl:product3,
    rating: 4.7,
    reviews: 312,
    features: [
      'Lead tracking',
      'Revenue forecasting',
      'Team performance metrics',
      'Pipeline management',
      'Productivity tools'
    ],
    category: 'Sales',
    detailedDescription: 'Transform your sales process with our comprehensive dashboard...',
    specifications: [
      'CRM integration',
      'AI-powered forecasting',
      'Custom reporting',
      'Mobile application',
      'Team collaboration tools'
    ]
  }
];

export default products;
