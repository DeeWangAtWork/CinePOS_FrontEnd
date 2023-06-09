import { Injectable } from '@angular/core';
import { CommonOptionSuccess, CommonService, CommonUploadSuccess } from '../../../api/cinePOS-api';
import { Observable, filter, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonAPIService {

  constructor(
    private _CommonService: CommonService,
  ) { }

  // 上傳
  upload(upload: Blob, fileType: string): Observable<CommonUploadSuccess> {
    return this._CommonService.v1CommonUploadPostForm(upload, fileType)
      .pipe(
        tap(res => res.code !== 1 && alert(res.message)),
        filter(res => res.code === 1)
      )
  }



  // 取得選項資料
  getOption(typeId: number): Observable<CommonOptionSuccess> {
    return this._CommonService.v1CommonOptionTypeIdGet(typeId)
      .pipe(
        tap(res => res.code !== 1 && alert(res.message)),
        filter(res => res.code === 1)
      )
  }

}
