"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3237],{9141:(e,t,r)=>{r.r(t),r.d(t,{default:()=>j});var n=r(7294),a=r(2263),o=r(3285),i=r(1190),l=r(8767);const c=new l.QueryClient,s=e=>{let{children:t,...r}=e;return n.createElement(i.M,null,n.createElement(l.QueryClientProvider,{client:c},n.createElement(o.Z,r,t)))};var d=r(3154);const p="https://lfwcdncnq4.execute-api.ap-northeast-2.amazonaws.com/default/getWakaTime";var u=r(594);const m=async()=>{try{return await u.Z.get(p)}catch(e){return e}};var g=r(6038);const f=d.Z.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  padding: 4px 12px;
  font-weight: 600;
  border-radius: 20px;
  cursor: pointer;
  background-color: ${e=>{let{backgroundColor:t}=e;return t||"#f5f5f5"}};
  color: ${e=>{let{color:t}=e;return t||"#333"}};
  transition: 0.2s ease-in-out opacity;

  &:hover {
    opacity: 0.7;
  }
`,h=e=>{let{text:t,backgroundColor:r,color:a,imageUrl:o}=e;return n.createElement(f,{backgroundColor:r,color:a},t)};var x=r(7462),b=r(4996);const E=e=>{let{src:t,alt:r,...a}=e;const o=t.startsWith("@site/static");return n.createElement("img",(0,x.Z)({src:(0,b.Z)(o?t.replace("@site/static",""):t),alt:r},a))},Z=(0,n.forwardRef)(((e,t)=>{let{typography:r,children:a,...o}=e;return(0,n.useMemo)((()=>{switch(r){case"h1":return n.createElement(k,(0,x.Z)({ref:t},o),a);case"h2":return n.createElement(y,(0,x.Z)({ref:t},o),a);case"h3":return n.createElement(w,(0,x.Z)({ref:t},o),a);default:return n.createElement(v,(0,x.Z)({ref:t},o),a)}}),[r])})),k=d.Z.h1`
  font-size: 46px;
  font-weight: 800;
`,y=d.Z.h2`
  font-size: 36px;
  font-weight: 800;
`,w=d.Z.h3`
  font-size: 32px;
  font-weight: 700;
`,v=d.Z.p`
  font-size: 18px;
  font-weight: 500;
`,C=Z,U=e=>{let{title:t}=e;return n.createElement("div",null,t)},z=d.Z.div`
  margin-bottom: 40px;
`,R=[{title:"\ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c\uc790"},{title:"\ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c\uc790"}],P=e=>n.createElement(z,null,R.map((e=>n.createElement(U,(0,x.Z)({key:e.title},e)))));var $=r(8716);const F=d.Z.div`
  background-color: transparent;
  position: relative;
  perspective: 3000px;
  height: 100%;
  width: 100%;
  height: 400px;
  transition: transform 0.8s;
  will-change: transform;
  transform-style: preserve-3d;
  transform: ${e=>{let{isFlipped:t}=e;return t&&"rotateY(180deg)"}};
  cursor: pointer;
`,B=d.Z.div`
  position: absolute;
  top: 0;
  left: 0;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  transform: ${e=>{let{side:t}=e;return"BACK"===t&&"rotateY(180deg)"}};
  transform-style: preserve-3d;
  will-change: transform;
  overflow: hidden;
  width: 100%;
  height: 100%;
