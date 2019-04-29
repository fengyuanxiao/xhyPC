// 发布goods
import React, { Component } from 'react';
import { Icon, Button, Radio, Input, Checkbox, Row, Col, Form, message  } from 'antd';

class KeyDatass extends Component  {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { index } = this.props;
    return(
    <Form.Item style={{ width: '100%' }}>
      {getFieldDecorator("app_keywords"+index, {
          initialValue: [],
      })(
        <Checkbox.Group style={{ width: '100%' }} onChange={this.discountBtn}>
          <Row>
            <Col span={4}><Checkbox value="A">A</Checkbox></Col>
            <Col span={4}><Checkbox value="B">B</Checkbox></Col>
            <Col span={4}><Checkbox value="C">C</Checkbox></Col>
            <Col span={4}><Checkbox value="D">D</Checkbox></Col>
            <Col span={4}><Checkbox value="E">E</Checkbox></Col>
            <Col span={4}><Checkbox value="F">F</Checkbox></Col>
            <Col span={4}><Checkbox value="G">G</Checkbox></Col>
            <Col span={4}><Checkbox value="H">H</Checkbox></Col>
            <Col span={4}><Checkbox value="I">I</Checkbox></Col>
            <Col span={4}><Checkbox value="J">J</Checkbox></Col>
            <Col span={4}><Checkbox value="K">K</Checkbox></Col>
            <Col span={4}><Checkbox value="L">L</Checkbox></Col>
          </Row>
        </Checkbox.Group>
      )}
    </Form.Item>
    )
  }
}

const KeyDatas = Form.create()(KeyDatass);
export default KeyDatas



// // 发布goods
// import React, { Component } from 'react';
// import { Button, Checkbox, Form, Select  } from 'antd';
//
// const Option = Select.Option;                   //多选框
//
// var vv;
//
// class keyDatass extends Component  {
//   constructor(props) {
//     super(props);
//     this.state = {}
//   }
//
//   // 高级设置里面的
//   // 折扣服务
//   discountBtn = (e) => {
//     vv = e;                 //储存Option选中的值到 vv
//   }
//   // 关键词或多关键词保存数据
//   baocun1 = (index) => {
//     let app_keywordIndex1 = this.props.app_keywordIndex1;
//     let app_keywordIndex2 = this.props.app_keywordIndex2;
//     let app_keywordIndex3 = this.props.app_keywordIndex3;
//     let app_keywordIndex4 = this.props.app_keywordIndex4;
//     let app_keywordIndex5 = this.props.app_keywordIndex5;
//     if ( index === 0 ) {
//       app_keywordIndex1.vals1 = vv;
//       console.log(app_keywordIndex1);
//     } else if ( index === 1 ) {
//       app_keywordIndex2.vals2 = vv;
//       console.log(app_keywordIndex2);
//     } else if ( index === 2 ) {
//       app_keywordIndex3.vals3 = vv;
//       console.log(app_keywordIndex3);
//     } else if ( index === 3 ) {
//       app_keywordIndex4.vals4 = vv;
//       console.log(app_keywordIndex4);
//     } else {
//       app_keywordIndex5.vals5 = vv;
//       console.log(app_keywordIndex5);
//     }
//   }
//   // 成交词保存数据
//   baocun2 = (index) => {
//     let app_WordsIndex1 = this.props.app_WordsIndex1;
//     let app_WordsIndex2 = this.props.app_WordsIndex2;
//     let app_WordsIndex3 = this.props.app_WordsIndex3;
//     let app_WordsIndex4 = this.props.app_WordsIndex4;
//     let app_WordsIndex5 = this.props.app_WordsIndex5;
//     if ( index === 0 ) {
//       app_WordsIndex1.vals1 = vv;
//       console.log(app_WordsIndex1);
//     } else if ( index === 1 ) {
//       app_WordsIndex2.vals2 = vv;
//       console.log(app_WordsIndex2);
//     } else if ( index === 2 ) {
//       app_WordsIndex3.vals3 = vv;
//       console.log(app_WordsIndex3);
//     } else if ( index === 3 ) {
//       app_WordsIndex4.vals4 = vv;
//       console.log(app_WordsIndex4);
//     } else {
//       app_WordsIndex5.vals5 = vv;
//       console.log(app_WordsIndex5);
//     }
//   }
//
//   render() {
//     const { getFieldDecorator } = this.props.form;
//     const { words,index,app_keywordIndex1,app_keywordIndex2,app_keywordIndex3,app_keywordIndex4,app_keywordIndex5, app_WordsIndex1,app_WordsIndex2,app_WordsIndex3,app_WordsIndex4,app_WordsIndex5 } = this.props;
//     return(
//       <div>
//         <div className="triangle_border_up">
//           <span></span>
//         </div>
//         <div className="advanced">
//           <div className="advanced_child">
//             <span>12313465：</span>
//             <Select
//               mode="multiple"
//               style={{ width: '100%' }}
//               placeholder="Please select"
//               defaultValue={
//                 words === 1?
//                   index === 0? app_keywordIndex1.vals1 : (index === 1? app_keywordIndex2.vals2 : (index === 2? app_keywordIndex3.vals3 : (index === 3? app_keywordIndex4.vals4 : app_keywordIndex5.vals5)))
//                 :
//                 index === 0? app_WordsIndex1.vals1 : (index === 1? app_WordsIndex2.vals2 : (index === 2? app_WordsIndex3.vals3 : (index === 3? app_WordsIndex4.vals4 : app_WordsIndex5.vals5)))
//               }
//               onChange={this.discountBtn}
//             >
//               <Option value="A">A</Option>
//               <Option value="B">B</Option>
//               <Option value="C">C</Option>
//               <Option value="D">D</Option>
//               <Option value="E">E</Option>
//               <Option value="F">F</Option>
//               <Option value="G">G</Option>
//               <Option value="H">H</Option>
//               <Option value="I">I</Option>
//             </Select>
//           </div>
//           <div style={{ textAlign: 'center', marginTop: '15px' }}>
//             {
//               words === 1 ?
//                 <Button type="primary" onClick={()=>this.baocun1(index)}>保存</Button>
//               :
//               <Button type="primary" onClick={()=>this.baocun2(index)}>保存</Button>
//             }
//           </div>
//         </div>
//       </div>
//     )
//   }
// }
//
// const keyDatas = Form.create()(keyDatass);
// export default keyDatas
