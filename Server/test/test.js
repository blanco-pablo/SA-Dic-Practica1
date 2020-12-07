var request = require('supertest');
var app = require('../index.js');
    describe('GET /test', function() {
        it('Test para que server este bien', function(done) {
        //navigate to root and check the the response is "hello world"
        request(app).get('/test').expect('hello world2', done);
    });
});