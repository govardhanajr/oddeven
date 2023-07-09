function getData(data) {
    return new Promise((resolve, reject) => {
      if (typeof data !== 'number') {
        reject('error');
      } else if (data % 2 === 0) {
        setTimeout(() => {
          resolve('even');
        }, 4000);
      } else {
        setTimeout(() => {
          resolve('odd');
        }, 2000);
      }
    });
  }
  
  export default getData;
  