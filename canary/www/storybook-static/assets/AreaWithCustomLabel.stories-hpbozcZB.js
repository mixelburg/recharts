import{e as t}from"./iframe-W8kdQUhq.js";import{R as c}from"./arrayEqualityCheck-Btlzc28s.js";import{C as d}from"./ComposedChart-BiJ-XKcX.js";import{A as l}from"./Area-4nz5EpXK.js";import{R as h}from"./RechartsHookInspector-BcT8fmlt.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BfhjRFbx.js";import"./immer-BuqdlIG8.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-aJygMkEW.js";import"./index-BTauWXs3.js";import"./hooks-BOlckttq.js";import"./axisSelectors-CjbQAShD.js";import"./d3-scale-DFiqgWB0.js";import"./zIndexSlice-CEcVefRm.js";import"./renderedTicksSlice-D4Vaz-5m.js";import"./CartesianChart-COqW0iGg.js";import"./chartDataContext-tlXdsyIN.js";import"./CategoricalChart-C7pFQRDk.js";import"./Curve-CJww8Zko.js";import"./types-DJkVebVp.js";import"./step-CgXf5jOy.js";import"./Layer-BGLld0kx.js";import"./ReactUtils-B9N20sI-.js";import"./Label-D6R0QCHt.js";import"./Text-D2LR9c5V.js";import"./DOMUtils-Dh_SvmYZ.js";import"./ZIndexLayer-DmLY6Hgs.js";import"./ActivePoints-BZE3jhfM.js";import"./Dot-CnMt43sC.js";import"./RegisterGraphicalItemId-DYJlqJ-V.js";import"./GraphicalItemClipPath-CuEVBaGx.js";import"./SetGraphicalItem-CW5rBtzq.js";import"./useAnimationId-DDqHn4U8.js";import"./getRadiusAndStrokeWidthFromDot-CVOMDH5P.js";import"./graphicalItemSelectors-hVghiOpc.js";import"./index-Dy74nUQy.js";import"./ChartSizeDimensions-UqjrZXGi.js";import"./OffsetShower-CBIXBt2P.js";import"./PlotAreaShower-DVNMsPgk.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
