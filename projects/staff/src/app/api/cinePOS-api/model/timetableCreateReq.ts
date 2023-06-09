/**
 * CinePOS_BackEnd
 * CinePOS 後端API
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { TimetableCreateReqTheaterId } from './timetableCreateReqTheaterId';
import { TimetableListResDataEndDate } from './timetableListResDataEndDate';
import { TimetableListResDataStartDate } from './timetableListResDataStartDate';

export interface TimetableCreateReq { 
    /**
     * 電影ID
     */
    movieId: string;
    theaterId: TimetableCreateReqTheaterId;
    startDate: TimetableListResDataStartDate;
    endDate: TimetableListResDataEndDate;
}