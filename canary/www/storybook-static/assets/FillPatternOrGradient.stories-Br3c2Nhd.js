import{e as t}from"./iframe-W8kdQUhq.js";import{R as s}from"./arrayEqualityCheck-Btlzc28s.js";import{C as m}from"./ComposedChart-BiJ-XKcX.js";import{B as e}from"./Bar-yhOJNoYR.js";import{R as l}from"./RechartsHookInspector-BcT8fmlt.js";import{p as c}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BfhjRFbx.js";import"./immer-BuqdlIG8.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-aJygMkEW.js";import"./index-BTauWXs3.js";import"./hooks-BOlckttq.js";import"./axisSelectors-CjbQAShD.js";import"./d3-scale-DFiqgWB0.js";import"./zIndexSlice-CEcVefRm.js";import"./renderedTicksSlice-D4Vaz-5m.js";import"./CartesianChart-COqW0iGg.js";import"./chartDataContext-tlXdsyIN.js";import"./CategoricalChart-C7pFQRDk.js";import"./Layer-BGLld0kx.js";import"./tooltipContext-PyIHUNqc.js";import"./ReactUtils-B9N20sI-.js";import"./Label-D6R0QCHt.js";import"./Text-D2LR9c5V.js";import"./DOMUtils-Dh_SvmYZ.js";import"./ZIndexLayer-DmLY6Hgs.js";import"./types-DJkVebVp.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-BniM7mY0.js";import"./isPlainObject-KOLy9Ybo.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BpEBvmca.js";import"./useAnimationId-DDqHn4U8.js";import"./Trapezoid-DDEhCSmf.js";import"./Sector-UEOWO1pj.js";import"./Symbols-BcW_py_g.js";import"./symbol-BB4kRCI5.js";import"./step-CgXf5jOy.js";import"./Curve-CJww8Zko.js";import"./RegisterGraphicalItemId-DYJlqJ-V.js";import"./ErrorBarContext-wcnCUtJ2.js";import"./GraphicalItemClipPath-CuEVBaGx.js";import"./SetGraphicalItem-CW5rBtzq.js";import"./getZIndexFromUnknown-CZUksEmU.js";import"./graphicalItemSelectors-hVghiOpc.js";import"./index-Dy74nUQy.js";import"./ChartSizeDimensions-UqjrZXGi.js";import"./OffsetShower-CBIXBt2P.js";import"./PlotAreaShower-DVNMsPgk.js";const mt={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},r={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:c},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(e,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(e,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(e,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"}),t.createElement(l,null)))}};var o,a,p;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
