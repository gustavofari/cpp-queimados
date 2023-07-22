const typeScreen = (text, i = 0) => {
    if (i < text.length) {
      setText(text.slice(0, i + 1));
      setTimeout(() => typeScreen(text, i + 1), 83);
    }
  };

  useEffect(() => {
    setTimeout(() => typeScreen("Políticas Públicas"));
  }, []);
