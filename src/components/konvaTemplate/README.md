### kovna 的架构设计

1. Konva 有一定的嵌套结构，有些类似 DOM 结构。通过 add 和 remove 就能实现子节点的添加和删除。
2. Konva Tree：应用的根节点，会创建一个 div 节点，作为事件的接受层，一个 Stage 可以包含多个 Layer 图层
3. Layer: Layer 会创建一个 canvas 节点，主要作用是绘制 Canvas 中的元素，一个 layer 可以包含多个 group 和 shape
4. Group: Group 包含多个 shape
5. Shape: 指 Text\Rect\Circle 等图形

6. 事件集合
   EVENTS = [
   [MOUSEENTER, '_pointerenter'],
   [MOUSEDOWN, '_pointerdown'],
   [MOUSEMOVE, '_pointermove'],
   [MOUSEUP, '_pointerup'],
   [MOUSELEAVE, '_pointerleave'],
   [TOUCHSTART, '_pointerdown'],
   [TOUCHMOVE, '_pointermove'],
   [TOUCHEND, '_pointerup'],
   [TOUCHCANCEL, '_pointercancel'],
   [MOUSEOVER, '_pointerover'],
   [WHEEL, '_wheel'],
   [CONTEXTMENU, '_contextmenu'],
   [POINTERDOWN, '_pointerdown'],
   [POINTERMOVE, '_pointermove'],
   [POINTERUP, '_pointerup'],
   [POINTERCANCEL, '_pointercancel'],
   [LOSTPOINTERCAPTURE, '_lostpointercapture'],
   ];