`,T=e=>{let{cardFront:t,cardBack:r,height:a,width:o,...i}=e;const[l,c]=(0,n.useState)(!1),[s,d]=(0,n.useState)(!1);return n.createElement(F,(0,x.Z)({isFlipped:l,onClick:()=>{s||(d(!0),c((e=>!e)),setTimeout((()=>{d(!1)}),600))},width:o,height:a},i),n.createElement(B,{side:"FRONT"},t),n.createElement(B,{side:"BACK"},r))},I=e=>{let{title:t,description:r,imageUrl:a,backgroundColor:o}=e;return n.createElement(N,{backgroundColor:o,className:"interest-card"},n.createElement(Q,null,t),n.createElement(X,null,r),n.createElement(A,{src:a,alt:t}))},L=e=>{let{title:t,description:r,imageUrl:a,backgroundColor:o}=e;return n.createElement(N,{backgroundColor:o,className:"interest-card"},n.createElement(Q,null,t,"dd"),n.createElement(X,null,r),n.createElement(A,{src:a,alt:t}))},N=(0,d.Z)($.E.div)`
  background-color: ${e=>{let{backgroundColor:t}=e;return t||"white"}};
  width: auto;
  border-radius: 20px;
  padding: 32px;
  width: 100%;
  height: 400px;
  display: inline-block;
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
    transition: 0.2s ease-in-out all;
  }
`,Q=d.Z.h3`
  font-size: 32px;
  color: #eee;
  font-weight: 800;
`,X=d.Z.p`
  font-size: 18px;
  font-weight: 600;
`,A=(0,d.Z)(E)`
  width: 128px;
  height: 128px;
  position: absolute;
  bottom: 40px;
  right: 40px;
  border-radius: 28px;
