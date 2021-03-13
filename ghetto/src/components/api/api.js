const Api = async (nick, id) => {
    const request = await fetch('https://owapi.io/stats/pc/eu/' + nick + '-' + id);
    const data = await request.json();
    return data;
}

export default Api;