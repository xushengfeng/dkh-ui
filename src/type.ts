export { css };
type css = Partial<css0>;
type css0 = {
    "align-content": "center" | "flex-end" | "flex-start" | "space-around" | "space-between" | "stretch";
    "align-items": "baseline" | "center" | "flex-end" | "flex-start" | "stretch";
    "align-self": "auto" | "baseline" | "center" | "flex-end" | "flex-start" | "stretch";
    all: string;
    animation: string;
    "animation-delay": string;
    "animation-direction": "alternate" | "alternate-reverse" | "normal" | "reverse";
    "animation-duration": string;
    "animation-fill-mode": "backwards" | "both" | "forwards" | "none";
    "animation-iteration-count": "infinite";
    "animation-name": "none";
    "animation-play-state": "paused" | "running";
    "animation-timing-function":
        | "cubic-bezier()"
        | "ease"
        | "ease-in"
        | "ease-in-out"
        | "ease-out"
        | "linear"
        | "step-end"
        | "step-start"
        | "steps()";
    "backface-visibility": "hidden" | "visible";
    background: string;
    "background-attachment": "fixed" | "local" | "scroll" | "inherit";
    "background-blend-mode":
        | "color"
        | "color-burn"
        | "color-dodge"
        | "darken"
        | "difference"
        | "exclusion"
        | "hard-light"
        | "hue"
        | "lighten"
        | "luminosity"
        | "multiply"
        | "normal"
        | "overlay"
        | "saturation"
        | "screen"
        | "soft-light";
    "background-clip": "border-box" | "content-box" | "padding-box" | "inherit";
    "background-color": "inherit";
    "background-image":
        | "image()"
        | "linear-gradient()"
        | "radial-gradient()"
        | "repeating-linear-gradient()"
        | "repeating-radial-gradient()"
        | "url()";
    "background-origin": "border-box" | "content-box" | "padding-box" | "inherit";
    "background-position": "left" | "center" | "right" | "bottom" | "top";
    "background-repeat": "no-repeat" | "repeat" | "repeat-x" | "repeat-y" | "round" | "space";
    "background-size": "auto" | "contain" | "cover";
    border: string;
    "border-collapse": "collapse" | "separate" | "inherit";
    "border-color": "inherit";
    "border-spacing": "inherit";
    "border-style":
        | "dashed"
        | "dotted"
        | "double"
        | "groove"
        | "hidden"
        | "inset"
        | "none"
        | "outset"
        | "ridge"
        | "solid"
        | "inherit";
    "border-bottom": string;
    "border-bottom-color": "inherit";
    "border-bottom-left-radius": string;
    "border-bottom-right-radius": string;
    "border-bottom-style":
        | "dashed"
        | "dotted"
        | "double"
        | "groove"
        | "hidden"
        | "inset"
        | "none"
        | "outset"
        | "ridge"
        | "solid"
        | "inherit";
    "border-bottom-width": "medium" | "thin" | "thick" | "inherit";
    "border-image": "url()";
    "border-image-outset": string;
    "border-image-slice": string;
    "border-image-source": string;
    "border-image-repeat": "repeat" | "round" | "space" | "stretch";
    "border-image-width": "auto";
    "border-left": string;
    "border-left-color": "inherit";
    "border-left-style":
        | "dashed"
        | "dotted"
        | "double"
        | "groove"
        | "hidden"
        | "inset"
        | "none"
        | "outset"
        | "ridge"
        | "solid"
        | "inherit";
    "border-left-width": "medium" | "thin" | "thick" | "inherit";
    "border-radius": string;
    "border-right": string;
    "border-right-color": "inherit";
    "border-right-style":
        | "dashed"
        | "dotted"
        | "double"
        | "groove"
        | "hidden"
        | "inset"
        | "none"
        | "outset"
        | "ridge"
        | "solid"
        | "inherit";
    "border-right-width": "medium" | "thin" | "thick" | "inherit";
    "border-top": string;
    "border-top-color": "inherit";
    "border-top-left-radius": string;
    "border-top-right-radius": string;
    "border-top-style":
        | "dashed"
        | "dotted"
        | "double"
        | "groove"
        | "hidden"
        | "inset"
        | "none"
        | "outset"
        | "ridge"
        | "solid"
        | "inherit";
    "border-top-width": "medium" | "thin" | "thick" | "inherit";
    "border-width": "medium" | "thin" | "thick" | "inherit";
    "box-decoration-break": "clone" | "slice";
    "box-shadow": string;
    "box-sizing": "border-box" | "content-box" | "inherit";
    bottom: "auto" | "inherit";
    "break-after":
        | "always"
        | "auto"
        | "avoid"
        | "avoid-column"
        | "avoid-page"
        | "avoid-region"
        | "column"
        | "left"
        | "page"
        | "region"
        | "right";
    "break-before":
        | "always"
        | "auto"
        | "avoid"
        | "avoid-column"
        | "avoid-page"
        | "avoid-region"
        | "column"
        | "left"
        | "page"
        | "region"
        | "right";
    "break-inside": "auto" | "avoid" | "avoid-column" | "avoid-page" | "avoid-region";
    "caption-side": "bottom" | "top" | "inherit";
    "caret-color": "auto";
    clear: "both" | "left" | "none" | "right" | "inherit";
    clip: "auto" | "inherit";
    color: "inherit";
    columns: string;
    "column-count": string;
    "column-fill": "auto" | "balance";
    "column-gap": "normal";
    "column-rule": string;
    "column-rule-color": string;
    "column-rule-style":
        | "dashed"
        | "dotted"
        | "double"
        | "groove"
        | "hidden"
        | "inset"
        | "none"
        | "outset"
        | "ridge"
        | "solid"
        | "inherit";
    "column-rule-width": "medium" | "thin" | "thick" | "inherit";
    "column-span": "all" | "none";
    "column-width": "auto" | "inherit";
    content:
        | "attr()"
        | "close-quote"
        | "no-close-quote"
        | "no-open-quote"
        | "normal"
        | "none"
        | "open-quote"
        | "inherit";
    "counter-increment": "none" | "inherit";
    "counter-reset": "none" | "inherit";
    cursor:
        | "alias"
        | "all-scroll"
        | "auto"
        | "cell"
        | "col-resize"
        | "context-menu"
        | "copy"
        | "crosshair"
        | "default"
        | "e-resize"
        | "ew-resize"
        | "grab"
        | "grabbing"
        | "help"
        | "inherit"
        | "move"
        | "n-resize"
        | "ne-resize"
        | "nesw-resize"
        | "no-drop"
        | "none"
        | "not-allowed"
        | "ns-resize"
        | "nw-resize"
        | "nwse-resize"
        | "pointer"
        | "progress"
        | "row-resize"
        | "s-resize"
        | "se-resize"
        | "sw-resize"
        | "text"
        | "vertical-text"
        | "w-resize"
        | "wait"
        | "zoom-in"
        | "zoom-out";
    direction: "ltr" | "rtl" | "inherit";
    display:
        | "block"
        | "contents"
        | "flex"
        | "flow-root"
        | "grid"
        | "inline"
        | "inline-block"
        | "inline-flex"
        | "inline-grid"
        | "inline-table"
        | "list-item"
        | "none"
        | "run-in"
        | "subgrid"
        | "table"
        | "table-caption"
        | "table-cell"
        | "table-column"
        | "table-column-group"
        | "table-footer-group"
        | "table-header-group"
        | "table-row"
        | "table-row-group"
        | "inherit";
    "empty-cells": "hide" | "show" | "inherit";
    filter:
        | "blur()"
        | "brightness()"
        | "contrast()"
        | "custom()"
        | "drop-shadow()"
        | "grayscale()"
        | "hue-rotate()"
        | "invert()"
        | "none"
        | "opacity()"
        | "sepia()"
        | "saturate()"
        | "url()";
    flex: "auto" | "initial" | "none";
    "flex-basis": "auto";
    "flex-direction": "column" | "column-reverse" | "row" | "row-reverse";
    "flex-flow": "column" | "column-reverse" | "nowrap" | "row" | "row-reverse" | "wrap" | "wrap-reverse";
    "flex-grow": string;
    "flex-shrink": string;
    "flex-wrap": "nowrap" | "wrap" | "wrap-reverse";
    float: "left" | "right" | "none" | "inherit";
    font: string;
    "font-display": "auto" | "block" | "swap" | "fallback" | "optional";
    "font-family": "cursive" | "fantasy" | "inherit" | "monospace" | "sans-serif" | "serif";
    "font-feature-settings": "normal";
    "font-kerning": "auto" | "none" | "normal";
    "font-language-override": "normal";
    "font-size": string;
    "font-size-adjust": "auto" | "none";
    "font-stretch":
        | "condensed"
        | "expanded"
        | "extra-condensed"
        | "extra-expanded"
        | "normal"
        | "semi-condensed"
        | "semi-expanded"
        | "ultra-condensed"
        | "ultra-expanded";
    "font-style": "italic" | "normal" | "oblique";
    "font-synthesis": "none" | "style" | "weight";
    "font-variant": "normal" | "small-caps" | "inherit";
    "font-variant-alternates": "normal";
    "font-variant-caps":
        | "normal"
        | "small-caps"
        | "all-small-caps"
        | "petite-caps"
        | "all-petite-caps"
        | "unicase"
        | "titling-caps";
    "font-variant-east-asian": "normal";
    "font-variant-ligatures": "normal" | "none";
    "font-variant-numeric": "normal";
    "font-variant-position": "normal" | "sub" | "super";
    "font-weight":
        | "bold"
        | "bolder"
        | "lighter"
        | "normal"
        | "100"
        | "200"
        | "300"
        | "400"
        | "500"
        | "600"
        | "700"
        | "800"
        | "900"
        | "inherit";
    grid: string;
    "grid-area": string;
    "grid-auto-columns": string;
    "grid-auto-flow": "row" | "column" | "dense";
    "grid-auto-rows": string;
    "grid-column": "auto";
    "grid-column-end": string;
    "grid-column-gap": string;
    "grid-column-start": string;
    "grid-gap": string;
    "grid-row": "auto";
    "grid-row-end": string;
    "grid-row-start": string;
    "grid-row-gap": string;
    "grid-template": "none";
    "grid-template-areas": string;
    "grid-template-columns": "auto";
    "grid-template-rows": "auto";
    "hanging-punctuation": "allow-end" | "first" | "force-end" | "last" | "none";
    height: "auto" | "inherit";
    hyphens: "auto" | "manual" | "none";
    "image-orientation": string;
    "image-resolution": "from-image" | "snap";
    isolation: "auto" | "isolate";
    "justify-content": "center" | "flex-end" | "flex-start" | "space-around" | "space-between";
    "justify-items":
        | "auto"
        | "normal"
        | "stretch"
        | "center"
        | "start"
        | "end"
        | "flex-start"
        | "flex-end"
        | "self-start"
        | "self-end"
        | "left"
        | "right"
        | "baseline"
        | "first"
        | "last"
        | "safe"
        | "unsafe"
        | "legacy"
        | "inherit"
        | "initial";
    "justify-self":
        | "auto"
        | "normal"
        | "stretch"
        | "center"
        | "start"
        | "end"
        | "flex-start"
        | "flex-end"
        | "self-start"
        | "self-end"
        | "left"
        | "right"
        | "baseline"
        | "first"
        | "last"
        | "safe"
        | "unsafe"
        | "inherit"
        | "initial";
    left: "auto" | "inherit";
    "letter-spacing": "normal" | "inherit";
    "line-height": "normal" | "inherit";
    "list-style":
        | "none"
        | "inherit"
        | "initial"
        | "unset"
        | "url()"
        | "armenian"
        | "circle"
        | "decimal"
        | "decimal-leading-zero"
        | "disc"
        | "georgian"
        | "inside"
        | "lower-alpha"
        | "lower-greek"
        | "lower-latin"
        | "lower-roman"
        | "outside"
        | "square"
        | "upper-alpha"
        | "upper-latin"
        | "upper-roman";
    "list-style-image": "none" | "url()" | "inherit";
    "list-style-position": "inside" | "outside" | "inherit";
    "list-style-type":
        | "armenian"
        | "circle"
        | "decimal"
        | "decimal-leading-zero"
        | "disc"
        | "georgian"
        | "lower-alpha"
        | "lower-greek"
        | "lower-latin"
        | "lower-roman"
        | "none"
        | "square"
        | "upper-alpha"
        | "upper-latin"
        | "upper-roman"
        | "inherit";
    margin: "auto" | "inherit";
    "margin-bottom": "auto" | "inherit";
    "margin-left": "auto" | "inherit";
    "margin-right": "auto" | "inherit";
    "margin-top": "auto" | "inherit";
    "max-height": "none" | "inherit";
    "max-width": "none" | "inherit";
    "min-height": "inherit";
    "min-width": "inherit";
    "mix-blend-mode":
        | "color"
        | "color-burn"
        | "color-dodge"
        | "darken"
        | "difference"
        | "exclusion"
        | "hard-light"
        | "hue"
        | "lighten"
        | "luminosity"
        | "multiply"
        | "normal"
        | "overlay"
        | "saturation"
        | "screen"
        | "soft-light";
    "object-fit": "contain" | "cover" | "fill" | "none" | "scale-down";
    "object-position": "left" | "center" | "right" | "bottom" | "top";
    opacity: "inherit";
    order: string;
    orphans: "inherit";
    outline: "inherit";
    "outline-color": "invert" | "inherit";
    "outline-offset": "inherit";
    "outline-style":
        | "dashed"
        | "dotted"
        | "double"
        | "groove"
        | "hidden"
        | "inset"
        | "none"
        | "outset"
        | "ridge"
        | "solid"
        | "inherit";
    "outline-width": "medium" | "thin" | "thick" | "inherit";
    overflow: "auto" | "hidden" | "scroll" | "visible" | "inherit";
    "overflow-x": "auto" | "hidden" | "scroll" | "visible" | "inherit";
    "overflow-y": "auto" | "hidden" | "scroll" | "visible" | "inherit";
    padding: "inherit";
    "padding-bottom": string;
    "padding-left": string;
    "padding-right": string;
    "padding-top": string;
    "page-break-after": "always" | "auto" | "avoid" | "left" | "right" | "inherit";
    "page-break-before": "always" | "auto" | "avoid" | "left" | "right" | "inherit";
    "page-break-inside": "auto" | "avoid" | "inherit";
    perspective: "none";
    "perspective-origin": "bottom" | "center" | "left" | "right" | "top";
    "pointer-events":
        | "all"
        | "auto"
        | "fill"
        | "inherit"
        | "none"
        | "painted"
        | "stroke"
        | "visible"
        | "visibleFill"
        | "visiblePainted"
        | "visibleStroke";
    position: "absolute" | "fixed" | "relative" | "static" | "sticky" | "inherit";
    quotes: "none" | "inherit";
    "region-break-after":
        | "always"
        | "auto"
        | "avoid"
        | "avoid-column"
        | "avoid-page"
        | "avoid-region"
        | "column"
        | "left"
        | "page"
        | "region"
        | "right";
    "region-break-before":
        | "always"
        | "auto"
        | "avoid"
        | "avoid-column"
        | "avoid-page"
        | "avoid-region"
        | "column"
        | "left"
        | "page"
        | "region"
        | "right";
    "region-break-inside": "auto" | "avoid" | "avoid-column" | "avoid-page" | "avoid-region";
    "region-fragment": "auto" | "break";
    resize: "both" | "horizontal" | "none" | "vertical" | "inherit";
    right: "auto" | "inherit";
    "scroll-behavior": "auto" | "smooth";
    "scroll-snap-type": "none" | "x" | "y" | "block" | "inline" | "both" | "mandatory" | "proximity";
    src: "url()";
    "shape-image-threshold": string;
    "shape-inside": "auto" | "circle()" | "ellipse()" | "inherit" | "outside-shape" | "polygon()" | "rectangle()";
    "shape-margin": string;
    "shape-outside":
        | "none"
        | "inherit"
        | "circle()"
        | "ellipse()"
        | "polygon()"
        | "inset()"
        | "margin-box"
        | "border-box"
        | "padding-box"
        | "content-box"
        | "url()"
        | "image()"
        | "linear-gradient()"
        | "radial-gradient()"
        | "repeating-linear-gradient()"
        | "repeating-radial-gradient()";
    "tab-size": string;
    "table-layout": "auto" | "fixed" | "inherit";
    "text-align":
        | "start"
        | "end"
        | "center"
        | "left"
        | "justify"
        | "right"
        | "match-parent"
        | "justify-all"
        | "inherit";
    "text-align-last": "center" | "left" | "justify" | "right" | "inherit";
    "text-decoration": "line-through" | "none" | "overline" | "underline" | "inherit";
    "text-decoration-color": string;
    "text-decoration-line": "line-through" | "none" | "overline" | "underline";
    "text-decoration-skip": "edges" | "ink" | "none" | "objects" | "spaces";
    "text-decoration-style": "dashed" | "dotted" | "double" | "solid" | "wavy";
    "text-emphasis": string;
    "text-emphasis-color": string;
    "text-emphasis-position": "above" | "below" | "left" | "right";
    "text-emphasis-style": "circle" | "dot" | "double-circle" | "filled" | "none" | "open" | "sesame" | "triangle";
    "text-indent": "inherit";
    "text-justify": "auto" | "none" | "inter-word" | "inter-character" | "inherit";
    "text-overflow": "clip" | "ellipsis" | "inherit";
    "text-shadow": string;
    "text-rendering": "auto" | "geometricPrecision" | "optimizeLegibility" | "optimizeSpeed";
    "text-transform": "capitalize" | "full-width" | "lowercase" | "none" | "uppercase" | "inherit";
    "text-underline-position": "alphabetic" | "auto" | "below" | "left" | "right";
    top: "auto" | "inherit";
    transform:
        | "matrix()"
        | "matrix3d()"
        | "none"
        | "perspective()"
        | "rotate()"
        | "rotate3d()"
        | "rotateX()"
        | "rotateY()"
        | "rotateZ()"
        | "scale()"
        | "scale3d()"
        | "scaleX()"
        | "scaleY()"
        | "scaleZ()"
        | "skewX()"
        | "skewY()"
        | "translate()"
        | "translate3d()"
        | "translateX()"
        | "translateY()"
        | "translateZ()";
    "transform-origin": "bottom" | "center" | "left" | "right" | "top";
    "transform-style": "flat" | "preserve-3d";
    transition: string;
    "transition-delay": string;
    "transition-duration": string;
    "transition-property": "all" | "none";
    "transition-timing-function":
        | "cubic-bezier()"
        | "ease"
        | "ease-in"
        | "ease-in-out"
        | "ease-out"
        | "linear"
        | "step-end"
        | "step-start"
        | "steps()";
    "unicode-bidi": "bidi-override" | "embed" | "normal" | "inherit";
    "unicode-range": string;
    "user-select": "all" | "auto" | "contain" | "none" | "text";
    "vertical-align":
        | "baseline"
        | "bottom"
        | "middle"
        | "sub"
        | "super"
        | "text-bottom"
        | "text-top"
        | "top"
        | "inherit";
    visibility: "collapse" | "hidden" | "visible" | "inherit";
    "white-space": "normal" | "nowrap" | "pre" | "pre-line" | "pre-wrap" | "inherit";
    widows: "inherit";
    width: "auto" | "inherit";
    "will-change": "auto" | "contents" | "opacity" | "scroll-position" | "transform" | "inherit" | "initial" | "unset";
    "word-break": "normal" | "break-all" | "keep-all";
    "word-spacing": "normal" | "inherit";
    "word-wrap": "break-word" | "normal";
    "z-index": "auto" | "inherit";
};
