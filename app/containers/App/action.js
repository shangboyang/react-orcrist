
import request from '../../utils/request'
import {
  TRANSITION_LEFT,
  TRANSITION_RIGHT,
} from './constant'

export function transLeft() {
  return {
    type: TRANSITION_LEFT,
  }
}

export function transRight() {
  return {
    type: TRANSITION_RIGHT,
  }
}
