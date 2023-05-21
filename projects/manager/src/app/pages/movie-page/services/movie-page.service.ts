import { Injectable } from '@angular/core';
import { filter, Observable, tap } from 'rxjs';
import { ManagerService, MovieDetailCreateParameter, MovieDetailCreateSuccess, } from '../../../api/cinePOS-api';
import { MovieDetailGetInfoSuccess } from '../../../api/cinePOS-api/model/movieDetailGetInfoSuccess';
import { MovieDetailUpdateSuccess } from '../../../api/cinePOS-api/model/movieDetailUpdateSuccess';
import { CommonUploadSuccess } from '../../../api/cinePOS-api/model/commonUploadSuccess';


@Injectable({
  providedIn: 'root'
})
export class MoviePageService {

  constructor(
    private _ManagerService: ManagerService,
  ) { }

  // 取得電影資訊
  getMovieDetail(id: string): Observable<MovieDetailGetInfoSuccess> {
    return this._ManagerService.v1ManagerMovieIdGet(id)
      .pipe(
        tap(res => res.code !== 1 && alert(res.message)),
        filter(res => res.code === 1)
      )
  }


  // 上傳圖片(用大頭貼先暫待====待處理====)
  uploadImage(image: Blob, staffId: string,): Observable<CommonUploadSuccess> {
    return this._ManagerService.v1ManagerUserStickerStaffIdPostForm(image, staffId)
      .pipe(
        tap(res => res.code !== 1 && alert(res.message)),
        filter(res => res.code === 1)
      )
  }


  // 新增電影資訊
  createMovieDetail(para: MovieDetailCreateParameter): Observable<MovieDetailCreateSuccess> {
    return this._ManagerService.v1ManagerMoviePost(para)
      .pipe(
        tap(res => res.code !== 1 && alert(res.message)),
        filter(res => res.code === 1)
      )
  }


  // 更新電影資訊
  updateMovieDetail(para: MovieDetailCreateParameter): Observable<MovieDetailUpdateSuccess> {
    return this._ManagerService.v1ManagerMoviePatch(para)
      .pipe(
        tap(res => res.code !== 1 && alert(res.message)),
        filter(res => res.code === 1)
      )
  }

}
