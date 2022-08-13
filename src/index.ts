// Intersection types
type Draggable = {
    darg: () => void;
};

type Resizable = {
    resize: () => void;
};

type UiWidgets = Draggable & Resizable;

let userWidget: UiWidgets = {
    darg: () => {},
    resize: () => {},
};
