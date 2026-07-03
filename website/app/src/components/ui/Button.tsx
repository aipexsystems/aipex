import { ButtonHTMLAttributes, ReactNode } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export function Button({
  children,
  className = "",
  ...props
}: Props) {
  return (
    <button
      className={`
        rounded-xl
        bg-slate-900
        px-6
        py-3
        text-sm
        font-semibold
        text-white
        transition
        hover:opacity-90
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}
