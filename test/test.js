var chai = require('chai')
var chaiHttp = require('chai-http');

var server = require('../app');

var expect = chai.expect;
chai.use(chaiHttp);

describe('Submissions', function(){
  it('should return 200 status code for / GET', function(done){
    chai.request(server)
      .get('/')
      .end(function(err, res){
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        done();
      });
  });
});
