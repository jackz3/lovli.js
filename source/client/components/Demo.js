import React from 'react';

import Logo from './Logo';
import TodoList from './todos/TodoList';
import AddTodoButton from './todos/AddTodoButton';
import { Row, Col,Input,Select,Radio } from 'antd';

import 'static/vendor/font-awesome/css/font-awesome.min.css';
import 'static/vendor/antd/antd.min.css';
import styles from 'styles/app';

const RadioGroup = Radio.Group;
const Option = Select.Option;
let children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

function handleChange(value) {
  console.log(`selected ${value}`);
}



const App = () => (
  <div>
    <div className={styles.container} style={{width:'90%'}}>
      {/*<Logo />*/}
      <p className={styles.tCenter}>
        <b>Welcome.</b>
        <br />
        You're connected to <a href="https://github.com/rethinkdb/horizon" target="_blank">horizon</a>.
      </p>
      <TodoList limit={100} />
      <AddTodoButton />
      <div>
        <Row>
          <Col span={6}><Input placeholder="基本使用" /></Col>
          <Col span={6}>
            <Select style={{width:'100%'}}>
              <Option value="lucy">lucy</Option>
              <Option value="jack">jack</Option>
              <Option value="tom">tom</Option>
              <Option value="jerry">jerry</Option>
            </Select>
          </Col>
          <Col span={6}>
            <Select tags style={{ width: '100%' }}
              searchPlaceholder="标签模式"
              onChange={handleChange}
            >
            {children}
            </Select>
          </Col>
          <Col span={6} style={{textAlign:'center'}}>
            <RadioGroup>
              <Radio key="a" value={'A'}>A</Radio>
              <Radio key="b" value={'B'}>B</Radio>
            </RadioGroup>
          </Col>
        </Row>
      </div>
    </div>
  </div>
);

export default App;
