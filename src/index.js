// @flow

import lightLevel, { availableLightLevels, type LightLevel } from './lightLevel';
import prefersReducedMotion, { motionPreferences, type MotionPreference } from './prefersReducedMotion';
import environmentBlending, { availableDisplayBlends, type DisplayBlend } from './environmentBlending';
import invertedColors, { colorPreferences, type ColorPreference } from './invertedColors';
import prefersContrast, { contrastPreferences, type ContrastPreference } from './prefersContrast';
import prefersReducedTransparency, {
  transparencyPreferences,
  type TransparencyPreference,
} from './prefersReducedTransparency';

export {
  lightLevel,
  availableLightLevels,
  prefersReducedMotion,
  motionPreferences,
  environmentBlending,
  availableDisplayBlends,
  invertedColors,
  colorPreferences,
  prefersReducedTransparency,
  transparencyPreferences,
  prefersContrast,
  contrastPreferences,
};

export type { LightLevel, MotionPreference, DisplayBlend, ColorPreference, TransparencyPreference, ContrastPreference };
