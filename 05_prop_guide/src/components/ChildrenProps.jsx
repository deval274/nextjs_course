function Card({ children, title, color = "blue" }) {
  const colorClasses = {
    blue: "bg-blue-300 border-blue-600",
    red: "bg-red-300 border-red-600",
    green: "bg-green-300 border-green-600",
    yellow: "bg-yellow-300 border-yellow-600",
    purple: "bg-purple-300 border-purple-600",
  };
  return (
    <div
      className={`border-l-4 p-6 rounded-lg shadow-md ${colorClasses[color]}`}
    >
      {title && (
        <h3 className="text-lg font-bold mb-2 text-gray-800">{title}</h3>
      )}
      <div className="text-gray-700">{children}</div>
    </div>
  );
}

function Container({ children, layout = "vertical" }) {
  const layoutClasses = {
    vertical: "flex flex-col gap-4 space-y-4",
    horizontal: "flex flex-row gap-4 flex-wrap",
    grid: "grid grid-cols-1 gap-4 md:grid-cols-2",
  };
  return <div className={`${layoutClasses[layout]}`}>{children}</div>;
}

function ChildrenProps() {
  return (
    <section className="p-8 bg-white rounded-xl shadow-2xl">
      <h2 className="text-2xl font-bold mb-4 text-gray-700">Children Props</h2>
      <p className="text-gray-600 mb-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime animi,
        rem nisi ut culpa iste consequuntur officiis aut accusamus pariatur!
      </p>
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-bold mb-2 text-gray-700">
            Card Component with children
          </h3>
          <div className="mb-6">
            <h1 className="text-2xl font-bold mb-2 text-gray-700">
              This is the Grid Layout
            </h1>
            <Container layout="grid">
              <Card title="User Profile" color="blue">
                <p className="mb-2">
                  <strong>Name: </strong> Deval Ujeniya
                </p>
                <p className="mb-2">
                  <strong>Email: </strong> deval@example.com
                </p>
                <p className="mb-2">
                  <strong>Role: </strong> Software Engineer
                </p>
                <p className="mb-2">
                  <strong>Skills: </strong> React, Node.js, MongoDB
                </p>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
                  View Profile
                </button>
              </Card>
              <Card title="User Profile" color="green">
                <p className="mb-2">
                  <strong>Name: </strong> Deval Ujeniya
                </p>
                <p className="mb-2">
                  <strong>Email: </strong> deval@example.com
                </p>
                <p className="mb-2">
                  <strong>Role: </strong> Software Engineer
                </p>
                <p className="mb-2">
                  <strong>Skills: </strong> React, Node.js, MongoDB
                </p>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
                  View Profile
                </button>
              </Card>
              <Card title="User Profile" color="purple">
                <h2 className="text-2xl font-bold mb-2 text-gray-700">
                  This is the Button Component
                </h2>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md mr-2">
                  View Profile
                </button>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md mr-2">
                  View Profile
                </button>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md mr-2">
                  View Profile
                </button>
              </Card>
              <Card title="User Profile" color="red">
                <h3 className="text-lg font-bold mb-2 text-gray-700">
                  This is the Image Component
                </h3>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfCBQAq4fDkjizcfZGBW_6ir3gL4Kd8b_3fA&s"
                  alt="Image"
                  className="w-full h-auto"
                />
              </Card>
            </Container>
          </div>

          <div className="mb-6">
            <h1 className="text-2xl font-bold mb-2 text-gray-700">
              This is the Vertical Layout
            </h1>
            <Container layout="vertical">
              <Card title="User Profile" color="blue">
                <p className="mb-2">
                  <strong>Name: </strong> Deval Ujeniya
                </p>
                <p className="mb-2">
                  <strong>Email: </strong> deval@example.com
                </p>
                <p className="mb-2">
                  <strong>Role: </strong> Software Engineer
                </p>
                <p className="mb-2">
                  <strong>Skills: </strong> React, Node.js, MongoDB
                </p>
              </Card>
              <Card title="User Profile" color="green">
                <p className="mb-2">
                  <strong>Name: </strong> Deval Ujeniya
                </p>
                <p className="mb-2">
                  <strong>Email: </strong> deval@example.com
                </p>
                <p className="mb-2">
                  <strong>Role: </strong> Software Engineer
                </p>
                <p className="mb-2">
                  <strong>Skills: </strong> React, Node.js, MongoDB
                </p>
              </Card>
              <Card title="User Profile" color="purple">
                <p className="mb-2">
                  <strong>Name: </strong> Deval Ujeniya
                </p>
                <p className="mb-2">
                  <strong>Email: </strong> deval@example.com
                </p>
                <p className="mb-2">
                  <strong>Role: </strong> Software Engineer
                </p>
                <p className="mb-2">
                  <strong>Skills: </strong> React, Node.js, MongoDB
                </p>
              </Card>
              <Card title="User Profile" color="red">
                <p className="mb-2">
                  <strong>Name: </strong> Deval Ujeniya
                </p>
                <p className="mb-2">
                  <strong>Email: </strong> deval@example.com
                </p>
                <p className="mb-2">
                  <strong>Role: </strong> Software Engineer
                </p>
                <p className="mb-2">
                  <strong>Skills: </strong> React, Node.js, MongoDB
                </p>
              </Card>
            </Container>
          </div>
          <div className="mb-6">
            <h1 className="text-2xl font-bold mb-2 text-gray-700">
              This is the Horizontal Layout
            </h1>
            <Container layout="horizontal">
              <Card title="User Profile" color="blue">
                <p className="mb-2">
                  <strong>Name: </strong> Deval Ujeniya
                </p>
                <p className="mb-2">
                  <strong>Email: </strong> deval@example.com
                </p>
                <p className="mb-2">
                  <strong>Role: </strong> Software Engineer
                </p>
                <p className="mb-2">
                  <strong>Skills: </strong> React, Node.js, MongoDB
                </p>
              </Card>
              <Card title="User Profile" color="green">
                <p className="mb-2">
                  <strong>Name: </strong> Deval Ujeniya
                </p>
                <p className="mb-2">
                  <strong>Email: </strong> deval@example.com
                </p>
                <p className="mb-2">
                  <strong>Role: </strong> Software Engineer
                </p>
                <p className="mb-2">
                  <strong>Skills: </strong> React, Node.js, MongoDB
                </p>
              </Card>
              <Card title="User Profile" color="purple">
                <p className="mb-2">
                  <strong>Name: </strong> Deval Ujeniya
                </p>
                <p className="mb-2">
                  <strong>Email: </strong> deval@example.com
                </p>
                <p className="mb-2">
                  <strong>Role: </strong> Software Engineer
                </p>
                <p className="mb-2">
                  <strong>Skills: </strong> React, Node.js, MongoDB
                </p>
              </Card>
              <Card title="User Profile" color="red">
                <p className="mb-2">
                  <strong>Name: </strong> Deval Ujeniya
                </p>
                <p className="mb-2">
                  <strong>Email: </strong> deval@example.com
                </p>
                <p className="mb-2">
                  <strong>Role: </strong> Software Engineer
                </p>
                <p className="mb-2">
                  <strong>Skills: </strong> React, Node.js, MongoDB
                </p>
              </Card>
            </Container>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChildrenProps;
