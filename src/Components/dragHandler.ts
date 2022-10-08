let initialized = false;
let dragElement: HTMLElement | null = null;
let dragElementIndex: number | null = null;

let xPosOnDrag;
let yPosOnDrag;

function init() {
  document.addEventListener("mousemove", handleMouseMove);
  document.addEventListener("mouseup", handleMouseUp);
  initialized = true;
}

export function getDragElement() {
  return dragElement;
}

export function getDragElementIndex() {
  return dragElementIndex;
}

export function setDragElement(
  el: HTMLElement,
  index: number,
  xPos: number,
  yPos: number
) {
  if (!initialized) init();
  dragElement = el;
  dragElementIndex = index;

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
  dragElementIndex = null;
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
