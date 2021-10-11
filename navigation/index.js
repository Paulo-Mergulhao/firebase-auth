import React from 'react';

import { UsuarioAutenticadoProvider } from './UsuarioAutenticadoProvider';
import NavegadorRaiz from './NavegadorRaiz';

/**
 * Wrap all providers here
 */

export default function Routes() {
  return (
    <UsuarioAutenticadoProvider>
      <NavegadorRaiz />
    </UsuarioAutenticadoProvider>
  );
}
