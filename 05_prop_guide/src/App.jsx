import BasicProps from "./components/BasicProps";
import ChildrenProps from "./components/ChildrenProps";
import ComplexProps from "./components/ComplexProps";
import RefProps from "./components/RefProps";
import ThemeToggler, { ThemeProvider } from "./components/ThemeToggler";
import { useTheme } from "./components/ThemeToggler";

function Navigation() {
  const { isDark } = useTheme();
  const sections = [
    { id: "basic", lable: "Basic Props", icon: "📦" },
    { id: "children", lable: "Children Props", icon: "👶" },
    { id: "complex", lable: "Complex Props", icon: "🔍" },
    { id: "ref", lable: "Ref Props", icon: "🔗" },
    { id: "theme", lable: "Theme Toggler", icon: "🌓" },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 shadow-md
        transition-colors
        ${isDark ? "bg-gray-800" : "bg-white"}
      `}
    >
      <div className={`container mx-auto px-4 py-4`}>
        <div className={`flex flex-wrap gap-2 justify-center`}>
          {sections.map((sections) => (
            <button
              className={`
              px-4 py-2 rounded-lg font-medium 
              transition-all hover:bg-blue-700 bg-blue-600
              text-white
            `}
              key={sections.id}
            >
              <span className={`mr-2`}>{sections.icon}</span>
              {sections.lable}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

function AppContent() {
  // const isDark = true;
  const { isDark } = useTheme();
  return (
    <div
      className={`min-h-screen ${isDark ? "bg-gray-800" : "bg-gradient-to-br from-blue-50 to-purple-50"}`}
    >
      <Navigation />
      <div className={`container mx-auto px-4 py-8`}>
        <header
          className={`mb-12 text-center transition-colors ${
            isDark ? "text-white" : "text-gray-800"
          }`}
        >
          <h1 className={`text-5xl font-bold mb-4`}>React props guide</h1>
          <p
            className={`text-xl ${isDark ? "text-gray-300" : "text-gray-700"}`}
          >
            A comprehensice guide on how to use props in React
          </p>
          <div
            className={`mt-4 inline-block px-4 py-2
              rounded-full ${isDark ? "text-white" : "text-blue-800"}
            `}
          >
            <span className={`mr-2`}>
              {" "}
              Build with React + TailwindCSS + vite{" "}
            </span>
          </div>
        </header>

        <div className={`space-y-8`}>
          <div id="basic" className={`scroll-mt-20`}>
            <BasicProps />
          </div>
          <div id="children" className={`scroll-mt-20`}>
            <ChildrenProps />
          </div>
          <div id="complex" className={`scroll-mt-20`}>
            <ComplexProps />
          </div>
          <div id="ref" className={`scroll-mt-20`}>
            <RefProps />
          </div>
          <div id="theme" className={`scroll-mt-20`}>
            <ThemeToggler />
          </div>
        </div>

        <footer
          className={`mt-12 text-center pb-8 transition-colors ${
            isDark ? "text-white" : "text-gray-800"
          }`}
        >
          <p className={`text-sm`}>
            &copy; {new Date().getFullYear()} React props guide. All rights
            reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
