import{e}from"./iframe-jkkQK6We.js";import{X as s}from"./XAxis-CzZWNeyq.js";import{R as y}from"./arrayEqualityCheck-Bvs8FsI4.js";import{C as g}from"./ComposedChart-Cv7q1RUe.js";import{L as x}from"./Line-COjh4psN.js";import{R as S}from"./RechartsHookInspector-iJCm50Wt.js";import{t as T,s as A,a as C,b as M,c as b,d as k,e as w,f as D,g as r}from"./d3-scale-HJxPHkkh.js";import{T as V}from"./Tooltip-D9LKV3cA.js";import{t as n}from"./Time-CZh6Vidc.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-su0-1hMc.js";import"./Layer-raZtNeJN.js";import"./resolveDefaultProps-_zNKGVvg.js";import"./Text-tw9BKFsW.js";import"./DOMUtils-CsCcfqfj.js";import"./Label-_t6Cr2BB.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-RK29P1oU.js";import"./zIndexSlice-fk9SZqYs.js";import"./immer-CJ1Fch_4.js";import"./types-DFiGf3Z4.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-DCJJaB60.js";import"./hooks-CvLPLntJ.js";import"./axisSelectors-DI3qgfte.js";import"./RechartsWrapper-BJ_Du7ho.js";import"./index-DnaVcvrH.js";import"./CartesianChart-DflspcII.js";import"./chartDataContext-d2Z-tzBJ.js";import"./CategoricalChart-B9C7CQtd.js";import"./ReactUtils-CQxyA-eH.js";import"./ActivePoints-Dd58MT2f.js";import"./Dot-BBSF_9dl.js";import"./RegisterGraphicalItemId-Dovr5f5m.js";import"./ErrorBarContext-BOhuZoUu.js";import"./GraphicalItemClipPath-s_4GiD_T.js";import"./SetGraphicalItem-R1SU2oz2.js";import"./useAnimationId-C9ABkjLp.js";import"./getRadiusAndStrokeWidthFromDot-BuA2lUdW.js";import"./ActiveShapeUtils-Dri1JSkm.js";import"./isPlainObject-BdJgLMK1.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Kck4mu5-.js";import"./Trapezoid-Bb5_conj.js";import"./Sector-hloifeOc.js";import"./Symbols-B6Kx4hyx.js";import"./symbol-DvGDQuE1.js";import"./step-Ds31XTNS.js";import"./Curve-QIhRJxzz.js";import"./index-BvsAt0Kf.js";import"./ChartSizeDimensions-3hb_fV0k.js";import"./OffsetShower-CmE03fMG.js";import"./PlotAreaShower-ByQBCuyh.js";import"./useElementOffset-BsE7zH__.js";import"./uniqBy-WtORV3K9.js";import"./iteratee-XCk8y4ZV.js";import"./Cross-B_v5dTm4.js";const jt={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},i={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},O=r(".%L"),R=r(":%S"),K=r("%I:%M"),F=r("%I %p"),H=r("%a %d"),I=r("%b %d"),L=r("%B"),W=r("%Y");function X(t){return A(t)<t?O(t):C(t)<t?R(t):M(t)<t?K(t):b(t)<t?F(t):k(t)<t?w(t)<t?H(t):I(t):D(t)<t?L(t):W(t)}const a={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),E={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...E}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...StoryTemplate,
  parameters: {
    controls: {
      include: ['type', 'scale', 'domain', 'data']
    }
  },
  argTypes: {
    scale: {
      options: [undefined, 'auto', 'ordinal', 'time', 'point', 'linear'],
      control: {
        type: 'radio'
      }
    },
    type: {
      options: [undefined, 'category', 'number'],
      control: {
        type: 'radio'
      }
    }
  }
}`,...(u=(l=i.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,f,h;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...StoryTemplate,
  render: (args: Args) => {
    const timeValues = args.data.map(row => row.x);
    // The d3 scaleTime domain requires numeric values
    const numericValues = timeValues.map(time => time.valueOf());
    // With .nice() we extend the domain nicely.
    const timeScale = scaleTime().domain([Math.min(...numericValues), Math.max(...numericValues)]).nice();
    const xAxisArgs: XAxisProps = {
      domain: timeScale.domain().map(date => date.valueOf()),
      // @ts-expect-error we need to wrap the d3 scales in unified interface
      scale: timeScale,
      type: 'number',
      ticks: timeScale.ticks(5).map(date => date.valueOf()),
      tickFormatter: multiFormat
    };
    return <ResponsiveContainer width="100%" height={400}>
        <ComposedChart data={timeData} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }}>
          <XAxis dataKey="x" {...args} {...xAxisArgs} />
          <Line dataKey="y" />
          <Tooltip />
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  parameters: {
    controls: {
      include: ['data']
    }
  }
}`,...(h=(f=a.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const zt=["DefaultBehaviour","WithD3Scale"];export{i as DefaultBehaviour,a as WithD3Scale,zt as __namedExportsOrder,jt as default};
