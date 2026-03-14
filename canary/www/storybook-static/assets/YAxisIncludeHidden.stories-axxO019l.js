import{r as f,e}from"./iframe-W8kdQUhq.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwQ9PO5l.js";import{Y as c}from"./YAxis-BQfmZ2qg.js";import{R as A}from"./arrayEqualityCheck-Btlzc28s.js";import{C}from"./ComposedChart-BiJ-XKcX.js";import{X as K}from"./XAxis-DWhw38Xj.js";import{L as v}from"./Legend-DMonUyGa.js";import{B as a}from"./Bar-yhOJNoYR.js";import{R as x}from"./RechartsHookInspector-BcT8fmlt.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-Cxm0oSHN.js";import"./Layer-BGLld0kx.js";import"./resolveDefaultProps-BfhjRFbx.js";import"./Text-D2LR9c5V.js";import"./DOMUtils-Dh_SvmYZ.js";import"./Label-D6R0QCHt.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DmLY6Hgs.js";import"./zIndexSlice-CEcVefRm.js";import"./immer-BuqdlIG8.js";import"./types-DJkVebVp.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-D4Vaz-5m.js";import"./hooks-BOlckttq.js";import"./axisSelectors-CjbQAShD.js";import"./d3-scale-DFiqgWB0.js";import"./RechartsWrapper-aJygMkEW.js";import"./index-BTauWXs3.js";import"./CartesianChart-COqW0iGg.js";import"./chartDataContext-tlXdsyIN.js";import"./CategoricalChart-C7pFQRDk.js";import"./Symbols-BcW_py_g.js";import"./symbol-BB4kRCI5.js";import"./step-CgXf5jOy.js";import"./useElementOffset-CL4r1D-A.js";import"./uniqBy-BbP_K9Bv.js";import"./iteratee-B727CZfL.js";import"./tooltipContext-PyIHUNqc.js";import"./ReactUtils-B9N20sI-.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-BniM7mY0.js";import"./isPlainObject-KOLy9Ybo.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BpEBvmca.js";import"./useAnimationId-DDqHn4U8.js";import"./Trapezoid-DDEhCSmf.js";import"./Sector-UEOWO1pj.js";import"./Curve-CJww8Zko.js";import"./RegisterGraphicalItemId-DYJlqJ-V.js";import"./ErrorBarContext-wcnCUtJ2.js";import"./GraphicalItemClipPath-CuEVBaGx.js";import"./SetGraphicalItem-CW5rBtzq.js";import"./getZIndexFromUnknown-CZUksEmU.js";import"./graphicalItemSelectors-hVghiOpc.js";import"./index-Dy74nUQy.js";import"./ChartSizeDimensions-UqjrZXGi.js";import"./OffsetShower-CBIXBt2P.js";import"./PlotAreaShower-DVNMsPgk.js";const we={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    const allKeys = Object.keys(pageData[0]);
    const [activeKeys, setActiveKeys] = useState(allKeys);

    /*
     * Toggles displayed bars when clicking on a legend item
     */
    const handleLegendClick: ComponentProps<typeof Legend>['onClick'] = (e: any) => {
      const key: string = e.dataKey;
      setActiveKeys(prev => prev.includes(key) ? prev.filter(k => k !== key) : [...prev, key]);
    };
    return <>
        <h4>
          Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if
          \`includeHidden\`
        </h4>
        <ResponsiveContainer width="100%" height={500}>
          <ComposedChart data={pageData}>
            <XAxis dataKey="name" scale="band" />
            <YAxis includeHidden />
            <Legend onClick={handleLegendClick} />
            <Bar dataKey="pv" fill="blue" hide={!activeKeys.includes('pv')} />
            <Bar dataKey="amt" fill="green" hide={!activeKeys.includes('amt')} />
            <RechartsHookInspector />
          </ComposedChart>
        </ResponsiveContainer>
      </>;
  },
  args: getStoryArgsFromArgsTypesObject(YAxisArgs)
}`,...(p=(n=t.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const Oe=["WithIncludeHidden"];export{t as WithIncludeHidden,Oe as __namedExportsOrder,we as default};
