/* eslint-disable react/prop-types */
import  { useState } from "react";

const Sidebar = ({ menu }) => {
  const [expandedItems, setExpandedItems] = useState({});


  const toggleItem = (key) => {
    setExpandedItems((prev) => ({
      ...prev,
      [key]: !prev[key], 
    }));
  };

  const renderMenu = (menuItems, level = 0) => {
    return (
    <div className="container">
      <ul style={{ paddingLeft: `${level * 20}px`, paddingRight:"10px", listStyleType: "none" }}>
        {menuItems.map((item) => {
          const isExpanded = expandedItems[item.key];
          const hasChildren = Array.isArray(item.children) && item.children.length > 0;

          return (
            <li key={item.key} style={{ marginBottom: "5px", paddingRight:"10px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  cursor: hasChildren ? "pointer" : "default",
                }}
                onClick={() => hasChildren && toggleItem(item.key)}
              >
                <span>{item.name}</span>
                {hasChildren && (
                  <span style={{ marginLeft: "10px" }}>
                    {isExpanded ? "-" : "+"}
                  </span>
                )}
              </div>

              {isExpanded && hasChildren && renderMenu(item.children, level + 1)}
            </li>
          );
        })}
      </ul>
      </div>
    );
  };

  return <div>{renderMenu(menu)}</div>;
};

export default Sidebar;
