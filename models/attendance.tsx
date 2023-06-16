export default class AttendanceModel {
    public user_token: string;
    public createdAt: string;
    public inAt: string;
    public outAt: string;
    public totalHour: number;

    constructor(data: any) {
        this.user_token = data.user_token;
        this.inAt = new Date(data.inAt).toLocaleString("id-ID", {
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
        });
        this.createdAt = data.createdAt;
        this.outAt = new Date(data.outAt).toLocaleString("id-ID", {
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
        });
        this.totalHour = Math.floor(Math.abs((!data.outAt ? Date.now() : new Date(parseInt(data.outAt)).getTime()) - new Date(parseInt(data.inAt)).getTime()) / (1000 * 60 * 60));
    }
}
