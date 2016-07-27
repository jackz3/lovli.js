import React from 'react';
import { subscribe } from 'horizon-react';
import { createDoc } from 'horizon-react/lib/utils';
import ListItem from './ListItem';
//import styles from './styles';

const mapDataToProps = {
  demoList: (hz, props) => hz('demo')
};

class DemoList extends React.Component{
  componentWillReceiveProps(nextProps){
    let len=nextProps.demoList.length;
    if(len<4){
      this.addNewItem();
    }
  }
  addNewItem(){
    const collection = this.props.horizon('demo');
    createDoc(collection, { });
  }
  render(){
    let len=this.props.demoList.length;
    return (
      <div>
      {this.props.demoList.map(
        (x,i) => <ListItem key={x.id} addNewItem={(i+1)===len?this.addNewItem.bind(this):null}
         item={x} horizon={this.props.horizon} />
      )}
  </div>
    )
  }
}

export default subscribe({
  mapDataToProps
})(DemoList);
