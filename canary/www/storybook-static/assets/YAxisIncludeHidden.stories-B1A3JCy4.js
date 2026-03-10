import{r as f,e}from"./iframe-AGR5TxU0.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwQ9PO5l.js";import{Y as c}from"./YAxis-CCWTH5eH.js";import{R as A}from"./arrayEqualityCheck-DXbaXUkD.js";import{C}from"./ComposedChart-BtpGektJ.js";import{X as K}from"./XAxis-DyEoY_rp.js";import{L as v}from"./Legend-BHwGN7vl.js";import{B as a}from"./Bar-B7woRuSs.js";import{R as x}from"./RechartsHookInspector-0vPFuGEJ.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-BHrGOONJ.js";import"./Layer-B0VPkrDQ.js";import"./resolveDefaultProps-uLplvdLD.js";import"./Text-9psbzd7-.js";import"./DOMUtils-DLbpgKpN.js";import"./Label-Cigbj9aN.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Dgj1fYLz.js";import"./zIndexSlice-BFFmdDFB.js";import"./immer-BHj4UNVn.js";import"./types-CbRI_H5G.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-DzobF8IS.js";import"./hooks-Cge6K3ns.js";import"./axisSelectors-DyW_TqYx.js";import"./d3-scale-DsQJB1Qg.js";import"./RechartsWrapper-Cj1HZNIW.js";import"./index-B9qusgqE.js";import"./CartesianChart-23oy7eSY.js";import"./chartDataContext-BbKJCGLd.js";import"./CategoricalChart-NSSgYZkF.js";import"./Symbols-Bh4ii99Y.js";import"./symbol-BZfyJPgn.js";import"./step-BDyxNMox.js";import"./useElementOffset-D1v8rABq.js";import"./uniqBy-DSh5CcnV.js";import"./iteratee-B87uG-Cw.js";import"./tooltipContext-C5tQ5FOf.js";import"./ReactUtils-B5dUa4Qx.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-eCPCShIj.js";import"./isPlainObject-DfJ84HJ6.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-ChBK7K9j.js";import"./useAnimationId-CbPcpD_i.js";import"./Trapezoid-D-6sRKMO.js";import"./Sector-7ZL1zRfF.js";import"./Curve-TeeQM7x8.js";import"./RegisterGraphicalItemId-CZbBFDNM.js";import"./ErrorBarContext-83Ac_xpa.js";import"./GraphicalItemClipPath-CHswbtIv.js";import"./SetGraphicalItem-9SROL2qf.js";import"./getZIndexFromUnknown-CIM2wcTE.js";import"./graphicalItemSelectors-Bs0VmVVf.js";import"./index-CUGa9k2l.js";import"./ChartSizeDimensions-DEWICgA9.js";import"./OffsetShower-EvZHriA8.js";import"./PlotAreaShower-BZJw8HCo.js";const we={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
