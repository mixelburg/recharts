import{e as r}from"./iframe-BRN0Xqwd.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-Bxm12dUp.js";import{S as p}from"./ScatterChart-_U07oANJ.js";import{C as d}from"./CartesianGrid-COkPNHPA.js";import{X as c}from"./XAxis-BntCFdes.js";import{Y as y}from"./YAxis-DKVh4d_L.js";import{S as h}from"./Scatter-CjeODPEA.js";import{E as e}from"./ErrorBar-CpGtOr09.js";import{T as u}from"./Tooltip-DE_cJ8hp.js";import{R as f}from"./RechartsHookInspector-BBnr7ZoZ.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-aU_Krnwt.js";import"./arrayEqualityCheck-PQCZjaXf.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Dxh1hNHq.js";import"./immer-CxtJztVX.js";import"./PolarUtils-CTnnDHZv.js";import"./index-C5dO4qdv.js";import"./hooks-BeOfZUt4.js";import"./axisSelectors-BqDJdDty.js";import"./d3-scale-BZ12WjrG.js";import"./zIndexSlice-CqqdYm3L.js";import"./renderedTicksSlice-Cvrsz3B1.js";import"./CartesianChart-Cb9YxuiX.js";import"./chartDataContext-iQW8jKDq.js";import"./CategoricalChart--nQ92y27.js";import"./CartesianAxis-xIQJ1nA8.js";import"./Layer-DoajtBmi.js";import"./Text-CI9biWLL.js";import"./DOMUtils-DWosTiV6.js";import"./Label-B4Fq6gST.js";import"./ZIndexLayer-BI9NJ7Jy.js";import"./types-D0avEOwH.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-DgY3nRu6.js";import"./Curve-DsptHhzd.js";import"./step-CUDnEFyV.js";import"./tooltipContext-DkdZr2QR.js";import"./Symbols-ds5v4Z5q.js";import"./symbol-D5-0E7vu.js";import"./ActiveShapeUtils-DtOVL48a.js";import"./isPlainObject-B3W4jpDO.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Cf_h6Isr.js";import"./useAnimationId-CY2UicEm.js";import"./Trapezoid-kjMTXMSJ.js";import"./Sector-BZO38sl8.js";import"./RegisterGraphicalItemId-DVJRwCfJ.js";import"./ErrorBarContext-Cxz-W8kL.js";import"./GraphicalItemClipPath-CERVBs_u.js";import"./SetGraphicalItem-D1mMJzUg.js";import"./CSSTransitionAnimate-B9QfZ9hy.js";import"./useElementOffset-CYPbxaZF.js";import"./uniqBy-BNrCzu7f.js";import"./iteratee-BPbAmQ9Z.js";import"./Cross-BxX_EtTy.js";import"./index-D9bWI74r.js";import"./ChartSizeDimensions-yPBI0H6p.js";import"./OffsetShower-BLrACUfM.js";import"./PlotAreaShower-6pHSiOKB.js";const Sr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: (args: Args) => {
    const data = [{
      x: 100,
      y: 200,
      errorY: 30,
      errorX: 30
    }, {
      x: 120,
      y: 100,
      errorY: [500, 30],
      errorX: [200, 30]
    }, {
      x: 170,
      y: 300,
      errorY: [10, 20],
      errorX: 20
    }, {
      x: 140,
      y: 250,
      errorY: 30,
      errorX: 20
    }, {
      x: 150,
      y: 400,
      errorY: [20, 300],
      errorX: 30
    }, {
      x: 110,
      y: 280,
      errorY: 40,
      errorX: 40
    }];
    return <ScatterChart width={400} height={400} margin={{
      top: 20,
      right: 20,
      bottom: 20,
      left: 20
    }} layout={args.layout}>
        <CartesianGrid />
        <XAxis type="number" dataKey="x" name="stature" unit="cm" allowDataOverflow={args.allowDataOverflow} />
        <YAxis type="number" dataKey="y" name="weight" unit="kg" allowDataOverflow={args.allowDataOverflow} />
        <Scatter name="A school" data={data} fill="blue">
          {/* This ErrorBar does render, but it does not extend the domain of XAxis unfortunately */}
          <ErrorBar dataKey="errorX" width={2} strokeWidth={3} stroke="green" direction="x" />
          <ErrorBar dataKey="errorY" width={4} strokeWidth={2} stroke="red" direction="y" />
        </Scatter>
        <Tooltip cursor={{
        strokeDasharray: '3 3'
      }} />
        <RechartsHookInspector />
      </ScatterChart>;
  },
  args: getStoryArgsFromArgsTypesObject(ScatterChartArgs),
  parameters: {
    controls: {
      include: ['layout', 'allowDataOverflow']
    }
  }
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const kr=["WithErrorBarsAndExtendedDomain"];export{t as WithErrorBarsAndExtendedDomain,kr as __namedExportsOrder,Sr as default};
