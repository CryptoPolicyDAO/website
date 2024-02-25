import React, { useState } from "react";

const Blog = () => {
  // Sample blog data
  const blogs = [
    {
      id: 1,
      title: "Reducing Bureaucratic Friction",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 2,
      title: "Sample Blog Post 2",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      content:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: 3,
      title: "Sample Blog Post 3",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    },
  ];

  const [expandedCard, setExpandedCard] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null); // Define hoveredCard state

  const handleCardClick = (id) => {
    setExpandedCard(id === expandedCard ? null : id);
  };

  return (
    <div className="container mx-auto mt-20" style={{ width: "85%" }}>
      <h1
        className="text-4xl font-bold mb-4"
        style={{ color: "var(--header-color)" }}
      >
        Blog
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="relative bg-white p-4 rounded-lg shadow overflow-hidden "
            onClick={() => handleCardClick(blog.id)}
            style={{ transition: "opacity 0.3s" }} // Added transition
            onMouseEnter={() => setHoveredCard(blog.id)} // Set hovered card
            onMouseLeave={() => setHoveredCard(null)} // Clear hovered card
          >
            <h2
              className="text-xl font-semibold mb-2"
              style={{
                color: "var(--title-color)",
                opacity: hoveredCard === blog.id ? "0.1" : "1",
                transition: "opacity 0.3s",
              }}
            >
              {blog.title}
            </h2>
            <p
              className="text-sm mb-4 "
              style={{
                color: "var(--sub-header-color)",
                opacity: hoveredCard === blog.id ? "0.1" : "1",
                transition: "opacity 0.3s",
              }}
            >
              {blog.description}
            </p>
            {expandedCard === blog.id && (
              <div className="absolute inset-0 bg-white bg-opacity-90 flex items-center justify-center z-10 ">
                <p
                  className="text-sm"
                  style={{ color: "var(--description-color)" }}
                >
                  {blog.content}
                </p>
              </div>
            )}
            {/* Adjusted opacity based on hover state */}
            <div
              className="absolute inset-0 flex items-center justify-center z-0"
              style={{
                opacity: hoveredCard === blog.id ? "100%" : "0%",
                transition: "opacity 0.3s",
              }}
            >
              <p className="text-blue-500 text-sm">Click to expand</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
