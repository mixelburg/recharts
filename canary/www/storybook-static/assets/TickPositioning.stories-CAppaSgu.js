import{e as t}from"./iframe-BRN0Xqwd.js";import{R as n}from"./arrayEqualityCheck-PQCZjaXf.js";import{L as s}from"./LineChart-o_XNa6MY.js";import{L as c}from"./Line-DyFRwhK8.js";import{X as d}from"./XAxis-BntCFdes.js";import{R as l}from"./RechartsHookInspector-BBnr7ZoZ.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Dxh1hNHq.js";import"./immer-CxtJztVX.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-aU_Krnwt.js";import"./index-C5dO4qdv.js";import"./hooks-BeOfZUt4.js";import"./axisSelectors-BqDJdDty.js";import"./d3-scale-BZ12WjrG.js";import"./zIndexSlice-CqqdYm3L.js";import"./renderedTicksSlice-Cvrsz3B1.js";import"./CartesianChart-Cb9YxuiX.js";import"./chartDataContext-iQW8jKDq.js";import"./CategoricalChart--nQ92y27.js";import"./Layer-DoajtBmi.js";import"./ReactUtils-DgY3nRu6.js";import"./Label-B4Fq6gST.js";import"./Text-CI9biWLL.js";import"./DOMUtils-DWosTiV6.js";import"./ZIndexLayer-BI9NJ7Jy.js";import"./ActivePoints-VkKrJN6m.js";import"./Dot-6bZijGDG.js";import"./types-D0avEOwH.js";import"./RegisterGraphicalItemId-DVJRwCfJ.js";import"./ErrorBarContext-Cxz-W8kL.js";import"./GraphicalItemClipPath-CERVBs_u.js";import"./SetGraphicalItem-D1mMJzUg.js";import"./useAnimationId-CY2UicEm.js";import"./getRadiusAndStrokeWidthFromDot-DlgddgVq.js";import"./ActiveShapeUtils-DtOVL48a.js";import"./isPlainObject-B3W4jpDO.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Cf_h6Isr.js";import"./Trapezoid-kjMTXMSJ.js";import"./Sector-BZO38sl8.js";import"./Symbols-ds5v4Z5q.js";import"./symbol-D5-0E7vu.js";import"./step-CUDnEFyV.js";import"./Curve-DsptHhzd.js";import"./CartesianAxis-xIQJ1nA8.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-D9bWI74r.js";import"./ChartSizeDimensions-yPBI0H6p.js";import"./OffsetShower-BLrACUfM.js";import"./PlotAreaShower-6pHSiOKB.js";const vt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),p.map((e,m)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:m,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
