import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Button from './index';

storiesOf('Button')
  .add('Default', () => (
    <Button>Button text</Button>
  ))
  .add('borderless', () => (
    <Button borderless>Button text</Button>
  ))
  .add('disabled', () => (
    <div>
      <p>Default</p>
      <Button disabled>Button text</Button><br /><br />
      <p>Borderless</p>
      <Button disabled borderless>Button text</Button><br /><br />
      <p>Large</p>
      <Button disabled large>Button text</Button><br /><br />
      <p>Secondary</p>
      <Button disabled secondary>Button text</Button><br /><br />
      <p>Small</p>
      <Button disabled small>Button text</Button><br /><br />
      <p>Tertiary</p>
      <Button disabled tertiary>Button text</Button><br /><br />
      <p>Warning</p>
      <Button disabled warning>Button text</Button>
    </div>
  ))
  .add('large', () => (
    <Button large>Button text</Button>
  ))
  .add('secondary', () => (
    <Button secondary>Button text</Button>
  ))
  .add('small', () => (
    <Button small>Button text</Button>
  ))
  .add('tertiary', () => (
    <Button tertiary>Button text</Button>
  ))
  .add('warning', () => (
    <Button warning>Button text</Button>
  ));
