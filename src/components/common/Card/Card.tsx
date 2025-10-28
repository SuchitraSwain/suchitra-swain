import React from 'react';
import './Card.scss';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  hover = true, 
  onClick 
}) => {
  return (
    <div 
      className={`card-base ${hover ? 'card-hover' : ''} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;
