import s from './Container.module.css';

const Container = ({ children, name }) => <div className={`${s.container} ${name}`}>{children}</div>;

export default Container;
