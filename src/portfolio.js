const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://www.SyedBurhanAhmed.live',
  title: 'SBA.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Syed Burhan Ahmed',
  role: 'AI Engineer',
  description:
    'Innovative AI engineer with deep expertise in Generative AI, NLP, Computer Vision, and Full-Stack Development. Adept at building real-time AI agents, automating manual workflows, and architecting complex end-to-end solutions using Python, PyTorch, YOLOv11, LangChain, LlamaIndex, and Flask. Demonstrated impact through practical deployments, including a YOLOv11-based fall detection system, a memory-augmented Neo4j conversational agent, a multilingual RAG-powered lecture assistant, and touchless, voice-activated attendance platforms. Experienced in technical mentorship and curriculum development as an AI Team Co-Lead and former Teaching Assistant. Passionate about transforming ideas into production-ready AI systems that drive measurable value and innovation.',
  resume: '/SyedBurhanAhmed.pdf',
  social: {
    linkedin: 'https://linkedin.com/in/syed-burhan-ahmed',
    github: 'https://github.com/SyedBurhanAhmed',
  },
}



const projects = [
  {
    name: 'RULEN – Real-Time Unified Lecture Extraction Network',
    description:
      'Multilingual assistant using Flask, Whisper, and LangChain, automating lecture transcription, bilingual notes, and curriculum-aligned quiz creation for students and teachers.',
    stack: ['Flask', 'OpenAI Whisper', 'LangChain', 'FAISS', 'Gemini LLM', 'Jinja2'],
    sourceCode: 'https://github.com/SyedBurhanAhmed/RULEN-Real-time-Unified-Lecture-Extraction-Network',
  },
  {
    name: 'Freak AI – Memory-Augmented Conversational Agent',
    description:
      'Conversational agent with AIML, Neo4j graph memory, real-time dashboards, and ESP32 hardware for modeling human memory systems and voice interaction.',
    stack: ['Flask', 'Neo4j', 'AIML', 'Prolog', 'Python', 'ESP32'],
    sourceCode: 'https://github.com/SyedBurhanAhmed/Freak-AI',
  },
  {
    name: 'CelebVision – Multi-Pipeline Celebrity Recognition System',
    description:
      'YOLOv11/EfficientNetV2-powered system for real-time face detection, gender classification, and celebrity recognition; 1st place CV Kaggle competition.',
    stack: ['PyTorch', 'YOLOv11', 'EfficientNetV2', 'Albumentations', 'Python'],
    sourceCode: 'https://github.com/SyedBurhanAhmed/CelebVision-Multi-Pipeline-Celebrity-Recognition-System',
  },
  {
    name: 'Fall Detection System using YOLO',
    description:
      'YOLOv11-based fall detection system processing live video feeds for safety in elderly care/public spaces. High precision/recall, with logging and alerting.',
    stack: ['YOLOv11', 'PyTorch', 'OpenCV', 'Python'],
    sourceCode: 'https://github.com/SyedBurhanAhmed/Real-Time-Fall-Detection-using-YOLO',
  },
  {
    name: 'Lahore Arts Council Reservation System',
    description:
      'Full-stack .NET/SQL Server event booking app with user/admin control, email notifications, Excel reporting, and admin dashboard for 500+ users.',
    stack: ['ASP.NET', 'SQL Server', 'HTML', 'Bootstrap', 'SMTP'],
    sourceCode: 'https://github.com/SyedBurhanAhmed/Lahore-Arts-Council-ReservationSystem',
  },
  {
    name: 'Voice-Based Smart Attendance System',
    description:
      'ESP32 and Flask-based attendance system utilizing NFC, fingerprint, and voice recognition; deployed for 200+ students with real-time status display.',
    stack: ['ESP32', 'Flask', 'Python', 'NFC', 'Fingerprint Sensor'],
    sourceCode: '', // Add a public link if available
  }
]

const skills = [
  // Programming Languages
  'Python', 'C/C++', 'Bash', 'MIPS Assembly', 'HTML', 'CSS', 'JavaScript', 'SQL',

  // AI/ML Frameworks & Libraries
  'PyTorch', 'TensorFlow', 'Keras', 'Scikit-learn', 'LangChain', 'LlamaIndex', 'Hugging Face Transformers',
  'NumPy', 'Pandas', 'Matplotlib', 'OpenCV', 'WordNet',
  
  // AI/ML Domains
  'Natural Language Processing (NLP)', 'Deep Learning', 'Generative AI', 'Computer Vision',
  'Retrieval-Augmented Generation (RAG)', 'Optical Character Recognition (OCR)',
  'Multimodal AI', 'Prompt Engineering',

  // Web & API Development
  'Flask (REST APIs)', 'ASP.NET (Web Forms)', 'Gradio',

  // Tools & Platforms
  'Git', 'GitHub', 'Kaggle', 'Hugging Face Spaces', 'Google Colab', 'VS Code', 'PyCharm', 'Visual Studio',

  // Embedded & IoT
  'ESP32', 'NFC', 'Fingerprint Integration', 'Microphone Integration', 'I2C', 'OLED', 'Real-Time Voice Commands',

  // Professional Skills
  'AI Team Leadership', 'Project Management', 'Technical Mentorship', 'Curriculum Development',
  'Teaching', 'Public Speaking'
];



const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'syedburhanahmedd@gmail.com',
}

export { header, about, projects, skills, contact }
