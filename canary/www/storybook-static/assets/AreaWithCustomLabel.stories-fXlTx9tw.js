import{e as t}from"./iframe-AGR5TxU0.js";import{R as c}from"./arrayEqualityCheck-DXbaXUkD.js";import{C as d}from"./ComposedChart-BtpGektJ.js";import{A as l}from"./Area-CYx6igES.js";import{R as h}from"./RechartsHookInspector-0vPFuGEJ.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-uLplvdLD.js";import"./immer-BHj4UNVn.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Cj1HZNIW.js";import"./index-B9qusgqE.js";import"./hooks-Cge6K3ns.js";import"./axisSelectors-DyW_TqYx.js";import"./d3-scale-DsQJB1Qg.js";import"./zIndexSlice-BFFmdDFB.js";import"./renderedTicksSlice-DzobF8IS.js";import"./CartesianChart-23oy7eSY.js";import"./chartDataContext-BbKJCGLd.js";import"./CategoricalChart-NSSgYZkF.js";import"./Curve-TeeQM7x8.js";import"./types-CbRI_H5G.js";import"./step-BDyxNMox.js";import"./Layer-B0VPkrDQ.js";import"./ReactUtils-B5dUa4Qx.js";import"./Label-Cigbj9aN.js";import"./Text-9psbzd7-.js";import"./DOMUtils-DLbpgKpN.js";import"./ZIndexLayer-Dgj1fYLz.js";import"./ActivePoints-M0eT04Wn.js";import"./Dot-BNf62DSz.js";import"./RegisterGraphicalItemId-CZbBFDNM.js";import"./GraphicalItemClipPath-CHswbtIv.js";import"./SetGraphicalItem-9SROL2qf.js";import"./useAnimationId-CbPcpD_i.js";import"./getRadiusAndStrokeWidthFromDot-CUY9WYWj.js";import"./graphicalItemSelectors-Bs0VmVVf.js";import"./index-CUGa9k2l.js";import"./ChartSizeDimensions-DEWICgA9.js";import"./OffsetShower-EvZHriA8.js";import"./PlotAreaShower-BZJw8HCo.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={surfaceHeight}>
        <ComposedChart width={surfaceWidth} height={surfaceHeight} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }} data={coordinateWithValueData}>
          <Area dataKey="y" isAnimationActive={false} label={renderLabel} />
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(p=(m=e.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const mt=["CustomizedLabel"];export{e as CustomizedLabel,mt as __namedExportsOrder,at as default};
