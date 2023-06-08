import React from "react";
import * as joint from "jointjs";
import { shapes } from "jointjs";
import { uml } from "jointjs";
import $ from "jquery";
import "jquery-ui/ui/widgets/draggable";
import "jquery-ui/ui/widgets/droppable";

class Test extends React.Component {
  componentDidMount() {
    const { dia, shapes, mvc, ui, highlighters, util } = joint;

    console.log(joint);

    var graph = new joint.dia.Graph();

    var paper = new joint.dia.Paper({
      el: $("#paper"),
      model: graph,
      width: 600,
      height: 350,
      gridSize: 1,
      snapLinks: true,
    });

    $("#menu .element").on("click", function (event) {
      var $item = $(event.currentTarget);
      console.log($item);
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
        cell = cell = new joint.dia.Link({
          source: { x: 20, y: 20 },
          target: { x: 100, y: 70 },
        });
      
      } else if (shape === "text") {
        cell = new joint.shapes.basic.Rect({
          position: { x: 100, y: 70 },
          size: { width: 100, height: 50 },
          attrs: {
            rect: { fill: "white" },
            text: { text: "Click to edit", "font-size": 14 },
          },
        });

        graph.addCell(cell);

        cell.on("change:position", function () {
          var pos = cell.position();
          $("input[type=text]").css({ top: pos.y + 5, left: pos.x + 5 });
        });

        var view = paper.findViewByModel(cell);

        $(view.el).on("pointerup", function () {
          console.log("hihiih");
        });

        $(view.el).on("pointerdown", function (evt, x, y) {
          // Create a text input when clicking on the rectangle

          var pos = cell.position();
          var $input = $(
            '<input type="text" value="' + rect.attr("text/text") + '">'
          )
            .css({
              position: "absolute",
              top: pos.y + 5,
              left: pos.x + 5,
              width: rect.size().width - 10,
              height: rect.size().height - 10,
              border: "none",
              padding: "5px",
              "font-size": "14px",
              backgroundColor: "yellow",
            })
            .appendTo("body");

          $input.focus();

          $input.blur(function () {
            // Update the text of rectangle and remove the input field when losing focus
            var newText = $(this).val();
            cell.attr("text/text", newText);
            $(this).remove();
          });

          $input.keydown(function (e) {
            // Remove the input field on pressing Enter key
            if (e.which === 13) {
              var newText = $(this).val();
              cell.attr("text/text", newText);
              $(this).remove();
            }
          });

          console.log("click");
        });
      } else if (shape === "object") {
        cell = new joint.shapes.standard.HeaderedRectangle();
        cell.resize(150, 100);
        cell.position(50, 50);
        cell.attr("root/tabindex", 12);
        cell.attr("root/title", "joint.shapes.standard.HeaderedRectangle");
        cell.attr("header/fill", "#000000");
        cell.attr("header/fillOpacity", 0.1);
        cell.attr("headerText/text", "Header");
        cell.attr("body/fill", "#fe854f");
        cell.attr("body/fillOpacity", 0.5);
        cell.attr("bodyText/text", "Headered\nRectangle");

        graph.addCell(cell);

        cell.on("change:position", function () {
          var pos = cell.position();
          $("input[type=text]").css({ top: pos.y + 5, left: pos.x + 5 });
          // $("#2").css({ top: pos.y + 10, left: pos.x + 5 });
        });

        var view = paper.findViewByModel(cell);

        $(view.el).on("pointerup", function () {
          console.log("hihiih");
        });

        $(view.el).on("pointerdown", function (evt, x, y) {
          // Create a text input when clicking on the rectangle

          var pos = cell.position();
          var $input = $(
            '<input type="text" value="' + rect.attr("text/text") + '">'
          )
            .css({
              position: "absolute",
              top: pos.y + 5,
              left: pos.x + 5,
              width: rect.size().width - 10,
              height: rect.size().height - 10,
              border: "none",
              padding: "5px",
              "font-size": "14px",
              backgroundColor: "yellow",
            })
            .appendTo("body");

          // var $input2 = $(
          //     '<input  id = "2" value="' + rect.attr("text/text") + '">'

          //   )
          //     .css({
          //       position: "absolute",
          //       top: pos.y + 5,
          //       left: pos.x + 5,
          //       width: rect.size().width - 10,
          //       height: rect.size().height - 10,
          //       border: "none",
          //       padding: "5px",
          //       "font-size": "14px",
          //       backgroundColor: "yellow",
          //     })
          //     .appendTo("body");

          $input.focus();

          // $input2.focus()

          $input.blur(function () {
            // Update the text of rectangle and remove the input field when losing focus
            var newText = $(this).val();
            cell.attr("text/text", newText);
            $(this).remove();
          });

          $input.keydown(function (e) {
            // Remove the input field on pressing Enter key
            if (e.which === 13) {
              var newText = $(this).val();
              cell.attr("headerText/text", newText);
              $(this).remove();
            }
          });

          console.log("click");
        });

        // head.addTo(graph);
      }

      graph.addCell(cell);
    });

