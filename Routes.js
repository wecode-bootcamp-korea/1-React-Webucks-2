import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

//지현 컴포넌트
import LoginJihyun from './src/pages/JihyunKim/Login/LoginJihyun.Js';
import ListJihyun from './src/pages/JihyunKim/List/ListJihyun.Js';
import DetailJihyun from './src/pages/JihyunKim/Detail/DetailJihyun.Js';

//민성 컴포넌트
import LoginMinseong from './src/pages/MinseongKim/Login/LoginMinseong';
import ListMinseong from './src/pages/MinseongKim/List/ListMinseong';
import DetailMinseong from './src/pages/MinseongKim/Detail/DetailMinseong';

//미정 컴포넌트
import LoginMijeong from './src/pages/MijeongPark/Login/LoginMijeong';
import ListMijeong from './src/pages/MijeongPark/List/ListMijeong';
import DetailMijeong from './src/pages/MijeongPark/Detail/DetailMijeong';

//수호 컴포넌트
import LoginSuho from './src/pages/SuhoShin/Login/LoginSuho';
import ListSuho from './src/pages/SuhoShin/List/ListSuho';
import DetailSuho from './src/pages/SuhoShin/Detail/DetailSuho';

//라우터 알아서 구분하쉐이
class Routes extends React.Component {
  render(){
    return(
      <Router>
        <Switch>
          <Route exact path='/LoginJihyun' component={LoginJihyun} />
          <Route exact path='/ListJihyun' component={ListJihyun} />
          <Route exact path='/DetailJihyun' component={DetailJihyun} />
          <Route exact path='/LoginMinseong' component={LoginMinseong} />
          <Route exact path='/ListMinseong' component={ListMinseong} />
          <Route exact path='/DetailMinseong' component={DetailMinseong} />
          <Route exact path='/LoginMijeong' component={LoginMijeong} />
          <Route exact path='/ListMijeong' component={ListMijeong} />
          <Route exact path='/DetailMijeong' component={DetailMijeong} />
          <Route exact path='/LoginSuho' component={LoginSuho} />
          <Route exact path='/ListSuho' component={ListSuho} />
          <Route exact path='/DetailSuho' component={DetailSuho} />
        </Switch>
      </Router> 
    );
  }
}