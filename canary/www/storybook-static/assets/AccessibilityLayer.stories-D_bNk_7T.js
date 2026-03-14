import{r as A,e as t}from"./iframe-W8kdQUhq.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-DM6BExtw.js";import{C as l}from"./ComposedChart-BiJ-XKcX.js";import{A as E}from"./AreaChart-Bj_7Lx6U.js";import{C as b}from"./CartesianGrid-Csbjuo5E.js";import{X as d}from"./XAxis-DWhw38Xj.js";import{Y as g}from"./YAxis-BQfmZ2qg.js";import{A as a}from"./Area-4nz5EpXK.js";import{T as h}from"./Tooltip-BNQJS5O4.js";import{R as u}from"./RechartsHookInspector-BcT8fmlt.js";import{R as v}from"./arrayEqualityCheck-Btlzc28s.js";import{L as T}from"./Legend-DMonUyGa.js";import{p as y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-aJygMkEW.js";import"./index-BTauWXs3.js";import"./immer-BuqdlIG8.js";import"./hooks-BOlckttq.js";import"./axisSelectors-CjbQAShD.js";import"./d3-scale-DFiqgWB0.js";import"./zIndexSlice-CEcVefRm.js";import"./renderedTicksSlice-D4Vaz-5m.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-COqW0iGg.js";import"./chartDataContext-tlXdsyIN.js";import"./CategoricalChart-C7pFQRDk.js";import"./resolveDefaultProps-BfhjRFbx.js";import"./CartesianAxis-Cxm0oSHN.js";import"./Layer-BGLld0kx.js";import"./Text-D2LR9c5V.js";import"./DOMUtils-Dh_SvmYZ.js";import"./Label-D6R0QCHt.js";import"./ZIndexLayer-DmLY6Hgs.js";import"./types-DJkVebVp.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-CJww8Zko.js";import"./step-CgXf5jOy.js";import"./ReactUtils-B9N20sI-.js";import"./ActivePoints-BZE3jhfM.js";import"./Dot-CnMt43sC.js";import"./RegisterGraphicalItemId-DYJlqJ-V.js";import"./GraphicalItemClipPath-CuEVBaGx.js";import"./SetGraphicalItem-CW5rBtzq.js";import"./useAnimationId-DDqHn4U8.js";import"./getRadiusAndStrokeWidthFromDot-CVOMDH5P.js";import"./graphicalItemSelectors-hVghiOpc.js";import"./useElementOffset-CL4r1D-A.js";import"./uniqBy-BbP_K9Bv.js";import"./iteratee-B727CZfL.js";import"./Cross-B0yObCyG.js";import"./Rectangle-BpEBvmca.js";import"./Sector-UEOWO1pj.js";import"./index-Dy74nUQy.js";import"./ChartSizeDimensions-UqjrZXGi.js";import"./OffsetShower-CBIXBt2P.js";import"./PlotAreaShower-DVNMsPgk.js";import"./Symbols-BcW_py_g.js";import"./symbol-BB4kRCI5.js";const St={component:l},r={render:e=>t.createElement(v,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:y},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(T,null),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(h,null),t.createElement(u,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:y,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(h,null),t.createElement(u,null)))},args:{}};var i,m,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height={300}>
        <ComposedChart margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }} data={pageData}>
          <Area isAnimationActive={false} dataKey="uv" {...args} />
          {/* All further components are added to show the interaction with the Area properties */}
          <Legend />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  args: getStoryArgsFromArgsTypesObject(ComposedChartArgs),
  parameters: {
    docs: {
      description: {
        story: 'You can tab to this chart. From there, you can use the arrow keys to navigate along the chart.'
      }
    }
  }
}`,...(n=(m=r.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};var s,p,c;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => {
    const [toggle, setToggle] = useState(true);
    return <div>
        <button type="button" onClick={() => setToggle(!toggle)}>
          Toggle Tooltip
        </button>

        <AreaChart width={500} height={400} data={pageData} margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0
      }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Area type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
          <Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" />
          {toggle && <Tooltip />}
          <RechartsHookInspector />
        </AreaChart>
      </div>;
  },
  args: {}
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const Yt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,Yt as __namedExportsOrder,St as default};
