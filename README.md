# react-loading

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

Loading 组件

## 安装

```sh
npm i @aximario/react-loading -S
```

## API

| 属性 | 描述 | 类型 | 默认值 |
| ---- | ---- | ---- |------- |
| type | loading 类型 | string | default |
| size | loading 大小 | string | `24px` |
| color | loading 颜色 | string | `#000` |
| className | classname | string | - |
| style | style | CSSProperties | `{}` |

> className 和 style 设置的颜色无效，只有 color 属性能控制颜色

### type

loading 目前有 `3` 种类型

| 值 | 示例 |
| -- | ---- |
| default | ![](./svg/default.svg) |
| dotFade | ![](./svg/dotFade.svg) |
| dotWave | ![](./svg/dotWave.svg) |

## 使用

```jsx
// 默认
<Loading />

// 修改各种属性
<Loading
  type="dotFade"
  size="30px"
  color="#888"
  className="loading"
  style={{ marginLeft: '10px' }}
/>
```
