import { clsx } from 'clsx';

type Props = Omit<React.ComponentProps<'button'>, 'className'> & {};

const Button = React.forwardRef<HTMLButtonElement, Props>(
  ({ children, color, ...props }, ref) => (
    <button
      ref={ref}
      {...props}
      className={clsx(
        'inline-flex select-none items-center justify-center rounded-md px-4 py-2 text-sm font-medium',
        'focus:outline-none focus-visible:ring focus-visible:ring-opacity-75',
        'border border-gray-200 dark:border-gray-700 shadow-xl',
        // Register all radix states
        'group',
        'radix-state-open:bg-gray-50 dark:radix-state-open:bg-gray-900',
        'radix-state-on:bg-gray-50 dark:radix-state-on:bg-gray-900',
        'radix-state-instant-open:bg-gray-50 radix-state-delayed-open:bg-gray-50',
        !color ? `bg-white text-gray-700 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-900
          hover:bg-gray-50 focus-visible:ring-purple-500` : {
          red: `bg-red-200 text-red-700 hover:bg-red-50 dark:bg-red-800 dark:text-red-100 dark:hover:bg-red-900
            hover:bg-red-50 focus-visible:ring-red-500 border-red-200 dark:border-red-700`,
          yellow: `bg-yellow-200 text-yellow-700 hover:bg-yellow-50 dark:bg-yellow-800 dark:text-yellow-100 dark:hover:bg-yellow-900
            hover:bg-yellow-50 focus-visible:ring-yellow-500 border-yellow-200 dark:border-yellow-700`,
          green: `bg-green-200 text-green-700 hover:bg-green-50 dark:bg-green-800 dark:text-green-100 dark:hover:bg-green-900
            hover:bg-green-50 focus-visible:ring-green-500 border-green-200 dark:border-green-700`,
          blue: `bg-blue-200 text-blue-700 hover:bg-blue-50 dark:bg-blue-800 dark:text-blue-100 dark:hover:bg-blue-900
            hover:bg-blue-50 focus-visible:ring-blue-500 border-blue-200 dark:border-blue-700`,
        }[color]
      )}
    >
      {children}
    </button>
  )
);

Button.displayName = 'Button';
export default Button;
