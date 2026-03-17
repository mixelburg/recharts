import{e}from"./iframe-BRN0Xqwd.js";import{R as n}from"./arrayEqualityCheck-PQCZjaXf.js";import{C as p}from"./ComposedChart-BM-rE1ZA.js";import{C as s}from"./CartesianGrid-COkPNHPA.js";import{X as c}from"./XAxis-BntCFdes.js";import{Y as f}from"./YAxis-DKVh4d_L.js";import{L as l}from"./Line-DyFRwhK8.js";import{R as d}from"./ReferenceLine-Cual51_M.js";import{R as h}from"./RechartsHookInspector-BBnr7ZoZ.js";import{p as w}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Dxh1hNHq.js";import"./immer-CxtJztVX.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-aU_Krnwt.js";import"./index-C5dO4qdv.js";import"./hooks-BeOfZUt4.js";import"./axisSelectors-BqDJdDty.js";import"./d3-scale-BZ12WjrG.js";import"./zIndexSlice-CqqdYm3L.js";import"./renderedTicksSlice-Cvrsz3B1.js";import"./CartesianChart-Cb9YxuiX.js";import"./chartDataContext-iQW8jKDq.js";import"./CategoricalChart--nQ92y27.js";import"./CartesianAxis-xIQJ1nA8.js";import"./Layer-DoajtBmi.js";import"./Text-CI9biWLL.js";import"./DOMUtils-DWosTiV6.js";import"./Label-B4Fq6gST.js";import"./ZIndexLayer-BI9NJ7Jy.js";import"./types-D0avEOwH.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-DgY3nRu6.js";import"./ActivePoints-VkKrJN6m.js";import"./Dot-6bZijGDG.js";import"./RegisterGraphicalItemId-DVJRwCfJ.js";import"./ErrorBarContext-Cxz-W8kL.js";import"./GraphicalItemClipPath-CERVBs_u.js";import"./SetGraphicalItem-D1mMJzUg.js";import"./useAnimationId-CY2UicEm.js";import"./getRadiusAndStrokeWidthFromDot-DlgddgVq.js";import"./ActiveShapeUtils-DtOVL48a.js";import"./isPlainObject-B3W4jpDO.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Cf_h6Isr.js";import"./Trapezoid-kjMTXMSJ.js";import"./Sector-BZO38sl8.js";import"./Symbols-ds5v4Z5q.js";import"./symbol-D5-0E7vu.js";import"./step-CUDnEFyV.js";import"./Curve-DsptHhzd.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-D9bWI74r.js";import"./ChartSizeDimensions-yPBI0H6p.js";import"./OffsetShower-BLrACUfM.js";import"./PlotAreaShower-6pHSiOKB.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:m})=>{const{findByText:a}=y(m);v(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
