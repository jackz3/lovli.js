import React from 'react';
import { deleteDoc } from 'horizon-react/lib/utils';
import { Row, Col,Input,Select,Radio,Button } from 'antd';
const RadioGroup = Radio.Group;


import 'static/vendor/antd/antd.min.css';





function handleChange(value) {
  console.log(`selected ${value}`);
}


export default class ListItem extends React.Component{
  updateDoc(prop,e){
    let doc=this.props.item;
    doc[prop]=e.target?e.target.value:e;
    let demo=this.props.horizon('demo');
    demo.replace(doc);
  }
  
  render(){
    let item=this.props.item;
    let horizon=this.props.horizon;
    const Option = Select.Option;
    let children = [];
    for (let i = 10; i < 16; i++) {
      children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
    }
    let addNewItem=this.props.addNewItem;
    return (
      <Row onFocus={e=>addNewItem&&addNewItem()}>
    <Col span={6}>
      <Input placeholder="文字" onChange={this.updateDoc.bind(this,'desc')} value={item.desc} />
    </Col>
    <Col span={6}>
      <Select style={{width:'100%'}} value={item.name} onChange={this.updateDoc.bind(this,'name')}>
        <Option value="lucy">lucy</Option>
        <Option value="jack">jack</Option>
        <Option value="tom">tom</Option>
        <Option value="jerry">jerry</Option>
      </Select>
    </Col>
    <Col span={6}>
      <Select tags style={{ width: '100%' }}
        value={item.tags}
        searchPlaceholder="标签模式" onChange={this.updateDoc.bind(this,'tags')}>
        {children}
      </Select>
    </Col>
    <Col span={4} style={{textAlign:'center'}}>
      <RadioGroup onChange={this.updateDoc.bind(this,'gender')} value={item.gender}>
        <Radio key="a" value={'female'}>美女</Radio>
        <Radio key="b" value={'male'}>帅哥</Radio>
      </RadioGroup>
    </Col>
    <Col span={2}>
      <Button onClick={() => {
          deleteDoc(horizon('demo'), { id: item.id });
        }}
        type="ghost" shape="circle-outline" icon="minus-circle-o" />
    </Col>
  </Row>
    )
  }
}
