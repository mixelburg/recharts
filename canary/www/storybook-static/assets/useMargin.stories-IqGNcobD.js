import{e as t}from"./iframe-BRN0Xqwd.js";import{S as i}from"./ChartSizeDimensions-yPBI0H6p.js";import{J as s,h as g,f as h,R as l}from"./arrayEqualityCheck-PQCZjaXf.js";import{C as c}from"./ComposedChart-BM-rE1ZA.js";import{L as d}from"./Line-DyFRwhK8.js";import{X as u}from"./XAxis-BntCFdes.js";import{Y as f}from"./YAxis-DKVh4d_L.js";import{L as M}from"./Legend-a-N7J6VB.js";import{p as b}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Dxh1hNHq.js";import"./immer-CxtJztVX.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-aU_Krnwt.js";import"./index-C5dO4qdv.js";import"./hooks-BeOfZUt4.js";import"./axisSelectors-BqDJdDty.js";import"./d3-scale-BZ12WjrG.js";import"./zIndexSlice-CqqdYm3L.js";import"./renderedTicksSlice-Cvrsz3B1.js";import"./CartesianChart-Cb9YxuiX.js";import"./chartDataContext-iQW8jKDq.js";import"./CategoricalChart--nQ92y27.js";import"./Layer-DoajtBmi.js";import"./ReactUtils-DgY3nRu6.js";import"./Label-B4Fq6gST.js";import"./Text-CI9biWLL.js";import"./DOMUtils-DWosTiV6.js";import"./ZIndexLayer-BI9NJ7Jy.js";import"./ActivePoints-VkKrJN6m.js";import"./Dot-6bZijGDG.js";import"./types-D0avEOwH.js";import"./RegisterGraphicalItemId-DVJRwCfJ.js";import"./ErrorBarContext-Cxz-W8kL.js";import"./GraphicalItemClipPath-CERVBs_u.js";import"./SetGraphicalItem-D1mMJzUg.js";import"./useAnimationId-CY2UicEm.js";import"./getRadiusAndStrokeWidthFromDot-DlgddgVq.js";import"./ActiveShapeUtils-DtOVL48a.js";import"./isPlainObject-B3W4jpDO.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Cf_h6Isr.js";import"./Trapezoid-kjMTXMSJ.js";import"./Sector-BZO38sl8.js";import"./Symbols-ds5v4Z5q.js";import"./symbol-D5-0E7vu.js";import"./step-CUDnEFyV.js";import"./Curve-DsptHhzd.js";import"./CartesianAxis-xIQJ1nA8.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-CYPbxaZF.js";import"./uniqBy-BNrCzu7f.js";import"./iteratee-BPbAmQ9Z.js";function E(){const r=s(),e=g(),o=h();return r==null||o==null||e==null?null:t.createElement(t.Fragment,null,t.createElement(i,{width:r.left,height:e,labels:{background:"Left",horizontal:"useMargin.left"}}),t.createElement(i,{width:r.right,x:o-r.right,height:e,labels:{background:"Right",horizontal:"useMargin.right"}}),t.createElement(i,{width:o,height:r.top,labels:{background:"Top",vertical:"useMargin.top"}}),t.createElement(i,{width:o,height:r.bottom,y:e-r.bottom,labels:{background:"Bottom",vertical:"useMargin.bottom"}}))}const wt={title:"API/hooks/useMargin",component:s,parameters:{docs:{description:{component:"This story demonstrates the use of the `useMargin` hook to read chart margin in a responsive container."}}}},a={name:"useMargin",render:r=>t.createElement(l,{width:r.width,height:r.height},t.createElement(c,{data:b,margin:r.margin},t.createElement(d,{dataKey:"pv"}),t.createElement(u,{dataKey:"name"}),t.createElement(f,null),t.createElement(M,null),t.createElement(E,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}};var m,n,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'useMargin',
  render: (args: Args) => {
    return <ResponsiveContainer width={args.width} height={args.height}>
        <ComposedChart data={pageData} margin={args.margin}>
          <Line dataKey="pv" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <MarginShower />
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
    }
  }
}`,...(p=(n=a.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const Ct=["UseMargin"];export{a as UseMargin,Ct as __namedExportsOrder,wt as default};
