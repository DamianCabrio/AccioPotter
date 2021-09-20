import AsyncStorage from '@react-native-async-storage/async-storage';

export const get = async (endpoint: string, name: string) => {
  try {
    let serviceResponse;

    const response = await fetch(endpoint);
    const parsedResponse = await response.json();

    if (response.status === 200) {
      serviceResponse = { success: true, data: parsedResponse };
    } else {
      serviceResponse = { success: false, data: parsedResponse };
    }

    return serviceResponse;
  } catch (error) {
    console.log(`Error fetching ${name}: `, error);
    return {
      success: false,
      data: error,
    };
  }
};

export const saveHistory = async (data: HistoryItem) => {
  let history = await recoverHistory();
  if (history === undefined || history === false) {
    history = [];
  }

  const indexItemAlreadyOnHistory = history.findIndex((item: HistoryItem) => {
    return item.query === data.query;
  });

  if (indexItemAlreadyOnHistory !== -1) {
    history.splice(indexItemAlreadyOnHistory, 1);
  }

  const newHistoryArray = [data, ...history].slice(0, 15);
  await AsyncStorage.setItem('@history', JSON.stringify(newHistoryArray));
};

export const recoverHistory = async () => {
  try {
    const history = await AsyncStorage.getItem('@history');
    if (history !== null) {
      return JSON.parse(history);
    }
    return undefined;
  } catch (e) {
    console.log('Error retriving searches history');
    return false;
  }
};
