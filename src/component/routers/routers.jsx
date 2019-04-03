import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

// Login
import Login from '../../containers/login/login';                               //登录页面
import Register from '../../containers/register/register';                      //注册页面

// 个人中心
import Center_new from '../../containers/center_new/center_new';                //个人中心
  // bindshops
  import Taobao from '../../containers/center_new/bind/taobao';                 //bindtaobao
// MyGoods
import MyGoods from '../../containers/center_new/myGoods/myGoods';              //myGoods
// addGoods
import AddGoods from '../../containers/center_new/addGoods/addGoods';           //addGoods

import CompletedTasks from '../../containers/center_new/taskAdmins/CompletedTasks/completedTasks';      //已完成的Task
import CompletedTasks2 from '../../containers/center_new/taskAdmins/CompletedTasks/completedTasks2';    //待付款的Task
import CompletedTasks3 from '../../containers/center_new/taskAdmins/CompletedTasks/completedTasks3';    //待处理的task
import CompletedTasks4 from '../../containers/center_new/taskAdmins/CompletedTasks/completedTasks4';    //全部task
import PublishTasks from '../../containers/center_new/taskAdmins/CompletedTasks/publishTasks';          //一键fabu Task

// yaoqing 好友
import InviteFriend from '../../containers/center_new/InviteFriends/inviteFriend';                      // yaoqing 好友奖励
// yaoqinghaoyou 记录
import InviteFriendR from '../../containers/center_new/InviteFriends/inviteFriendR';                    //yaoqinghaoyou 记录
// 任务奖励记录
import QuestRewards from '../../containers/center_new/InviteFriends/questRewards';                      //
// 失效的奖励
import LapsedReward from '../../containers/center_new/InviteFriends/lapsedReward';                      //

// yajin 充值
import TopUpDeposit from '../../containers/center_new/moneyRecord/Top-upDeposit';                       //chongzhi yajin
import UpFudian from '../../containers/center_new/moneyRecord/upFudian';                                //chognzhi fudian
// 延长技术服务
import Postpone from '../../containers/center_new/moneyRecord/postpone';                                //
// 押金记录
import YajinRecord from '../../containers/center_new/moneyRecord/yajinRecord';                          //
// 提现记录
import Recharge from '../../containers/center_new/moneyRecord/recharge';                                //

// 账号信息
  // 黑名单
import Blacklist from '../../containers/center_new/accounts/blacklist';                                   //
// 基本信息
import BasicXinxi from '../../containers/center_new/accounts/basicXinxi';                                 //

class RoutersComponent extends Component {
  render() {
    return(
      <Router>
        <div>
          {/* login */}
          <Route exact path="/" component={Login} />
          {/* 注册页面 */}
          <Route path='/register' component={Register} />
          {/* 个人中心 */}
          <Route path='/center_new' component={Center_new} />
          {/* 绑定taobao */}
          <Route path="/bind/taobao" component={Taobao} />
          {/* 我的商品 */}
          <Route path="/myGoods" component={MyGoods} />
          {/* addGoods */}
          <Route path="/addGoods" component={AddGoods} />

          {/* 已完成的任务 */}
          <Route path="/completedTasks" component={CompletedTasks} />
          {/* degndaifukuanderewnu */}
          <Route path="/completedTasks2" component={CompletedTasks2} />
          {/* 待处理的task */}
          <Route path="/completedTasks3" component={CompletedTasks3} />
          {/* all task */}
          <Route path="/completedTasks4" component={CompletedTasks4} />
          {/* 一键 fabu task */}
          <Route path="/publishTasks" component={PublishTasks} />

          {/* yaoqinghaoyou jiangli */}
          <Route path="/inviteFriend" component={InviteFriend} />
          {/* yaoiqnghaoyou jilu */}
          <Route path="/inviteFriendR" component={InviteFriendR} />
          {/* 任务奖励记录 */}
          <Route path="/questRewards" component={QuestRewards} />
          {/* 失效的奖励 */}
          <Route path="/lapsedReward" component={LapsedReward} />

          {/* chognzhi 记录 */}
          {/* yajin chongzhi */}
          <Route path="/Top-upDeposit" component={TopUpDeposit} />
          {/* chongzhi fudian */}
          <Route path="/upFudian" component={UpFudian} />
          {/* 延长技术服务 */}
          <Route path="/postpone" component={Postpone} />
          {/* 押金记录 */}
          <Route path="/yajinRecord" component={YajinRecord} />
          {/* 提现记录 */}
          <Route path="/recharge" component={Recharge} />

          {/* 账号信息 */}
          {/* 黑名单 */}
          <Route path="/blacklist" component={Blacklist} />
          {/* 基本信息 */}
          <Route path="/basicXinxi" component={BasicXinxi} />
        </div>
      </Router>
    )
  }
}

export default RoutersComponent
