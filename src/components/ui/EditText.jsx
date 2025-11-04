import React, { useState } from 'react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const inputClasses = cva(
  'w-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-background focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        default: 'border border-solid',
        filled: 'bg-gray-50 border-0',
        outline: 'border-2 bg-transparent',
      },
      size: {
        small: 'text-sm px-3 py-2',
        medium: 'text-base px-4 py-3',
        large: 'text-lg px-5 py-4',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'medium',
    },
  }
);

const EditText = ({
  // Required parameters with defaults
  placeholder = "Full Name",
  text_font_size = "20",
  text_font_family = "Roboto",
  text_font_weight = "100",
  text_line_height = "24px",
  text_text_align = "left",
  text_color = "#000000",
  border_border = "1 solid #1e1b54",
  border_border_radius = "10px",
  
  // Optional parameters (no defaults)
  layout_width,
  padding,
  margin,
  position,
  
  // Standard React props
  variant,
  size,
  type = "text",
  value,
  onChange,
  disabled = false,
  className,
  name,
  id,
  required = false,
  ...props
}) => {
  const [inputValue, setInputValue] = useState(value || '');

  // Safe validation for optional parameters
  const hasValidWidth = layout_width && typeof layout_width === 'string' && layout_width?.trim() !== '';
  const hasValidPadding = padding && typeof padding === 'string' && padding?.trim() !== '';
  const hasValidMargin = margin && typeof margin === 'string' && margin?.trim() !== '';
  const hasValidPosition = position && typeof position === 'string' && position?.trim() !== '';

  // Build optional Tailwind classes
  const optionalClasses = [
    hasValidWidth ? `w-[${layout_width}]` : '',
    hasValidPadding ? `p-[${padding}]` : '',
    hasValidMargin ? `m-[${margin}]` : '',
    hasValidPosition ? position : '',
  ]?.filter(Boolean)?.join(' ');

  // Parse border style
  const parseBorder = (borderStr) => {
    if (!borderStr) return {};
    const parts = borderStr?.split(' ');
    return {
      borderWidth: parts?.[0] || '1px',
      borderStyle: parts?.[1] || 'solid',
      borderColor: parts?.[2] || '#1e1b54',
    };
  };

  const borderStyles = parseBorder(border_border);

  // Build inline styles for required parameters
  const inputStyles = {
    fontSize: `${text_font_size}px`,
    fontFamily: text_font_family,
    fontWeight: text_font_weight,
    lineHeight: text_line_height,
    textAlign: text_text_align,
    color: text_color,
    borderRadius: border_border_radius,
    ...borderStyles,
  };

  // Handle input change
  const handleChange = (event) => {
    const newValue = event?.target?.value;
    setInputValue(newValue);
    if (typeof onChange === 'function') {
      onChange(event);
    }
  };

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value !== undefined ? value : inputValue}
      onChange={handleChange}
      disabled={disabled}
      name={name}
      id={id}
      required={required}
      style={inputStyles}
      className={twMerge(
        inputClasses({ variant, size }),
        optionalClasses,
        className
      )}
      aria-disabled={disabled}
      {...props}
    />
  );
};

export default EditText;