import { useRef, forwardRef } from "react";

const inputStyles =
  "h-10 w-full min-w-0 px-4 py-0 text-sm leading-10 rounded-lg border border-gray-300 box-border focus:outline-none focus:ring-2 focus:ring-blue-500";
const buttonStyles =
  "h-10 px-4 text-sm leading-none rounded-lg border border-transparent inline-flex items-center justify-center whitespace-nowrap";

const CustomInput = forwardRef(
  ({ lable, placeholder, className, button }, ref) => {
    return (
      <div className="mb-4">
        <lable className="block text-sm font-medium text-gray-700">
          {lable}
        </lable>
        <div
          className={button ? "mt-2 grid grid-cols-[1fr_auto] gap-2" : "mt-2"}
        >
          <input
            type="text"
            ref={ref}
            placeholder={placeholder}
            className={`${inputStyles} ${className ?? ""}`}
          />
          {button && (
            <button
              type="button"
              onClick={button.onClick}
              className={`${buttonStyles} ${button.className}`}
            >
              {button.lable}
            </button>
          )}
        </div>
      </div>
    );
  },
);

CustomInput.displayName = "CustomInput"; // this is used to display the name of the component in the devtools

const RefProps = () => {
  const inputRef = useRef(null);
  const secondInputRef = useRef(null);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  const getInputValue = () => {
    if (inputRef.current) {
      alert(`Input Value: ${inputRef.current.value}`);
    }
  };

  const clearInput = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
      inputRef.current.focus();
    }
  };

  const focusSecondInput = () => {
    secondInputRef.current?.focus();
  };

  const copyToClipboard = () => {
    if (inputRef.current) {
      navigator.clipboard.writeText(inputRef.current.value);
      alert(`Copied to clipboard: ${inputRef.current.value}`);
    }
  };

  const checkPhoneNumber = () => {
    if (secondInputRef.current) {
      const phoneNumber = secondInputRef.current.value;
      if (phoneNumber.length === 10 && !isNaN(phoneNumber)) {
        alert("Phone number is valid");
      } else {
        alert("Phone number is invalid");
      }
    }
  };

  return (
    <section className="p-8 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-700">Ref Props</h2>
      <p className="text-gray-600 mb-6">
        This component demonstrates how to use the ref prop to access the DOM
        elements and interact with them.
      </p>
      <div>
        <div>
          <h2 className="text-lg font-bold mb-2 text-gray-700">Try this out</h2>
          <CustomInput
            ref={inputRef}
            lable="First Input Ref"
            placeholder="Enter your name"
            className="focus:ring-blue-500 focus:border-blue-500"
            button={{
              onClick: copyToClipboard,
              lable: "copy",
              className: "rounded-lg bg-blue-500 text-white hover:bg-blue-600",
            }}
          />
          <CustomInput
            ref={secondInputRef}
            lable="Second Input Ref"
            placeholder="Enter you phone number"
            className="focus:ring-blue-500 focus:border-blue-500"
            button={{
              onClick: checkPhoneNumber,
              lable: "validate",
              className: "rounded-lg bg-blue-500 text-white hover:bg-blue-600",
            }}
          />
          <div className="flex flex-wrap gap-3  mt-4">
            <button
              onClick={focusInput}
              className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600"
            >
              First Input Focus
            </button>
            <button
              onClick={focusSecondInput}
              className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600"
            >
              First Second Input Focus
            </button>
            <button
              onClick={getInputValue}
              className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600"
            >
              Get Input Value
            </button>
            <button
              onClick={clearInput}
              className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600"
            >
              Clear Input
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RefProps;