    $("#menu .element").draggable({
      // containment: "#paper",
      helper: "clone",
      stop: function (event, ui) {
        var $item = $(event.target);
        var shape = $item.data("shape");

        var cell;

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
            source: { x: event.pageX - event.offsetX, y: 20 },
            target: { x: event.pageX - event.offsetX + 30, y: 70 },
          });
        } else if (shape === "text") {
          cell = new joint.shapes.basic.Rect({
            // position: { x: 100, y: 70 },
            size: { width: 100, height: 50 },
            attrs: {
              rect: { fill: "white" },
              text: { text: "Click to edit", "font-size": 14 },
            },
          });

          graph.addCell(cell);

          cell.on("change:position", function () {
            var pos = cell.position();
            $("input[type=text]").css({ top: pos.y + 5, left: pos.x + 5 });
          });

          var view = paper.findViewByModel(cell);

          $(view.el).on("pointerup", function () {
            console.log("hihiih");
          });

          $(view.el).on("pointerdown", function (evt, x, y) {
            // Create a text input when clicking on the rectangle

            var pos = cell.position();
            var $input = $(
              '<input type="text" value="' + rect.attr("text/text") + '">'
            )
              .css({
                position: "absolute",
                top: pos.y + 5,
                left: pos.x + 5,
                width: rect.size().width - 10,
                height: rect.size().height - 10,
                border: "none",
                padding: "5px",
                "font-size": "14px",
                backgroundColor: "yellow",
              })
              .appendTo("body");

            $input.focus();

            $input.blur(function () {
              // Update the text of rectangle and remove the input field when losing focus
              var newText = $(this).val();
              cell.attr("text/text", newText);
              $(this).remove();
            });

            $input.keydown(function (e) {
              // Remove the input field on pressing Enter key
              if (e.which === 13) {
                var newText = $(this).val();
                cell.attr("text/text", newText);
                $(this).remove();
              }
            });

            console.log("click");
          });
        } else if (shape === "object") {
          cell = new joint.shapes.standard.HeaderedRectangle();
          cell.resize(150, 100);
          cell.attr("root/tabindex", 12);
          cell.attr("root/title", "joint.shapes.standard.HeaderedRectangle");
          cell.attr("header/fill", "#000000");
          cell.attr("header/fillOpacity", 0.1);
          cell.attr("headerText/text", "Header");
          cell.attr("body/fill", "#fe854f");
          cell.attr("body/fillOpacity", 0.5);
          cell.attr("bodyText/text", "Headered\nRectangle");

          graph.addCell(cell);

          cell.on("change:position", function () {
            var pos = cell.position();
            $("input[type=text]").css({ top: pos.y + 5, left: pos.x + 5 });
            // $("#2").css({ top: pos.y + 10, left: pos.x + 5 });
          });

          var view = paper.findViewByModel(cell);

          $(view.el).on("pointerup", function () {
            console.log("hihiih");
          });

          $(view.el).on("pointerdown", function (evt, x, y) {
            // Create a text input when clicking on the rectangle

            var pos = cell.position();
            var $input = $(
              '<input type="text" value="' + rect.attr("text/text") + '">'
            )
              .css({
                position: "absolute",
                top: pos.y + 5,
                left: pos.x + 5,
                width: rect.size().width - 10,
                height: rect.size().height - 10,
                border: "none",
                padding: "5px",
                "font-size": "14px",
                backgroundColor: "yellow",
              })
              .appendTo("body");

            // var $input2 = $(
            //     '<input  id = "2" value="' + rect.attr("text/text") + '">'

            //   )
            //     .css({
            //       position: "absolute",
            //       top: pos.y + 5,
            //       left: pos.x + 5,
            //       width: rect.size().width - 10,
            //       height: rect.size().height - 10,
            //       border: "none",
            //       padding: "5px",
            //       "font-size": "14px",
            //       backgroundColor: "yellow",
            //     })
            //     .appendTo("body");

            $input.focus();

            // $input2.focus()

            $input.blur(function () {
              // Update the text of rectangle and remove the input field when losing focus
              var newText = $(this).val();
              cell.attr("text/text", newText);
              $(this).remove();
            });

            $input.keydown(function (e) {
              // Remove the input field on pressing Enter key
              if (e.which === 13) {
                var newText = $(this).val();
                cell.attr("headerText/text", newText);
                $(this).remove();
              }
            });

            console.log("click");
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
      },
    });

