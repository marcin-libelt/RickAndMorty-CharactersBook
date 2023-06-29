export default function Button({
  label,
  value,
  onClick,
  disabled = false,
  className,
  icon,
  iconPosition,
}: {
  label: string;
  value: string;
  onClick: () => void;
  disabled?: boolean;
  className: string;
  icon?: any;
  iconPosition?: "left" | "right";
}) {
  const disabledCls = disabled && "bg-gray cursor-not-allowed text-white";

  return (
    <button
      aria-label={label}
      onClick={onClick}
      className={`${classes.root} ${className} ${disabledCls}`}
    >
      {!icon ? (
        <>{value}</>
      ) : iconPosition === "left" ? (
        <>
          <span aria-hidden>{icon}</span>
          {value}
        </>
      ) : (
        <>
          {value}
          <span aria-hidden>{icon}</span>
        </>
      )}
    </button>
  );
}

const classes = {
  root: "flex px-2 py-1 items-center text-secondary text-base bg-primary rounded-lg",
};
