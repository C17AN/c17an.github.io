# Get started

[Fastify](https://www.fastify.io/)는 Node.js에서 **고성능의** 서버를 구축하는 것에 초점을 맞춘 프레임워크입니다.  
이 문서에서는 Fastify를 타입스크립트와 함께 설정하는 방법을 정리합니다.

## 설치

```bash
yarn init -y
yarn add fastify
yarn add -D typescript @types/node
```

타입스크립트 설치가 끝났다면 타입스크립트 설정 파일(tsconfig.json)을 추가합니다.  
(또는 [권장 설정](https://github.com/tsconfig/bases#node-14-tsconfigjson)을 사용할 수도 있습니다.)

```bash
npx tsc --init
```

:::tip 다음 두 가지 속성을 수정해 주세요.

 1. `target` 속성을 "es2017" 이상으로 수정해야 [FastifyDeprecation](https://github.com/fastify/fastify/issues/3284) 경고를 피할 수 있습니다.
 2. `"moduleResolution": "NodeNext"` 속성을 `package.json` 의 `"type": "module"` 과 함께 사용하면 경고가 출력될 수 있습니다. [이슈 링크](https://github.com/fastify/fastify/issues/4241)
:::



타입스크립트 설정까지 생성한 뒤에는 `package.json`에 `"scripts"` 속성을 추가합니다.

```json
{
  "scripts": {
    "build": "tsc -p tsconfig.json",
    "start": "node index.js"
  }
}
```

이제 `index.ts` 파일을 생성한 뒤 첫 번째 Fastify 어플리케이션을 작성해 보겠습니다.

```ts
import fastify from 'fastify'

const server = fastify()

server.get('/ping', async (request, reply) => {
  return 'pong\n'
})

server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})
```

이제 타입스크립트 파일을 빌드하기 위해 `yarn build` 를 실행하면 컴파일된 `index.js` 파일이 생성됩니다.  

마지막으로 `yarn start` 로 어플리케이션을 실행한 뒤, 브라우저 주소창에 `localhost:8080/ping` 을 입력하면 서버가 제대로 응답을 보내는 것을 확인할 수 있습니다.