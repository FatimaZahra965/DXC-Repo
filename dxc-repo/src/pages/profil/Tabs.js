import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button } from "@material-ui/core";

export const Tab = ({ title, onClick, active = false }) => {
  const onClickTab = e => {
    e.preventDefault(0);
    onClick(title);
  };

  return (
    <div className="tab">
      <Button className={`${active ? "active" : ""} tab-item`} variant="contained" onClick={onClickTab} > {title} </Button>
      <style jsx="true">{`
        Button.tab-item {
          width: 150px;
          height: 30;
          float: "right";
          background-color: #b100ff;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.5s ease;
        }
        tab {
            text-align:"end";
          }

        Button.tab-item:hover,
        Button.tab-item.active {
            
          background-color: #FFFFFF;
        }
      `}</style>
    </div>
  );
};

export default function Tabs({ children }) {
  const [activeTab, setActiveTab] = useState(children[0].props.title);

  const onClickTabItem = tab => setActiveTab(tab);

  return (
    <>
      <div className="tabs">
        <ul className="tab-list">
          {children.map(tab => {
            const { title } = tab.props;

            return (
              <Tab
                key={title}
                title={title}
                onClick={onClickTabItem}
                active={title === activeTab ? true : false}
              />
            );
          })}
        </ul>

        <div className="tab-content">
          {children.map(tab => {
            if (tab.props.title !== activeTab) return undefined;

            return tab.props.children;
          })}
        </div>
      </div>

      <style jsx="true">{`
        .tab-list {
          display: flex;
          margin-left: 600px;
        }

        .tab-content {
          padding: 0 1rem;
        }

        .tab-content p {
          text-align: justify;
        }
      `}</style>
    </>
  );
}

Tab.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

Tabs.propTypes = {
  children: PropTypes.instanceOf(Array).isRequired
};
