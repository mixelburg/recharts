import{r as n,e as t}from"./iframe-AGR5TxU0.js";import{L as p}from"./LineChart-sNkvUPJD.js";import{R as s}from"./arrayEqualityCheck-DXbaXUkD.js";import{C as c}from"./CartesianGrid-CZeZQy6o.js";import{X as l}from"./XAxis-DyEoY_rp.js";import{Y as d}from"./YAxis-CCWTH5eH.js";import{L as y}from"./Legend-BHwGN7vl.js";import{L as h}from"./Line-D9l0oGpJ.js";import{T as u}from"./Tooltip-BinaWxIU.js";import{R as g}from"./RechartsHookInspector-0vPFuGEJ.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Cj1HZNIW.js";import"./index-B9qusgqE.js";import"./immer-BHj4UNVn.js";import"./hooks-Cge6K3ns.js";import"./axisSelectors-DyW_TqYx.js";import"./d3-scale-DsQJB1Qg.js";import"./zIndexSlice-BFFmdDFB.js";import"./renderedTicksSlice-DzobF8IS.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-23oy7eSY.js";import"./chartDataContext-BbKJCGLd.js";import"./CategoricalChart-NSSgYZkF.js";import"./resolveDefaultProps-uLplvdLD.js";import"./CartesianAxis-BHrGOONJ.js";import"./Layer-B0VPkrDQ.js";import"./Text-9psbzd7-.js";import"./DOMUtils-DLbpgKpN.js";import"./Label-Cigbj9aN.js";import"./ZIndexLayer-Dgj1fYLz.js";import"./types-CbRI_H5G.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-Bh4ii99Y.js";import"./symbol-BZfyJPgn.js";import"./step-BDyxNMox.js";import"./useElementOffset-D1v8rABq.js";import"./uniqBy-DSh5CcnV.js";import"./iteratee-B87uG-Cw.js";import"./ReactUtils-B5dUa4Qx.js";import"./ActivePoints-M0eT04Wn.js";import"./Dot-BNf62DSz.js";import"./RegisterGraphicalItemId-CZbBFDNM.js";import"./ErrorBarContext-83Ac_xpa.js";import"./GraphicalItemClipPath-CHswbtIv.js";import"./SetGraphicalItem-9SROL2qf.js";import"./useAnimationId-CbPcpD_i.js";import"./getRadiusAndStrokeWidthFromDot-CUY9WYWj.js";import"./ActiveShapeUtils-eCPCShIj.js";import"./isPlainObject-DfJ84HJ6.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-ChBK7K9j.js";import"./Trapezoid-D-6sRKMO.js";import"./Sector-7ZL1zRfF.js";import"./Curve-TeeQM7x8.js";import"./Cross-DmTuxoE-.js";import"./index-CUGa9k2l.js";import"./ChartSizeDimensions-DEWICgA9.js";import"./OffsetShower-EvZHriA8.js";import"./PlotAreaShower-BZJw8HCo.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => {
    const [dataKey, setDataKey] = useState('pv');
    return <>
        <button type="button" onClick={() => {
        if (dataKey === 'pv') {
          setDataKey('uv');
        } else {
          setDataKey('pv');
        }
      }}>
          Change Data Key
        </button>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart width={500} height={400} data={pageData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Legend />
            <Line type="monotone" dataKey={dataKey} stroke="#8884d8" activeDot={{
            r: 8
          }} />
            <Tooltip />
            <RechartsHookInspector />
          </LineChart>
        </ResponsiveContainer>
      </>;
  }
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const xt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,xt as __namedExportsOrder,wt as default};
