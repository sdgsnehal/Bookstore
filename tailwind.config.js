/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: '#3490dc',
          secondary: '#ffed4a',
          danger: '#e3342f',
          'green-900': '#22543d',
          'green-800': '#2c7a5f',
          'green-700': '#3a9671',
          'green-600': '#48bb83',
          'green-500': '#5cc96b',
          'green-400': '#6ee7b7',
          'green-300': '#7cf0c3',
          'green-200': '#8af2c9',
          'bg-green-100': '#9cf6d9',
          'bg-green-50': '#22C55E',
          'grey-50': '#F9FAFB',
          'grey-100': '#F0FDF4',
          'grey-200': '#D9E2EC',
          'text-light-100': '#F7FAFC',
          'text-light-200': '#EDF2F7',
          'text-light-300': '#E2E8F0',
          'text-light-400': '#CBD5E0',
          'text-light-500': '#616663',
          'text-dark-50': '##232523',
          'text-dark-100': '#1A202C',
          'text-dark-200': '#2D3748',
          'text-dark-300': '#4A5568',
          'text-dark-400': '#718096',
          'text-dark-500': '#A0AEC0',
          'text-dark-600': '#CBD5E0',
          'text-dark-700': '#E2E8F0',
        },
      },
    },
    plugins: [],
  }
  
  