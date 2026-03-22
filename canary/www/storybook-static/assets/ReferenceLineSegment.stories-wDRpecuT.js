import{e}from"./iframe-jkkQK6We.js";import{R as i}from"./arrayEqualityCheck-Bvs8FsI4.js";import{C as p}from"./ComposedChart-Cv7q1RUe.js";import{C as a}from"./CartesianGrid-Ceeu1ozr.js";import{X as n}from"./XAxis-CzZWNeyq.js";import{Y as s}from"./YAxis-ssZrXswl.js";import{L as c}from"./Line-COjh4psN.js";import{R as d}from"./ReferenceLine-Ba2il5zp.js";import{R as g}from"./RechartsHookInspector-iJCm50Wt.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-_zNKGVvg.js";import"./immer-CJ1Fch_4.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BJ_Du7ho.js";import"./index-DnaVcvrH.js";import"./hooks-CvLPLntJ.js";import"./axisSelectors-DI3qgfte.js";import"./d3-scale-HJxPHkkh.js";import"./zIndexSlice-fk9SZqYs.js";import"./renderedTicksSlice-DCJJaB60.js";import"./CartesianChart-DflspcII.js";import"./chartDataContext-d2Z-tzBJ.js";import"./CategoricalChart-B9C7CQtd.js";import"./CartesianAxis-su0-1hMc.js";import"./Layer-raZtNeJN.js";import"./Text-tw9BKFsW.js";import"./DOMUtils-CsCcfqfj.js";import"./Label-_t6Cr2BB.js";import"./ZIndexLayer-RK29P1oU.js";import"./types-DFiGf3Z4.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-CQxyA-eH.js";import"./ActivePoints-Dd58MT2f.js";import"./Dot-BBSF_9dl.js";import"./RegisterGraphicalItemId-Dovr5f5m.js";import"./ErrorBarContext-BOhuZoUu.js";import"./GraphicalItemClipPath-s_4GiD_T.js";import"./SetGraphicalItem-R1SU2oz2.js";import"./useAnimationId-C9ABkjLp.js";import"./getRadiusAndStrokeWidthFromDot-BuA2lUdW.js";import"./ActiveShapeUtils-Dri1JSkm.js";import"./isPlainObject-BdJgLMK1.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Kck4mu5-.js";import"./Trapezoid-Bb5_conj.js";import"./Sector-hloifeOc.js";import"./Symbols-B6Kx4hyx.js";import"./symbol-DvGDQuE1.js";import"./step-Ds31XTNS.js";import"./Curve-QIhRJxzz.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-BvsAt0Kf.js";import"./ChartSizeDimensions-3hb_fV0k.js";import"./OffsetShower-CmE03fMG.js";import"./PlotAreaShower-ByQBCuyh.js";const Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(p,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(a,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
          <ReferenceLine segment={[{
          x: 'Page A',
          y: 0
        }, {
          x: 'Page E',
          y: 1500
        }]} />
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const ye=["Segment"];export{t as Segment,ye as __namedExportsOrder,Re as default};
