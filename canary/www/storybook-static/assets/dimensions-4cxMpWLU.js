import{j as e}from"./jsx-runtime-BK6UNbbc.js";import{useMDXComponents as n}from"./index-BnuZMTcX.js";import{M as o,C as h}from"./blocks-CUgE-Bbm.js";import{C as d,W as s}from"./dimensions.stories-GHNGXSj-.js";import"./iframe-AGR5TxU0.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CUGa9k2l.js";import"./ChartSizeDimensions-DEWICgA9.js";import"./arrayEqualityCheck-DXbaXUkD.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-uLplvdLD.js";import"./immer-BHj4UNVn.js";import"./PolarUtils-CTnnDHZv.js";import"./ComposedChart-BtpGektJ.js";import"./RechartsWrapper-Cj1HZNIW.js";import"./index-B9qusgqE.js";import"./hooks-Cge6K3ns.js";import"./axisSelectors-DyW_TqYx.js";import"./d3-scale-DsQJB1Qg.js";import"./zIndexSlice-BFFmdDFB.js";import"./renderedTicksSlice-DzobF8IS.js";import"./CartesianChart-23oy7eSY.js";import"./chartDataContext-BbKJCGLd.js";import"./CategoricalChart-NSSgYZkF.js";import"./Line-D9l0oGpJ.js";import"./Layer-B0VPkrDQ.js";import"./ReactUtils-B5dUa4Qx.js";import"./Label-Cigbj9aN.js";import"./Text-9psbzd7-.js";import"./DOMUtils-DLbpgKpN.js";import"./ZIndexLayer-Dgj1fYLz.js";import"./ActivePoints-M0eT04Wn.js";import"./Dot-BNf62DSz.js";import"./types-CbRI_H5G.js";import"./RegisterGraphicalItemId-CZbBFDNM.js";import"./ErrorBarContext-83Ac_xpa.js";import"./GraphicalItemClipPath-CHswbtIv.js";import"./SetGraphicalItem-9SROL2qf.js";import"./useAnimationId-CbPcpD_i.js";import"./getRadiusAndStrokeWidthFromDot-CUY9WYWj.js";import"./ActiveShapeUtils-eCPCShIj.js";import"./isPlainObject-DfJ84HJ6.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-ChBK7K9j.js";import"./Trapezoid-D-6sRKMO.js";import"./Sector-7ZL1zRfF.js";import"./Symbols-Bh4ii99Y.js";import"./symbol-BZfyJPgn.js";import"./step-BDyxNMox.js";import"./Curve-TeeQM7x8.js";import"./XAxis-DyEoY_rp.js";import"./CartesianAxis-BHrGOONJ.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./YAxis-CCWTH5eH.js";import"./Legend-BHwGN7vl.js";import"./useElementOffset-D1v8rABq.js";import"./uniqBy-DSh5CcnV.js";import"./iteratee-B87uG-Cw.js";import"./Page-Cj8EiXz7.js";function t(r){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
`,e.jsxs(i.h1,{id:"usechartwidth-usechartheight",children:[e.jsx(i.code,{children:"useChartWidth"}),", ",e.jsx(i.code,{children:"useChartHeight"})]}),`
`,e.jsxs(i.p,{children:["The ",e.jsx(i.code,{children:"useChartWidth"})," hook returns the width of the chart in pixels. ",e.jsx(i.code,{children:"useChartHeight"})," returns the height of the chart in pixels."]}),`
`,e.jsxs(i.p,{children:["If you are using chart with hardcoded ",e.jsx(i.code,{children:"width"})," and ",e.jsx(i.code,{children:"height"}),` props, then the width returned will be the same
as the `,e.jsx(i.code,{children:"width"})," and ",e.jsx(i.code,{children:"height"})," prop on the main chart element."]}),`
`,e.jsxs(i.p,{children:["If you are using a chart with a ",e.jsx(i.code,{children:"ResponsiveContainer"}),`, the width and height will be the size of the chart
as the ResponsiveContainer has decided it would be.`]}),`
`,e.jsxs(i.p,{children:["If the chart has any axes or legend, the ",e.jsx(i.code,{children:"width"})," and ",e.jsx(i.code,{children:"height"}),` will be the size of the chart
including the axes and legend.`]}),`
`,e.jsx(i.p,{children:`The dimensions do not scale, meaning as user zoom in and out, the width/height number will not change
as the chart gets visually larger or smaller.`}),`
`,e.jsx(h,{of:s,layout:"padded"}),`
`,e.jsx(i.h2,{id:"parent-component",children:"Parent Component"}),`
`,e.jsx(i.p,{children:"The hooks can be used within any chart:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"<AreaChart/>"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"<BarChart/>"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"<ComposedChart/>"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"<FunnelChart/>"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"<LineChart/>"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"<PieChart/>"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"<RadarChart/>"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"<RadialBarChart/>"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"<Sankey/>"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"<ScatterChart/>"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"<SunburstChart/>"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"<Treemap/>"})}),`
`]})]})}function xe(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(t,{...r})}):t(r)}export{xe as default};
