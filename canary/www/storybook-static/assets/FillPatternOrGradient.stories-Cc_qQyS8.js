import{e as t}from"./iframe-AGR5TxU0.js";import{R as s}from"./arrayEqualityCheck-DXbaXUkD.js";import{C as m}from"./ComposedChart-BtpGektJ.js";import{B as e}from"./Bar-B7woRuSs.js";import{R as l}from"./RechartsHookInspector-0vPFuGEJ.js";import{p as c}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-uLplvdLD.js";import"./immer-BHj4UNVn.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Cj1HZNIW.js";import"./index-B9qusgqE.js";import"./hooks-Cge6K3ns.js";import"./axisSelectors-DyW_TqYx.js";import"./d3-scale-DsQJB1Qg.js";import"./zIndexSlice-BFFmdDFB.js";import"./renderedTicksSlice-DzobF8IS.js";import"./CartesianChart-23oy7eSY.js";import"./chartDataContext-BbKJCGLd.js";import"./CategoricalChart-NSSgYZkF.js";import"./Layer-B0VPkrDQ.js";import"./tooltipContext-C5tQ5FOf.js";import"./ReactUtils-B5dUa4Qx.js";import"./Label-Cigbj9aN.js";import"./Text-9psbzd7-.js";import"./DOMUtils-DLbpgKpN.js";import"./ZIndexLayer-Dgj1fYLz.js";import"./types-CbRI_H5G.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-eCPCShIj.js";import"./isPlainObject-DfJ84HJ6.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-ChBK7K9j.js";import"./useAnimationId-CbPcpD_i.js";import"./Trapezoid-D-6sRKMO.js";import"./Sector-7ZL1zRfF.js";import"./Symbols-Bh4ii99Y.js";import"./symbol-BZfyJPgn.js";import"./step-BDyxNMox.js";import"./Curve-TeeQM7x8.js";import"./RegisterGraphicalItemId-CZbBFDNM.js";import"./ErrorBarContext-83Ac_xpa.js";import"./GraphicalItemClipPath-CHswbtIv.js";import"./SetGraphicalItem-9SROL2qf.js";import"./getZIndexFromUnknown-CIM2wcTE.js";import"./graphicalItemSelectors-Bs0VmVVf.js";import"./index-CUGa9k2l.js";import"./ChartSizeDimensions-DEWICgA9.js";import"./OffsetShower-EvZHriA8.js";import"./PlotAreaShower-BZJw8HCo.js";const mt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},r={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:c},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(e,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(e,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(e,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"}),t.createElement(l,null)))}};var o,a,p;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => {
    const [surfaceWidth, surfaceHeight] = [600, 300];
    return <ResponsiveContainer width="100%" height={surfaceHeight}>
        <ComposedChart width={surfaceWidth} height={surfaceHeight} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }} data={pageData}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <pattern id="star" width="10" height="10" patternUnits="userSpaceOnUse">
              <polygon points="0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2" />
            </pattern>
            <pattern id="stripe" width="4" height="4" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <rect width="2" height="4" fill="red" />
            </pattern>
          </defs>
          <Bar dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
          <Bar dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#stripe)" />
          <Bar dataKey="amt" stroke="#8884d8" fillOpacity={1} fill="url(#star)" />
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(p=(a=r.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const lt=["Fill"];export{r as Fill,lt as __namedExportsOrder,mt as default};
