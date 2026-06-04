import { useState } from "react";
function UserProfileCard({ user, theme, actions }) {
  return (
    <div
      className={`p-4 rounded-xl shadow-lg ${theme.backgroundColor} ${theme.textColor}`}
    >
      <div className="flex items-start gap-5">
        <div
          className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl ${theme.avatarBg}`}
        >
          {user.avatar}
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold mb-1">{user.name}</h3>
          <p className="text-sm opacity-80 mb-2">{user.email}</p>
          <div className="flex gap-2 text-sm">
            <span className={`px-3 py-1 rounded-full ${theme.badgeBg}`}>
              {user.role}
            </span>
            <span
              className={`px-3 py-1 rounded-full ${user.status === "Offline" ? "bg-red-400 text-white" : theme.badgeBg}`}
            >
              {user.status === "Offline" ? "Offline" : user.status}
            </span>
          </div>
        </div>
      </div>
      <div className="mt-4">
        {user.stats && (
          <div className="mt-4 pt-4 border-t border-gray-300 grid grid-cols-3 gap-4">
            {Object.entries(user.stats).map(([lable, value]) => (
              <div key={lable} className="text-center">
                <div className={`text-2xl font-bold`}>{value}</div>
                <div className={`text-xs opacity-75 capitalize`}>{lable}</div>
              </div>
            ))}
          </div>
        )}
      </div>
      {actions && (
        <div className="mt-4 flex gap-2">
          {actions.primary && (
            <button
              className={`flex-1 py-2 px-4 rounded-lg font-medium transition ${actions.primary.className}`}
              onClick={actions.primary.onClick}
            >
              {actions.primary.lable}
            </button>
          )}
          {actions.secondary && (
            <button
              className={`flex-1 py-2 px-4 rounded-lg font-medium transition ${actions.secondary.className}`}
              onClick={actions.secondary.onClick}
            >
              {actions.secondary.lable}
            </button>
          )}
          {actions.tertiary && (
            <button
              className={`flex-1 py-2 px-4 rounded-lg font-medium transition ${actions.tertiary.className}`}
              onClick={actions.tertiary.onClick}
            >
              {actions.tertiary.lable}
            </button>
          )}
        </div>
      )}
    </div>
  );
}

function ComplexProps() {
  const [message, setMessage] = useState("");
  const users = [
    {
      user: {
        name: "Deval Ujeniya",
        email: "deval@example.com",
        role: "Admin",
        avatar: "👨‍💼",
        status: "active",
        stats: {
          followers: 4289,
          following: 138,
          posts: 155,
        },
      },
      theme: {
        backgroundColor: "bg-gradient-to-br from-purple-100 to-blue-100",
        textColor: "text-gray-800",
        avatarBg: "bg-purple-300",
        badgeBg: "bg-purple-200",
      },
      actions: {
        primary: {
          lable: "View Profile",
          onClick: () => setMessage("Viewing the user profile"),
          className:
            "bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md",
        },
        secondary: {
          lable: "Message",
          onClick: () => setMessage("Opening the message window"),
          className:
            "bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md",
        },
        tertiary: {
          lable: "Share",
          onClick: () => setMessage("Sharing the user profile"),
          className:
            "bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md",
        },
      },
    },
    {
      user: {
        name: "John Doe",
        email: "john@example.com",
        role: "Developer",
        avatar: "👨‍💻",
        status: "Offline",
        stats: {
          projects: 12,
          commits: 1536,
          reviews: 34,
        },
      },
      theme: {
        backgroundColor: "bg-gradient-to-br from-green-100 to-blue-100",
        textColor: "text-gray-800",
        avatarBg: "bg-green-300",
        badgeBg: "bg-green-200",
      },
      actions: {
        primary: {
          lable: "View Profile",
          onClick: () => setMessage("Viewing the user profile"),
          className:
            "bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md",
        },
        secondary: {
          lable: "Message",
          onClick: () => setMessage("Opening the message window"),
          className:
            "bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md",
        },
        tertiary: {
          lable: "Share",
          onClick: () => setMessage("Sharing the user profile"),
          className:
            "bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md",
        },
      },
    },
    {
      user: {
        name: "Jane Doe",
        email: "jane@example.com",
        role: "Developer",
        avatar: "👨‍💻",
        status: "Online",
        stats: {
          projects: 5,
          commits: 100,
          reviews: 20,
        },
      },
      theme: {
        backgroundColor: "bg-gradient-to-br from-green-100 to-blue-100",
        textColor: "text-gray-800",
        avatarBg: "bg-green-300",
        badgeBg: "bg-green-200",
      },
      actions: {
        primary: {
          lable: "View Profile",
          onClick: () => setMessage("Viewing the user profile"),
          className:
            "bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md",
        },
        secondary: {
          lable: "Message",
          onClick: () => setMessage("Opening the message window"),
          className:
            "bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md",
        },
        tertiary: {
          lable: "Share",
          onClick: () => setMessage("Sharing the user profile"),
          className:
            "bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md",
        },
      },
    },
  ];
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-xl shadow-2xl p-8">
        <h3 className="text-2xl font-bold mb-4 text-gray-700">
          User Profile Card
        </h3>
        <p className="text-gray-600 mb-6">
          This is a user profile card component that displays user information
          and actions.
        </p>
        <div className="space-y-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {users.map((userData, index) => (
            <UserProfileCard key={index} {...userData} />
          ))}
        </div>
        <p className="text-gray-600 mt-4 text-center text-lg font-medium bg-blue-100 p-4 rounded-md">
          {message ? message : "No message yet"}
        </p>
      </div>
    </div>
  );
}

export default ComplexProps;
