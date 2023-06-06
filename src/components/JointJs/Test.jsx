import React from "react";
import * as joint from "jointjs";
import $ from "jquery";
import "jquery-ui/ui/widgets/draggable";
import "jquery-ui/ui/widgets/droppable";

class Test extends React.Component {
  componentDidMount() {

    const { dia, shapes, mvc, ui, highlighters, util } = joint;

    var graph = new joint.dia.Graph();

    var paper = new joint.dia.Paper({
      el: $("#paper"),
      model: graph,
      width: 600,
      height: 350,
      gridSize: 1,
      snapLinks: true,
    });

   
    // Xử lý sự kiện khi nhấp chuột trái vào menu item để kéo thả phần tử sang paper
    $("#menu .element").on("click", function (event) {
      var $item = $(event.currentTarget);
      console.log($item)
      var shape = $item.data("shape");
      var position = $item.position();

      var cell;
      if (shape === "rect") {
        cell = new joint.shapes.basic.Rect({
          position: { x: 100, y: 70 },
          size: { width: 64, height: 64 },
        });
      } else if (shape === "circle") {
        cell = new joint.shapes.basic.Circle({
          position: { x: 100, y: 70 },
          size: { width: 64, height: 64 },
        });
      } else if (shape === "link") {
        cell = new joint.dia.Link({
          source: { x: 20, y: 20 },
          target: { x: 100, y: 70 },
          // size: { width: 64, height: 64 },
        });
      }

      console.log(cell);

      graph.addCell(cell);

      // //   // Sử dụng jQuery UI Draggable để điều khiển việc kéo thả của phần tử
      // //   //   cell.findView(paper).options.interactive = { elementMove: false }; // Vô hiệu hóa di chuyển trên paper ban đầu để tạo phần tử
      // var $shape = cell.findView(paper).$el;
      // $shape.draggable({
      //   containment: "#paper",
      //   stop: function (event, ui) {
      //     var shapePosition = {
      //       x: event.offsetX - 30,
      //       y: event.offsetY - 30
      //       ,
      //     };
      //     console.log(shapePosition);
      //     console.log(event);
      //     console.log(ui);
      //     cell.set("position", shapePosition);
      //   },
      // });
    });

    $("#menu .element").draggable({
      // containment: "#paper",
      helper: "clone",
      stop: function (event, ui) {
        var $item = $(event.target);
        var shape = $item.data("shape");

        var cell

        if (shape === "rect") {
          cell = new joint.shapes.basic.Rect({
            // position: { x: 100, y: 70 },
            size: { width: 64, height: 64 },
          });
        } else if (shape === "circle") {
          cell = new joint.shapes.basic.Circle({
            // position: { x: 100, y: 70 },
            size: { width: 64, height: 64 },
          });
        } else if (shape === "link") {
          cell = new joint.dia.Link({
            source: { x: 20, y: 20 },
            target: { x: 100, y: 70 },
          });
        }
        // var cell = new joint.shapes.basic.Rect({
        //   position: { x: event.pageX - event.offsetX, y: event.pageY - 130},
        //   size: { width: 100, height: 50 },
        // });

        var shapePosition = {
                x: event.pageX - event.offsetX,
                y: event.pageY,
        };


        cell.set("position", shapePosition);

        console.log(event);
        console.log(ui);
        graph.addCell(cell);
        console.log(cell);
      }
    })

    var rect = new joint.shapes.basic.Rect({
      position: { x: 50, y: 30 },
      size: { width: 64, height: 64 },
    });
    graph.addCell(rect);
      }
    


  render() {
    return (
      <div className="flex items-center" >
        <div className = "flex flex-col items-center w-[11%]  gap-3 bg-slate-300 h-[600px]" id="menu">
          <div className="element my-2 rect w-16 h-16 border-black border-2" data-shape="rect">
           
          </div>
          <div className="element my-2 circle w-16 h-16 border-black border-2 rounded-full  " data-shape="circle">
          </div>
          {/* <div className="element link" data-shape="link">
           -->
          </div> */}
        </div>

        <div className="bg-white !w-[90%]  !h-[600px] " id="paper"></div>
      </div>
    );
  }
}

export default Test;
