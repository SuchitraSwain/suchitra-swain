import React from "react";

const categories = ["react", "nextjs", "angular", "html"];

const CategoryTabs = ({ selectedCategory, onCategoryChange }: any) => (
  <div className="col-md-8 text-end d-flex justify-content-end project__tabs">
    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
      {categories.map((category) => (
        <li className="nav-item" role="presentation" key={category}>
          <button
            className={`nav-link ${
              selectedCategory === category ? "active" : ""
            }`}
            onClick={() => onCategoryChange(category)}
            type="button"
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        </li>
      ))}
    </ul>
  </div>
);

export default CategoryTabs;
