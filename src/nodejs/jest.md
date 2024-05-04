# 集成 Jest 到 TypeScript 项目

## 安装

安装 jest、类型库，及其 TypeScript 编译工具：

```bash
pnpm add --save-dev jest @types/jest ts-jest

# 初始化jest配置文件
pnpx ts-jest config:init # 若 package.json 中已配置type为module，则需要修改生成后的jest.config.js 后缀名为 .ts
```

修改 tsconfig.json 的 types 字段：

```json
{
  // ...
  "types": ["node", "jest"] // 添加 jest
}
```

修改 package.json 的 scripts 字段，添加 test 命令：

```json
{
  // ...
  "scripts": {
    "test": "jest"
    // ...
  }
}
```

## 创建单元测试

在根目录下创建 `tests` 目录，并在其中以 `name.test.ts` 为格式创建文件，进行单元测试编码：

```typescript
// 引入待测试方法
import { base64 } from "../src/libs/encrypt";

// 测试该方法
test("base64", () => {
  expect(base64("123456_aA")).toBe("MTIzNDU2X2FB");
});
```

## 执行测试

```bash
pnpm test
```

输出结果如下

```bash
> jest

  console.log
    base64:  123456_aA

      at base64 (src/libs/encrypt.ts:23:11)

 PASS  tests/encrypt.test.ts
  √ base64 (21 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        1.486 s
Ran all test suites.
```

## 参考资料

- https://jestjs.io/docs/getting-started#using-typescript
- https://kulshekhar.github.io/ts-jest/docs/getting-started/installation/#jest-config-file
