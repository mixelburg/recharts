import{e as t}from"./iframe-pjTSm6Gu.js";import{R as n}from"./arrayEqualityCheck-BIm-LBLH.js";import{L as s}from"./LineChart-BaXaq15V.js";import{L as c}from"./Line-uUP5ZInB.js";import{X as d}from"./XAxis-E9BQgWeR.js";import{R as l}from"./RechartsHookInspector-C99VLWQJ.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DJkH94Re.js";import"./immer-BfNQXDi9.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-daIHkx5F.js";import"./index-CvCpXH7V.js";import"./hooks-BMdTjQaG.js";import"./axisSelectors-DooSN-_g.js";import"./d3-scale-D8APtE-1.js";import"./zIndexSlice-CBWlPVEa.js";import"./renderedTicksSlice-Demok72q.js";import"./CartesianChart-BKlI_5Lu.js";import"./chartDataContext-UdaN3oHs.js";import"./CategoricalChart-BY3pGtBT.js";import"./Layer-Dc3nhPvy.js";import"./ReactUtils-BM6WY9tS.js";import"./Label-N3ot4Fxt.js";import"./Text-DN-rDKDu.js";import"./DOMUtils-CGLlw-t9.js";import"./ZIndexLayer-DbRz8jbw.js";import"./ActivePoints-Cp7rrx91.js";import"./Dot-aqFZfasy.js";import"./types-H7K5pC4j.js";import"./RegisterGraphicalItemId-YnTOfa_s.js";import"./ErrorBarContext-CWoz6emG.js";import"./GraphicalItemClipPath-bR1nwwbO.js";import"./SetGraphicalItem-CC4VXpvp.js";import"./useAnimationId-DZLqS2Nr.js";import"./getRadiusAndStrokeWidthFromDot-bapbYaX1.js";import"./ActiveShapeUtils-D6fWXsJx.js";import"./isPlainObject-yx4T2eEm.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D3OQWeie.js";import"./Trapezoid-B-YZyVE4.js";import"./Sector-DTKpDxjY.js";import"./Symbols-BDX2Rl7R.js";import"./symbol-DEYM9QIf.js";import"./step-CcjweQK7.js";import"./Curve-YWMWk-Bf.js";import"./CartesianAxis-B2Z0cNlA.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-t0raO00t.js";import"./ChartSizeDimensions-1alHUmPx.js";import"./OffsetShower-BocmhH_q.js";import"./PlotAreaShower-DdcMWwBC.js";const vt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const p=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(n,null,t.createElement(s,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),p.map((e,m)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:m,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
