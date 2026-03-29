import{e as r}from"./iframe-pjTSm6Gu.js";import{g as s}from"./utils-ePvtT4un.js";import{E as i}from"./ErrorBar-C_D4wuiQ.js";import{R as l}from"./arrayEqualityCheck-BIm-LBLH.js";import{S as p}from"./ScatterChart-DM24t043.js";import{C as u}from"./CartesianGrid-CkHL3Ra-.js";import{X as y}from"./XAxis-E9BQgWeR.js";import{Y as c}from"./YAxis-BAU9nMY5.js";import{S as d}from"./Scatter-C8ujIbYH.js";import{R as h}from"./RechartsHookInspector-C99VLWQJ.js";import"./preload-helper-Dp1pzeXC.js";import"./Layer-Dc3nhPvy.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DJkH94Re.js";import"./ErrorBarContext-CWoz6emG.js";import"./RechartsWrapper-daIHkx5F.js";import"./index-CvCpXH7V.js";import"./immer-BfNQXDi9.js";import"./hooks-BMdTjQaG.js";import"./axisSelectors-DooSN-_g.js";import"./d3-scale-D8APtE-1.js";import"./zIndexSlice-CBWlPVEa.js";import"./renderedTicksSlice-Demok72q.js";import"./PolarUtils-CTnnDHZv.js";import"./RegisterGraphicalItemId-YnTOfa_s.js";import"./CSSTransitionAnimate-Do-Tc9GV.js";import"./useAnimationId-DZLqS2Nr.js";import"./ZIndexLayer-DbRz8jbw.js";import"./CartesianChart-BKlI_5Lu.js";import"./chartDataContext-UdaN3oHs.js";import"./CategoricalChart-BY3pGtBT.js";import"./CartesianAxis-B2Z0cNlA.js";import"./Text-DN-rDKDu.js";import"./DOMUtils-CGLlw-t9.js";import"./Label-N3ot4Fxt.js";import"./types-H7K5pC4j.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-BM6WY9tS.js";import"./Curve-YWMWk-Bf.js";import"./step-CcjweQK7.js";import"./tooltipContext-CSKO634c.js";import"./Symbols-BDX2Rl7R.js";import"./symbol-DEYM9QIf.js";import"./ActiveShapeUtils-D6fWXsJx.js";import"./isPlainObject-yx4T2eEm.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D3OQWeie.js";import"./Trapezoid-B-YZyVE4.js";import"./Sector-DTKpDxjY.js";import"./GraphicalItemClipPath-bR1nwwbO.js";import"./SetGraphicalItem-CC4VXpvp.js";import"./index-t0raO00t.js";import"./ChartSizeDimensions-1alHUmPx.js";import"./OffsetShower-BocmhH_q.js";import"./PlotAreaShower-DdcMWwBC.js";const f=[{x:45,y:100,z:150,errorY:[30,20],errorX:5},{x:100,y:200,z:200,errorY:[20,30],errorX:3},{x:120,y:100,z:260,errorY:20,errorX:[5,3]},{x:170,y:300,z:400,errorY:[15,18],errorX:4},{x:140,y:250,z:280,errorY:23,errorX:[6,7]},{x:150,y:400,z:500,errorY:[21,10],errorX:4},{x:110,y:280,z:200,errorY:21,errorX:[5,6]}],n={animationBegin:{control:{type:"number"},table:{type:{summary:"number"},category:"Animation",defaultValue:{summary:"0"}},defaultValue:0},animationDuration:{control:{type:"number"},table:{type:{summary:"number"},category:"Animation",defaultValue:{summary:"400"}},defaultValue:400},animationEasing:{table:{type:{summary:'"ease" | "ease-in" | "ease-in-out" | "ease-out" | "linear" | "spring" | BezierEasingFunction | SpringEasingFunction | `cubic-bezier(${number},${number},${number},${number})`'},category:"Animation",defaultValue:{summary:"ease-in-out"}},defaultValue:"ease-in-out"},dataKey:{description:"Decides how to extract the value of this ErrorBar from the data:\n- `string`: the name of the field in the data object;\n- `number`: the index of the field in the data;\n- `function`: a function that receives the data object and returns the value of this ErrorBar.\n\nThe error values can be a single value for symmetric error bars;\nor an array of a lower and upper error value for asymmetric error bars.",table:{type:{summary:"DataKey<DataPointType, DataValueType>"},category:"General"}},direction:{description:`Direction of the error bar. Usually determined by chart layout, except in Scatter chart.
In Scatter chart, "x" means horizontal error bars, "y" means vertical error bars.`,table:{type:{summary:"number | string"},category:"General"}},isAnimationActive:{control:{type:"boolean"},table:{type:{summary:"boolean"},category:"Animation",defaultValue:{summary:"true"}},defaultValue:!0},stroke:{description:'The stroke color. If "none", no line will be drawn.',control:{type:"color"},table:{type:{summary:"string"},category:"Style",defaultValue:{summary:"black"}},defaultValue:"black"},strokeWidth:{description:"The width of the stroke",table:{type:{summary:"number | string"},category:"Style",defaultValue:{summary:"1.5"}},defaultValue:1.5},width:{description:`Width of the error bar ends (the serifs) in pixels.
This is not the total width of the error bar, but just the width of the little lines at the ends.

The total width of the error bar is determined by the data value plus/minus the error value.`,table:{type:{summary:"number | string"},category:"General",defaultValue:{summary:"5"}},defaultValue:5},zIndex:{control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"400"}},defaultValue:400}},gr={component:i,argTypes:n},e={render:m=>r.createElement(l,{width:"100%",height:500},r.createElement(p,{margin:{top:5,right:30,left:20,bottom:5},width:730,height:250},r.createElement(u,null),r.createElement(y,{dataKey:"x",type:"number"}),r.createElement(c,{dataKey:"y",type:"number"}),r.createElement(d,{data:f,fill:"#ff7300"},r.createElement(i,{dataKey:"errorY",...m})),r.createElement(h,null))),args:{...s(n),width:4,strokeWidth:2,stroke:"green",direction:"y",dataKey:"errorY"}};var t,a,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height={500}>
        <ScatterChart margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }} width={730} height={250}>
          <CartesianGrid />
          <XAxis dataKey="x" type="number" />
          <YAxis dataKey="y" type="number" />
          <Scatter data={errorData} fill="#ff7300">
            <ErrorBar dataKey="errorY" {...args} />
          </Scatter>
          <RechartsHookInspector />
        </ScatterChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(ErrorBarArgs),
    width: 4,
    strokeWidth: 2,
    stroke: 'green',
    direction: 'y',
    dataKey: 'errorY'
  }
}`,...(o=(a=e.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const xr=["API"];export{e as API,xr as __namedExportsOrder,gr as default};
