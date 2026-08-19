export type Project = {
  id: string
  index: string
  title: string
  subtitle: string
  description: string
  tech: string[]
  built: string[]
  flow: string[]
  image: string
  imageAlt: string
  liveUrl: string
  githubUrl: string
  layout: "feature" | "alt" | "wide" | "grid"
}

export const projects: Project[] = [
  {
    id: "neuromate",
    index: "01",
    title: "NeuroMate",
    subtitle: "Adaptive ASD Screening System",
    description:
      "An AI-enhanced screening platform that uses adaptive questioning, category-based assessment, severity analysis, and automated PDF reports to support early ASD screening.",
    tech: ["React.js", "FastAPI", "Python", "ReportLab"],
    built: [
      "Adaptive questioning that explores categories based on user responses",
      "Six behavioral assessment categories with individual severity levels",
      "Real-time screening flow with progress tracking",
      "Automated PDF reports with assessment results and guidance",
    ],
    flow: [
      "Demographics",
      "Adaptive Screening",
      "Category Scoring",
      "Assessment",
      "PDF Report",
    ],
    image: "/projects/neuromate.png",
    imageAlt: "NeuroMate adaptive ASD screening application",
    liveUrl: "https://neuro-mate.vercel.app/",
    githubUrl: "https://github.com/hemalathabora/NeuroMate-ASD",
    layout: "feature",
  },

  {
    id: "resume-screener",
    index: "02",
    title: "Resume Screener",
    subtitle: "AI-Powered Resume Analysis & Candidate Ranking",
    description:
      "A Django-based recruitment platform that analyzes resumes, checks job eligibility, detects suspicious content, recommends improvements, and ranks suitable candidates.",
    tech: [
      "Django",
      "Python",
      "Scikit-learn",
      "NLTK",
      "Pandas",
      "Bootstrap",
    ],
    built: [
      "Resume parsing and content analysis",
      "Job matching using TF-IDF and cosine similarity",
      "Resume fraud and suspicious-content detection",
      "Candidate scoring, ranking, and skill-gap recommendations",
    ],
    flow: [
      "Resume Upload",
      "Content Analysis",
      "Fraud Check",
      "Job Matching",
      "Eligibility",
      "Ranking",
    ],
    image: "/projects/resumescreener.png",
    imageAlt: "Resume Screener recruitment analysis interface",
    liveUrl: "https://rescume-scan-5.onrender.com/",
    githubUrl: "https://github.com/hemalathabora/Resume-screener",
    layout: "alt",
  },

  {
    id: "morphshield",
    index: "03",
    title: "MorphShield AI",
    subtitle: "Explainable Face-Morphing Risk Assessment",
    description:
      "An explainable biometric security system that analyzes a single facial image using structural symmetry and skin-texture characteristics to generate a risk-based KYC assessment.",
    tech: ["Python", "OpenCV", "MediaPipe", "NumPy", "Streamlit"],
    built: [
      "Facial landmark detection using MediaPipe",
      "Facial structural symmetry analysis",
      "Skin texture entropy analysis",
      "Risk scoring with Low, Medium, and High risk levels",
      "Human-review focused verification recommendations",
    ],
    flow: [
      "Image Upload",
      "Face Landmarks",
      "Symmetry Analysis",
      "Texture Analysis",
      "Risk Score",
      "Review",
    ],
    image: "/projects/morphshield.png",
    imageAlt: "MorphShield AI biometric risk assessment interface",
    liveUrl: "https://morphshield-ai.onrender.com/",
    githubUrl: "https://github.com/hemalathabora/MorphShield-AI",
    layout: "wide",
  },

  {
    id: "fake-job-detector",
    index: "04",
    title: "Fake Job Posting Detector",
    subtitle: "NLP-Based Fraud Detection",
    description:
      "A machine learning application that identifies potentially fraudulent job postings using NLP, TF-IDF, balanced classification, and explainability techniques.",
    tech: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "TF-IDF",
      "Logistic Regression",
      "Streamlit",
    ],
    built: [
      "Text cleaning and NLP preprocessing",
      "TF-IDF feature extraction from job descriptions",
      "Balanced Logistic Regression classification",
      "Suspicious keyword and model-based explanations",
      "Confidence score for prediction results",
    ],
    flow: [
      "Job Description",
      "Text Processing",
      "TF-IDF",
      "ML Classifier",
      "Prediction",
      "Explanation",
    ],
    image: "/projects/fake-job-detector.png",
    imageAlt: "Fake Job Posting Detector machine learning interface",
    liveUrl:
      "https://fake-job-posting-detector-aq5lnbvbqsp2uh5ztg4mtl.streamlit.app/",
    githubUrl:
      "https://github.com/hemalathabora/fake-job-posting-detector",
    layout: "grid",
  },

  {
    id: "rescue-nexus",
    index: "05",
    title: "Rescue Nexus",
    subtitle: "Real-Time Disaster Response Platform",
    description:
      "A disaster management platform that brings together alerts, weather information, interactive maps, evacuation routes, resources, and crowdsourced updates.",
    tech: ["Django", "Python", "JavaScript", "Bootstrap", "APIs"],
    built: [
      "Real-time disaster and emergency updates",
      "Interactive map with shelters and medical resources",
      "Weather information and early-warning support",
      "Evacuation routes and resource availability",
      "Crowdsourced situation updates",
    ],
    flow: [
      "Disaster Data",
      "Alerts",
      "Location",
      "Maps & Weather",
      "Resources",
      "Evacuation",
    ],
    image: "/projects/rescue-nexus.png",
    imageAlt: "Rescue Nexus disaster response platform",
    liveUrl: "https://rescue-nexus.onrender.com",
    githubUrl: "https://github.com/hemalathabora/Rescue-Nexus",
    layout: "feature",
  },

  {
    id: "smarttailor",
    index: "06",
    title: "SmartTailor",
    subtitle: "Digitally Augmented Tailoring Workflow",
    description:
      "A Django-based workflow management platform that helps tailoring businesses manage customer orders, measurements, designs, inventory, and stitching progress.",
    tech: ["Django", "Python", "Bootstrap", "SQLite", "PostgreSQL"],
    built: [
      "Customer order placement and tracking",
      "Tailor dashboard for managing stitching workflows",
      "Design and measurement image uploads",
      "Order status and delivery management",
      "AI-based body measurement estimation in the backend",
    ],
    flow: [
      "Customer Order",
      "Measurements",
      "Design",
      "Tailor Dashboard",
      "Stitching Status",
      "Completion",
    ],
    image: "/projects/tailor.png",
    imageAlt: "SmartTailor tailoring workflow management platform",
    liveUrl: "",
    githubUrl: "https://github.com/hemalathabora/smarttailor",
    layout: "grid",
  },

  {
    id: "instant-blood-donor",
    index: "07",
    title: "Instant Blood Donor",
    subtitle: "Emergency Blood Donor Finder",
    description:
      "A Flask-based platform that helps users quickly find blood donors by matching blood groups and locations during emergency situations.",
    tech: ["Python", "Flask", "SQLite", "HTML", "CSS"],
    built: [
      "Volunteer donor registration",
      "Blood-group and location-based donor search",
      "Emergency donor discovery",
      "Feedback system for users",
      "Simple responsive web interface",
    ],
    flow: [
      "Donor Registration",
      "Blood Group",
      "Location",
      "Donor Search",
      "Contact",
    ],
    image: "/projects/Ibd.png",
    imageAlt: "Instant Blood Donor emergency donor finder",
    liveUrl: "https://instantblooddonor.onrender.com/",
    githubUrl: "https://github.com/hemalathabora/InstantBloodDonor",
    layout: "grid",
  },

  {
    id: "weather-forecast",
    index: "08",
    title: "Weather Forecasting",
    subtitle: "ML-Powered Weather Prediction",
    description:
      "A Django-based weather application that combines location search, weather data, NASA datasets, and machine learning to provide forecast information.",
    tech: [
      "Django",
      "Python",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Bootstrap",
    ],
    built: [
      "Location-based weather search",
      "Date-based forecast views",
      "Machine learning weather prediction",
      "Six-parameter weather visualization",
      "NASA dataset integration for model training",
    ],
    flow: [
      "Location",
      "Weather Data",
      "ML Model",
      "Prediction",
      "Forecast",
    ],
    image: "/projects/weather.png",
    imageAlt: "Weather forecasting web application",
    liveUrl: "",
    githubUrl: "https://github.com/hemalathabora/Weather_Forecast",
    layout: "grid",
  },
]