import * as THREE from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
import {RoomEnvironment} from 'three/addons/environments/RoomEnvironment.js';

const chapters=[
  {
    key:'experience', kicker:'01 / EXPERIENCE', title:'제품을 만들고,<br>경험을 다듬다.',
    summary:'브랜드 웹부터 소비자 서비스, AI 제품까지. 규모와 맥락이 다른 화면을 사용자의 관점에서 설계했습니다.',
    scene:'01 / CAREER FORM', caption:'TOSS → PRODUCT → AI',
    items:[
      {name:'Toss',meta:'2022.07 — 2023.04',detail:'캠페인·채용·브랜드 웹사이트 개발과 운영'},
      {name:'SK Planet · Product',meta:'2023.08 — 현재',detail:'UPTN Station과 OK캐쉬백 오키클럽의 웹 경험 개발'},
      {name:'SK Planet · 10x TF',meta:'2026.01 — 현재',detail:'AI 에이전트 관리 포털과 협업 도구 구현'}
    ]
  },
  {
    key:'impact', kicker:'02 / IMPACT', title:'측정하고,<br>더 빠르게 만들다.',
    summary:'화면의 로딩 속도와 팀의 개발 속도를 함께 개선했습니다. 수치는 이력서에 기록한 해당 작업의 결과입니다.',
    scene:'02 / MEASURED CHANGE', caption:'PERFORMANCE / PRODUCTIVITY / OPERATIONS',
    items:[
      {name:'600 → 200ms대',meta:'주요 페이지 FCP',detail:'TanStack Query의 캐시 전략과 스켈레톤 UI 적용'},
      {name:'15 → 1초 미만',meta:'로컬 서버 실행',detail:'vue-cli 환경을 Vite로 이전해 개발 대기 시간 단축'},
      {name:'30 → 10분 이내',meta:'반복 업무 처리',detail:'개인정보처리방침 반영 작업을 CLI로 자동화'}
    ]
  },
  {
    key:'toolkit', kicker:'03 / TOOLKIT', title:'인터페이스를<br>시스템으로 만들다.',
    summary:'화면 하나의 완성도와 다음 화면을 만드는 효율을 함께 고려합니다. 재사용 가능한 구조가 더 나은 제품을 만듭니다.',
    scene:'03 / LAYERED PRACTICE', caption:'FRONTEND / INTERACTION / DELIVERY',
    items:[
      {name:'React · TypeScript',meta:'FRONTEND',detail:'Next.js, Vue 3, Pinia를 포함한 제품 프론트엔드 개발'},
      {name:'GSAP · Storybook',meta:'INTERACTION & SYSTEMS',detail:'스크롤 인터랙션, 접근성, 디자인 토큰 기반 컴포넌트'},
      {name:'TanStack Query · Vite',meta:'DELIVERY',detail:'데이터 캐싱, 개발 환경 개선, 크로스 브라우징 대응'}
    ]
  },
  {
    key:'ai', kicker:'04 / AI PRACTICE', title:'AI와 함께<br>일하는 방식을 만들다.',
    summary:'현재 SK플래닛 10x TF에서 에이전트와 사람이 상호작용하는 화면을 만들고, 팀의 반복 작업을 자동화하고 있습니다.',
    scene:'04 / CONNECTED INTELLIGENCE', caption:'AGENT UI / PROTOTYPE / AUTOMATION',
    items:[
      {name:'Agent UI',meta:'SSE · OAuth',detail:'AI 에이전트 채팅과 Google OAuth 기반 권한 흐름 구현'},
      {name:'Prototyping',meta:'DESIGN SYSTEM · MCP',detail:'대시보드 GUI 프로토타입과 일부 백엔드 기능 검증'},
      {name:'Automation',meta:'TEAM WORKFLOW',detail:'회의록·주간 업무 정리 등을 재사용 가능한 Skill로 구성'}
    ]
  }
];

