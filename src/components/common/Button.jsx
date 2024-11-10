export default function Button({
    title = "Button",
    style="",
    onClick,
    backgroundColor = "bg-primary",
    activeBackgroundColor = "bg-active", 
    hoverBackgroundColor = "hover:bg-primary-hover", 
    disabled = false,
    disabledBackgroundColor = "bg-primary-disabled", 
  }) {
    // Base button classes
    const buttonClasses = `
      ${style}
      rounded-[5px] text-white font-semibold  px-8 py-4  font-bold
      ${backgroundColor}
      ${disabled ? disabledBackgroundColor : ""}
      ${!disabled ? hoverBackgroundColor : ""}
      ${!disabled ? `active:${activeBackgroundColor}` : ""}
      transition-colors ease-out duration-300
    `;
  
    return (
      <button
        onClick={disabled ? null : onClick} 
        className={buttonClasses}
      >
        {title}
      </button>
    );
  }