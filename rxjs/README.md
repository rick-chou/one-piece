> 本节的所有代码都在这个 👉<a href="https://github.com/rick-chou/one-piece/tree/main/rxjs">仓库</a>

## 背景

由于最近工作的变更 技术栈由 `React` 变成了 `Angular2.0+`

回想第一次接触 `Angular` 还是两年前的实习期 那时维护的是一个老项目 由 `angular1.0` 搭建

还记得那个项目 所有逻辑都由一个 `controller` 编写 一个 js 文件 就有 8000+ 的代码量

而我也成功的完成了扩容了任务 两个月内达到了 10000+ 的容量 🤣

回到正题 以下是作者近两周学习 `Angular` 的笔记 （ PS: Angular 的官方文档写的真的不错 ｜ 对比隔壁 React 😅 )

因为官方文档已经相当详细了 所以这里我只摘录一些基本的用法 站在一个初学者的角度

希望能给想快速学习 `Angular` 的人有一些帮助

下面附上一些 Links 希望对你的学习有帮助

> https://angular.io/ Angular 英文官网

> https://angular.cn/ Angular 中文官网 （ PS: 可以点击每一行来显示英语原文 也是学习英语的一个网站 🤣 )

> https://rxjs.dev/ RxJS 英文官网

> https://www.learnrxjs.io/ 可以作为官网的补充文档来看 对每一个 API 有非常详细的 DEMO

> https://reactive.how/ 用动图的形式更加直观的介绍每一个 RxJS Operation 的工作流

## 传送门 🌈

- <a href="https://juejin.cn/post/6995070859840847902/">Angular 小册 ｜ RxJS</a> ✅ ✅

- <a href="https://juejin.cn/post/6995070859840847902/">Angular 小册 ｜ 项目结构</a> ✅ ✅

- <a href="https://juejin.cn/post/6995070859840847902/">Angular 小册 ｜ 基础语法</a> ✅ ✅

- <a href="https://juejin.cn/post/6995070859840847902/">Angular 小册 ｜ Router</a> ✅ ✅

- <a href="https://juejin.cn/post/6995070859840847902/">Angular 小册 ｜ Service</a> ✅ ✅

- <a href="https://juejin.cn/post/6995070859840847902/">Angular 小册 ｜ 一些生态</a> ✅ ✅

## RxJS

这里直接借用官方的一句话

> 你可以把 RxJS 想象成处理事件的 Lodash

Observable (可观察对象): 表示一个概念，这个概念是一个可调用的未来值或事件的集合。
Observer (观察者): 一个回调函数的集合，它知道如何去监听由 Observable 提供的值。
Subscription (订阅): 表示 Observable 的执行，主要用于取消 Observable 的执行。
Operators (操作符): 采用函数式编程风格的纯函数 (pure function)，使用像 map、filter、concat、flatMap 等这样的操作符来处理集合。
Subject (主体): 相当于 EventEmitter，并且是将值或事件多路推送给多个 Observer 的唯一方式。
Schedulers (调度器): 用来控制并发并且是中央集权的调度员，允许我们在发生计算时进行协调，例如 setTimeout 或 requestAnimationFrame 或其他。

## Observation

## Subject

## Operation
