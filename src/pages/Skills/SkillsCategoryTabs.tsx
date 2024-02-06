import React from "react";

interface CategoryTabsProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryTabs: React.FC<CategoryTabsProps> = ({
  categories,
  activeCategory,
  onCategoryChange,
}) => {
  return (
    <ul className="nav nav-pills justify-content-between">
      {categories.map((category, index) => (
        <li className="nav-item" key={index}>
          <a
            className={`nav-link ${
              activeCategory === category ? "active" : ""
            }`}
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onCategoryChange(category);
            }}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default CategoryTabs;
