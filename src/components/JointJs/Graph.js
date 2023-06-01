import React from "react";
import { dia, shapes } from "jointjs";

class Graph extends React.Component {
  componentDidMount() {
    const graph = new dia.Graph();

    const paper = new dia.Paper({
      el: document.getElementById("canvas"),
      model: graph,
      width: 1920,
      height: 400,
      gridSize: 1,
      interactive: false,
    });

    const rect = new shapes.standard.Rectangle();
    rect.position(100, 100);
    rect.resize(100, 40);
    rect.attr({
      body: {
        fill: "#ee6d2e",
      },
      label: {
        text: "Hello",
        fill: "white",
      },
    });
    rect.addTo(graph);

    const rect1 = rect.clone();
    rect1.translate(300, 0);
    rect1.attr("label/text", "World!");
    rect1.addTo(graph);

    const circle = new shapes.standard.Circle();
    circle.position(600, 95);
    circle.resize(100, 50);
    circle.attr({
      body: {
        fill: "#ee6d2e",
      },
      label: {
        text: "Hello",
        fill: "white",
      },
    });
    circle.addTo(graph);

    const rect2 = rect.clone();
    rect2.translate(700, -90);
    rect2.attr("label/text", "World!");
    rect2.addTo(graph);

    const rect3 = rect2.clone();
    rect3.translate(0, 190);
    rect3.attr("label/text", "World!");
    rect3.addTo(graph);

    const ellipse = new shapes.standard.Ellipse();
    ellipse.position(1000, 95);
    ellipse.resize(200, 50);
    ellipse.attr({
      body: {
        fill: "#ee6d2e",
      },
      label: {
        text: "Hello",
        fill: "white",
      },
    });
    ellipse.addTo(graph);

    const rect4 = rect3.clone();
    rect4.translate(600, -100);
    rect4.attr("label/text", "World!");
    rect4.addTo(graph);

    const link = new shapes.standard.Link();
    link.source(rect);
    link.target(rect1);
    link.addTo(graph);

    const link2 = new shapes.standard.Link();
    link2.source(rect1);
    link2.target(circle);
    link2.addTo(graph);

    const link3 = new shapes.standard.Link();
    link3.source(circle);
    link3.target(rect2);
    link3.addTo(graph);

    const link4 = new shapes.standard.Link();
    link4.source(circle);
    link4.target(rect3);
    link4.addTo(graph);

    const link5 = new shapes.standard.Link();
    link5.source(rect2);
    link5.target(ellipse);
    link5.addTo(graph);

    const link6 = new shapes.standard.Link();
    link6.source(rect3);
    link6.target(ellipse);
    link6.addTo(graph);

    const link7 = new shapes.standard.Link();
    link7.source(ellipse);
    link7.target(rect4);
    link7.addTo(graph);
  }
  render() {
    return <div id="canvas" />;
  }
}

export default Graph;
