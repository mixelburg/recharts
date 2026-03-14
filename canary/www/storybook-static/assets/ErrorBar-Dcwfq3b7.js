import{j as r}from"./jsx-runtime-Dk-2UV7Q.js";import{useMDXComponents as n}from"./index-RFj_BmsU.js";import{M as p,C as s,a}from"./blocks-BRHbgMjJ.js";import{C as m,A as i}from"./ErrorBar.stories-Z6PEUJcM.js";import"./iframe-W8kdQUhq.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Dy74nUQy.js";import"./utils-ePvtT4un.js";import"./ErrorBar-CXn6svjZ.js";import"./Layer-BGLld0kx.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BfhjRFbx.js";import"./ErrorBarContext-wcnCUtJ2.js";import"./RechartsWrapper-aJygMkEW.js";import"./arrayEqualityCheck-Btlzc28s.js";import"./immer-BuqdlIG8.js";import"./PolarUtils-CTnnDHZv.js";import"./index-BTauWXs3.js";import"./hooks-BOlckttq.js";import"./axisSelectors-CjbQAShD.js";import"./d3-scale-DFiqgWB0.js";import"./zIndexSlice-CEcVefRm.js";import"./renderedTicksSlice-D4Vaz-5m.js";import"./RegisterGraphicalItemId-DYJlqJ-V.js";import"./CSSTransitionAnimate-D6khWgcj.js";import"./useAnimationId-DDqHn4U8.js";import"./ZIndexLayer-DmLY6Hgs.js";import"./ScatterChart-Ci42Zv4L.js";import"./CartesianChart-COqW0iGg.js";import"./chartDataContext-tlXdsyIN.js";import"./CategoricalChart-C7pFQRDk.js";import"./CartesianGrid-Csbjuo5E.js";import"./CartesianAxis-Cxm0oSHN.js";import"./Text-D2LR9c5V.js";import"./DOMUtils-Dh_SvmYZ.js";import"./Label-D6R0QCHt.js";import"./types-DJkVebVp.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-DWhw38Xj.js";import"./YAxis-BQfmZ2qg.js";import"./Scatter-DJEg_Cpl.js";import"./ReactUtils-B9N20sI-.js";import"./Curve-CJww8Zko.js";import"./step-CgXf5jOy.js";import"./tooltipContext-PyIHUNqc.js";import"./Symbols-BcW_py_g.js";import"./symbol-BB4kRCI5.js";import"./ActiveShapeUtils-BniM7mY0.js";import"./isPlainObject-KOLy9Ybo.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BpEBvmca.js";import"./Trapezoid-DDEhCSmf.js";import"./Sector-UEOWO1pj.js";import"./GraphicalItemClipPath-CuEVBaGx.js";import"./SetGraphicalItem-CW5rBtzq.js";import"./RechartsHookInspector-BcT8fmlt.js";import"./ChartSizeDimensions-UqjrZXGi.js";import"./OffsetShower-CBIXBt2P.js";import"./PlotAreaShower-DVNMsPgk.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
`,r.jsx(p,{of:m}),`
`,r.jsx(s,{of:i,layout:"padded"}),`
`,r.jsx(e.h2,{id:"description",children:"Description"}),`
`,r.jsx("p",{children:"ErrorBar renders whiskers to represent error margins on a chart."}),`
`,r.jsx("p",{children:"It must be a child of a graphical element."}),`
`,r.jsx("p",{children:"ErrorBar expects data in one of the following forms:"}),`
`,r.jsxs("ul",{children:[r.jsx("li",{children:"Symmetric error bars: a single error value representing both lower and upper bounds."}),r.jsx("li",{children:r.jsx(e.p,{children:`Asymmetric error bars: an array of two values representing lower and upper bounds separately. First value is the
lower bound, second value is the upper bound.`})})]}),`
`,r.jsx("p",{children:r.jsx(e.p,{children:`The values provided are relative to the main data value. For example, if the main data value is 10 and the error value
is 2, the error bar will extend from 8 to 12 for symmetric error bars.`})}),`
`,r.jsx("p",{children:"In other words, what ErrorBar will render is:"}),`
`,r.jsxs("ul",{children:[r.jsx("li",{children:"For symmetric error bars: [value - errorVal, value + errorVal]"}),r.jsx("li",{children:"For asymmetric error bars: [value - errorVal[0], value + errorVal[1]]"})]}),`
`,r.jsx("p",{children:r.jsx(e.p,{children:`In stacked or ranged Bar charts, ErrorBar will use the higher data value as the reference point for calculating the
error bar positions.`})}),`
`,r.jsx(e.h2,{id:"parent-component",children:"Parent Component"}),`
`,r.jsx(e.p,{children:"The ErrorBar can be used within the following parent components:"}),`
`,r.jsxs(e.ul,{children:[`
`,r.jsx(e.li,{children:r.jsx(e.code,{children:"<Bar/>"})}),`
`,r.jsx(e.li,{children:r.jsx(e.code,{children:"<Line/>"})}),`
`,r.jsx(e.li,{children:r.jsx(e.code,{children:"<Scatter/>"})}),`
`]}),`
`,r.jsx(e.h2,{id:"props",children:"Props"}),`
`,r.jsx(a,{of:i})]})}function ur(o={}){const{wrapper:e}={...n(),...o.components};return e?r.jsx(e,{...o,children:r.jsx(t,{...o})}):t(o)}export{ur as default};
