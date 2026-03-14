import{e as t}from"./iframe-W8kdQUhq.js";import{R as n}from"./arrayEqualityCheck-Btlzc28s.js";import{L as s}from"./LineChart-BIuXKM9a.js";import{L as c}from"./Line-DW9zQf-_.js";import{X as d}from"./XAxis-DWhw38Xj.js";import{R as l}from"./RechartsHookInspector-BcT8fmlt.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BfhjRFbx.js";import"./immer-BuqdlIG8.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-aJygMkEW.js";import"./index-BTauWXs3.js";import"./hooks-BOlckttq.js";import"./axisSelectors-CjbQAShD.js";import"./d3-scale-DFiqgWB0.js";import"./zIndexSlice-CEcVefRm.js";import"./renderedTicksSlice-D4Vaz-5m.js";import"./CartesianChart-COqW0iGg.js";import"./chartDataContext-tlXdsyIN.js";import"./CategoricalChart-C7pFQRDk.js";import"./Layer-BGLld0kx.js";import"./ReactUtils-B9N20sI-.js";import"./Label-D6R0QCHt.js";import"./Text-D2LR9c5V.js";import"./DOMUtils-Dh_SvmYZ.js";import"./ZIndexLayer-DmLY6Hgs.js";import"./ActivePoints-BZE3jhfM.js";import"./Dot-CnMt43sC.js";import"./types-DJkVebVp.js";import"./RegisterGraphicalItemId-DYJlqJ-V.js";import"./ErrorBarContext-wcnCUtJ2.js";import"./GraphicalItemClipPath-CuEVBaGx.js";import"./SetGraphicalItem-CW5rBtzq.js";import"./useAnimationId-DDqHn4U8.js";import"./getRadiusAndStrokeWidthFromDot-CVOMDH5P.js";import"./ActiveShapeUtils-BniM7mY0.js";import"./isPlainObject-KOLy9Ybo.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BpEBvmca.js";import"./Trapezoid-DDEhCSmf.js";import"./Sector-UEOWO1pj.js";import"./Symbols-BcW_py_g.js";import"./symbol-BB4kRCI5.js";import"./step-CgXf5jOy.js";import"./Curve-CJww8Zko.js";import"./CartesianAxis-Cxm0oSHN.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-Dy74nUQy.js";import"./ChartSizeDimensions-UqjrZXGi.js";import"./OffsetShower-CBIXBt2P.js";import"./PlotAreaShower-DVNMsPgk.js";const vt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),p.map((e,m)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:m,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => {
    const intervalOptions = ['preserveStart', 'preserveEnd', 'preserveStartEnd', 'equidistantPreserveStart', 0] as const;
    return <ResponsiveContainer>
        <LineChart data={ticks}
      // Margins are necessary to show ticks that extend beyond the chart (i.e. last and first tick).
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 20
      }}>
          <Line dataKey="coordinate" />
          {intervalOptions.map((intervalOption, index) => <XAxis dataKey="value" key={intervalOption} interval={intervalOption} xAxisId={index} label={intervalOption} height={70} />)}
          <RechartsHookInspector />
        </LineChart>
      </ResponsiveContainer>;
  }
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const ht=["TickPositioning"];export{r as TickPositioning,ht as __namedExportsOrder,vt as default};
