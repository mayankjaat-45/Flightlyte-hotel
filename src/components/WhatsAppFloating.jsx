import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WhatsAppFloating = () => {
  const phoneNumber = "919667455591";

  const openWhatsApp = () => {
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <button
        onClick={openWhatsApp}
        className="bg-(--gold-soft) p-4 rounded-full shadow-xl hover:bg-(--gold-main) active:bg-(--gold-main)"
      >
        <MessageCircle className="text-white" />
      </button>
    </motion.div>
  );
};

export default WhatsAppFloating;
