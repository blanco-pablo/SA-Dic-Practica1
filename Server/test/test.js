var request = require('supertest');
var app = require('../index.js');
    describe('GET /test', function() {
        it('Test para que server este bien', function(done) {
        
        request(app).get('/test').expect('Server OK', done);
        //PARA FALLO EN TEST
        //request(app).get('/test').expect('TEST MALO', done);
    });
});