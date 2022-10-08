let initialed = false;
let dragElement: HTMLElement | null = null;

let xPosOnDrag;
let yPosOnDrag;

function init() {
  document.addEventListener("mousemove", handleMouseMove);
  document.addEventListener("mouseup", handleMouseUp);
  initialed = true;
}

export function getDragElement() {
  return dragElement;
}

export function setDragElement(el: HTMLElement, xPos: number, yPos: number) {
  if (!initialed) init();
  dragElement = el;

  el.style.pointerEvents = "none";

  const imageBoundingRect = el.getBoundingClientRect();

  //get a refrence to the current x and y pos
  xPosOnDrag = imageBoundingRect.x;
  yPosOnDrag = imageBoundingRect.y;

  el.style.transform = `translate(${xPos}px,${yPos}px)`;
}

export function removeDragElement() {
  if (!dragElement) return;
  dragElement.style.transform = "";
  dragElement.style.pointerEvents = "auto";
  dragElement = null;
}

function handleMouseMove(e: MouseEvent) {
  if (!dragElement) return;

  const imageBoundingRect = dragElement.getBoundingClientRect();

  const xOffset = e.clientX - imageBoundingRect.width / 2 - xPosOnDrag;
  const yOffset = e.clientY - imageBoundingRect.height / 2 - yPosOnDrag;
  dragElement.style.transform = `translate(${xOffset}px,${yOffset}px)`;
}

function handleMouseUp(e: MouseEvent) {
  removeDragElement();
}
