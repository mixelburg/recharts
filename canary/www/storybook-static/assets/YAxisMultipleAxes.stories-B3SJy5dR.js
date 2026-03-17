import{e as t}from"./iframe-BRN0Xqwd.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CwQ9PO5l.js";import{Y as r}from"./YAxis-DKVh4d_L.js";import{R as l}from"./arrayEqualityCheck-PQCZjaXf.js";import{C as x}from"./ComposedChart-BM-rE1ZA.js";import{B as o}from"./Bar-DVxoHbW0.js";import{L as a}from"./Line-DyFRwhK8.js";import{X as c}from"./XAxis-BntCFdes.js";import{T as A}from"./Tooltip-DE_cJ8hp.js";import{R as g}from"./RechartsHookInspector-BBnr7ZoZ.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-xIQJ1nA8.js";import"./Layer-DoajtBmi.js";import"./resolveDefaultProps-Dxh1hNHq.js";import"./Text-CI9biWLL.js";import"./DOMUtils-DWosTiV6.js";import"./Label-B4Fq6gST.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BI9NJ7Jy.js";import"./zIndexSlice-CqqdYm3L.js";import"./immer-CxtJztVX.js";import"./types-D0avEOwH.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-Cvrsz3B1.js";import"./hooks-BeOfZUt4.js";import"./axisSelectors-BqDJdDty.js";import"./d3-scale-BZ12WjrG.js";import"./RechartsWrapper-aU_Krnwt.js";import"./index-C5dO4qdv.js";import"./CartesianChart-Cb9YxuiX.js";import"./chartDataContext-iQW8jKDq.js";import"./CategoricalChart--nQ92y27.js";import"./tooltipContext-DkdZr2QR.js";import"./ReactUtils-DgY3nRu6.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-DtOVL48a.js";import"./isPlainObject-B3W4jpDO.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Cf_h6Isr.js";import"./useAnimationId-CY2UicEm.js";import"./Trapezoid-kjMTXMSJ.js";import"./Sector-BZO38sl8.js";import"./Symbols-ds5v4Z5q.js";import"./symbol-D5-0E7vu.js";import"./step-CUDnEFyV.js";import"./Curve-DsptHhzd.js";import"./RegisterGraphicalItemId-DVJRwCfJ.js";import"./ErrorBarContext-Cxz-W8kL.js";import"./GraphicalItemClipPath-CERVBs_u.js";import"./SetGraphicalItem-D1mMJzUg.js";import"./getZIndexFromUnknown-Cr01vhAH.js";import"./graphicalItemSelectors-RtbV0QfF.js";import"./ActivePoints-VkKrJN6m.js";import"./Dot-6bZijGDG.js";import"./getRadiusAndStrokeWidthFromDot-DlgddgVq.js";import"./useElementOffset-CYPbxaZF.js";import"./uniqBy-BNrCzu7f.js";import"./iteratee-BPbAmQ9Z.js";import"./Cross-BxX_EtTy.js";import"./index-D9bWI74r.js";import"./ChartSizeDimensions-yPBI0H6p.js";import"./OffsetShower-BLrACUfM.js";import"./PlotAreaShower-6pHSiOKB.js";const kt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:f},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(n)};var m,s,p;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <article style={{
      display: 'flex',
      flexDirection: 'column'
    }}>
        <div style={{
        width: '100%'
      }}>
          <ResponsiveContainer width="100%" height={500}>
            <ComposedChart data={pageData}>
              <Bar dataKey="pv" fill="red" yAxisId="right" />
              <Bar dataKey="uv" fill="red" yAxisId="right-mirror" />
              <Line dataKey="amt" fill="green" yAxisId="left" />
              <Line dataKey="amt" fill="green" yAxisId="left-mirror" />

              <XAxis padding={{
              left: 50,
              right: 50
            }} dataKey="name" scale="band" />
              <YAxis {...args} yAxisId="left" orientation="left" domain={['dataMin-20', 'dataMax']} />
              <YAxis {...args} yAxisId="left-mirror" orientation="left" mirror tickCount={8} />
              <YAxis {...args} yAxisId="right" orientation="right" domain={['dataMin-20', 'dataMax']} />
              <YAxis {...args} yAxisId="right-mirror" orientation="right" mirror tickCount={20} />

              <Tooltip />
              <RechartsHookInspector />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
        <h4>
          {\`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element\`}
        </h4>
      </article>;
  },
  args: getStoryArgsFromArgsTypesObject(YAxisArgs)
}`,...(p=(s=i.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const Tt=["WithLeftAndRightAxes"];export{i as WithLeftAndRightAxes,Tt as __namedExportsOrder,kt as default};
