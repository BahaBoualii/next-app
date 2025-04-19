import React from 'react';

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
    size?: 'xs' | 'sm' | 'md' | 'lg';
    className?: string;
    disabled?: boolean;
    isLoading?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
    children,
    onClick,
    variant = 'secondary',
    size = 'md',
    className = '',
    disabled = false,
    isLoading = false,
    leftIcon,
    rightIcon,
}) => {
    const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
    
    const variantStyles = {
        primary: 'text-blue-600 hover:text-blue-700 focus:ring-blue-500 active:text-blue-800',
        secondary: 'text-gray-600 hover:text-gray-700 focus:ring-gray-500 active:text-gray-800',
        outline: 'text-gray-700 hover:text-gray-800 focus:ring-gray-500 active:text-gray-900',
        ghost: 'text-gray-700 hover:text-gray-800 focus:ring-gray-500 active:text-gray-900',
        danger: 'text-red-600 hover:text-red-700 focus:ring-red-500 active:text-red-800',
    };

    const sizeStyles = {
        xs: 'px-2.5 py-1.5 text-xs',
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-4 py-2 text-base',
        lg: 'px-6 py-3 text-lg',
    };

    const iconSizeStyles = {
        xs: 'w-3 h-3',
        sm: 'w-4 h-4',
        md: 'w-5 h-5',
        lg: 'w-6 h-6',
    };

    return (
        <button
            onClick={onClick}
            disabled={disabled || isLoading}
            className={`
                ${baseStyles}
                ${variantStyles[variant]}
                ${sizeStyles[size]}
                ${className}
            `}
        >
            {isLoading && (
                <svg
                    className={`animate-spin -ml-1 mr-2 ${iconSizeStyles[size]}`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                    />
                    <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                </svg>
            )}
            {!isLoading && leftIcon && (
                <span className={`mr-2 ${iconSizeStyles[size]}`}>
                    {leftIcon}
                </span>
            )}
            {children}
            {!isLoading && rightIcon && (
                <span className={`ml-2 ${iconSizeStyles[size]}`}>
                    {rightIcon}
                </span>
            )}
        </button>
    );
}; 