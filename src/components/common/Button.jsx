
export default function Button({
  title = "Button",
  style = "",
  type = "submit",
  onClick,
  icon = "",
  backgroundColor = "bg-primary",
  activeBackgroundColor = "bg-active",
  hoverBackgroundColor = "hover:bg-primary-hover",
  disabled = false,
  disabledBackgroundColor = "bg-primary-disabled",
  children,
}) {
  // Base button classes
  const buttonClasses = `
      ${style}
      ${backgroundColor}
      ${disabled ? disabledBackgroundColor : ""}
      ${!disabled ? hoverBackgroundColor : ""}
      ${!disabled ? `active:${activeBackgroundColor}` : ""}
      rounded-[5px] text-white font-semibold px-6 lg:px-4 xl:px-8 py-4  font-bold 
      transition-colors ease-out duration-300 flex justify-center gap-x-2 items-center 
    `;

  return (
    <button
    dir="ltr"
      type={type}
      onClick={disabled ? null : onClick}
      className={buttonClasses}
      disabled={disabled}
    >
        <span>{icon}</span> {title}
        {children}
    </button>
  );
}
