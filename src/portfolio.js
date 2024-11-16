const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://SyedBurhanAhmed.github.io',
  title: 'SBA.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Syed Burhan Ahmed',
  role: 'AI Engineer',
  description:
    'AI, ML, and Data Enthusiast, focused on custom chatbot development , bringing personalized solutions to businesses and users alike.I am committed to delivering innovative solutions that drive efficiency and engagement. ',
  resume: '/resume.pdf',
  social: {
    linkedin: 'https://linkedin.com/in/syed-burhan-ahmed',
    github: 'https://github.com/SyedBurhanAhmed',
  },
}



const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Full-Stack Rule Based Chatbot',
    description:
      'A full-stack AI chatbot using AIML and Python, integrating NLP, sentiment analysis, speech functionalities, and personalized user experiences.',
    stack: [ 'Python', 'Flask', 'AIML', 'WordNet', 'Neo4j', 'SpeechRecognition', 'gTTS','HTML', 'CSS', 'JavaScript'],
    sourceCode: 'https://github.com/SyedBurhanAhmed/Full-Stack-AIML-Chatbot',
  },
  
  {
    name: 'Reservation Website for Lahore Arts Council',
    description:
      'A web application simplifying event booking for users and management for administrators, built with ASP.NET and SQL Server.',
    stack: ['ASP.NET', '.NET Framework', '.NET Web Forms','HTML', 'CSS', 'JavaScript', 'Bootstrap', 'SQL Server'],
    sourceCode: 'https://github.com/SyedBurhanAhmed/Lahore-Arts-Council-ReservationSystem', // Replace with your actual repository URL
  }
  ,
  {
    name: 'University Management System',
    description:
      'A project demonstrating data structures and algorithms to manage university operations, with a focus on departments, students, and courses.',
    stack: ['C++', 'Data Structures', 'Linked Lists', 'Arrays', 'Queues', 'Stacks', 'Object-Oriented Programming'],
    sourceCode: 'https://github.com/SyedBurhanAhmed/University-Management-System-DSA', // Replace with your actual repository URL
  }
  ,
]

const skills = [
  'Custom Chatbot Development',
  'Artificial Intelligence',
  'Neural Networks',
  'SQL',
  'Python',
  'Machine Learning',
  'Prompt Engineering',
  'Cypher',
  'Natural Language Processing (NLP)',
  'C++',
  'MIPS Architecture Assembly',
  'Chatbot Development',
  'Social Media Management',
  'Communication',
]


const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'syedburhanahmedd@gmail.com',
}

export { header, about, projects, skills, contact }
