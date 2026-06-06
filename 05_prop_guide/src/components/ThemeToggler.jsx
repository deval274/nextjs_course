import { createContext, useState, useContext } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const value = {
    theme,
    toggleTheme,
    isDark: theme === "dark",
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

function ThemeToggleButton() {
  const { toggleTheme, isDark } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={`relative w-14 h-8 rounded-full transition-colors duration-300 ${
        isDark ? "bg-blue-600" : "bg-gray-300"
      }`}
    >
      <span
        className={`absolute top-1 left-1 size-6 rounded-full bg-white shadow-md flex items-center justify-center text-sm transition-transform duration-300 ${
          isDark ? "translate-x-6" : "translate-x-0"
        }`}
      >
        {isDark ? "🌙" : "☀️"}
      </span>
    </button>
  );
}

function ThemeCard({ title, children }) {
  const { isDark } = useTheme();

  return (
    <div
      className={`p-4 rounded-lg shadow-md transition-colors duration-300 ${
        isDark
          ? "bg-gray-700 border border-gray-600"
          : "bg-gray-50 border border-gray-200"
      }`}
    >
      <h3
        className={`text-lg font-semibold mb-2 ${
          isDark ? "text-white" : "text-gray-800"
        }`}
      >
        {title}
      </h3>
      <div className={isDark ? "text-gray-300" : "text-gray-600"}>
        {children}
      </div>
    </div>
  );
}

function ThemedButton({ children, variant = "primary", onClick }) {
  const { isDark } = useTheme();

  const getButtonClasses = () => {
    const base =
      "px-4 py-2 rounded-md font-medium transition-colors duration-300 cursor-pointer";

    const variants = {
      primary: isDark
        ? "bg-blue-600 text-white hover:bg-blue-700"
        : "bg-orange-500 text-white hover:bg-orange-600",
      secondary: isDark
        ? "bg-gray-600 text-white hover:bg-gray-500"
        : "bg-orange-200 text-gray-800 hover:bg-orange-300",
      danger: isDark
        ? "bg-red-600 text-white hover:bg-red-700"
        : "bg-red-500 text-white hover:bg-red-600",
      success: isDark
        ? "bg-green-600 text-white hover:bg-green-700"
        : "bg-green-500 text-white hover:bg-green-600",
      warning: isDark
        ? "bg-yellow-500 text-gray-900 hover:bg-yellow-600"
        : "bg-yellow-400 text-gray-900 hover:bg-yellow-500",
      info: isDark
        ? "bg-indigo-600 text-white hover:bg-indigo-700"
        : "bg-indigo-500 text-white hover:bg-indigo-600",
    };

    return `${base} ${variants[variant] ?? variants.primary}`;
  };

  return (
    <button type="button" onClick={onClick} className={getButtonClasses()}>
      {children}
    </button>
  );
}

function ThemeToggler() {
  const { theme, isDark } = useTheme();
  const [clickCount, setClickCount] = useState(0);

  const handleButtonClick = () => setClickCount((count) => count + 1);

  const headingClass = isDark ? "text-white" : "text-gray-700";
  const subtextClass = isDark ? "text-gray-300" : "text-gray-600";

  return (
    <section
      className={`p-8 rounded-xl shadow-2xl transition-colors duration-300 ${
        isDark ? "bg-gray-800 text-white" : "bg-white text-gray-800"
      }`}
    >
      <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
        <h2 className={`text-2xl font-bold ${headingClass}`}>Theme Toggler</h2>
        <div className="flex items-center gap-3">
          <span className={`text-sm font-medium ${subtextClass}`}>
            {isDark ? "Dark Mode" : "Light Mode"}
          </span>
          <ThemeToggleButton />
        </div>
      </div>

      <p className={`mb-6 ${subtextClass}`}>
        This section demonstrates React Context passed via props. The{" "}
        <code
          className={`px-1.5 py-0.5 rounded text-sm ${
            isDark ? "bg-gray-700" : "bg-gray-100"
          }`}
        >
          ThemeProvider
        </code>{" "}
        wraps the app and shares theme state through the{" "}
        <code
          className={`px-1.5 py-0.5 rounded text-sm ${
            isDark ? "bg-gray-700" : "bg-gray-100"
          }`}
        >
          useTheme
        </code>{" "}
        hook. Toggle the switch to see child components update automatically.
      </p>

      <div className="mb-8 grid gap-4 sm:grid-cols-2">
        <ThemeCard title="Current Theme">
          Active theme: <strong>{theme}</strong>
        </ThemeCard>
        <ThemeCard title="Context in Action">
          All cards and buttons below read from the same shared context — no
          prop drilling required.
        </ThemeCard>
      </div>

      <div className="space-y-4">
        <h3 className={`text-lg font-bold ${headingClass}`}>
          Themed button variants
        </h3>
        <p className={`text-sm ${subtextClass}`}>
          Click any button to increment the counter:{" "}
          <strong>{clickCount}</strong>
        </p>
        <div className="flex flex-wrap gap-3">
          <ThemedButton variant="primary" onClick={handleButtonClick}>
            Primary
          </ThemedButton>
          <ThemedButton variant="secondary" onClick={handleButtonClick}>
            Secondary
          </ThemedButton>
          <ThemedButton variant="danger" onClick={handleButtonClick}>
            Danger
          </ThemedButton>
          <ThemedButton variant="success" onClick={handleButtonClick}>
            Success
          </ThemedButton>
          <ThemedButton variant="warning" onClick={handleButtonClick}>
            Warning
          </ThemedButton>
          <ThemedButton variant="info" onClick={handleButtonClick}>
            Info
          </ThemedButton>
        </div>
      </div>
    </section>
  );
}

export default ThemeToggler;
