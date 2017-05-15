var chai = require('chai')
var chaiHttp = require('chai-http');

var app = require('../app')

var expect = chai.expect;
chai.use(chaiHttp);

describe('Submissions', function(){

  it('should return 200 status code for / GET', function(done){
    chai.request(app)
      .get('/')
      .end(function(err, res){
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        done();
      });
  });
  it('should return html for / GET', function(done){
    chai.request(app)
      .get('/')
      .end(function(err, res){
        expect(res).to.be.html;
        done();
      });
  });
  it('should return proper headers for / GET', function(done){
    chai.request(app)
      .get('/')
      .end(function(err, res){
        expect(res).to.have.headers;
        expect(res).to.have.header('content-type', 'text/html; charset=UTF-8');
        done()
      })
  });
  it('should return 200 status code for GET with date param', function(done){
    chai.request(app)
      .get('/July 11, 1981')
      .end(function(err, res){
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        done();
      })
  });
  it('should return json for GET with date param', function(done){
    chai.request(app)
      .get('/July 11, 1981')
      .end(function(err, res){
        expect(res).to.be.json;
        expect(res.body).to.have.property('unix');
        expect(res.body).to.have.property('natural');
        done();
      });
  });
  it('should return proper headers for GET with date param', function(done){
    chai.request(app)
      .get('/July 11, 1981')
      .end(function(err, res){
        expect(res).to.have.headers;
        expect(res).to.have.header('content-type', 'application/json; charset=utf-8');
        done();
      })
  });
  it('should return 200 status code for GET with UNIX timestamp param', function(done){
    chai.request(app)
      .get('/363675600')
      .end(function(err, res){
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        done();
      })
  });
  it('should return json for GET with UNIX timestamp param', function(done){
    chai.request(app)
      .get('/363675600')
      .end(function(err, res){
        expect(res).to.be.json;
        expect(res.body).to.have.property('unix');
        expect(res.body).to.have.property('natural');
        done();
      });
  });
  it('should return proper headers for GET with UNIX timestamp param', function(done){
    chai.request(app)
      .get('/363675600')
      .end(function(err, res){
        expect(res).to.have.headers;
        expect(res).to.have.header('content-type', 'application/json; charset=utf-8');
        done();
      })
  });
  it('should return 200 status code for GET with non-date param', function(done){
    chai.request(app)
      .get('/lolcats')
      .end(function(err, res){
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        done();
      })
  });
  it('should return json for GET with non-date param', function(done){
    chai.request(app)
      .get('/lolcats')
      .end(function(err, res){
        expect(res).to.be.json;
        expect(res.body).to.have.property('unix', null);
        expect(res.body).to.have.property('natural', null);
        done();
      });
  });
  it('should return proper headers for GET with non-date param', function(done){
    chai.request(app)
      .get('/lolcats')
      .end(function(err, res){
        expect(res).to.have.headers;
        expect(res).to.have.header('content-type', 'application/json; charset=utf-8');
        done();
      })
  });
});


