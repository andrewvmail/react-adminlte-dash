import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

// import css
import 'bootstrap/dist/css/bootstrap.min.css';
import 'admin-lte/dist/css/AdminLTE.min.css';
import 'admin-lte/dist/css/skins/_all-skins.min.css';

// import modules
import { HeaderBar } from '../index';

storiesOf('Button', module)
  .add('skin blue', () => {
    document.body.classList.toggle('skin-blue', true); // eslint-disable-line no-undef
    return (
      <HeaderBar />
    );
  });
