import React from 'react';
import { shallow } from 'enzyme';
import App from 'testing/components/App';
import CommentBox from 'testing/components/CommentBox';
import CommentList from 'testing/components/CommentList';

it('shows a comment box', () => {
  const wrapped = shallow(<App />);
  expect(wrapped.find(CommentBox).length).toEqual(1);
});

it('shows a comment list', () => {
  const wrapped = shallow(<App />);
  expect(wrapped.find(CommentList).length).toEqual(1);
});