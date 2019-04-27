import moment from 'moment';

const filterTime =(time,format="YYYY-MM-DD")=> {
  return (moment.unix(parseInt(time)).format(format));
};

export {
    filterTime
}