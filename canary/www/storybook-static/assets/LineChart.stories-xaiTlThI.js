import{r as s,e}from"./iframe-pjTSm6Gu.js";import{L as m}from"./LineChartArgs-E1uHAgXQ.js";import{g as y}from"./utils-ePvtT4un.js";import{L as i}from"./LineChart-BaXaq15V.js";import{R as C}from"./arrayEqualityCheck-BIm-LBLH.js";import{L as n}from"./Line-uUP5ZInB.js";import{R as k}from"./RechartsHookInspector-C99VLWQJ.js";import{X as p}from"./XAxis-E9BQgWeR.js";import{T as c}from"./Tooltip-CVsoYk2t.js";import{p as A}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-daIHkx5F.js";import"./index-CvCpXH7V.js";import"./immer-BfNQXDi9.js";import"./hooks-BMdTjQaG.js";import"./axisSelectors-DooSN-_g.js";import"./d3-scale-D8APtE-1.js";import"./zIndexSlice-CBWlPVEa.js";import"./renderedTicksSlice-Demok72q.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BKlI_5Lu.js";import"./chartDataContext-UdaN3oHs.js";import"./CategoricalChart-BY3pGtBT.js";import"./resolveDefaultProps-DJkH94Re.js";import"./Layer-Dc3nhPvy.js";import"./ReactUtils-BM6WY9tS.js";import"./Label-N3ot4Fxt.js";import"./Text-DN-rDKDu.js";import"./DOMUtils-CGLlw-t9.js";import"./ZIndexLayer-DbRz8jbw.js";import"./ActivePoints-Cp7rrx91.js";import"./Dot-aqFZfasy.js";import"./types-H7K5pC4j.js";import"./RegisterGraphicalItemId-YnTOfa_s.js";import"./ErrorBarContext-CWoz6emG.js";import"./GraphicalItemClipPath-bR1nwwbO.js";import"./SetGraphicalItem-CC4VXpvp.js";import"./useAnimationId-DZLqS2Nr.js";import"./getRadiusAndStrokeWidthFromDot-bapbYaX1.js";import"./ActiveShapeUtils-D6fWXsJx.js";import"./isPlainObject-yx4T2eEm.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D3OQWeie.js";import"./Trapezoid-B-YZyVE4.js";import"./Sector-DTKpDxjY.js";import"./Symbols-BDX2Rl7R.js";import"./symbol-DEYM9QIf.js";import"./step-CcjweQK7.js";import"./Curve-YWMWk-Bf.js";import"./index-t0raO00t.js";import"./ChartSizeDimensions-1alHUmPx.js";import"./OffsetShower-BocmhH_q.js";import"./PlotAreaShower-DdcMWwBC.js";import"./CartesianAxis-B2Z0cNlA.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-2Fx2g2JY.js";import"./uniqBy-D5xe0qSB.js";import"./iteratee-DC3xOuQn.js";import"./Cross-YXQCf5w9.js";const Ke={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),L=s.useCallback(()=>{o(!0)},[o]),E=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:L,onMouseLeave:E,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3}),e.createElement(k,null)))},args:{...y(m),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0}),e.createElement(k,null)),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'Simple',
  render: (args: Args) => {
    const [isHovered, setIsHovered] = useState(false);
    const onMouseEnter = useCallback(() => {
      setIsHovered(true);
    }, [setIsHovered]);
    const onMouseLeave = useCallback(() => {
      setIsHovered(false);
    }, [setIsHovered]);
    return <ResponsiveContainer width="100%" height={400}>
        <LineChart {...args}>
          <Line onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} dataKey="uv" strokeWidth={isHovered ? 8 : 4} animationDuration={5000} />
          <RechartsHookInspector />
        </LineChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(LineChartArgs),
    data: pageData
  }
}`,...(u=(l=r.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var g,v,h;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <div>
        <LineChart {...args} id="BookOne" className="BookOne">
          <Line isAnimationActive={false} name="BookOne" type="monotone" dataKey="uv" stroke="#111" />
          <XAxis dataKey="name" />
          <Tooltip active />
          <RechartsHookInspector />
        </LineChart>
        <LineChart {...args} id="BookTwo" className="BookTwo">
          <Line isAnimationActive={false} name="BookTwo" type="monotone" dataKey="uv" stroke="#ff7300" />
          <XAxis dataKey="name" />
          <Tooltip />
        </LineChart>
      </div>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(LineChartArgs),
    data: pageData,
    syncId: 'example-syncId',
    width: 400,
    height: 400
  }
}`,...(h=(v=a.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};const Oe=["API","SynchronizedTooltip"];export{r as API,a as SynchronizedTooltip,Oe as __namedExportsOrder,Ke as default};
