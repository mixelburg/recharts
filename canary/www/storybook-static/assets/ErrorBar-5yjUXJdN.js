import{j as r}from"./jsx-runtime-BK6UNbbc.js";import{useMDXComponents as n}from"./index-BnuZMTcX.js";import{M as p,C as s,a}from"./blocks-CUgE-Bbm.js";import{C as m,A as i}from"./ErrorBar.stories-CcQS0GF7.js";import"./iframe-AGR5TxU0.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CUGa9k2l.js";import"./utils-ePvtT4un.js";import"./ErrorBar-DSvkV-ER.js";import"./Layer-B0VPkrDQ.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-uLplvdLD.js";import"./ErrorBarContext-83Ac_xpa.js";import"./RechartsWrapper-Cj1HZNIW.js";import"./arrayEqualityCheck-DXbaXUkD.js";import"./immer-BHj4UNVn.js";import"./PolarUtils-CTnnDHZv.js";import"./index-B9qusgqE.js";import"./hooks-Cge6K3ns.js";import"./axisSelectors-DyW_TqYx.js";import"./d3-scale-DsQJB1Qg.js";import"./zIndexSlice-BFFmdDFB.js";import"./renderedTicksSlice-DzobF8IS.js";import"./RegisterGraphicalItemId-CZbBFDNM.js";import"./CSSTransitionAnimate-Dm_uH15T.js";import"./useAnimationId-CbPcpD_i.js";import"./ZIndexLayer-Dgj1fYLz.js";import"./ScatterChart-BJU4ncs_.js";import"./CartesianChart-23oy7eSY.js";import"./chartDataContext-BbKJCGLd.js";import"./CategoricalChart-NSSgYZkF.js";import"./CartesianGrid-CZeZQy6o.js";import"./CartesianAxis-BHrGOONJ.js";import"./Text-9psbzd7-.js";import"./DOMUtils-DLbpgKpN.js";import"./Label-Cigbj9aN.js";import"./types-CbRI_H5G.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-DyEoY_rp.js";import"./YAxis-CCWTH5eH.js";import"./Scatter-B_mrKen_.js";import"./ReactUtils-B5dUa4Qx.js";import"./Curve-TeeQM7x8.js";import"./step-BDyxNMox.js";import"./tooltipContext-C5tQ5FOf.js";import"./Symbols-Bh4ii99Y.js";import"./symbol-BZfyJPgn.js";import"./ActiveShapeUtils-eCPCShIj.js";import"./isPlainObject-DfJ84HJ6.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-ChBK7K9j.js";import"./Trapezoid-D-6sRKMO.js";import"./Sector-7ZL1zRfF.js";import"./GraphicalItemClipPath-CHswbtIv.js";import"./SetGraphicalItem-9SROL2qf.js";import"./RechartsHookInspector-0vPFuGEJ.js";import"./ChartSizeDimensions-DEWICgA9.js";import"./OffsetShower-EvZHriA8.js";import"./PlotAreaShower-BZJw8HCo.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
