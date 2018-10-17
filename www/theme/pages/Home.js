import React from 'react';
import { getSiteProps } from '@resin.io/react-static';
import Jumbotron from '../components/Jumbotron';
import FAQ from '../components/FAQ';
import Features from '../components/Features';
import Motivation from '../components/Motivation';
import Downloads from '../components/Downloads';
import get from 'lodash/get';
import FlowDiagram from '../components/FlowDiagram';

export default getSiteProps(props => {
  const getter = key => get(props, key);
  return (
    <div>
      <Jumbotron {...props} />
      {getter('settings.features') && <Features {...props} />}
      {getter('settings.motivation') && <Motivation {...props} />}
      <FlowDiagram />
      {getter('settings.downloads.categories') && <Downloads {...props} />}
      {getter('faqs[0]') && <FAQ faqs={props.faqs} />}
    </div>
  );
});
