import { MovieDetailCreateParameterReleaseDate } from "../../../api/cinePOS-api";


export interface MovieDetailUpdateParameterCustomer {
  /**
   * 系統編號
   */
  _id: string;
  /**
   * 電影中文名
   */
  title: string;
  /**
   * 電影英文名
   */
  enTitle?: string;
  /**
   * 電影類型(1：動作,2：冒險,3：喜劇,4：劇情,5：恐怖,6：科幻,7：浪漫愛情,8：動畫,9：紀錄片,10：音樂,11:懸疑,12:驚悚,13:犯罪)
   */
  genre: Array<number>;
  /**
   * 片長
   */
  runtime: number;
  /**
   * 支援設備(1:2D,2:3D,3:IMAX,4:4DX)
   */
  provideVersion: Array<number>;
  /**
   * 分級制度(0: 普通級,6: 保護級,12: 輔導十二級,15 : 輔導十五級,18: 限制級)
   */
  rate: number;
  /**
   * 導演
   */
  director?: string;
  /**
   * 演員
   */
  cast?: Array<string>;
  /**
   * 電影簡介
   */
  description?: string;
  /**
   * 上映狀態(-1: 已下檔(下線) / 0: 尚未發佈(籌備中) / 1: 已發佈(上映中))
   */
  status: number;
  releaseDate: MovieDetailCreateParameterReleaseDate;
  /**
   * 預告片連結
   */
  trailerLink?: string;
  /**
   * 發行商
   */
  distributor?: string;
  /**
   * 海報連結
   */
  posterUrl: string;
}
