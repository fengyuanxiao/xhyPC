import React, { Component } from 'react';
import { Radio } from 'antd';

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

class Type2 extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  FudianBtn = (e) => {
    console.log(e.target.value);
  }

  render() {
    return(
      <div>
        <RadioGroup onChange={this.FudianBtn} defaultValue="1" size="large" className="marginR-L langFuwu typestyle">
          <div>
            <RadioButton value="1">
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

export default Type2