const chapterElement=document.querySelector('#chapter');
const chapterButtons=[...document.querySelectorAll('[data-chapter]')];
const itemContainer=document.querySelector('#chapter-items');
let activeChapter=0;
let activeItem=0;
let modelGroups=[];
const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)');

function selectItem(index){
  activeItem=index;
  [...itemContainer.querySelectorAll('button')].forEach((button,i)=>button.setAttribute('aria-pressed',String(i===index)));
  const roots=modelGroups[activeChapter]?.userData.itemRoots||[];
  roots.forEach((root,i)=>root.userData.targetScale=i===index?1.08:.96);
}

function renderChapter(index){
  activeChapter=index;
  const chapter=chapters[index];
  chapterElement.dataset.mode=chapter.key;
  document.querySelector('#chapter-kicker').textContent=chapter.kicker;
  document.querySelector('#chapter-title').innerHTML=chapter.title;
  document.querySelector('#chapter-summary').textContent=chapter.summary;
  document.querySelector('#stage-index').textContent=chapter.scene;
  document.querySelector('#stage-caption').textContent=chapter.caption;
  chapterButtons.forEach((button,i)=>button.setAttribute('aria-pressed',String(i===index)));
  itemContainer.replaceChildren();
  chapter.items.forEach((item,i)=>{
    const button=document.createElement('button');button.type='button';button.className='item';button.setAttribute('aria-pressed','false');
    const number=document.createElement('span');number.className='item-index';number.textContent=String(i+1).padStart(2,'0');
    const body=document.createElement('span');const name=document.createElement('strong');name.textContent=item.name;
    const meta=document.createElement('small');meta.textContent=item.meta;
    const detail=document.createElement('span');detail.className='item-detail';detail.textContent=item.detail;
    body.append(name,meta,detail);button.append(number,body);button.addEventListener('click',()=>selectItem(i));itemContainer.append(button);
  });
  selectItem(0);
  modelGroups.forEach((group,i)=>group.userData.target=i===index?1:0);
}

chapterButtons.forEach((button,index)=>{
  button.addEventListener('click',()=>renderChapter(index));
  button.addEventListener('keydown',event=>{
    if(event.key!=='ArrowLeft'&&event.key!=='ArrowRight')return;
    event.preventDefault();const next=(index+(event.key==='ArrowRight'?1:chapters.length-1))%chapters.length;
    renderChapter(next);chapterButtons[next].focus();
  });
});

const canvas=document.querySelector('#scene');
let renderer;
try{renderer=new THREE.WebGLRenderer({canvas,alpha:true,antialias:true,powerPreference:'high-performance'});}
catch(error){console.error('Resume scene unavailable',error);document.querySelector('#scene-fallback').hidden=false;renderChapter(0);}

