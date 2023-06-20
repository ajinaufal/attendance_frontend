export default class ProfileModel {
    public token: string;
    public name: string;
    public email: string;
    public photo: string;
    public handphone: string;
    public position: string;

    constructor(data: any) {
        this.token = data.token;
        this.name = data.name;
        this.photo = data.photo;
        this.email = data.email;
        this.handphone = data.handphone;
        this.position = data.position;
    }
}
