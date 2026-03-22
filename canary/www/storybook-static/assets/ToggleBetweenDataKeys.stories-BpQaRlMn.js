import{r as n,e as t}from"./iframe-jkkQK6We.js";import{L as p}from"./LineChart-BmI-ljOX.js";import{R as s}from"./arrayEqualityCheck-Bvs8FsI4.js";import{C as c}from"./CartesianGrid-Ceeu1ozr.js";import{X as l}from"./XAxis-CzZWNeyq.js";import{Y as d}from"./YAxis-ssZrXswl.js";import{L as y}from"./Legend-DLggb_wf.js";import{L as h}from"./Line-COjh4psN.js";import{T as u}from"./Tooltip-D9LKV3cA.js";import{R as g}from"./RechartsHookInspector-iJCm50Wt.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BJ_Du7ho.js";import"./index-DnaVcvrH.js";import"./immer-CJ1Fch_4.js";import"./hooks-CvLPLntJ.js";import"./axisSelectors-DI3qgfte.js";import"./d3-scale-HJxPHkkh.js";import"./zIndexSlice-fk9SZqYs.js";import"./renderedTicksSlice-DCJJaB60.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DflspcII.js";import"./chartDataContext-d2Z-tzBJ.js";import"./CategoricalChart-B9C7CQtd.js";import"./resolveDefaultProps-_zNKGVvg.js";import"./CartesianAxis-su0-1hMc.js";import"./Layer-raZtNeJN.js";import"./Text-tw9BKFsW.js";import"./DOMUtils-CsCcfqfj.js";import"./Label-_t6Cr2BB.js";import"./ZIndexLayer-RK29P1oU.js";import"./types-DFiGf3Z4.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-B6Kx4hyx.js";import"./symbol-DvGDQuE1.js";import"./step-Ds31XTNS.js";import"./useElementOffset-BsE7zH__.js";import"./uniqBy-WtORV3K9.js";import"./iteratee-XCk8y4ZV.js";import"./ReactUtils-CQxyA-eH.js";import"./ActivePoints-Dd58MT2f.js";import"./Dot-BBSF_9dl.js";import"./RegisterGraphicalItemId-Dovr5f5m.js";import"./ErrorBarContext-BOhuZoUu.js";import"./GraphicalItemClipPath-s_4GiD_T.js";import"./SetGraphicalItem-R1SU2oz2.js";import"./useAnimationId-C9ABkjLp.js";import"./getRadiusAndStrokeWidthFromDot-BuA2lUdW.js";import"./ActiveShapeUtils-Dri1JSkm.js";import"./isPlainObject-BdJgLMK1.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Kck4mu5-.js";import"./Trapezoid-Bb5_conj.js";import"./Sector-hloifeOc.js";import"./Curve-QIhRJxzz.js";import"./Cross-B_v5dTm4.js";import"./index-BvsAt0Kf.js";import"./ChartSizeDimensions-3hb_fV0k.js";import"./OffsetShower-CmE03fMG.js";import"./PlotAreaShower-ByQBCuyh.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => {
    const [dataKey, setDataKey] = useState('pv');
    return <>
        <button type="button" onClick={() => {
        if (dataKey === 'pv') {
          setDataKey('uv');
        } else {
          setDataKey('pv');
        }
      }}>
          Change Data Key
        </button>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart width={500} height={400} data={pageData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Legend />
            <Line type="monotone" dataKey={dataKey} stroke="#8884d8" activeDot={{
            r: 8
          }} />
            <Tooltip />
            <RechartsHookInspector />
          </LineChart>
        </ResponsiveContainer>
      </>;
  }
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const xt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,xt as __namedExportsOrder,wt as default};
