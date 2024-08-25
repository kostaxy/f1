import axios from 'axios';
import {API_ROUTES} from './routes';
import {API_HOST, API_KEY} from '@env';

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

    allDriversData?.standings?.entries.map(el => {
      el.athlete = {
        ...el.athlete,
        ...allDriversInfoByIdData.filter(
          drivInfo => drivInfo.id === el.athlete.id,
        )[0],
      };
      return el;
    });

    return allDriversData;
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

//get controllers
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

//get schedule
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
