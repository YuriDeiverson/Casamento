import React, { useState, useEffect } from "react";
import QRCode from "react-qr-code"; // Certifique-se de que 'react-qr-code' está instalado

interface Gift {
  id: number;
  name: string;
  price: number;
  image: string;
  link: string;
}

interface ProductModalProps {
  gift: Gift;
  onClose: () => void;
  onPurchase: (id: number) => void;
}

const pixData = {
  key: "50796459-0",
  bank: "Banco Nubank",
  account: "0001",
  agency: "1234",
  name: "Yuri e Leila",
};

const ProductModal: React.FC<ProductModalProps> = ({
  gift,
  onClose,
  onPurchase,
}) => {
  const [showPix, setShowPix] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  // Fecha ao pressionar ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const handlePurchase = () => {
    window.open(gift.link, "_blank");
    onPurchase(gift.id);
    onClose();
  };

  const handlePixPurchase = () => {
    onPurchase(gift.id);
    onClose();
  };

  return (
    <>
      {/* BACKDROP COM BLUR */}
      <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 transition-opacity"></div>

      {/* MODAL */}
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        aria-modal="true"
        role="dialog"
      >
        <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden animate-fadeInUp">
          {/* BOTÃO DE FECHAR */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl"
            aria-label="Fechar"
          >
            &times;
          </button>

          {/* CONTEÚDO DO MODAL */}
          <div className="p-6 md:p-8">
            {!showPix ? (
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/2">
                  <img
                    src={gift.image}
                    alt={gift.name}
                    className="w-full h-64 object-contain rounded-xl"
                  />
                </div>
                <div className="md:w-1/2 flex flex-col justify-between">
                  <div>
                    <span className="inline-block bg-yellow-500 text-white text-xs px-2 py-1 rounded-full mb-2">
                      Presente
                    </span>
                    <h2 className="text-xl md:text-2xl font-bold mb-2">
                      {gift.name}
                    </h2>
                    <p className="text-2xl font-semibold text-green-600 mb-4">
                      R$ {gift.price.toFixed(2).replace(".", ",")}
                    </p>
                    <p className="text-sm text-gray-500">
                      Vendido e entregue por Amazon
                    </p>
                  </div>

                  <div className="mt-6 flex flex-col gap-3">
                    <button
                      onClick={() => setShowConfirmation(true)}
                      className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition"
                    >
                      Comprar no site
                    </button>
                    <button
                      onClick={() => setShowPix(true)}
                      className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-6 rounded-lg transition"
                    >
                      Enviar valor via Pix
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              // PIX VIEW
              <div className="flex flex-col items-center text-center px-4 py-6">
                <h2 className="text-2xl font-bold mb-4">
                  Enviar valor via Pix
                </h2>

                <div className="flex justify-center mb-4">
                  <QRCode value={JSON.stringify(pixData)} size={180} />
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-left w-full max-w-xs">
                  <p className="mb-1">
                    <strong>Banco:</strong> Nubank (260)
                  </p>
                  <p className="mb-1">
                    <strong>Nome:</strong> Yuri e Leila
                  </p>
                  <p className="mb-1">
                    <strong>Agência:</strong> 0001
                  </p>
                  <p className="mb-1">
                    <strong>Conta:</strong> 50796459-0
                  </p>
                  <p className="mb-1">
                    <strong>Chave Pix:</strong> {pixData.key}
                  </p>
                </div>

                <button
                  onClick={handlePixPurchase}
                  className="mt-6 bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-3 px-6 rounded-lg transition"
                >
                  Já enviei o valor
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* MODAL DE CONFIRMAÇÃO */}
      {showConfirmation && (
        <div className="fixed inset-0 flex items-center justify-center z-60">
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" />
          <div className="bg-white p-6 rounded-xl z-70 shadow-lg text-center max-w-md w-full mx-4">
            <h3 className="text-xl font-bold mb-4">Confirmar compra?</h3>
            <p className="text-gray-600 mb-6">
              Ao confirmar, este presente ficará indisponível para outros
              convidados.
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={onClose}
                className="px-5 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium"
              >
                Cancelar
              </button>
              <button
                onClick={handlePurchase}
                className="px-5 py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white font-semibold"
              >
                Confirmar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductModal;