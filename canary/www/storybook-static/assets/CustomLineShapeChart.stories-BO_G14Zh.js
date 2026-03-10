import{e as t}from"./iframe-AGR5TxU0.js";import{R as D,i as s}from"./arrayEqualityCheck-DXbaXUkD.js";import{L as v}from"./LineChartArgs-E1uHAgXQ.js";import{g as I}from"./utils-ePvtT4un.js";import{L as A}from"./LineChart-sNkvUPJD.js";import{C as K}from"./CartesianGrid-CZeZQy6o.js";import{X as T}from"./XAxis-DyEoY_rp.js";import{Y as M}from"./YAxis-CCWTH5eH.js";import{L as $}from"./Legend-BHwGN7vl.js";import{T as O}from"./Tooltip-BinaWxIU.js";import{L as C}from"./Line-D9l0oGpJ.js";import{R as W}from"./RechartsHookInspector-0vPFuGEJ.js";import{C as X}from"./Curve-TeeQM7x8.js";import{p as Y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-uLplvdLD.js";import"./immer-BHj4UNVn.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Cj1HZNIW.js";import"./index-B9qusgqE.js";import"./hooks-Cge6K3ns.js";import"./axisSelectors-DyW_TqYx.js";import"./d3-scale-DsQJB1Qg.js";import"./zIndexSlice-BFFmdDFB.js";import"./renderedTicksSlice-DzobF8IS.js";import"./CartesianChart-23oy7eSY.js";import"./chartDataContext-BbKJCGLd.js";import"./CategoricalChart-NSSgYZkF.js";import"./CartesianAxis-BHrGOONJ.js";import"./Layer-B0VPkrDQ.js";import"./Text-9psbzd7-.js";import"./DOMUtils-DLbpgKpN.js";import"./Label-Cigbj9aN.js";import"./ZIndexLayer-Dgj1fYLz.js";import"./types-CbRI_H5G.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-Bh4ii99Y.js";import"./symbol-BZfyJPgn.js";import"./step-BDyxNMox.js";import"./useElementOffset-D1v8rABq.js";import"./uniqBy-DSh5CcnV.js";import"./iteratee-B87uG-Cw.js";import"./useAnimationId-CbPcpD_i.js";import"./Cross-DmTuxoE-.js";import"./Rectangle-ChBK7K9j.js";import"./Sector-7ZL1zRfF.js";import"./ReactUtils-B5dUa4Qx.js";import"./ActivePoints-M0eT04Wn.js";import"./Dot-BNf62DSz.js";import"./RegisterGraphicalItemId-CZbBFDNM.js";import"./ErrorBarContext-83Ac_xpa.js";import"./GraphicalItemClipPath-CHswbtIv.js";import"./SetGraphicalItem-9SROL2qf.js";import"./getRadiusAndStrokeWidthFromDot-CUY9WYWj.js";import"./ActiveShapeUtils-eCPCShIj.js";import"./isPlainObject-DfJ84HJ6.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-D-6sRKMO.js";import"./index-CUGa9k2l.js";import"./ChartSizeDimensions-DEWICgA9.js";import"./OffsetShower-EvZHriA8.js";import"./PlotAreaShower-BZJw8HCo.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let i=1,S=p.length;i<S;++i){let R=0;const r=p[i-1],a=p[i];if(s(r.x)&&s(r.y)&&s(a.x)&&s(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(e/h-1)),P=e/w;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${i}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),m=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(K,{strokeDasharray:"3 3"}),t.createElement(T,{dataKey:"name"}),t.createElement(M,null),t.createElement($,null),t.createElement(O,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(W,null))),args:{...I(v),width:500,height:300,data:Y,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height="100%">
        <LineChart {...args}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <Tooltip cursor={{
          stroke: 'gold',
          strokeWidth: 2
        }} defaultIndex={3} />
          <Line type="linear" dataKey="pv" stroke="#8884d8" activeDot={{
          r: 8
        }} shape={(payload: CurveProps) => <CustomLineShapeProps {...payload} tick={<circle r={5} fill="currentColor" />} />} />
          <Line type="linear" dataKey="uv" stroke="#82ca9d" shape={(payload: CurveProps) => <CustomLineShapeProps {...payload} tick={<rect x={-5} y={-5} width={10} height={10} fill="currentColor" />} />} />
          <RechartsHookInspector />
        </LineChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(LineChartArgs),
    width: 500,
    height: 300,
    data: pageData,
    margin: {
      top: 5,
      right: 30,
      left: 20,
      bottom: 5
    }
  }
}`,...(E=(x=n.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};const Qt=["CustomLineShapeChart"];export{n as CustomLineShapeChart,Qt as __namedExportsOrder,Jt as default};