if(renderer){
  renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.8));
  renderer.outputColorSpace=THREE.SRGBColorSpace;
  renderer.toneMapping=THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure=1.35;
  const scene=new THREE.Scene();
  const environment=new THREE.PMREMGenerator(renderer);
  scene.environment=environment.fromScene(new RoomEnvironment()).texture;
  environment.dispose();
  const camera=new THREE.PerspectiveCamera(37,1,.1,100);
  camera.position.set(7.8,5.5,11);
  const controls=new OrbitControls(camera,canvas);
  controls.target.set(0,1.5,0);controls.enableDamping=true;controls.dampingFactor=.07;controls.enablePan=false;
  controls.minDistance=8;controls.maxDistance=19;controls.minPolarAngle=.45;controls.maxPolarAngle=1.55;
  controls.autoRotate=!reducedMotion.matches;controls.autoRotateSpeed=.28;
  const syncMotion=event=>{controls.autoRotate=!event.matches};
  if(reducedMotion.addEventListener)reducedMotion.addEventListener('change',syncMotion);
  else reducedMotion.addListener(syncMotion);
  scene.add(new THREE.HemisphereLight(0xb9e9fa,0x173247,2.25));
  const cool=new THREE.DirectionalLight(0x9ce0fa,4.5);cool.position.set(-5,8,6);scene.add(cool);
  const warm=new THREE.DirectionalLight(0xffa477,3);warm.position.set(6,4,-3);scene.add(warm);

  const mat=(color,metal=.4,rough=.3,emissive=0x000000,intensity=0)=>new THREE.MeshPhysicalMaterial({color,metalness:metal,roughness:rough,clearcoat:.8,clearcoatRoughness:.19,emissive,emissiveIntensity:intensity});
  const deep=()=>mat(0x1b3545,.72,.28),sky=()=>mat(0x83d7f1,.5,.26,0x267994,.23),orange=()=>mat(0xff8857,.35,.28,0x974019,.22),silver=()=>mat(0xb9d5df,.75,.22);
  function mesh(parent,geometry,material,x=0,y=0,z=0){const result=new THREE.Mesh(geometry,material);result.position.set(x,y,z);result.castShadow=true;result.receiveShadow=true;parent.add(result);return result}
  function cylinder(parent,rTop,rBottom,height,segments,material,x=0,y=0,z=0){return mesh(parent,new THREE.CylinderGeometry(rTop,rBottom,height,segments),material,x,y,z)}
  function box(parent,w,h,d,material,x=0,y=0,z=0){return mesh(parent,new THREE.BoxGeometry(w,h,d),material,x,y,z)}
  function ring(parent,radius,tube,material,x=0,y=0,z=0){const result=mesh(parent,new THREE.TorusGeometry(radius,tube,12,96),material,x,y,z);result.rotation.x=Math.PI/2;return result}
  function tube(parent,points,radius,material){const curve=new THREE.CatmullRomCurve3(points.map(point=>new THREE.Vector3(...point)));return mesh(parent,new THREE.TubeGeometry(curve,64,radius,8,false),material)}
  const labelTextures=[];
  function label(parent,text,x,y,z,width=1.7,color='#eaf8fb'){
    const surface=document.createElement('canvas');surface.width=512;surface.height=128;
    const context=surface.getContext('2d');
    const draw=()=>{context.clearRect(0,0,512,128);context.fillStyle=color;context.strokeStyle='#102330';context.lineWidth=5;context.textAlign='center';context.textBaseline='middle';context.font='800 53px Pretendard, Arial, sans-serif';context.strokeText(text,256,65,490);context.fillText(text,256,65,490)};
    draw();const texture=new THREE.CanvasTexture(surface);texture.colorSpace=THREE.SRGBColorSpace;
    const sprite=new THREE.Sprite(new THREE.SpriteMaterial({map:texture,transparent:true,depthTest:false}));
    sprite.position.set(x,y,z);sprite.scale.set(width,width*.25,1);parent.add(sprite);labelTextures.push({texture,draw});return sprite;
  }
  document.fonts.ready.then(()=>labelTextures.forEach(({texture,draw})=>{draw();texture.needsUpdate=true}));
  function floor(parent,accent=sky()){
    cylinder(parent,3.75,3.82,.12,96,deep(),0,-.12,0);
    ring(parent,3.49,.018,accent,0,-.035,0);
    for(let i=-3;i<=3;i++){const rail=box(parent,6.4,.005,.012,mat(0x39708a,.2,.65),0,-.048,i*.85);rail.castShadow=false}
  }
  function itemRoot(parent,index,x=0,y=0,z=0){const root=new THREE.Group();root.position.set(x,y,z);root.userData.item=index;root.userData.targetScale=index===0?1.08:.96;parent.add(root);return root}

  function career(){
    const group=new THREE.Group();const roots=[];floor(group,orange());
    const heights=[1.75,2.5,3.25],positions=[[-2.45,-.35],[0,0],[2.45,.35]],names=['TOSS','PRODUCT','AI TF'];
    positions.forEach(([x,z],i)=>{
      const root=itemRoot(group,i,x,0,z);roots.push(root);
      cylinder(root,.77,.84,.12,8,deep(),0,.08,0);
      cylinder(root,.56,.7,heights[i],6,i===2?orange():i===1?sky():silver(),0,heights[i]/2+.15,0);
      cylinder(root,.61,.61,.075,6,deep(),0,heights[i]+.19,0);
      ring(root,.57,.035,i===2?orange():sky(),0,heights[i]+.23,0);
      mesh(root,new THREE.IcosahedronGeometry(.16,1),i===2?orange():sky(),0,heights[i]+.45,0);
      label(root,names[i],0,heights[i]+.9,.12,1.8);
    });
    tube(group,[[-2.45,heights[0]+.45,-.35],[-1.2,heights[0]+.95,-.1],[0,heights[1]+.45,0],[1.2,heights[1]+.95,.2],[2.45,heights[2]+.45,.35]],.025,orange());
    group.userData.itemRoots=roots;return group;
  }
  function impact(){
    const group=new THREE.Group();const roots=[];floor(group,sky());
    const ratios=[.67,.93,.75],names=['FCP','VITE','CLI'],colors=[sky,orange,sky];
    for(let i=0;i<3;i++){
      const root=itemRoot(group,i,(i-1)*2.55,0,0);roots.push(root);
      cylinder(root,.66,.73,.18,10,deep(),0,.1,0);
      cylinder(root,.07,.07,1.45,12,silver(),0,.93,0);
      const back=mesh(root,new THREE.TorusGeometry(.9,.085,12,96),deep(),0,1.8,0);
      back.rotation.y=.12;
      const arc=mesh(root,new THREE.TorusGeometry(.9,.095,12,96,ratios[i]*Math.PI*2),colors[i](),0,1.8,.03);
      arc.rotation.z=-Math.PI/2;arc.rotation.y=.12;
      mesh(root,new THREE.IcosahedronGeometry(.36,2),i===1?orange():sky(),0,1.8,.11);
      label(root,names[i],0,3.07,0,1.55);
    }
    group.userData.itemRoots=roots;return group;
  }
  function toolkit(){
    const group=new THREE.Group();const roots=[];floor(group,orange());
    const names=['REACT / TS','MOTION / UI','DELIVERY'];
    for(let i=0;i<3;i++){
      const root=itemRoot(group,i,(i-1)*2.48,0,0);roots.push(root);
      cylinder(root,.71,.78,.15,8,deep(),0,.09,0);
      cylinder(root,.06,.06,2.5,12,silver(),0,1.42,0);
      for(let layer=0;layer<5;layer++){
        const plate=box(root,1.58,.2,1.18,(layer+i)%3===0?orange():(layer+i)%2===0?silver():sky(),0,.55+layer*.48,0);
        plate.rotation.y=(layer%2?-.12:.12)+(i-1)*.08;
        const edge=new THREE.LineSegments(new THREE.EdgesGeometry(plate.geometry),new THREE.LineBasicMaterial({color:0xe7f7fb,transparent:true,opacity:.25}));plate.add(edge);
      }
      label(root,names[i],0,3.35,0,2.1);
    }
    group.userData.itemRoots=roots;return group;
  }
  function ai(){
    const group=new THREE.Group();const roots=[];floor(group,sky());
    const core=mesh(group,new THREE.IcosahedronGeometry(1.02,3),deep(),0,1.72,0);
    core.material.emissive.set(0x1a6788);core.material.emissiveIntensity=.5;
    const cage=new THREE.LineSegments(new THREE.EdgesGeometry(new THREE.IcosahedronGeometry(1.32,1)),new THREE.LineBasicMaterial({color:0x9ee8fb,transparent:true,opacity:.52}));cage.position.y=1.72;group.add(cage);
    ring(group,1.55,.026,orange(),0,1.72,0).rotation.z=.37;
    const nodes=[[-2.55,1.15,.1],[.05,3.75,-.4],[2.55,1.15,.1]],names=['SSE','MCP','SKILLS'];
    nodes.forEach(([x,y,z],i)=>{
      tube(group,[[0,1.72,0],[x*.45,(y+1.72)/2,z*.45],[x,y,z]],.022,i===1?orange():sky());
      const root=itemRoot(group,i,x,y,z);roots.push(root);
      mesh(root,new THREE.IcosahedronGeometry(.37,2),i===1?orange():sky());
      ring(root,.53,.025,silver()).rotation.x=i===1?.45:Math.PI/2;
      label(root,names[i],0,.76,0,1.6);
    });
    group.userData.itemRoots=roots;group.userData.cage=cage;return group;
  }

  modelGroups=[career(),impact(),toolkit(),ai()];
  modelGroups.forEach((group,index)=>{
    scene.add(group);group.userData.blend=index===0?1:0;group.userData.target=index===0?1:0;group.visible=index===0;
    group.traverse(object=>{
      if(!object.material)return;
      object.material=object.material.clone();
      object.userData.baseOpacity=object.material.opacity;
      object.userData.baseTransparent=object.material.transparent;
      object.userData.baseDepthWrite=object.material.depthWrite;
    });
  });
  renderChapter(0);
  const raycaster=new THREE.Raycaster(),pointer=new THREE.Vector2();
  function pickedItem(event){
    const rect=canvas.getBoundingClientRect();
    pointer.set((event.clientX-rect.left)/rect.width*2-1,-(event.clientY-rect.top)/rect.height*2+1);
    raycaster.setFromCamera(pointer,camera);
    const hits=raycaster.intersectObjects(modelGroups[activeChapter].children,true);
    for(const hit of hits){let object=hit.object;while(object&&!Number.isInteger(object.userData.item))object=object.parent;if(object)return object.userData.item}
    return null;
  }
  let down=null;
  canvas.addEventListener('pointerdown',event=>{down={x:event.clientX,y:event.clientY}});
  canvas.addEventListener('pointerup',event=>{
    if(!down||Math.hypot(event.clientX-down.x,event.clientY-down.y)>6){down=null;return}
    const item=pickedItem(event);if(item!==null)selectItem(item);down=null;
  });
  canvas.addEventListener('pointermove',event=>{if(event.buttons)return;canvas.style.cursor=pickedItem(event)===null?'grab':'pointer'});
  function resize(){
    const width=canvas.clientWidth,height=canvas.clientHeight;if(!width||!height)return;
    renderer.setSize(width,height,false);camera.aspect=width/height;camera.updateProjectionMatrix();
    camera.position.set(width<600?7.8:7.8,width<600?5.8:5.5,width<600?13.8:11);
    controls.update();
  }
  new ResizeObserver(resize).observe(canvas);resize();
  const clock=new THREE.Clock();
  function animate(){
    requestAnimationFrame(animate);
    const elapsed=clock.getElapsedTime();
    modelGroups.forEach((group,index)=>{
      const target=group.userData.target;
      group.userData.blend=reducedMotion.matches?target:THREE.MathUtils.lerp(group.userData.blend,target,.105);
      const blend=group.userData.blend;
      group.visible=blend>.006;
      if(!group.visible)return;
      group.scale.setScalar(.82+.18*blend);
      group.rotation.y=(index===3?Math.sin(elapsed*.22)*.09:Math.sin(elapsed*.16)*.025);
      group.traverse(object=>{
        if(!object.material)return;
        const base=object.userData.baseOpacity??1;
        object.material.opacity=base*blend;
        object.material.transparent=object.userData.baseTransparent||blend<.99||base<1;
        object.material.depthWrite=object.userData.baseDepthWrite&&blend>.99;
      });
      for(const root of group.userData.itemRoots){const next=root.userData.targetScale||.96;root.scale.lerp(new THREE.Vector3(next,next,next),reducedMotion.matches?1:.12)}
    });
    controls.update();
    if(!document.hidden)renderer.render(scene,camera);
  }
  animate();
}
