import React, { Component } from 'react';
import { Radio } from 'antd';

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

class Type1 extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  
  render() {
    return(
      <div>
        <RadioGroup onChange={this.props.FudianBtn} defaultValue="1" size="large" className="marginR-L langFuwu typestyle">
          <div>
            <RadioButton value="1">
              Hangzhou
            </RadioButton>
            <div>
              <p><span>Hangzhou</span>da</p>
              <p>（dfgsrgdfhdfhdfhdfh）</p>
            </div>
          </div>
          <div>
            <RadioButton value="2">
              Hangzhou
            </RadioButton>
            <div>
              <p><span>Hangzhou</span>da</p>
              <p>（dfgsrgdfhdfhdfhdfh）</p>
            </div>
          </div>
          <div>
            <RadioButton value="3">
              Hangzhou
            </RadioButton>
            <div>
              <p><span>Hangzhou</span>da</p>
              <p>（dfgsrgdfhdfhdfhdfh）</p>
            </div>
          </div>
        </RadioGroup>
      </div>
    )
  }
}

export default Type1
