const getName = async () => {
   request =  await fetch('https://ow-api.com/v1/stats/:platform/:region/:battletag/profile')
    .then(item => JSON.parse(item.name));
}

export default getName;