import _ from 'lodash';

function component() {
  var element = document.createElement('div');

  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  element.innerHTML = _.join(['Hello', 'webpack', 'build', 'npx webpack'], ' ');

  return element;
}

document.body.appendChild(component());

// 依赖css
require('./sass/style.scss');
