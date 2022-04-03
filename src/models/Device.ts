import { ObjectId } from "mongodb";

export default class Device  {
    constructor(public _id: ObjectId, public BUILDING_NUMBER?: number, public DEVICE_NUMBER?: number, public APTMANAGERPHONE?: string, public EMERGENCYPHONE?: string) {}
}