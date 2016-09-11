var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

import Todo from 'Todo';

describe('Todo', ()=> {
    it('should exist', ()=> {
        expect(Todo).toExist();
    })
})