import React, { useState } from 'react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const ratingClasses = cva(
  'flex items-center gap-1',
  {
    variants: {
      size: {
        small: 'text-sm',
        medium: 'text-base',
        large: 'text-lg',
      },
      variant: {
        default: 'text-yellow-400',
        outline: 'text-gray-300',
        filled: 'text-yellow-500',
      },
    },
    defaultVariants: {
      size: 'medium',
      variant: 'default',
    },
  }
);

const starClasses = cva(
  'cursor-pointer transition-colors duration-200 hover:scale-110',
  {
    variants: {
      filled: {
        true: 'text-yellow-400',
        false: 'text-gray-300',
      },
      size: {
        small: 'w-4 h-4',
        medium: 'w-5 h-5',
        large: 'w-6 h-6',
      },
    },
    defaultVariants: {
      filled: false,
      size: 'medium',
    },
  }
);

const RatingBar = ({
  // Required parameters with defaults
  layout_align_self = "center",
  
  // Optional parameters (no defaults)
  layout_width,
  position,
  
  // Standard React props
  rating = 0,
  maxRating = 5,
  onRatingChange,
  readonly = false,
  size = 'medium',
  variant = 'default',
  className,
  showValue = false,
  ...props
}) => {
  const [currentRating, setCurrentRating] = useState(rating);
  const [hoverRating, setHoverRating] = useState(0);

  // Safe validation for optional parameters
  const hasValidWidth = layout_width && typeof layout_width === 'string' && layout_width?.trim() !== '';
  const hasValidPosition = position && typeof position === 'string' && position?.trim() !== '';

  // Build optional Tailwind classes
  const optionalClasses = [
    `self-${layout_align_self}`,
    hasValidWidth ? `w-[${layout_width}]` : '',
    hasValidPosition ? position : '',
  ]?.filter(Boolean)?.join(' ');

  // Handle star click
  const handleStarClick = (starIndex) => {
    if (readonly) return;
    
    const newRating = starIndex + 1;
    setCurrentRating(newRating);
    
    if (typeof onRatingChange === 'function') {
      onRatingChange(newRating);
    }
  };

  // Handle star hover
  const handleStarHover = (starIndex) => {
    if (readonly) return;
    setHoverRating(starIndex + 1);
  };

  // Handle mouse leave
  const handleMouseLeave = () => {
    if (readonly) return;
    setHoverRating(0);
  };

  // Determine which rating to display
  const displayRating = hoverRating || currentRating;

  // Generate stars
  const stars = Array.from({ length: maxRating }, (_, index) => {
    const isFilled = index < displayRating;
    
    return (
      <button
        key={index}
        type="button"
        onClick={() => handleStarClick(index)}
        onMouseEnter={() => handleStarHover(index)}
        disabled={readonly}
        className={twMerge(
          starClasses({ filled: isFilled, size }),
          readonly ? 'cursor-default' : 'cursor-pointer'
        )}
        aria-label={`Rate ${index + 1} out of ${maxRating} stars`}
      >
        <svg
          fill={isFilled ? 'currentColor' : 'none'}
          stroke="currentColor"
          strokeWidth={isFilled ? 0 : 2}
          viewBox="0 0 24 24"
          className="w-full h-full"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      </button>
    );
  });

  return (
    <div
      className={twMerge(
        ratingClasses({ size, variant }),
        optionalClasses,
        className
      )}
      onMouseLeave={handleMouseLeave}
      role="radiogroup"
      aria-label={`Rating: ${currentRating} out of ${maxRating} stars`}
      {...props}
    >
      {stars}
      {showValue && (
        <span className="ml-2 text-sm text-gray-600">
          {currentRating}/{maxRating}
        </span>
      )}
    </div>
  );
};

export default RatingBar;