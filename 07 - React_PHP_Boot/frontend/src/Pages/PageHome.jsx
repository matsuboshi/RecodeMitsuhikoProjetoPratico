import React from 'react';
import Canvas from '../Components/Canvas';
import Header from '../Components/Header';

export default function PageHome() {
  return (
    <Canvas>
      <Header
        title="Seja bem vindx!!!"
        text="Aqui em nossa loja, programadores tem desconto para sua casa!"
      />

      <main className="text-center text-white p-4">
        <h3 className="p-4">Até 50% OFF sales neste dezembro! Não perca!</h3>
        <h3 className="p-4">Breve: nova loja FSEletro em MG!</h3>
      </main>
    </Canvas>
  );
}
