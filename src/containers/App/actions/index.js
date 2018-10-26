import {
  TRANSITION_LEFT,
  TRANSITION_RIGHT,
} from '@/containers/App/constants';

export function transLeft() {
  return {
    type: TRANSITION_LEFT,
  };
}

export function transRight() {
  return {
    type: TRANSITION_RIGHT,
  };
}
