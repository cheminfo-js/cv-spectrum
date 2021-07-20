import { readFileSync } from 'fs';
import { join } from 'path';

import { fromJcamp } from '..';

test('fromJcamp', () => {
  const arrayBuffer = readFileSync(join(__dirname, 'data/test.jdx'));
  const analysis = fromJcamp(arrayBuffer);
  expect(analysis.spectra).toHaveLength(1);
  const firstSpectrum = analysis.spectra[0];
  expect(firstSpectrum.variables).toHaveProperty('x');
  expect(firstSpectrum.variables).toHaveProperty('y');
  expect(firstSpectrum.variables.x.units).toStrictEqual('V');
  expect(firstSpectrum.variables.x.label).toStrictEqual(
    'Potential vs Fc/Fc+ [V]',
  );
  expect(firstSpectrum.variables.x.data).toHaveLength(12014);
  expect(firstSpectrum.variables.y.units).toStrictEqual('mA');
  expect(firstSpectrum.variables.y.label).toStrictEqual('Current [mA]');
  expect(firstSpectrum.variables.y.data).toHaveLength(12014);
});
