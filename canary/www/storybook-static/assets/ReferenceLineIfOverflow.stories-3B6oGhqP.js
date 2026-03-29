import{e}from"./iframe-pjTSm6Gu.js";import{R as n}from"./arrayEqualityCheck-BIm-LBLH.js";import{C as p}from"./ComposedChart-LKUG0lVv.js";import{C as s}from"./CartesianGrid-CkHL3Ra-.js";import{X as c}from"./XAxis-E9BQgWeR.js";import{Y as f}from"./YAxis-BAU9nMY5.js";import{L as l}from"./Line-uUP5ZInB.js";import{R as d}from"./ReferenceLine-C08QUBHx.js";import{R as h}from"./RechartsHookInspector-C99VLWQJ.js";import{p as w}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DJkH94Re.js";import"./immer-BfNQXDi9.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-daIHkx5F.js";import"./index-CvCpXH7V.js";import"./hooks-BMdTjQaG.js";import"./axisSelectors-DooSN-_g.js";import"./d3-scale-D8APtE-1.js";import"./zIndexSlice-CBWlPVEa.js";import"./renderedTicksSlice-Demok72q.js";import"./CartesianChart-BKlI_5Lu.js";import"./chartDataContext-UdaN3oHs.js";import"./CategoricalChart-BY3pGtBT.js";import"./CartesianAxis-B2Z0cNlA.js";import"./Layer-Dc3nhPvy.js";import"./Text-DN-rDKDu.js";import"./DOMUtils-CGLlw-t9.js";import"./Label-N3ot4Fxt.js";import"./ZIndexLayer-DbRz8jbw.js";import"./types-H7K5pC4j.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-BM6WY9tS.js";import"./ActivePoints-Cp7rrx91.js";import"./Dot-aqFZfasy.js";import"./RegisterGraphicalItemId-YnTOfa_s.js";import"./ErrorBarContext-CWoz6emG.js";import"./GraphicalItemClipPath-bR1nwwbO.js";import"./SetGraphicalItem-CC4VXpvp.js";import"./useAnimationId-DZLqS2Nr.js";import"./getRadiusAndStrokeWidthFromDot-bapbYaX1.js";import"./ActiveShapeUtils-D6fWXsJx.js";import"./isPlainObject-yx4T2eEm.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D3OQWeie.js";import"./Trapezoid-B-YZyVE4.js";import"./Sector-DTKpDxjY.js";import"./Symbols-BDX2Rl7R.js";import"./symbol-DEYM9QIf.js";import"./step-CcjweQK7.js";import"./Curve-YWMWk-Bf.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-t0raO00t.js";import"./ChartSizeDimensions-1alHUmPx.js";import"./OffsetShower-BocmhH_q.js";import"./PlotAreaShower-DdcMWwBC.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:m})=>{const{findByText:a}=y(m);v(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={500}>
        <ComposedChart data={pageData} margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis type="number" />
          <Line dataKey="uv" />
          <ReferenceLine ifOverflow="extendDomain" y={1700} />
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    const {
      findByText
    } = within(canvasElement);
    /**
     * assert that when ifOverflow="extendDomain" 1800 becomes the new domain y-max.
     * this test will fail when the user changes the ifOverflow arg, but it will give us confidence
     * that 'extendDomain' behavior remains the same.
     */
    expect(await findByText('1800')).toBeInTheDocument();
  }
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const Ce=["IfOverflow"];export{t as IfOverflow,Ce as __namedExportsOrder,Re as default};
