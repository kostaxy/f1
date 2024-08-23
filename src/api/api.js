import axios from 'axios';
import {API_ROUTES} from './routes';
import {API_HOST, API_KEY} from '@env';
import RNFS from 'react-native-fs';

const baseOptions = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': API_KEY,
    'x-rapidapi-host': API_HOST,
  },
};

const fetchNews = async () => {
  const options = JSON.parse(JSON.stringify(baseOptions));
  options.url = API_ROUTES.newsUrl;
  try {
    const response = await axios.request(options);
    const data = await response.data;

    return data;
  } catch (error) {
    console.error(error);
  }
};

const fetchDrivers = async () => {
  //get all drivers options
  const options = JSON.parse(JSON.stringify(baseOptions));
  options.url = API_ROUTES.driversUrl;

  try {
    //get all drivers
    const response = await axios.request(options);
    const allDriversData = await response.data;

    //for each driver get info, create array of promises
    const driversPromises = allDriversData?.standings?.entries.map(el => {
      return new Promise(resolve =>
        resolve(fetchDriverById(+el?.athlete?.id, true)),
      );
    });

    //fetch all drivers data by id
    const driversInfoById = await Promise.allSettled(driversPromises);

    //get just success responses
    const allDriversInfoByIdData = driversInfoById
      .filter(el => el.status === 'fulfilled')
      .map(el => el.value)
      .map(el => el?.data);

    //extract avatars for drivers in array of obj
    const avatars = allDriversInfoByIdData.map(el => ({
      id: el.id,
      headshot: el?.headshot,
      team: el?.vehicles[0]?.manufacturer,
    }));
    //set avatars to each driver array
    allDriversData?.standings?.entries.forEach(el => {
      const tempAvaArr = avatars.filter(ava => ava.id === el.athlete.id);
      if (tempAvaArr.length) {
        el.athlete.headshot = tempAvaArr[0]?.headshot;
        el.athlete.team = tempAvaArr[0]?.team;
      }
    });
    //return all drivers data and array of
    return [allDriversData, allDriversInfoByIdData];
  } catch (error) {
    console.error(error);
  }
};

const fetchDriverById = async (idAthlete, isPromiseMode) => {
  //get driver by id options
  const options = JSON.parse(JSON.stringify(baseOptions));
  options.url = API_ROUTES.driverInfoById;
  options.params = {athleteId: idAthlete};

  //if get just promise
  if (isPromiseMode) {
    return axios.request(options);
  }

  try {
    const response = await axios.request(options);
    const driverInfo = await response.data;
    return driverInfo;
  } catch (e) {
    console.error(e);
  }
};

const fetchConstructors = async () => {
  const options = JSON.parse(JSON.stringify(baseOptions));
  options.url = API_ROUTES.controllersUrl;
  try {
    const response = await axios.request(options);
    const data = await response.data;

    return data;
  } catch (error) {
    console.error(error);
  }
};

//get controllers
const fetchSchedule = async () => {
  const options = JSON.parse(JSON.stringify(baseOptions));
  options.url = `${API_ROUTES.scheduleUrl}?year=${new Date().getFullYear()}`;
  try {
    const response = await axios.request(options);
    const data = await response.data;

    return data;
  } catch (error) {
    console.error(error);
  }
};

export {fetchNews, fetchDrivers, fetchConstructors, fetchSchedule};
