import axios from 'axios';
import { ObjectId } from "mongodb";
import Device from "./models/Device.js";
import * as dotenv from "dotenv";



async function getUserByDeviceID<Device>() {
    try {
      dotenv.config();
      const {data} = await axios.get(
        `https://stairmon-provider.herokuapp.com/devices/${process.env.DEVICE_ID}`,
        {
          headers: {
            Accept: 'application/json',
          },
        },
      );

      const retDevice = new Device(data._id, data.BUILDING_NUMBER, data.DEVICE_NUMBER, data.APTMANAGERPHONE, data.EMERGENCYPHONE);
      return retDevice;

    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log('Axios Error Message: ', error.message);
        return error.message;
      } else {
        console.log('unexpected error: ', error);
        return 'An unexpected error occurred';
      }
    }
  }


let currDevice: string | Device = await getUserByDeviceID();;

console.log(currDevice);
// Object.entries(currDevice).find(([key, value]) => {
//   if (key === 'APTMANAGERPHONE') {
//     console.log(value);

//   }
// });
