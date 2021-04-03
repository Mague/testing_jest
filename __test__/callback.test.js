const fetchAPI = require('../src/callback');
it('should return the goku info', done =>{
    const API = 'https://dragon-ball-api.herokuapp.com/api/character/goku';

    function cb(err,data){
        try {
            expect(err).toBeNull()
            expect(data).not.toBeNull()
            expect(data.name).toBe("goku")
            done()
        } catch (err) {
            done(err)
        }
    }
    fetchAPI(API,cb)
})