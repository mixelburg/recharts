import{e as t}from"./iframe-AGR5TxU0.js";import{R as p}from"./arrayEqualityCheck-DXbaXUkD.js";import{C as m}from"./ComposedChart-BtpGektJ.js";import{A as r}from"./Area-CYx6igES.js";import{R as s}from"./RechartsHookInspector-0vPFuGEJ.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-uLplvdLD.js";import"./immer-BHj4UNVn.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Cj1HZNIW.js";import"./index-B9qusgqE.js";import"./hooks-Cge6K3ns.js";import"./axisSelectors-DyW_TqYx.js";import"./d3-scale-DsQJB1Qg.js";import"./zIndexSlice-BFFmdDFB.js";import"./renderedTicksSlice-DzobF8IS.js";import"./CartesianChart-23oy7eSY.js";import"./chartDataContext-BbKJCGLd.js";import"./CategoricalChart-NSSgYZkF.js";import"./Curve-TeeQM7x8.js";import"./types-CbRI_H5G.js";import"./step-BDyxNMox.js";import"./Layer-B0VPkrDQ.js";import"./ReactUtils-B5dUa4Qx.js";import"./Label-Cigbj9aN.js";import"./Text-9psbzd7-.js";import"./DOMUtils-DLbpgKpN.js";import"./ZIndexLayer-Dgj1fYLz.js";import"./ActivePoints-M0eT04Wn.js";import"./Dot-BNf62DSz.js";import"./RegisterGraphicalItemId-CZbBFDNM.js";import"./GraphicalItemClipPath-CHswbtIv.js";import"./SetGraphicalItem-9SROL2qf.js";import"./useAnimationId-CbPcpD_i.js";import"./getRadiusAndStrokeWidthFromDot-CUY9WYWj.js";import"./graphicalItemSelectors-Bs0VmVVf.js";import"./index-CUGa9k2l.js";import"./ChartSizeDimensions-DEWICgA9.js";import"./OffsetShower-EvZHriA8.js";import"./PlotAreaShower-BZJw8HCo.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(s,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={surfaceHeight}>
        <ComposedChart width={surfaceWidth} height={surfaceHeight} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }} data={coordinateWithValueData}>
          <defs>
            <pattern id="left" width="12" height="4" patternUnits="userSpaceOnUse">
              <rect width="4" height="4" fill="#8884d8" />
            </pattern>
            <pattern id="right" width="8" height="4" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <rect width="4" height="4" fill="#82ca9d" />
            </pattern>
          </defs>
          <Area type="monotone" dataKey="x" stroke="#8884d8" fillOpacity={1} fill="url(#left)" />
          <Area type="monotone" dataKey="y" stroke="#82ca9d" fillOpacity={1} fill="url(#right)" />
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const et=["FillPattern"];export{e as FillPattern,et as __namedExportsOrder,tt as default};
