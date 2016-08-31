import Info from '../../components/home/index-info.jsx';
import url from '../ajaxurl';
console.log(url); // 根据NODE_DEV环境变量不同,使用不同的server
ReactDOM.render(<Info />, document.getElementById('container'));