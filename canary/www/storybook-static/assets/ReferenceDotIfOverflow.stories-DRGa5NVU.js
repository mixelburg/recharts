import{e}from"./iframe-jkkQK6We.js";import{R as n}from"./arrayEqualityCheck-Bvs8FsI4.js";import{C as s}from"./ComposedChart-Cv7q1RUe.js";import{C as p}from"./CartesianGrid-Ceeu1ozr.js";import{X as c}from"./XAxis-CzZWNeyq.js";import{Y as f}from"./YAxis-ssZrXswl.js";import{R as l}from"./ReferenceDot-CrzvyOpG.js";import{R as h}from"./RechartsHookInspector-iJCm50Wt.js";import{p as d}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-_zNKGVvg.js";import"./immer-CJ1Fch_4.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BJ_Du7ho.js";import"./index-DnaVcvrH.js";import"./hooks-CvLPLntJ.js";import"./axisSelectors-DI3qgfte.js";import"./d3-scale-HJxPHkkh.js";import"./zIndexSlice-fk9SZqYs.js";import"./renderedTicksSlice-DCJJaB60.js";import"./CartesianChart-DflspcII.js";import"./chartDataContext-d2Z-tzBJ.js";import"./CategoricalChart-B9C7CQtd.js";import"./CartesianAxis-su0-1hMc.js";import"./Layer-raZtNeJN.js";import"./Text-tw9BKFsW.js";import"./DOMUtils-CsCcfqfj.js";import"./Label-_t6Cr2BB.js";import"./ZIndexLayer-RK29P1oU.js";import"./types-DFiGf3Z4.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Dot-BBSF_9dl.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-BvsAt0Kf.js";import"./ChartSizeDimensions-3hb_fV0k.js";import"./OffsetShower-CmE03fMG.js";import"./PlotAreaShower-ByQBCuyh.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:d,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(h,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
          <ReferenceDot ifOverflow="extendDomain" x="Page E" y={1700} r={100} />
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
     * assert that when ifOverflow="extendDomain" 1900 becomes the new domain y-max.
     * this test will fail when the user changes the ifOverflow arg, but it will give us confidence
     * that 'extendDomain' behavior remains the same.
     */
    expect(await findByText('1800')).toBeInTheDocument();
  }
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const re=["IfOverflow"];export{t as IfOverflow,re as __namedExportsOrder,te as default};
