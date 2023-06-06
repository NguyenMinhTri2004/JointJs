import React from "react";
import * as joint from "jointjs";
import { Sidebar } from "../SideBar/Sidebar";
import SidebarMenu from "react-bootstrap-sidebar-menu";
import $ from "jquery";
import Draggable from "react-draggable";
import "jquery-ui/ui/widgets/draggable";
import "jquery-ui/ui/widgets/droppable";

class Test2 extends React.Component {
  componentDidMount() {
    const { dia, shapes, mvc, ui, highlighters, util } = joint;
    var graph = new joint.dia.Graph();
    // Tạo paper (canvas) và graph object
    var paper = new joint.dia.Paper({
      el: $("#paper"),
      width: 800,
      height: 600,
      model: graph,
    });

    // Tạo shape object và style
    var rect = new joint.shapes.basic.Rect({
      position: { x: 50, y: 100 },
      size: { width: 70, height: 30 },
      attrs: {
        rect: { fill: "white", stroke: "gray" },
        text: { text: "Rectangle", fill: "black" },
      },
    });

    // Thêm shape vào Sidebar
    $("#sidebar").append(rect.$el);

    // Define drag-and-drop behavior cho shape khi kéo qua paper
    rect.on("mousedown", function (evt) {
      var offsetX = evt.offsetX;
      var offsetY = evt.offsetY;

      // create a clone of the shape để kéo thả trên paper
      var clone = rect.clone();
      clone.position(0, 0);
      clone.attr("body/fill", "lightgray");
      $("#paper").append(clone);

      var pointermove = function (evt) {
        clone.position(evt.pageX - offsetX, evt.pageY - offsetY);
      };

      var pointerup = function (evt) {
        clone.off("pointermove", pointermove);
        clone.off("pointerup", pointerup);

        // If clone is dropped on paper, add it to graph
        if (evt.target === paper.el) {
          graph.addCell(clone);
          clone.toBack();
        } else {
          clone.remove();
        }
      };

      clone.on("pointermove", pointermove);
      clone.on("pointerup", pointerup);
    });
  }

  render() {
    return (
      <>
      
        <div id="sidebar"></div>
        <div id="paper"></div>
      </>
    );
  }
}

export default Test2;
