import {
  VuexModule,
  Module,
  Mutation,
  Action,
  getModule,
} from "vuex-module-decorators";
import store from "@/store";

export enum DeviceType {
  // eslint-disable-next-line prettier/prettier,no-unused-vars
  Mobile, Desktop, language,
}

export interface IAppState {
  device: DeviceType;
}

/** app module of store */
@Module({ dynamic: true, store, name: "app" })
class App extends VuexModule implements IAppState {
  public device = DeviceType.Desktop;

  /**
   * Mutation: 变更设备名称
   * @param {DeviceType} device 设备类型
   */
  @Mutation
  private toggle_device(device: DeviceType) {
    this.device = device;
  }

  /**
   * Action: 变更设备类型
   * @param {DeviceType} device 设备类型
   */
  @Action
  public toggleDevice(device: DeviceType) {
    this.toggle_device(device);
  }
}

export const AppModule = getModule(App);
