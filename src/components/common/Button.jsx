export default function Button({
    title = "Button",
    onClick,
    backgroundColor = "bg-primary",
    activeBackgroundColor = "bg-active", 
    hoverBackgroundColor = "hover:bg-primary-hover", 
    disabled = false,
    disabledBackgroundColor = "bg-primary-disabled", 
  }) {
    // Base button classes
    const buttonClasses = `
      w-[116px] h-[51px] rounded-[5px] text-white pt-[16px] pb-[16px] pl-[32px] pr-[32px]
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