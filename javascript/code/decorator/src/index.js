@logClassSelf
class Programmer {
  constructor(nickname) {
    this.nickname = nickname;
  }
  @logClassMember
  static department = 'FE';

  @logClassMember
  coding() {
    console.log('bug fix......');
  }
}

/**
 *
 * @param {*} target 被修饰的类
 */
function logClassSelf(target) {
  console.log('target', target); // target [Function: Programmer]
  target.prototype.logger = () => console.log(`我是${target.name}类`);
}

/**
 *
 * @param {*} target 对于静态成员来说是构造函数 对于实例成员来说是原型对象
 * @param {*} name 被修饰成员的名字
 * @param {*} descriptor 被修饰成员的属性描述符 enumerable & configurable & writable | initializer
 */
function logClassMember(target, name, descriptor) {
  console.log('target:', target);
  console.log('name:', name);
  console.log('descriptor:', descriptor);
}
