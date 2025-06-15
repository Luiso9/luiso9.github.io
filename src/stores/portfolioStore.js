import { reactive, readonly } from 'vue';

// Initial sample data
const initialUserData = {
  name: 'Alex Johnson',
  title: 'Frontend Developer',
  tagline: 'Crafting elegant user experiences with modern web technologies',
  bio: 'I am a passionate frontend developer with expertise in Vue.js and modern JavaScript. I love creating responsive, accessible, and performant web applications with clean code and thoughtful architecture.',
  avatar: 'https://placehold.co/400x400/252526/dddddd?text=Alex+Johnson',
  email: 'alex@example.com',
  phone: '+1 (555) 123-4567',
  location: 'San Francisco, CA',
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
  twitter: 'https://twitter.com',
  resume: '',
  experience: '5+ years',
  education: 'BSc Computer Science'
};

const initialProjects = [
  {
    id: '1',
    title: 'E-Commerce Dashboard',
    shortDescription: 'A fully responsive admin dashboard for online stores',
    description: 'A comprehensive e-commerce dashboard built with Vue.js and Chart.js. Features include real-time sales tracking, inventory management, order processing, and customer analytics with intuitive visualizations.',
    image: 'https://placehold.co/800x600/252526/dddddd?text=Dashboard+Screenshot',
    tags: ['Vue.js', 'JavaScript', 'Chart.js', 'Responsive'],
    features: [
      'Real-time sales tracking',
      'Inventory management',
      'Customer analytics',
      'Dark/light mode support'
    ],
    liveUrl: 'https://example.com/dashboard',
    codeUrl: 'https://github.com/example/dashboard'
  },
  {
    id: '2',
    title: 'Weather App',
    shortDescription: 'Minimalist weather application with 5-day forecast',
    description: 'A clean and intuitive weather application that provides current conditions and 5-day forecasts for any location. Built with Vue.js and the OpenWeatherMap API.',
    image: 'https://placehold.co/800x600/252526/dddddd?text=Weather+App',
    tags: ['Vue.js', 'API Integration', 'CSS3', 'Geolocation'],
    features: [
      'Current weather conditions',
      '5-day forecast',
      'Location search',
      'Automatic geolocation'
    ],
    liveUrl: 'https://example.com/weather',
    codeUrl: 'https://github.com/example/weather'
  },
  {
    id: '3',
    title: 'Task Management System',
    shortDescription: 'Collaborative project management tool with Kanban boards',
    description: 'A full-featured task management system with Kanban boards, team collaboration features, and deadline tracking. Includes drag-and-drop functionality and real-time updates.',
    image: 'https://placehold.co/800x600/252526/dddddd?text=Task+Manager',
    tags: ['Vue.js', 'Vuex', 'Firebase', 'Real-time'],
    features: [
      'Kanban board view',
      'Task assignments',
      'Deadline notifications',
      'Team collaboration',
      'File attachments'
    ],
    liveUrl: 'https://example.com/tasks',
    codeUrl: 'https://github.com/example/tasks'
  }
];

const initialSkills = [
  { name: 'JavaScript', icon: 'code', color: '#f7df1e' },
  { name: 'Vue.js', icon: 'web', color: '#42b883' },
  { name: 'HTML5', icon: 'html', color: '#e34f26' },
  { name: 'CSS3', icon: 'css', color: '#1572b6' },
  { name: 'Responsive Design', icon: 'devices', color: '#0078d7' },
  { name: 'Git', icon: 'merge_type', color: '#f05032' },
  { name: 'UI/UX Design', icon: 'brush', color: '#ff7f50' },
  { name: 'REST APIs', icon: 'api', color: '#00bcd4' }
];

// Create the store
function createPortfolioStore() {
  // State
  const state = reactive({
    userData: { ...initialUserData },
    projects: [...initialProjects],
    skills: [...initialSkills]
  });

  // Load data from localStorage
  const loadFromLocalStorage = () => {
    const savedData = localStorage.getItem('portfolioData');
    if (savedData) {
      try {
        const data = JSON.parse(savedData);
        if (data.userData) state.userData = data.userData;
        if (data.projects) state.projects = data.projects;
        if (data.skills) state.skills = data.skills;
      } catch (error) {
        console.error('Error loading data from localStorage:', error);
      }
    }
  };

  // Save data to localStorage
  const saveToLocalStorage = () => {
    const data = {
      userData: state.userData,
      projects: state.projects,
      skills: state.skills
    };
    localStorage.setItem('portfolioData', JSON.stringify(data));
  };

  // Project methods
  const addProject = (project) => {
    state.projects.push(project);
    saveToLocalStorage();
  };

  const updateProject = (project) => {
    const index = state.projects.findIndex(p => p.id === project.id);
    if (index !== -1) {
      state.projects[index] = project;
      saveToLocalStorage();
    }
  };

  const deleteProject = (id) => {
    state.projects = state.projects.filter(project => project.id !== id);
    saveToLocalStorage();
  };

  const setProjects = (projects) => {
    state.projects = projects;
    saveToLocalStorage();
  };

  // Skill methods
  const addSkill = (skill) => {
    state.skills.push(skill);
    saveToLocalStorage();
  };

  const updateSkill = (skill) => {
    const index = state.skills.findIndex(s => s.name === skill.name);
    if (index !== -1) {
      state.skills[index] = skill;
      saveToLocalStorage();
    }
  };

  const deleteSkill = (name) => {
    state.skills = state.skills.filter(skill => skill.name !== name);
    saveToLocalStorage();
  };

  const setSkills = (skills) => {
    state.skills = skills;
    saveToLocalStorage();
  };

  // User data methods
  const updateUserData = (data) => {
    state.userData = { ...state.userData, ...data };
    saveToLocalStorage();
  };

  // Return the store
  return {
    // State (readonly)
    get userData() { return readonly(state.userData) },
    get projects() { return readonly(state.projects) },
    get skills() { return readonly(state.skills) },

    // Methods
    loadFromLocalStorage,
    addProject,
    updateProject,
    deleteProject,
    setProjects,
    addSkill,
    updateSkill,
    deleteSkill,
    setSkills,
    updateUserData
  };
}

// Create and export the store
export const usePortfolioStore = createPortfolioStore;
