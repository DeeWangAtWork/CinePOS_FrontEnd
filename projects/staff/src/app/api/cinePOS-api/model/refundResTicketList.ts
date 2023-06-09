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

export interface RefundResTicketList { 
    /**
     * 電影名稱
     */
    title: string;
    /**
     * 電影票ID
     */
    ticketId: string;
    /**
     * 電影票狀態 0:未退,1已退
     */
    ticketStatus?: number;
    /**
     * 座位ID
     */
    seatId: string;
    /**
     * 座位名稱
     */
    seatName: string;
    /**
     * 票種名稱
     */
    ticketType: string;
    /**
     * 票價
     */
    price: number;
    /**
     * 場次開始時間
     */
    startDate: string;
}