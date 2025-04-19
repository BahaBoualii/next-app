import React from 'react';

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
    disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
    children,
    onClick,
    variant = 'secondary',
    size = 'md',
    className = '',
    disabled = false,
}) => {
    const baseStyles = 'rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
    
    const variantStyles = {
        primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
        secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500',
        outline: 'border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500',
    };

    const sizeStyles = {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-4 py-2 text-base',
        lg: 'px-6 py-3 text-lg',
    };

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`
                ${baseStyles}
                ${variantStyles[variant]}
                ${sizeStyles[size]}
                ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
                ${className}
            `}
        >
            {children}
        </button>
    );
}; 