`,K=e=>{let{title:t,description:r,imageUrl:a,backgroundColor:o}=e;const i={title:t,description:r,imageUrl:a,backgroundColor:o};return n.createElement(T,{cardFront:n.createElement(I,i),cardBack:n.createElement(L,i)})},M=d.Z.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin: 0 auto 40px auto;
`,S=[{title:"UI/UX",description:"\uc778\ud130\ub809\uc158\uc744 \ud1b5\ud574 \uc0ac\uc6a9\uc790\uc640 \uc18c\ud1b5\ud569\ub2c8\ub2e4.",backgroundColor:"#f54290",imageUrl:"img/RootPage/interaction.png"},{title:"\ud074\ub77c\uc6b0\ub4dc",description:"\ud074\ub77c\uc6b0\ub4dc\uac00 \uac00\uc9c4 \ubb34\ud55c\ud55c \uac00\ub2a5\uc131\uc744 \ubbff\uace0 \uc788\uc2b5\ub2c8\ub2e4.",backgroundColor:"#f5a742",imageUrl:"img/RootPage/lambda.png"},{title:"\ud504\ub860\ud2b8\uc5d4\ub4dc",description:"\ud504\ub860\ud2b8\uc5d4\ub4dc\ub294 \uc0ac\uc6a9\uc790 \uacbd\ud5d8\uc744 \ub9cc\ub4ed\ub2c8\ub2e4.",backgroundColor:"#2bcf93",imageUrl:""},{title:"\ucee8\ud14c\uc774\ub108",description:"\ucee8\ud14c\uc774\ub108 \uac00\uc0c1\ud654\uac00 \ubcf4\uc5ec\uc8fc\ub294 \uae30\uc220\ub4e4\uc5d0\ub3c4 \uad00\uc2ec\uc774 \ub9ce\uc2b5\ub2c8\ub2e4.",backgroundColor:"#3281db",imageUrl:"img/RootPage/container.png"}],W=e=>((0,n.useLayoutEffect)((()=>{g.ZP.fromTo(".interest-card",{opacity:0,y:50},{opacity:1,y:0,stagger:{each:.25,from:0}})}),[]),n.createElement(M,null,S.map((e=>n.createElement(K,(0,x.Z)({},e,{key:e.title})))))),Y=d.Z.div`
  position: relative;
  padding: 60px 0 120px 0;
  background-color: rgba(0, 0, 0, 0.02);
`,_=d.Z.div`
  margin: 32px 0 60px 0;
`,q=d.Z.div`
  background-color: rgba(0, 0, 0, 0, 0.01);
  /* border: 1px solid rgba(0, 0, 0, 0.05); */
  /* box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.05); */
  backdrop-filter: blur(8px);
  padding: 64px 80px;
  border-radius: 40px;
  max-width: min(1140px, 86%);
  margin: 0 auto;
`,D=d.Z.div`
  display: flex;
  gap: 8px;
`,G=(0,d.Z)(C)`
  margin-bottom: 24px;
`,H=((0,d.Z)(E)`
  position: absolute;
  max-width: 300px;
  border-radius: 20px;
  top: 0;
  z-index: -1;
  transform: rotateX(-60deg) rotateZ(-40deg);
`,(0,d.Z)(E)`
  position: absolute;
  max-width: 200px;
  border-radius: 20px;
  top: 200px;
  right: 200px;
  z-index: -1;
  transform: rotateZ(20deg);
`,(0,d.Z)(E)`
  position: absolute;
  max-width: 300px;
  border-radius: 20px;
  top: 0;
  z-index: -1;
  transform: rotateX(-60deg) rotateZ(-40deg);
`,e=>{const t=(0,n.useRef)(null),r=(0,n.useRef)(null),a=(0,n.useRef)(null);(0,n.useLayoutEffect)((()=>{g.ZP.to(r.current,{duration:1})}),[]);(0,l.useQuery)(p,m);return n.createElement(Y,{ref:t},n.createElement(q,null,n.createElement(C,{typography:"h1",ref:r},"\uc548\ub155\ud558\uc138\uc694!"),n.createElement(C,{typography:"h1",ref:r},"\ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c\uc790, \uae40\ucc2c\ubbfc\uc785\ub2c8\ub2e4."),n.createElement(D,null,n.createElement(h,{text:"LinkedIn",backgroundColor:"#0e76a8",color:"#fff"}),n.createElement(h,{text:"Github",backgroundColor:"#000",color:"#fff"})),n.createElement(_,null,n.createElement("div",null,"\ubcf5\uc7a1\ud55c \uc815\ubcf4\ub97c \uc608\uc058\uace0 \uac04\ub2e8\ud558\uac8c \uc804\ub2ec\ud560 \uc218 \uc788\ub294 UI\uc758 \ub9e4\ub825\uc5d0 \uc774\ub04c\ub824 \ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c\uc744 \uc2dc\uc791\ud558\uac8c \ub418\uc5c8\uc2b5\ub2c8\ub2e4."),n.createElement("div",null,"\uc0c8\ub85c\uc6b4 \uae30\uc220\uc744 \ubc30\uc6b0\ub294 \uac83\uc744 \ub450\ub824\uc6cc\ud558\uc9c0 \uc54a\uc73c\uba70, \uae30\uc220\ub85c \ub354 \ud3b8\ub9ac\ud55c \uc138\uc0c1\uc744 \ub9cc\ub4dc\ub294 \ub370\uc5d0 \uae30\uc5ec\ud558\uace0 \uc2f6\uc2b5\ub2c8\ub2e4.")),n.createElement(G,{typography:"h3",ref:a},"\uc774\ub7f0 \uae30\uc220\ub4e4\uc5d0 \uad00\uc2ec\uc774 \ub9ce\uc2b5\ub2c8\ub2e4."),n.createElement(W,null),n.createElement(G,{typography:"h3",ref:a},"\uc774\ub7f0 \uacbd\ud5d8\ub4e4\uc744 \uc313\uc544 \uc654\uc2b5\ub2c8\ub2e4."),n.createElement(P,null),n.createElement(C,{typography:"h3",ref:a},"\uadf8\ub9ac\uace0, \uc774\ub7f0 \uac1c\ubc1c\uc790\uac00 \ub418\uace0\uc790 \ud569\ub2c8\ub2e4.")))});function O(){const{siteConfig:e}=(0,a.Z)();return n.createElement("header",null)}function j(){const{siteConfig:e}=(0,a.Z)();return n.createElement(s,{title:`Hello from ${e.title}`,description:"Description will go into a meta tag in <head />"},n.createElement(O,null),n.createElement("main",null,n.createElement(H,null)))}}}]);