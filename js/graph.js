document.addEventListener("DOMContentLoaded", function() {
  const svg = document.querySelector("#knowledge-graph");
  if (!svg) return;

  let isDragging = false;
  let startX, startY;
  let currentX = 0, currentY = 0;
  let scale = 1;
  const group = document.querySelector("#graphGroup");

  if (!group) return;

  svg.addEventListener("mousedown", function(e) {
    isDragging = true;
    startX = e.clientX - currentX;
    startY = e.clientY - currentY;
    svg.style.cursor = "grabbing";
  });

  svg.addEventListener("mousemove", function(e) {
    if (!isDragging) return;
    e.preventDefault();
    currentX = e.clientX - startX;
    currentY = e.clientY - startY;
    group.setAttribute("transform", "translate(" + currentX + ", " + currentY + ") scale(" + scale + ")");
  });

  svg.addEventListener("mouseup", function() {
    isDragging = false;
    svg.style.cursor = "grab";
  });

  svg.addEventListener("mouseleave", function() {
    isDragging = false;
    svg.style.cursor = "grab";
  });

  svg.addEventListener("wheel", function(e) {
    e.preventDefault();
    var delta = e.deltaY > 0 ? 0.9 : 1.1;
    scale = Math.min(Math.max(0.5, scale * delta), 2.5);
    group.setAttribute("transform", "translate(" + currentX + ", " + currentY + ") scale(" + scale + ")");
  });

  var nodes = document.querySelectorAll(".graph-node");
  nodes.forEach(function(node) {
    node.addEventListener("click", function() {
      var conceptId = this.getAttribute("data-id");
      if (conceptId) {
        window.location.href = "concept.html?id=" + conceptId;
      }
    });
  });
});
