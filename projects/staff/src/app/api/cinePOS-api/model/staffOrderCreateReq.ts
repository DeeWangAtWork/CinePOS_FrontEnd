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
import { StaffOrderCreateReqTicketList } from './staffOrderCreateReqTicketList';

export interface StaffOrderCreateReq { 
    /**
     * 付款方式(1:現金,2:Line Pay)
     */
    paymentMethod: number;
    /**
     *  訂單總金額
     */
    amount: number;
    ticketList: Array<StaffOrderCreateReqTicketList>;
}