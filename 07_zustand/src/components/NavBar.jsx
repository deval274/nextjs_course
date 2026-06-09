import { useAppStore } from "../store/appStore";

function NavBar() {
  const user = useAppStore((state) => state.user);
  const theme = useAppStore((state) => state.theme);
  const themeToggle = useAppStore((state) => state.toggleTheme);
  const logout = useAppStore((state) => state.logout);
  return (
    <nav>
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500">Theme: {theme}</span>
        <button className="text-sm text-blue-500" onClick={themeToggle}>
          Togggle Theme
        </button>
        {user ? (
          <>
            <span className="text-sm text-gray-500">Hi, {user.name}</span>
            <button className="text-sm text-blue-500" onClick={logout}>
              logout
            </button>
          </>
        ) : (
          <span className="text-sm text-gray-500">Guest User</span>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
