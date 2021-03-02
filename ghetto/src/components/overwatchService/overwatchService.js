const GetName = async (uName, battleTag) => {
   request =  await fetch('https://owapi.io/stats/pc/us/' + uName + '-' + battleTag)
    .then(item => JSON.parse(item.name));
}

export default GetName;