    var rect = new joint.shapes.basic.Rect({
      position: { x: 100, y: 100 },
      size: { width: 100, height: 50 },
      attrs: {
        rect: { fill: "white", stroke: "black", "stroke-width": 2 },
        text: {
          text: "Double-click to edit",
          "font-size": 12,
          "ref-x": 0.5,
          "ref-y": 0.5,
          ref: "rect",
          "text-anchor": "middle",
          "y-alignment": "middle",
        },
      },
      // enable editing of the text label on double-click
      markup: '<g class="rotatable"><g class="scalable"><rect/></g><text/></g>',
      editOnClick: true,
    });

    var rect = new joint.shapes.basic.Rect({
      position: { x: 50, y: 50 },
      size: { width: 100, height: 50 },
      attrs: {
        rect: { fill: "white" },
        text: { text: "Click to edit", "font-size": 14 },
      },
    });
  }

  render() {
    return (
      <div className="flex items-center ">
        <div
          className="flex flex-col items-center w-[18%] p-2 gap-3 bg-slate-300 h-[600px]"
          id="menu"
        >
          <div className="w-full border-b-2 border-black">
            <label className="font-bold" htmlFor="">
              General
            </label>
            <div className="flex items-center gap-2">
              <div
                className="element my-2 rect w-16 cursor-pointer hover:bg-slate-700 h-16 border-black border-2"
                data-shape="rect"
              ></div>
              <div
                className="element my-2 circle w-16 h-16 cursor-pointer hover:bg-slate-700 border-black border-2 rounded-full  "
                data-shape="circle"
              ></div>

              <div className="element cursor-pointer" data-shape="object">
                <img
                  className="w-20 h-20"
                  src="https://d2slcw3kip6qmk.cloudfront.net/marketing/pages/chart/seo/database/discovery/products.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="w-full border-b-2 border-black">
            <label className="font-bold" htmlFor="">
              Links
            </label>
            <div className="flex items-center gap-2   hover:text-white ">
              <div
                className="element link cursor-pointer hover:bg-slate-700  "
                data-shape="link"
              >
                <img className="w-16 h-5" src = "https://cdn.pixabay.com/photo/2012/04/24/11/42/arrow-39526_1280.png" />
              </div>
              {/* <div
                className="element link cursor-pointer hover:bg-slate-700  "
                data-shape="link"
              >
                <img
                  className="w-16 h-5"
                  src="https://image.pngaaa.com/881/1672881-small.png"
                  alt=""
                />
              </div>

              <div
                className="element link cursor-pointer hover:bg-slate-700  "
                data-shape="link"
              >
                <img
                  className="w-16 h-5"
                  src="https://t4.ftcdn.net/jpg/04/15/20/91/360_F_415209190_HJAMc4kNDMIJIuyesoAJINruR0L9VChc.jpg"
                  alt=""
                />
              </div> */}
            </div>
          </div>

          <div className="w-full border-b-2 border-black">
            <label className="font-bold" htmlFor="">
              Text
            </label>
            <div className="flex items-center gap-2">
              <div
                className="element link border-black border-2 hover:text-white cursor-pointer hover:bg-slate-700 w-24 h-16 flex flex-col items-center justify-center "
                data-shape="text"
              >
                Click to edit
              </div>
            </div>
          </div>
        </div>

        <div
          className="bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iNTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI1NiIgaGVpZ2h0PSI1NiIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDE0IEwgNTYgMTQgTSAxNCAwIEwgMTQgNTYgTSAwIDI4IEwgNTYgMjggTSAyOCAwIEwgMjggNTYgTSAwIDQyIEwgNTYgNDIgTSA0MiAwIEwgNDIgNTYiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2QwZDBkMCIgb3BhY2l0eT0iMC4yIiBzdHJva2Utd2lkdGg9IjEiLz48cGF0aCBkPSJNIDU2IDAgTCAwIDAgMCA1NiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZDBkMGQwIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] !w-[90%]  !h-[600px] "
          id="paper"
        ></div>

        <div
          className="flex flex-col items-center w-[15%] p-2 gap-3 bg-slate-300 h-[600px]"
          id="menu"
        >
          <ul className="flex items-center gap-3 border-b-2 border-black justify-center mb-5 cursor-pointer">
            <li>Style</li>
            <li>Text</li>
            <li>Arrange</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Test;
