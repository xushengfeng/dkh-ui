export { css };
type css = Partial<css0>;
type css0 = {
    "align-content":
        | "center"
        | "flex-end"
        | "flex-start"
        | "space-around"
        | "space-between"
        | "stretch"
        | (string & {});
    "align-items": "baseline" | "center" | "flex-end" | "flex-start" | "stretch" | (string & {});
    "align-self": "auto" | "baseline" | "center" | "flex-end" | "flex-start" | "stretch" | (string & {});
    all: string & {};
    animation: string & {};
    "animation-delay": string & {};
    "animation-direction": "alternate" | "alternate-reverse" | "normal" | "reverse" | (string & {});
    "animation-duration": string & {};
    "animation-fill-mode": "backwards" | "both" | "forwards" | "none" | (string & {});
    "animation-iteration-count": "infinite" | (string & {});
    "animation-name": "none" | (string & {});
    "animation-play-state": "paused" | "running" | (string & {});
    "animation-timing-function":
        | "cubic-bezier()"
        | "ease"
        | "ease-in"
        | "ease-in-out"
        | "ease-out"
        | "linear"
        | "step-end"
        | "step-start"
        | "steps()"
        | (string & {});
    "backface-visibility": "hidden" | "visible" | (string & {});
    background: string & {};
    "background-attachment": "fixed" | "local" | "scroll" | "inherit" | (string & {});
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
        | "soft-light"
        | (string & {});
    "background-clip": "border-box" | "content-box" | "padding-box" | "inherit" | (string & {});
    "background-color": "inherit" | (string & {});
    "background-image":
        | "image()"
        | "linear-gradient()"
        | "radial-gradient()"
        | "repeating-linear-gradient()"
        | "repeating-radial-gradient()"
        | "url()"
        | (string & {});
    "background-origin": "border-box" | "content-box" | "padding-box" | "inherit" | (string & {});
    "background-position": "left" | "center" | "right" | "bottom" | "top" | (string & {});
    "background-repeat": "no-repeat" | "repeat" | "repeat-x" | "repeat-y" | "round" | "space" | (string & {});
    "background-size": "auto" | "contain" | "cover" | (string & {});
    border: string & {};
    "border-collapse": "collapse" | "separate" | "inherit" | (string & {});
    "border-color": "inherit" | (string & {});
    "border-spacing": "inherit" | (string & {});
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
        | "inherit"
        | (string & {});
    "border-bottom": string & {};
    "border-bottom-color": "inherit" | (string & {});
    "border-bottom-left-radius": string & {};
    "border-bottom-right-radius": string & {};
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
        | "inherit"
        | (string & {});
    "border-bottom-width": "medium" | "thin" | "thick" | "inherit" | (string & {});
    "border-image": "url()" | (string & {});
    "border-image-outset": string & {};
    "border-image-slice": string & {};
    "border-image-source": string & {};
    "border-image-repeat": "repeat" | "round" | "space" | "stretch" | (string & {});
    "border-image-width": "auto" | (string & {});
    "border-left": string & {};
    "border-left-color": "inherit" | (string & {});
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
        | "inherit"
        | (string & {});
    "border-left-width": "medium" | "thin" | "thick" | "inherit" | (string & {});
    "border-radius": string & {};
    "border-right": string & {};
    "border-right-color": "inherit" | (string & {});
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
        | "inherit"
        | (string & {});
    "border-right-width": "medium" | "thin" | "thick" | "inherit" | (string & {});
    "border-top": string & {};
    "border-top-color": "inherit" | (string & {});
    "border-top-left-radius": string & {};
    "border-top-right-radius": string & {};
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
        | "inherit"
        | (string & {});
    "border-top-width": "medium" | "thin" | "thick" | "inherit" | (string & {});
    "border-width": "medium" | "thin" | "thick" | "inherit" | (string & {});
    "box-decoration-break": "clone" | "slice" | (string & {});
    "box-shadow": string & {};
    "box-sizing": "border-box" | "content-box" | "inherit" | (string & {});
    bottom: "auto" | "inherit" | (string & {});
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
        | "right"
        | (string & {});
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
        | "right"
        | (string & {});
    "break-inside": "auto" | "avoid" | "avoid-column" | "avoid-page" | "avoid-region" | (string & {});
    "caption-side": "bottom" | "top" | "inherit" | (string & {});
    "caret-color": "auto" | (string & {});
    clear: "both" | "left" | "none" | "right" | "inherit" | (string & {});
    clip: "auto" | "inherit" | (string & {});
    color: "inherit" | (string & {});
    columns: string & {};
    "column-count": string & {};
    "column-fill": "auto" | "balance" | (string & {});
    "column-gap": "normal" | (string & {});
    "column-rule": string & {};
    "column-rule-color": string & {};
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
        | "inherit"
        | (string & {});
    "column-rule-width": "medium" | "thin" | "thick" | "inherit" | (string & {});
    "column-span": "all" | "none" | (string & {});
    "column-width": "auto" | "inherit" | (string & {});
    content:
        | "attr()"
        | "close-quote"
        | "no-close-quote"
        | "no-open-quote"
        | "normal"
        | "none"
        | "open-quote"
        | "inherit"
        | (string & {});
    "counter-increment": "none" | "inherit" | (string & {});
    "counter-reset": "none" | "inherit" | (string & {});
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
        | "zoom-out"
        | (string & {});
    direction: "ltr" | "rtl" | "inherit" | (string & {});
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
        | "inherit"
        | (string & {});
    "empty-cells": "hide" | "show" | "inherit" | (string & {});
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
        | "url()"
        | (string & {});
    flex: "auto" | "initial" | "none" | (string & {});
    "flex-basis": "auto" | (string & {});
    "flex-direction": "column" | "column-reverse" | "row" | "row-reverse" | (string & {});
    "flex-flow":
        | "column"
        | "column-reverse"
        | "nowrap"
        | "row"
        | "row-reverse"
        | "wrap"
        | "wrap-reverse"
        | (string & {});
    "flex-grow": string & {};
    "flex-shrink": string & {};
    "flex-wrap": "nowrap" | "wrap" | "wrap-reverse" | (string & {});
    float: "left" | "right" | "none" | "inherit" | (string & {});
    font: string & {};
    "font-display": "auto" | "block" | "swap" | "fallback" | "optional" | (string & {});
    "font-family": "cursive" | "fantasy" | "inherit" | "monospace" | "sans-serif" | "serif" | (string & {});
    "font-feature-settings": "normal" | (string & {});
    "font-kerning": "auto" | "none" | "normal" | (string & {});
    "font-language-override": "normal" | (string & {});
    "font-size": string & {};
    "font-size-adjust": "auto" | "none" | (string & {});
    "font-stretch":
        | "condensed"
        | "expanded"
        | "extra-condensed"
        | "extra-expanded"
        | "normal"
        | "semi-condensed"
        | "semi-expanded"
        | "ultra-condensed"
        | "ultra-expanded"
        | (string & {});
    "font-style": "italic" | "normal" | "oblique" | (string & {});
    "font-synthesis": "none" | "style" | "weight" | (string & {});
    "font-variant": "normal" | "small-caps" | "inherit" | (string & {});
    "font-variant-alternates": "normal" | (string & {});
    "font-variant-caps":
        | "normal"
        | "small-caps"
        | "all-small-caps"
        | "petite-caps"
        | "all-petite-caps"
        | "unicase"
        | "titling-caps"
        | (string & {});
    "font-variant-east-asian": "normal" | (string & {});
    "font-variant-ligatures": "normal" | "none" | (string & {});
    "font-variant-numeric": "normal" | (string & {});
    "font-variant-position": "normal" | "sub" | "super" | (string & {});
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
        | "inherit"
        | (string & {});
    grid: string & {};
    "grid-area": string & {};
    "grid-auto-columns": string & {};
    "grid-auto-flow": "row" | "column" | "dense" | (string & {});
    "grid-auto-rows": string & {};
    "grid-column": "auto" | (string & {});
    "grid-column-end": string & {};
    "grid-column-gap": string & {};
    "grid-column-start": string & {};
    "grid-gap": string & {};
    "grid-row": "auto" | (string & {});
    "grid-row-end": string & {};
    "grid-row-start": string & {};
    "grid-row-gap": string & {};
    "grid-template": "none" | (string & {});
    "grid-template-areas": string & {};
    "grid-template-columns": "auto" | (string & {});
    "grid-template-rows": "auto" | (string & {});
    "hanging-punctuation": "allow-end" | "first" | "force-end" | "last" | "none" | (string & {});
    height: "auto" | "inherit" | (string & {});
    hyphens: "auto" | "manual" | "none" | (string & {});
    "image-orientation": string & {};
    "image-resolution": "from-image" | "snap" | (string & {});
    isolation: "auto" | "isolate" | (string & {});
    "justify-content": "center" | "flex-end" | "flex-start" | "space-around" | "space-between" | (string & {});
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
        | "initial"
        | (string & {});
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
        | "initial"
        | (string & {});
    left: "auto" | "inherit" | (string & {});
    "letter-spacing": "normal" | "inherit" | (string & {});
    "line-height": "normal" | "inherit" | (string & {});
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
        | "upper-roman"
        | (string & {});
    "list-style-image": "none" | "url()" | "inherit" | (string & {});
    "list-style-position": "inside" | "outside" | "inherit" | (string & {});
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
        | "inherit"
        | (string & {});
    margin: "auto" | "inherit" | (string & {});
    "margin-bottom": "auto" | "inherit" | (string & {});
    "margin-left": "auto" | "inherit" | (string & {});
    "margin-right": "auto" | "inherit" | (string & {});
    "margin-top": "auto" | "inherit" | (string & {});
    "max-height": "none" | "inherit" | (string & {});
    "max-width": "none" | "inherit" | (string & {});
    "min-height": "inherit" | (string & {});
    "min-width": "inherit" | (string & {});
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
        | "soft-light"
        | (string & {});
    "object-fit": "contain" | "cover" | "fill" | "none" | "scale-down" | (string & {});
    "object-position": "left" | "center" | "right" | "bottom" | "top" | (string & {});
    opacity: "inherit" | (string & {});
    order: string & {};
    orphans: "inherit" | (string & {});
    outline: "inherit" | (string & {});
    "outline-color": "invert" | "inherit" | (string & {});
    "outline-offset": "inherit" | (string & {});
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
        | "inherit"
        | (string & {});
    "outline-width": "medium" | "thin" | "thick" | "inherit" | (string & {});
    overflow: "auto" | "hidden" | "scroll" | "visible" | "inherit" | (string & {});
    "overflow-x": "auto" | "hidden" | "scroll" | "visible" | "inherit" | (string & {});
    "overflow-y": "auto" | "hidden" | "scroll" | "visible" | "inherit" | (string & {});
    padding: "inherit" | (string & {});
    "padding-bottom": string & {};
    "padding-left": string & {};
    "padding-right": string & {};
    "padding-top": string & {};
    "page-break-after": "always" | "auto" | "avoid" | "left" | "right" | "inherit" | (string & {});
    "page-break-before": "always" | "auto" | "avoid" | "left" | "right" | "inherit" | (string & {});
    "page-break-inside": "auto" | "avoid" | "inherit" | (string & {});
    perspective: "none" | (string & {});
    "perspective-origin": "bottom" | "center" | "left" | "right" | "top" | (string & {});
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
        | "visibleStroke"
        | (string & {});
    position: "absolute" | "fixed" | "relative" | "static" | "sticky" | "inherit" | (string & {});
    quotes: "none" | "inherit" | (string & {});
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
        | "right"
        | (string & {});
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
        | "right"
        | (string & {});
    "region-break-inside": "auto" | "avoid" | "avoid-column" | "avoid-page" | "avoid-region" | (string & {});
    "region-fragment": "auto" | "break" | (string & {});
    resize: "both" | "horizontal" | "none" | "vertical" | "inherit" | (string & {});
    right: "auto" | "inherit" | (string & {});
    "scroll-behavior": "auto" | "smooth" | (string & {});
    "scroll-snap-type": "none" | "x" | "y" | "block" | "inline" | "both" | "mandatory" | "proximity" | (string & {});
    src: "url()" | (string & {});
    "shape-image-threshold": string & {};
    "shape-inside":
        | "auto"
        | "circle()"
        | "ellipse()"
        | "inherit"
        | "outside-shape"
        | "polygon()"
        | "rectangle()"
        | (string & {});
    "shape-margin": string & {};
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
        | "repeating-radial-gradient()"
        | (string & {});
    "tab-size": string & {};
    "table-layout": "auto" | "fixed" | "inherit" | (string & {});
    "text-align":
        | "start"
        | "end"
        | "center"
        | "left"
        | "justify"
        | "right"
        | "match-parent"
        | "justify-all"
        | "inherit"
        | (string & {});
    "text-align-last": "center" | "left" | "justify" | "right" | "inherit" | (string & {});
    "text-decoration": "line-through" | "none" | "overline" | "underline" | "inherit" | (string & {});
    "text-decoration-color": string & {};
    "text-decoration-line": "line-through" | "none" | "overline" | "underline" | (string & {});
    "text-decoration-skip": "edges" | "ink" | "none" | "objects" | "spaces" | (string & {});
    "text-decoration-style": "dashed" | "dotted" | "double" | "solid" | "wavy" | (string & {});
    "text-emphasis": string & {};
    "text-emphasis-color": string & {};
    "text-emphasis-position": "above" | "below" | "left" | "right" | (string & {});
    "text-emphasis-style":
        | "circle"
        | "dot"
        | "double-circle"
        | "filled"
        | "none"
        | "open"
        | "sesame"
        | "triangle"
        | (string & {});
    "text-indent": "inherit" | (string & {});
    "text-justify": "auto" | "none" | "inter-word" | "inter-character" | "inherit" | (string & {});
    "text-overflow": "clip" | "ellipsis" | "inherit" | (string & {});
    "text-shadow": string & {};
    "text-rendering": "auto" | "geometricPrecision" | "optimizeLegibility" | "optimizeSpeed" | (string & {});
    "text-transform": "capitalize" | "full-width" | "lowercase" | "none" | "uppercase" | "inherit" | (string & {});
    "text-underline-position": "alphabetic" | "auto" | "below" | "left" | "right" | (string & {});
    top: "auto" | "inherit" | (string & {});
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
        | "translateZ()"
        | (string & {});
    "transform-origin": "bottom" | "center" | "left" | "right" | "top" | (string & {});
    "transform-style": "flat" | "preserve-3d" | (string & {});
    transition: string & {};
    "transition-delay": string & {};
    "transition-duration": string & {};
    "transition-property": "all" | "none" | (string & {});
    "transition-timing-function":
        | "cubic-bezier()"
        | "ease"
        | "ease-in"
        | "ease-in-out"
        | "ease-out"
        | "linear"
        | "step-end"
        | "step-start"
        | "steps()"
        | (string & {});
    "unicode-bidi": "bidi-override" | "embed" | "normal" | "inherit" | (string & {});
    "unicode-range": string & {};
    "user-select": "all" | "auto" | "contain" | "none" | "text" | (string & {});
    "vertical-align":
        | "baseline"
        | "bottom"
        | "middle"
        | "sub"
        | "super"
        | "text-bottom"
        | "text-top"
        | "top"
        | "inherit"
        | (string & {});
    visibility: "collapse" | "hidden" | "visible" | "inherit" | (string & {});
    "white-space": "normal" | "nowrap" | "pre" | "pre-line" | "pre-wrap" | "inherit" | (string & {});
    widows: "inherit" | (string & {});
    width: "auto" | "inherit" | (string & {});
    "will-change":
        | "auto"
        | "contents"
        | "opacity"
        | "scroll-position"
        | "transform"
        | "inherit"
        | "initial"
        | "unset"
        | (string & {});
    "word-break": "normal" | "break-all" | "keep-all" | (string & {});
    "word-spacing": "normal" | "inherit" | (string & {});
    "word-wrap": "break-word" | "normal" | (string & {});
    "z-index": "auto" | "inherit" | (string & {});
    [key: string]: string;
};
