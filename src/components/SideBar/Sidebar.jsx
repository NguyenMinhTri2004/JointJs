import React from "react";
import { Nav } from "react-bootstrap";

export const Sidebar = () => {
  return (
    <div className="bg-black" >
      <>
        <Nav
          className="col-md-12 d-none d-md-block bg-black text-white sidebar w-full mt-5"
          activeKey="/home"
          onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
          <div className="sidebar-sticky"></div>
          <Nav.Item>
            <Nav.Link  className = "text-white" href="/home">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/home">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Home</Nav.Link>
          </Nav.Item>
        </Nav>
      </>
    </div>
  );
};
