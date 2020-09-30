export const getId = () => {
    return  fetch('https://www.metaweather.com/api/location/search/?lattlong=36.96,-122.02', {
        method: 'GET',
    })
};

export const getData = (id) => {
    return  fetch(`https://www.metaweather.com/api/location/${id}/`, {
        method: 'GET',
    })
};