// import { useState,useEffect} from 'react';

// import  NavBar from "./Navbar"

// import Sidebar from"./Sidebar"
// import "./index.css"




// function App() {
//   const [isDarkMode, setIsDarkMode] = useState(() => {
//     // Read dark mode preference from local storage
//     const savedMode = localStorage.getItem('dark-mode');
//     return savedMode === 'true';
//   });

//   useEffect(() => {
//     if (isDarkMode) {
//       document.documentElement.classList.add('dark');
//     } else {
//       document.documentElement.classList.remove('dark');
//     }

//     localStorage.setItem('dark-mode', isDarkMode);
//   }, [isDarkMode]);

//   const toggleDarkMode = () => {
//     setIsDarkMode(!isDarkMode);
//   };

//   return (
//     <div className="App bg-yellow-400 dark:bg-red-700 text-black dark:text-yellow-400 min-h-screen">
//       {/* <button 
//         onClick={toggleDarkMode} 
//         className="mb-4 p-2 bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
//       >
//         Toggle Dark Mode
//       </button> */}

      
//       <NavBar isDarkMode={isDarkMode}   toggleDarkMode={toggleDarkMode} />
//      <Sidebar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
  
//     </div>
//   );
// }

// export default App;

import useDarkMode from "./useDarkMode";
import NavBar from "./Navbar";
import Sidebar from "./Sidebar";
import Mainsection from "./Mainsection";
import Wallpaper from "./Wallpaper";
import "./index.css";

function App() {
  const [isDarkMode, setIsDarkMode] = useDarkMode();

  return (  
    <div className="App bg-gray-400  dark:bg-black dark:text-orange-600  min-h-screen">
          <NavBar isDarkMode={isDarkMode} toggleDarkMode={() => setIsDarkMode(!isDarkMode)} />
      <Sidebar isDarkMode={isDarkMode} toggleDarkMode={() => setIsDarkMode(!isDarkMode)} />
      <Mainsection isDarkMode={isDarkMode} toggleDarkMode={() => setIsDarkMode(!isDarkMode)} />
    <div>
     
    </div>


        </div>
    
    
  
  );
}

export default App;
