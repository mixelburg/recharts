import{r as s,e}from"./iframe-jkkQK6We.js";import{L as m}from"./LineChartArgs-E1uHAgXQ.js";import{g as y}from"./utils-ePvtT4un.js";import{L as i}from"./LineChart-BmI-ljOX.js";import{R as C}from"./arrayEqualityCheck-Bvs8FsI4.js";import{L as n}from"./Line-COjh4psN.js";import{R as k}from"./RechartsHookInspector-iJCm50Wt.js";import{X as p}from"./XAxis-CzZWNeyq.js";import{T as c}from"./Tooltip-D9LKV3cA.js";import{p as A}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BJ_Du7ho.js";import"./index-DnaVcvrH.js";import"./immer-CJ1Fch_4.js";import"./hooks-CvLPLntJ.js";import"./axisSelectors-DI3qgfte.js";import"./d3-scale-HJxPHkkh.js";import"./zIndexSlice-fk9SZqYs.js";import"./renderedTicksSlice-DCJJaB60.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DflspcII.js";import"./chartDataContext-d2Z-tzBJ.js";import"./CategoricalChart-B9C7CQtd.js";import"./resolveDefaultProps-_zNKGVvg.js";import"./Layer-raZtNeJN.js";import"./ReactUtils-CQxyA-eH.js";import"./Label-_t6Cr2BB.js";import"./Text-tw9BKFsW.js";import"./DOMUtils-CsCcfqfj.js";import"./ZIndexLayer-RK29P1oU.js";import"./ActivePoints-Dd58MT2f.js";import"./Dot-BBSF_9dl.js";import"./types-DFiGf3Z4.js";import"./RegisterGraphicalItemId-Dovr5f5m.js";import"./ErrorBarContext-BOhuZoUu.js";import"./GraphicalItemClipPath-s_4GiD_T.js";import"./SetGraphicalItem-R1SU2oz2.js";import"./useAnimationId-C9ABkjLp.js";import"./getRadiusAndStrokeWidthFromDot-BuA2lUdW.js";import"./ActiveShapeUtils-Dri1JSkm.js";import"./isPlainObject-BdJgLMK1.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Kck4mu5-.js";import"./Trapezoid-Bb5_conj.js";import"./Sector-hloifeOc.js";import"./Symbols-B6Kx4hyx.js";import"./symbol-DvGDQuE1.js";import"./step-Ds31XTNS.js";import"./Curve-QIhRJxzz.js";import"./index-BvsAt0Kf.js";import"./ChartSizeDimensions-3hb_fV0k.js";import"./OffsetShower-CmE03fMG.js";import"./PlotAreaShower-ByQBCuyh.js";import"./CartesianAxis-su0-1hMc.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-BsE7zH__.js";import"./uniqBy-WtORV3K9.js";import"./iteratee-XCk8y4ZV.js";import"./Cross-B_v5dTm4.js";const Ke={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),L=s.useCallback(()=>{o(!0)},[o]),E=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:L,onMouseLeave:E,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3}),e.createElement(k,null)))},args:{...y(m),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0}),e.createElement(k,null)),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
