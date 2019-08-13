import fly from '../util/request';
import { observable, action } from "mobx";

export default class Home {
  //头部
  @observable indexLIstData=[];
  //列表
  @observable indexBotData=[];
}