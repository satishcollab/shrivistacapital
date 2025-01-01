export function Card({ className, children, ...props }) {
    return (
      <div
        className={`bg-white rounded-lg border border-gray-200 shadow-sm ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  }