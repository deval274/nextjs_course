import { useState } from "react";

function Button({ text, color, size, onClick, disabled }) {
  return (
    <button
      onClick={() => (disabled ? null : onClick())}
      disabled={disabled}
      className={`
                px-4 py-2 rounded-md font-medium transition-colors duration-300
                ${size === "small" ? "px-2 py-1 text-sm" : ""}
                ${size === "large" ? "px-9 py-3 text-lg" : ""}
                ${color === "primary" ? "bg-blue-600 text-white hover:bg-blue-700" : ""}
                ${color === "secondary" ? "bg-gray-600 text-white hover:bg-gray-700" : ""}
                ${color === "danger" ? "bg-red-600 text-white hover:bg-red-700" : ""}
                ${color === "success" ? "bg-green-600 text-white hover:bg-green-700" : ""}
                ${color === "warning" ? "bg-yellow-600 text-white hover:bg-yellow-700" : ""}
                ${color === "info" ? "bg-indigo-600 text-white hover:bg-indigo-700" : ""}
                ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
            `}
    >
      {text}
    </button>
  );
}

function BasicProps() {
  const [clickCount, setClickCount] = useState(0);
  return (
    <section className="p-8 bg-white rounded-xl shadow-2xl">
      <h2 className="text-2xl font-bold mb-4 text-gray-700">Basic Props</h2>
      <p className="text-gray-600 mb-6">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis modi
        ad, cumque placeat temporibus totam porro cupiditate quos! Totam, ipsam!
      </p>
      <div className="space-y-4">
        <h3 className="text-lg font-bold mb-2 text-gray-700">
          Different colours
        </h3>
        <div className="flex flex-wrap gap-3">
          <Button
            text="Primary Button"
            color="primary"
            onClick={() => setClickCount(clickCount + 1)}
          />
          <Button
            text="Secondary Button"
            color="secondary"
            onClick={() => setClickCount(clickCount + 1)}
          />
          <Button
            text="Danger Button"
            color="danger"
            onClick={() => setClickCount(clickCount + 1)}
          />
          <Button
            text="Success Button"
            color="success"
            onClick={() => setClickCount(clickCount + 1)}
          />
          <Button
            text="Warning Button"
            color="warning"
            onClick={() => setClickCount(clickCount + 1)}
          />
          <Button
            text="Info Button"
            color="info"
            onClick={() => setClickCount(clickCount + 1)}
          />
        </div>
        <h3 className="text-lg font-bold mb-2 text-gray-700">
          Different sizes
        </h3>
        <div className="flex flex-wrap gap-3">
          <Button
            text="Small Button"
            size="small"
            color="primary"
            onClick={() => setClickCount(clickCount + 1)}
          />
          <Button
            text="Large Button"
            size="large"
            color="primary"
            onClick={() => setClickCount(clickCount + 1)}
          />
        </div>
        <h3 className="text-lg font-bold mb-2">Different states</h3>
        <div className="flex flex-wrap gap-3">
          <Button
            text="Disabled Button"
            disabled={true}
            color="secondary"
            onClick={() => setClickCount(clickCount + 1)}
          />
          <Button
            text="Enabled Button"
            disabled={false}
            color="secondary"
            onClick={() => setClickCount(clickCount + 1)}
          />
        </div>

        <div className="mt-6 p-4 bg-blue-50 rounded-lg shadow-sm">
          <p className="text-gray-600 text-lg font-medium">
            Click Counts:{" "}
            <span className="font-bold text-blue-600">{clickCount}</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default BasicProps;
