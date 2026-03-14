import{e as r}from"./iframe-W8kdQUhq.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-Bxm12dUp.js";import{S as p}from"./ScatterChart-Ci42Zv4L.js";import{C as d}from"./CartesianGrid-Csbjuo5E.js";import{X as c}from"./XAxis-DWhw38Xj.js";import{Y as y}from"./YAxis-BQfmZ2qg.js";import{S as h}from"./Scatter-DJEg_Cpl.js";import{E as e}from"./ErrorBar-CXn6svjZ.js";import{T as u}from"./Tooltip-BNQJS5O4.js";import{R as f}from"./RechartsHookInspector-BcT8fmlt.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-aJygMkEW.js";import"./arrayEqualityCheck-Btlzc28s.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BfhjRFbx.js";import"./immer-BuqdlIG8.js";import"./PolarUtils-CTnnDHZv.js";import"./index-BTauWXs3.js";import"./hooks-BOlckttq.js";import"./axisSelectors-CjbQAShD.js";import"./d3-scale-DFiqgWB0.js";import"./zIndexSlice-CEcVefRm.js";import"./renderedTicksSlice-D4Vaz-5m.js";import"./CartesianChart-COqW0iGg.js";import"./chartDataContext-tlXdsyIN.js";import"./CategoricalChart-C7pFQRDk.js";import"./CartesianAxis-Cxm0oSHN.js";import"./Layer-BGLld0kx.js";import"./Text-D2LR9c5V.js";import"./DOMUtils-Dh_SvmYZ.js";import"./Label-D6R0QCHt.js";import"./ZIndexLayer-DmLY6Hgs.js";import"./types-DJkVebVp.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-B9N20sI-.js";import"./Curve-CJww8Zko.js";import"./step-CgXf5jOy.js";import"./tooltipContext-PyIHUNqc.js";import"./Symbols-BcW_py_g.js";import"./symbol-BB4kRCI5.js";import"./ActiveShapeUtils-BniM7mY0.js";import"./isPlainObject-KOLy9Ybo.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BpEBvmca.js";import"./useAnimationId-DDqHn4U8.js";import"./Trapezoid-DDEhCSmf.js";import"./Sector-UEOWO1pj.js";import"./RegisterGraphicalItemId-DYJlqJ-V.js";import"./ErrorBarContext-wcnCUtJ2.js";import"./GraphicalItemClipPath-CuEVBaGx.js";import"./SetGraphicalItem-CW5rBtzq.js";import"./CSSTransitionAnimate-D6khWgcj.js";import"./useElementOffset-CL4r1D-A.js";import"./uniqBy-BbP_K9Bv.js";import"./iteratee-B727CZfL.js";import"./Cross-B0yObCyG.js";import"./index-Dy74nUQy.js";import"./ChartSizeDimensions-UqjrZXGi.js";import"./OffsetShower-CBIXBt2P.js";import"./PlotAreaShower-DVNMsPgk.js";const Sr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
