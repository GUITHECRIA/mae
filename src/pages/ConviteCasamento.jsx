import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Calendar, Clock, Heart } from "lucide-react";
import GoldenParticles from "../components/wedding/GoldenParticles";

export default function ConviteCasamento() {
  const [showContent, setShowContent] = React.useState(false);
  const [fadeComplete, setFadeComplete] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 300);

    const fadeTimer = setTimeout(() => {
      setFadeComplete(true);
    }, 3300);

    return () => {
      clearTimeout(timer);
      clearTimeout(fadeTimer);
    };
  }, []);

  // Estilos CSS
  const styles = {
    container: {
      minHeight: '100vh',
      position: 'relative',
      overflow: 'hidden',
    },
    background: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(135deg, #e8f5e9, #f1f8f4, #e0f2e9)',
    },
    mainContent: {
      position: 'relative',
      zIndex: 10,
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '48px 16px',
    },
    card: {
      maxWidth: '672px',
      width: '100%',
      background: 'white',
      borderRadius: '24px',
      padding: '32px',
      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15), 0 0 1px rgba(212, 175, 55, 0.3)',
      position: 'relative',
    },
    cardLarge: {
      maxWidth: '672px',
      width: '100%',
      background: 'white',
      borderRadius: '24px',
      padding: '48px',
      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15), 0 0 1px rgba(212, 175, 55, 0.3)',
      position: 'relative',
    },
    goldBorder: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      borderRadius: '24px',
      border: '1px solid #d4af37',
      opacity: 0.2,
      pointerEvents: 'none',
    },
    verse: {
      textAlign: 'center',
      marginBottom: '32px',
    },
    verseText: {
      color: '#6b8e70',
      fontStyle: 'italic',
      fontSize: '18px',
      lineHeight: '1.6',
      fontWeight: '300',
      fontFamily: "'Cormorant Garamond', serif",
    },
    verseReference: {
      color: '#8b9d83',
      fontSize: '14px',
      marginTop: '8px',
      fontFamily: "'Cormorant Garamond', serif",
    },
    goldLine: {
      height: '1px',
      background: 'linear-gradient(to right, transparent, #d4af37, transparent)',
      marginBottom: '32px',
    },
    introText: {
      textAlign: 'center',
      color: '#374151',
      fontSize: '16px',
      lineHeight: '1.6',
      marginBottom: '32px',
      fontFamily: "'Cormorant Garamond', serif",
    },
    introTextLarge: {
      textAlign: 'center',
      color: '#374151',
      fontSize: '18px',
      lineHeight: '1.6',
      marginBottom: '32px',
      fontFamily: "'Cormorant Garamond', serif",
    },
    namesContainer: {
      textAlign: 'center',
      margin: '40px 0',
    },
    names: {
      fontFamily: "'Great Vibes', cursive",
      color: '#5a7a5f',
      fontWeight: 'normal',
    },
    name: {
      display: 'block',
      fontSize: '60px',
      marginBottom: '8px',
      lineHeight: '1.1',
    },
    nameLarge: {
      display: 'block',
      fontSize: '72px',
      marginBottom: '8px',
      lineHeight: '1.1',
    },
    ampersand: {
      display: 'block',
      fontSize: '48px',
      color: '#d4af37',
      margin: '8px 0',
      lineHeight: '1',
    },
    ampersandLarge: {
      display: 'block',
      fontSize: '56px',
      color: '#d4af37',
      margin: '8px 0',
      lineHeight: '1',
    },
    storyText: {
      textAlign: 'center',
      color: '#374151',
      fontSize: '16px',
      lineHeight: '1.6',
      marginBottom: '32px',
      fontFamily: "'Cormorant Garamond', serif",
    },
    storyTextLarge: {
      textAlign: 'center',
      color: '#374151',
      fontSize: '18px',
      lineHeight: '1.6',
      marginBottom: '32px',
      fontFamily: "'Cormorant Garamond', serif",
    },
    highlightText: {
      color: '#6b8e70',
      fontWeight: '500',
    },
    infoContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
      margin: '40px 0',
      maxWidth: '448px',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    infoItem: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      gap: '12px',
      background: 'linear-gradient(to right, #f8fdf9, white)',
      padding: '20px',
      borderRadius: '12px',
      border: '1px solid rgba(212, 175, 55, 0.2)',
    },
    iconCircle: {
      flexShrink: 0,
      width: '40px',
      height: '40px',
      background: 'linear-gradient(135deg, #d4af37, #f0d779)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    infoTitle: {
      color: '#5a7a5f',
      fontWeight: '600',
      fontSize: '18px',
      marginBottom: '4px',
      fontFamily: "'Cormorant Garamond', serif",
    },
    infoText: {
      color: '#374151',
      fontSize: '16px',
      fontFamily: "'Cormorant Garamond', serif",
    },
    finalMessage: {
      textAlign: 'center',
      color: '#5a7a5f',
      fontSize: '18px',
      fontStyle: 'italic',
      fontWeight: '300',
      marginBottom: '24px',
      fontFamily: "'Cormorant Garamond', serif",
    },
    finalMessageLarge: {
      textAlign: 'center',
      color: '#5a7a5f',
      fontSize: '20px',
      fontStyle: 'italic',
      fontWeight: '300',
      marginBottom: '24px',
      fontFamily: "'Cormorant Garamond', serif",
    },
    heartContainer: {
      display: 'flex',
      justifyContent: 'center',
    },
    // Novo estilo para o brilho inicial
    lightBeam: {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '100vw',
      height: '100vh',
      background: 'radial-gradient(circle, rgba(212,175,55,0.8) 0%, rgba(212,175,55,0.4) 30%, transparent 70%)',
      zIndex: 45,
      pointerEvents: 'none',
    }
  };

  // Verifica se é uma tela maior (para responsividade)
  const isLargeScreen = typeof window !== 'undefined' && window.innerWidth >= 768;
  const cardStyle = isLargeScreen ? styles.cardLarge : styles.card;
  const introStyle = isLargeScreen ? styles.introTextLarge : styles.introText;
  const storyStyle = isLargeScreen ? styles.storyTextLarge : styles.storyText;
  const nameStyle = isLargeScreen ? styles.nameLarge : styles.name;
  const ampersandStyle = isLargeScreen ? styles.ampersandLarge : styles.ampersand;
  const finalMessageStyle = isLargeScreen ? styles.finalMessageLarge : styles.finalMessage;

  return (
    <div style={styles.container}>
      {/* Fonte delicada estilo casamento */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300&display=swap');
      `}</style>

      {/* Fundo verde suave */}
      <div style={styles.background} />

      {/* Efeito de brilho dourado inicial */}
      <AnimatePresence>
        {!fadeComplete && (
          <>
            {/* Brilho central */}
            <motion.div
              initial={{ opacity: 1, scale: 0.5 }}
              animate={{ opacity: 0, scale: 3 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2, ease: "easeOut" }}
              style={styles.lightBeam}
            />
            
            {/* Overlay preto para fade in */}
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'black',
                zIndex: 50,
                pointerEvents: 'none',
              }}
            />
          </>
        )}
      </AnimatePresence>

      {/* Partículas douradas durante fade in */}
      {showContent && !fadeComplete && <GoldenParticles />}

      {/* Conteúdo principal */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showContent ? 1 : 0 }}
        transition={{ duration: 2.5, ease: "easeInOut" }}
        style={styles.mainContent}
      >
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5, duration: 1, ease: "easeOut" }}
          style={cardStyle}
        >
          {/* Borda dourada sutil */}
          <div style={styles.goldBorder} />

          {/* Versículo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            style={styles.verse}
          >
            <p style={styles.verseText}>
              "Portanto, o que Deus uniu, ninguém o separe."
            </p>
            <p style={styles.verseReference}>(Mateus 19:6)</p>
          </motion.div>

          {/* Linha dourada decorativa */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 2.2, duration: 0.8 }}
            style={styles.goldLine}
          />

          {/* Texto de introdução */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.4, duration: 1 }}
            style={introStyle}
          >
            Após anos de caminhada juntos, é com imensa felicidade que convidamos você para o momento em que sacramentaremos nossa união perante Deus e a Igreja.
          </motion.p>

          {/* Linha dourada decorativa */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 2.8, duration: 0.8 }}
            style={styles.goldLine}
          />

          {/* Nomes dos noivos */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2.6, duration: 1 }}
            style={styles.namesContainer}
          >
            <h1 style={styles.names}>
              <span style={nameStyle}>Marcos</span>
              <span style={ampersandStyle}>&</span>
              <span style={nameStyle}>Juliana</span>
            </h1>
          </motion.div>

          {/* Linha dourada decorativa */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 2.8, duration: 0.8 }}
            style={styles.goldLine}
          />

          {/* Texto sobre a história */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 1 }}
            style={storyStyle}
          >
            Nossa história já é escrita a dois, mas agora buscamos a bênção de Deus para o nosso para sempre.
            <br />
            <span style={styles.highlightText}>
              Sua presença será a maior prova de carinho e apoio neste dia.
            </span>
          </motion.p>

          {/* Informações do evento */}
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 3.2, duration: 1 }}
  style={styles.infoContainer}
>
  {/* Local com link para Google Maps */}
  <div style={styles.infoItem}>
    <div style={styles.iconCircle}>
      <MapPin style={{ width: '20px', height: '20px', color: 'white' }} />
    </div>
    <div>
      <p style={styles.infoTitle}>Local</p>
      <a 
        href="https://maps.google.com/?q=Paróquia São Sebastião Brazlândia" 
        target="_blank" 
        rel="noopener noreferrer"
        style={{
          color: '#374151',
          fontSize: '16px',
          fontFamily: "'Cormorant Garamond', serif",
          textDecoration: 'none',
          cursor: 'pointer',
          borderBottom: '1px dotted #d4af37',
          transition: 'all 0.3s ease'
        }}
        onMouseOver={(e) => {
          e.target.style.color = '#d4af37';
          e.target.style.borderBottom = '1px solid #d4af37';
        }}
        onMouseOut={(e) => {
          e.target.style.color = '#374151';
          e.target.style.borderBottom = '1px dotted #d4af37';
        }}
      >
        Paróquia São Sebastião - Brazlândia
      </a>
    </div>
  </div>

            {/* Data */}
            <div style={styles.infoItem}>
              <div style={styles.iconCircle}>
                <Calendar style={{ width: '20px', height: '20px', color: 'white' }} />
              </div>
              <div>
                <p style={styles.infoTitle}>Data</p>
                <p style={styles.infoText}>15/11/2025</p>
              </div>
            </div>

            {/* Horário */}
            <div style={styles.infoItem}>
              <div style={styles.iconCircle}>
                <Clock style={{ width: '20px', height: '20px', color: 'white' }} />
              </div>
              <div>
                <p style={styles.infoTitle}>Horário</p>
                <p style={styles.infoText}>19 horas</p>
              </div>
            </div>
          </motion.div>

          {/* Mensagem final */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.4, duration: 1 }}
            style={finalMessageStyle}
          >
            Contamos com sua presença!
          </motion.p>

          {/* Coração dourado */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 3.6, duration: 0.6, type: "spring" }}
            style={styles.heartContainer}
          >
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Heart style={{ width: '32px', height: '32px', color: '#d4af37', fill: '#d4af37' }} />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}