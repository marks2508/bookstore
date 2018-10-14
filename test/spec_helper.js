process.env.NODE_ENV = 'test';

const chai = require('chai');
global.should    = chai.should();
global.expect    = chai.expect;

const app = require('../server');
const supertest = require('supertest');

global.api = supertest(app);
