import{e as t}from"./iframe-jkkQK6We.js";import{P as a}from"./PlotAreaShower-ByQBCuyh.js";import{c as p}from"./hooks-CvLPLntJ.js";import{R as s}from"./arrayEqualityCheck-Bvs8FsI4.js";import{C as n}from"./ComposedChart-Cv7q1RUe.js";import{L as l}from"./Line-COjh4psN.js";import{X as d}from"./XAxis-CzZWNeyq.js";import{Y as h}from"./YAxis-ssZrXswl.js";import{L as c}from"./Legend-DLggb_wf.js";import{p as g}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./ChartSizeDimensions-3hb_fV0k.js";import"./immer-CJ1Fch_4.js";import"./axisSelectors-DI3qgfte.js";import"./d3-scale-HJxPHkkh.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-_zNKGVvg.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BJ_Du7ho.js";import"./index-DnaVcvrH.js";import"./zIndexSlice-fk9SZqYs.js";import"./renderedTicksSlice-DCJJaB60.js";import"./CartesianChart-DflspcII.js";import"./chartDataContext-d2Z-tzBJ.js";import"./CategoricalChart-B9C7CQtd.js";import"./Layer-raZtNeJN.js";import"./ReactUtils-CQxyA-eH.js";import"./Label-_t6Cr2BB.js";import"./Text-tw9BKFsW.js";import"./DOMUtils-CsCcfqfj.js";import"./ZIndexLayer-RK29P1oU.js";import"./ActivePoints-Dd58MT2f.js";import"./Dot-BBSF_9dl.js";import"./types-DFiGf3Z4.js";import"./RegisterGraphicalItemId-Dovr5f5m.js";import"./ErrorBarContext-BOhuZoUu.js";import"./GraphicalItemClipPath-s_4GiD_T.js";import"./SetGraphicalItem-R1SU2oz2.js";import"./useAnimationId-C9ABkjLp.js";import"./getRadiusAndStrokeWidthFromDot-BuA2lUdW.js";import"./ActiveShapeUtils-Dri1JSkm.js";import"./isPlainObject-BdJgLMK1.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Kck4mu5-.js";import"./Trapezoid-Bb5_conj.js";import"./Sector-hloifeOc.js";import"./Symbols-B6Kx4hyx.js";import"./symbol-DvGDQuE1.js";import"./step-Ds31XTNS.js";import"./Curve-QIhRJxzz.js";import"./CartesianAxis-su0-1hMc.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-BsE7zH__.js";import"./uniqBy-WtORV3K9.js";import"./iteratee-XCk8y4ZV.js";const At={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(s,{width:r.width,height:r.height},t.createElement(n,{data:g,margin:r.margin,style:r.style},t.createElement(l,{dataKey:"pv"}),t.createElement(d,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null),t.createElement(a,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'usePlotAreaExample',
  render: (args: Args) => {
    return <ResponsiveContainer width={args.width} height={args.height}>
        <ComposedChart data={pageData} margin={args.margin} style={args.style}>
          <Line dataKey="pv" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <PlotAreaShower />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  args: {
    width: '100%',
    height: 400,
    margin: {
      top: 30,
      right: 170,
      bottom: 30,
      left: 120
    },
    style: {
      border: '1px solid #ccc'
    }
  }
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const ft=["UsePlotArea"];export{e as UsePlotArea,ft as __namedExportsOrder,At as default};
