import React, { Component } from 'react';
import { Radio } from 'antd';

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

class Type1 extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    // console.log(props);
  }

  render() {
    const { Ecommerce_type } = this.props;
    return(
      <div>
        <RadioGroup onChange={this.props.FudianBtn} defaultValue={200} size="large" className="marginR-L langFuwu typestyle">
          {
            Ecommerce_type.map((item, index) => {
              return(
                <div key={index}>
                  <RadioButton style={{ fontSize: '25px', height: '60px', lineHeight: '60px' }} value={item.task_type}>
                    {item.task_name}
                  </RadioButton>
                  <div>
                    <p>{item.task_explan}</p>
                  </div>
                </div>
              )
            })
          }
        </RadioGroup>
      </div>
    )
  }
}

export default Type1
